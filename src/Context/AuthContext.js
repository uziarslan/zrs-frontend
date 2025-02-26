import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import axiosInstance from "../services/axiosInstance";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

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
    setIsLoading(false);
    window.location.href = "/login";
  };

  // const isTokenExpired = (token) => {
  //   const payload = JSON.parse(atob(token.split(".")[1]));
  //   const expirationTime = payload.exp * 1000;
  //   return Date.now() > expirationTime;
  // };

  const addCarToLocalStorage = (carId) => {
    localStorage.setItem("testDriveCarId", carId);
    navigate("/test-drive-form");
  };

  const submitTestDriveForm = async (formData) => {
    const carId = localStorage.getItem("testDriveCarId");
    if (!carId) {
      throw new Error("No car selected for test drive");
    }
    const data = { ...formData, carId };
    const response = await axiosInstance.post("/api/v1/test-drive", data);
    localStorage.removeItem("testDriveCarId"); // Remove the car ID from local storage
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
