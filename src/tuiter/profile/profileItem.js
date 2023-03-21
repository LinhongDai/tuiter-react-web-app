import React from 'react'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProfileItem = (
    {
      profile = {
        "firstName": "Jose",
        "lastName": "Annunziato",
        "handle": "@jannunzi",
        "profilePicture": "jose.png",
        "bannerPicture": "polyglot.png",
        "bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.",
        "website": "youtube.com/webdevtv",
        "location": "Boston, MA",
        "dateOfBirth": "7/7/1968",
        "dateJoined": "4/2009",
        "followingCount": 340,
        "followersCount": 223
      }
    }
) => {
  const profileObject = useSelector(state => state.profile)
  return (
      <div className="border">
        <img src={profileObject.bannerPicture} alt="banner" style={{width: '100%', height: '200px'}}/>
        <div className="mt-3 ps-3 pe-4">
          <button  className="btn rounded-pill border float-end">
            <Link to="/tuiter/edit-profile" style={{textDecoration : "none", color: 'rgb(110, 118, 125)'}}>
              Edit profile
            </Link>
          </button>

          <img src={profileObject.profilePicture} alt="profile"
               className="position-relative rounded-circle"
               style={{height: '150px', width: '150px', top: '-95px', left: '-10px'}}/>
        </div>
        <div className="mt-3 ps-3 pe-2 position-relative" style={{top: '-95px'}}>
          <h5 className="fw-bold">
            {profileObject.firstName} {profileObject.lastName}
          </h5>
          <div style={{color: 'rgb(110, 118, 125)'}}>
            {profileObject.handle}
          </div>
          <p className="mt-3">
            {profileObject.bio}
          </p>
          <div className="row">
            <div className="col-3">
              <i className="bi bi-geo me-1"></i>
              <span style={{color: 'rgb(110, 118, 125)'}}>
                {profileObject.location}
              </span>
            </div>
            <div className="col-4">
              <i className="bi bi-balloon me-1"></i>
              <span style={{color: 'rgb(110, 118, 125)'}}>
                  Born in {profileObject.dateOfBirth}
              </span>
            </div>
            <div className="col-4">
              <i className="bi bi-calendar-week me-1"></i>
              <span style={{color: 'rgb(110, 118, 125)'}}>
                  Joined {profileObject.dateJoined}
              </span>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-3">
              <strong>{profileObject.followingCount}</strong>
              <span className="ms-1" style={{color: 'rgb(110, 118, 125)'}}>
                Following
              </span>
            </div>
            <div className="col-3">
              <strong>{profileObject.followersCount}</strong>
              <span className="ms-1" style={{color: 'rgb(110, 118, 125)'}}>
                Followers
              </span>
            </div>
          </div>
        </div>

      </div>
  );

}

export default ProfileItem