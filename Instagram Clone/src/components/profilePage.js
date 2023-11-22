import React from "react";
import "./profilePage.css"

function Profile() {
  return (
    <>
      <div className="p-header d-flex flex-row my-3">
        <div className="profile-pic">
          <div className="img-cont">
            <img
              src="https://wallpapers.com/images/featured/thor-qzytdg8xliuaelun.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="name">
          <div className="user-name">
            <span>
              {" "}
              <b> odinson </b>
            </span>
          </div>
          <div className="buttons d-flex flex-row">
            <button>Edit profile</button>
            <button> View Archive</button>
          </div>
        </div>
      </div>

      <div className="status">
        <div className="u-name">
          <span>
            {" "}
            <b> thor</b>
          </span>
          <p>
            I Thor,The Odin Son <br />
            GOD of the Thunder and the Crown Prince of Asguard.{" "}
          </p>
        </div>
      </div>

      <div className="plus px-3">
        <i className="fa-solid fa-circle-plus"></i>
      </div>

      <div className="info d-flex flex-row justify-content-around py-2">
        <div className="post-info text-center px-2">
          {" "}
          <b>3</b> <br />
          post
        </div>
        <div className="post-info text-center px-2">
          {" "}
          <b>1</b> <br />
          heighlights{" "}
        </div>
        <div className="post-info text-center px-2">
          {" "}
          <b>57.6 M</b> <br />
          followers{" "}
        </div>
      </div>

      <div className="posts d-flex flex-row">
        <div className="post-img">
          <img
            src="https://wallpapers.com/images/featured/thor-qzytdg8xliuaelun.jpg"
            alt=""
          />
        </div>
        <div className="post-img">
          <img src="https://wallpaperaccess.com/full/222132.jpg" alt="" />
        </div>
        <div className="post-img">
          <img
            src="https://wallpapercrafter.com/desktop/74558-thor-hd-4k-superheroes-artwork-digital-art-avengers-endgame.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Profile;
