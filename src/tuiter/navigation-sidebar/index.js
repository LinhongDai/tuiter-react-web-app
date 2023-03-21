import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
const NavigationSidebar = (
) => {
  const {pathname} = useLocation();
  const paths = pathname.split('/')
  console.log(paths)
  const active = paths[2];
  console.log(active)
  return (
      <div className="list-group">
        <Link to="/tuiter" className={"list-group-item"}>
             Tuiter
        </Link>
        <Link to="/tuiter" className={`list-group-item ${active === undefined ? 'active' : ''}`}>
          <i className="bi bi-house-door me-1"></i>
          Home
        </Link>
        <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
          <i className="bi bi-hash me-1"></i>
          Explore
        </Link>
        <Link to="#" className="list-group-item">
          <i className="bi bi-asterisk me-1"></i>
          Labs
        </Link>
        <Link to="#" className={`list-group-item ${active === 'notifications'?'active':''}`}>
          <i className="bi bi-bell me-1"></i>
          Notifications
        </Link>
        <Link to="#" className={`list-group-item ${active === 'messages'?'active':''}`}>
          <i className="bi bi-envelope-x me-1"></i>
          Messages
        </Link>
        <Link to="#" className={`list-group-item ${active === 'bookmarks'?'active':''}`}>
          <i className="bi bi-bookmark me-1"></i>
          Bookmarks
        </Link>
        <Link to="#" className={`list-group-item ${active === 'lists'?'active':''}`}>
          <i className="bi bi-list me-1"></i>
          Lists
        </Link>
        <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
          <i className="bi bi-person-rolodex me-1"></i>
          Profile
        </Link>
        <Link to="#" className={`list-group-item ${active === 'more'?'active':''}`}>
          <i className="bi bi-bar-chart-line me-1"></i>
          More
        </Link>
      </div>
  );
};
export default NavigationSidebar;