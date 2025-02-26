import item1 from "../Assets/images/item1.jpg";
import item2 from "../Assets/images/item2.jpg";
import item3 from "../Assets/images/item3.jpg";
import item4 from "../Assets/images/item4.jpg";
import item5 from "../Assets/images/item5.jpg";
import item6 from "../Assets/images/item6.jpg";
import item7 from "../Assets/images/item7.jpg";
import item8 from "../Assets/images/item8.jpg";

const images = [
  { alt: "Large car image", src: item1 },
  { alt: "Car front view", src: item2 },
  { alt: "Car side view", src: item3 },
  { alt: "Car interior", src: item4 },
  { alt: "Car rear view", src: item5 },
  { alt: "Car detail shot", src: item6 },
  { alt: "Car in showroom", src: item7 },
  { alt: "Car on road", src: item8 },
];

const MediaGallery = () => {
  return (
    <div className="gallery">
      <h1 className="gallery__title">Media Gallery</h1>

      <div className="gallery__grid">
        {images.map((image, index) => (
          <div
            key={index}
            className={`gallery__item ${
              [0, 4, 7].includes(index) ? "gallery__item--wide" : ""
            } ${index === 2 ? "gallery__item--tall" : ""}`}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="gallery__image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaGallery;
