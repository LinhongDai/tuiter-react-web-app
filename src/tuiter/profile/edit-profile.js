import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {editProfile} from "./profile-reducer";

const EditProfileComponent = () => {
  const profileObject = useSelector(state => state.profile)
  const [name, setName] = useState(profileObject.firstName + ' ' + profileObject.lastName);
  const [bio, setBio] = useState(profileObject.bio);
  const [location, setLocation] = useState(profileObject.location);
  const [website, setWebsite] = useState(profileObject.website);
  const [birthday, setBirthday] = useState(profileObject.dateOfBirth);
  const dispatch = useDispatch();
  const saveClickHandler = () => {
    const newProfile = {
      nam : name,
      loc: location,
      bi: bio,
      web: website,
      bd: birthday
    }
    dispatch(editProfile(newProfile))
  }

  return (
      <>
        {/*button*/}
        <div>
          <button  className="btn rounded-pill text-bg-dark float-end"
                    onClick={saveClickHandler}>
            <Link to="/tuiter/profile" style={{textDecoration : "none", color : "white"}}>
              save
            </Link>
          </button>
          <button  className="btn rounded-pill text-dark pt-1">
            <Link to="/tuiter/profile" style={{textDecoration : "none", color : "black"}}>
              X
            </Link>
          </button>
          <span className="pt-1 ps-4 fw-bold">
            Edit Profile
          </span>
        </div>

        {/*textarea*/}
        <div className="mt-3">
          <div>
            <input type="text"
                   id="nameText"
                   value={name}
                   placeholder="Name"
                   className="form-control border-solid border pt-4"
                   onChange={(event) => setName(event.target.value)}>
            </input>
            <label for="nameText"
                   className="position-relative"
                   style={{color: 'rgb(110, 118, 125)', left: '12px', bottom: '50px'}}>
              Name
            </label>
          </div>
          <div>
            <input value={bio}
                   type="text"
                   id="bioText"
                   placeholder="bio"
                   className="form-control border border-solid pt-4"
                   onChange={(event) => setBio(event.target.value)}>
            </input>
            <label for="bioText"
                   className="position-relative"
                   style={{color: 'rgb(110, 118, 125)', left: '12px', bottom: '50px'
            }}>
              Bio
            </label>
          </div>
          <div>
            <input value={location}
                   type="text"
                   id="locationText"
                   placeholder="location"
                   className="form-control border border-solid pt-4"
                   onChange={(event) => setLocation(event.target.value)}>
            </input>
            <label for="locationText"
                   className="position-relative"
                   style={{color: 'rgb(110, 118, 125)', left: '12px', bottom: '50px'
                   }}>
              Location
            </label>
          </div>
          <div>
            <input value={website}
                      type="text"
                      id="websiteText"
                      placeholder="website"
                      className="form-control border border-solid pt-4"
                      onChange={(event) => setWebsite(event.target.value)}>
            </input>
            <label htmlFor="websiteText"
                   className="position-relative"
                   style={{
                     color: 'rgb(110, 118, 125)', left: '12px', bottom: '50px'
                   }}>
              WebSite
            </label>
          </div>
          <div>
            <input value={birthday}
                   type="text"
                   id="birthdayText"
                   placeholder="Birth Date"
                   className="form-control border border-solid pt-4"
                   onChange={(event) => setBirthday(event.target.value)}>
            </input>
            <label htmlFor="birthdayText"
                   className="position-relative"
                   style={{
                     color: 'rgb(110, 118, 125)', left: '12px', bottom: '50px'
                   }}>
              Birth Date
            </label>
          </div>

        </div>
      </>
  );
}

export default EditProfileComponent