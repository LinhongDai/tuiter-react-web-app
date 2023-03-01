import NavigationSidebar from "../NavigationSidebar/index.js";
import postList from "../PostList/PostList.js";
function homepageComponents() {
  $('#wd-home').append(`
    <h2>Home</h2>
     <div class="row mt-2" >
       <div class="col-2 col-md-2 col-lg-2 col-xl-3">
  <!--      <h3>NavigationSidebar</h3>-->
         ${NavigationSidebar('Home')}
       </div>
       <div class="col-8 col-lg-8 col-xl-8" style="background-color: black">
  <!--      <h3>ExploreComponent</h3>-->
         ${postList()}
       </div>
    </div>
  `)
}
$(homepageComponents)