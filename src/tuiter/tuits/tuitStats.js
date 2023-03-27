import React from 'react'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = (
    {
      tuit = {
        "_id": 123,
        "topic": "Space",
        "userName": "SpaceX",
        "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
        "time": "2h",
        "image": "tesla.png",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
      }
    }

) => {
  const dispatch = useDispatch();
  return (
      <div className="row">
        <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-1 col-xxl-1">
        </div>
        <div className="col-10 col-sm-10 col-md-10 col-lg-11 col-xl-11 col-xxl-11 row ps-3">
          <div className="col-3" style={{textDecoration: 'none'}}>
            <Link to="#" style={{textDecoration: 'none'}}>
              <i className="bi bi-chat me-2"></i>
              <span style={{color: 'rgb(110, 118, 125)'}}>
              {tuit.replies}
            </span>
            </Link>
          </div>
          <div className="col-3" style={{textDecoration: 'none'}}>
            <Link to="#" style={{textDecoration: 'none'}}>
              <i className="bi bi-arrow-repeat me-2"></i>
              <span style={{color: 'rgb(110, 118, 125)'}}>
              {tuit.retuits}
            </span>
            </Link>
          </div>
          <div className="col-3" style={{textDecoration: 'none'}}>
              {tuit.liked === true && <i onClick={() => dispatch(updateTuitThunk({
                                        ...tuit,
                                        likes: tuit.likes - 1,
                                        liked: false
                                        }))} className="bi bi-heart-fill text-danger me-2"/>}
              {tuit.liked === false && <i onClick={() => dispatch(updateTuitThunk({
                                        ...tuit,
                                        likes: tuit.likes + 1,
                                        liked: true
                                      }))} className="bi bi-heart me-2"/>}
              <span style={{color: 'rgb(110, 118, 125)'}}>
                {tuit.likes}
              </span>
          </div>
          <div className="col-3">
            <Link to="#" style={{textDecoration: 'none'}}>
              <i className="bi bi-share"/>
            </Link>
          </div>
        </div>
      </div>
  );
}
export default TuitStats