import React, { useState } from "react";
import "./Home.css";
import { UserContext } from "../../../context/userContext";
import { useContext } from "react";
export default function Home() {
  const { user } = useContext(UserContext);
  const [selectedImage, setSelectedImage] = useState(null);

  const myStyle = {
    backgroundImage:
      "url('https://imagecolorizer.com/_nuxt/img/bg-index.e9e2247.webp')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="content" style={myStyle}>
      <img className="bg-img" />
      <h1
        className="title"
        style={{ textAlignVertical: "center", textAlign: "center" }}
      >
        Colorize | Best picture colorizer adds color to black and white old
        pictures.
      </h1>
      <p
        className="des"
        style={{ textAlignVertical: "center", textAlign: "center" }}
      >
        We are using the latest AI technology to restore old photos
        automatically and instantly No Account Needed!
      </p>

      <div className="preview">
        {selectedImage && (
          <img
            id="img-preview"
            src={selectedImage}
            alt="Preview"
            style={{ maxWidth: "100%" }}
          />
        )}

        <input
          accept="image/*"
          type="file"
          id="file-input"
          name="image"
          onChange={handleImageChange}
        />
        <br />
        <br />
        <div className="button-function">
        <button
          className={selectedImage ? "" : "hidden"}
          type="submit"
          id="upload"
          name="upload"
        >
          Gain
        </button>
        <button
          className={selectedImage ? "" : "hidden"}
          type="submit"
          id="upload"
          name="upload"
        >
          Gain - Unet
        </button>
        </div>
       
      </div>
    </div>
  );
}
