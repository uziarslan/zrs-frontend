import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import axiosInstance from "../services/axiosInstance";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [favoriteCars, setFavoriteCars] = useState(() => {
    // Initialize state from localStorage
    return JSON.parse(localStorage.getItem("favoriteCars") || "[]");
  });

  const navigate = useNavigate();

  // Sync localStorage whenever favoriteCars changes
  useEffect(() => {
    localStorage.setItem("favoriteCars", JSON.stringify(favoriteCars));
  }, [favoriteCars]);

  const login = async (userData) => {
    setIsLoading(true);
    const response = await authService.login(userData);
    if (response.data) {
      const loggedInUser = await authService.getUser();
      setUser(loggedInUser);
    }
    setIsLoading(false);
    return response;
  };

  const register = async (userData) => {
    setIsLoading(true);
    await authService.register(userData);
    const registeredUser = await authService.getUser();
    setUser(registeredUser);
    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    authService.logout();
    setUser(null);
    setFavoriteCars([]); // Clear favorites on logout
    setIsLoading(false);
    window.location.href = "/login";
  };

  const addCarToLocalStorage = (carId, buttonName) => {
    localStorage.setItem("carId", carId);
    if (buttonName === "testDrive") {
      navigate("/test-drive-form");
    } else if (buttonName === "buyNow") {
      navigate("/buy-now-form");
    }
  };

  const addCarToFavorites = (carObject) => {
    const isAlreadyFavorite = favoriteCars.some(car => car._id === carObject._id);

    if (!isAlreadyFavorite) {
      setFavoriteCars(prevFavorites => [...prevFavorites, carObject]);
      return true;
    }
    return false;
  };

  // New function to remove car from favorites
  const removeCarFromFavorites = (carId) => {
    setFavoriteCars(prevFavorites =>
      prevFavorites.filter(car => car._id !== carId)
    );
  };

  // New function to check if a car is in favorites
  const isCarFavorite = (carId) => {
    return favoriteCars.some(car => car._id === carId);
  };

  const submitTestDriveForm = async (formData, formName) => {
    const carId = localStorage.getItem("carId");
    if (!carId) {
      throw new Error("No car selected for test drive");
    }

    let response;
    if (formName === "testDriveForm") {
      const data = { ...formData, carId };
      response = await axiosInstance.post("/api/v1/test-drive", data);
    }
    if (formName === "buyNowForm") {
      const data = { ...formData, carId };
      response = await axiosInstance.post("/api/v1/buy-car", data);
    }
    localStorage.removeItem("carId");
    return response;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isLoading,
        setIsLoading,
        addCarToLocalStorage,
        submitTestDriveForm,
        addCarToFavorites,
        removeCarFromFavorites,
        isCarFavorite,
        favoriteCars,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;