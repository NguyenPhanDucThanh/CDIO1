import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { UserContext } from "../../../context/userContext";
import { useContext } from "react";
import axios from "axios";
import { useState } from "react";

export default function navbar() {
  const [setUser] = useState(null);
  const { user } = useContext(UserContext);
  const handleLogout = async () => {
    try {
      const response = await axios.post("/logout");
      if (response.status === 200) {
        window.location.href = "/";
        setUser(null);
      }
    } catch (error) {
      console.error("Lỗi khi đăng xuất:", error);
    }
  };
  return (
    <div className="nav-bar">
      <nav class="navbar navbar-expand-lg navbar-dark">
        {/* <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> */}
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
            <a class="nav-item nav-link" href="#">
              Features
            </a>
            {user && (
              <p className="hello" style={{ color: "white" }}>
                {user.name}
              </p>
            )}
            {user && (
              <button className="ml-3" onClick={handleLogout}>
                Đăng xuất
              </button>
            )}
            {!user && (
              // Sử dụng Link từ react-router-dom để chuyển hướng đến trang đăng nhập
              <button>
                <Link to="/">Đăng nhập</Link>
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
