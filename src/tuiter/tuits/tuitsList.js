import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuitItem";
import TuitStats from "./tuitStats";

const TuitsList = () => {
  const postsArray = useSelector(state => state.tuits)
  return(
      <ul className="list-group">
        {
          postsArray.map(post =>
              <li className="pt-3 ps-2 pe-2 pb-2 list-group-item list-group-item-action" key={post._id}>
                <TuitItem  post={post}/>
                <TuitStats post={post}/>
              </li>
            )
        }
      </ul>
  );
}
export default TuitsList