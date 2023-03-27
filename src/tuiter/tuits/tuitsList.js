import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TuitItem from "./tuitItem";
import TuitStats from "./tuitStats";
import {findTuitsThunk} from "../../services/tuits-thunks.js";

const TuitsList = () => {
  const {tuits, loading} = useSelector(state => state.tuitsData)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk())
  }, [dispatch])
  return(
      <ul className="list-group">
        {
            loading &&
            <li className="list-group-item">
              Loading...
            </li>
        }
        {
          tuits.map(tuit =>
              <li className="pt-3 ps-2 pe-2 pb-2 list-group-item list-group-item-action" key={tuit._id}>
                <TuitItem  tuit={tuit}/>
                <TuitStats tuit={tuit}/>
              </li>
            )
        }
      </ul>
  );
}
export default TuitsList