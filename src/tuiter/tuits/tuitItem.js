import React from 'react'
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitItem = (
    {
      post = {
        "_id": 123,
        "topic": "Space",
        "userName": "SpaceX",
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
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }

  return (
      <div className="row">
        <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-1 col-xxl-1">
          <img src={post.image} alt="avatar icon" width={50} height={50}
               className="rounded-circle"/>
        </div>
        <div className="col-10 col-sm-10 col-md-10 col-lg-11 col-xl-11 col-xxl-11">
          <i className="bi bi-x-lg float-end"
             onClick={() => deleteTuitHandler(post._id)}>

          </i>
          <div className={"ps-2"}>
            <span>
              <h6 style={{display: 'inline-block'}}>
                {post.userName}
              </h6>
            </span>
            <span className="ms-1" style={{display: 'inline-block'}}>
              <i className="bi bi-check-circle-fill text-primary"></i>
            </span>
            <span style={{
              display: 'inline-block',
              color: 'rgb(110, 118, 125)',
              marginLeft: '4px'
            }}>
              {post.handle}
            </span>


            <span style={{
              display: 'inline-block',
              color: 'rgb(110, 118, 125)',
              marginLeft: '4px'
            }}>· {post.time}</span>
            {/*<span style={{*/}
            {/*  color: 'rgb(110, 118, 125)',*/}
            {/*  float: 'right'*/}
            {/*}}>...</span>*/}
          </div>
          <p className={"ps-2"}>
            {post.tuit}
          </p>
        </div>
      </div>
  );
}

export default TuitItem