import React from "react";
import {useSelector} from "react-redux";
import PostSummaryItem
  from "./post-summary-item";

const PostSummaryList = () => {
  const {tuits, loading} = useSelector(state => state.tuitsData)
  return(
      <ul className="list-group">
        {
          tuits.map(tuit =>
              <PostSummaryItem
                  key={tuit._id} tuit={tuit}/> )
        }
      </ul>
  );
};
export default PostSummaryList;