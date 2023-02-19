const NavigationSidebar = () => {
  return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
      <div class="list-group-item list-group-item-action" style="display: flex; align-items: center; justify-items: center; border: none">
        <i class="fa fa-home"></i><span class="d-none d-xl-block ms-1">Home</span>
      </div>
      <div class="list-group-item list-group-item-action active" style="display: flex; align-items: center; justify-items: center; border: none; font-weight: bold">
        <i class="fa fa-hashtag"></i><span class="d-none d-xl-block ms-1">Explore</span>
      </div>
      <div class="list-group-item list-group-item-action" style="display: flex; align-items: center; justify-items: center; border: none">
        <i class="fa fa-bell"></i><span class="d-none d-xl-block ms-1">Notifications</span>
      </div>
      <div class="list-group-item list-group-item-action" style="display: flex; align-items: center; justify-items: center; border: none">
        <i class="fa fa-envelope"></i><span class="d-none d-xl-block ms-1">Messages</span>
      </div>
      <div class="list-group-item list-group-item-action" style="display: flex; align-items: center; justify-items: center; border: none">
        <i class="fa fa-bookmark"></i><span class="d-none d-xl-block ms-1">Bookmarks</span>
      </div>
      <div class="list-group-item list-group-item-action" style="display: flex; align-items: center; justify-items: center; border: none">
        <i class="fa fa-list"></i><span class="d-none d-xl-block ms-1">Lists</span>
      </div>
      <div class="list-group-item list-group-item-action" style="display: flex; align-items: center; justify-items: center; border: none">
        <i class="fa fa-user"></i><span class="d-none d-xl-block ms-1">Profile</span>
      </div>
      <div class="list-group-item list-group-item-action" style="display: flex; align-items: center; justify-items: center; border: none">
        <i class="fa fa-bars"></i><span class="d-none d-xl-block ms-1">More</span>
      </div>
    </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;