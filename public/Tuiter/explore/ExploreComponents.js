import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return(`
     <div class="row">
                 <!-- search field and cog -->
        <form class="mb-2 col-11" style="justify-items: center; align-items: center">
          <input class="wd-border-size wd-rounded-corners-all-around" style="width: 85%; text-indent: 50px; color: darkgray; background-color: white"
                 placeholder="Search Tuiter"/>
        </form>
        <a class="wd-remove-underline col-1" href="explore-settings.html">
            <i class="fa fa-cog fa-2x wd-highlighted-color" style="float: right;"></i>
        </a>
        <span class="position-relative" style="bottom: 33px; left: 20px"><i class="fa fa-search"></i></span>
     </div>
     <ul class="nav mb-2 nav-tabs">
                <!-- tabs -->
        <li class="nav-item">
          <a class="nav-link active" href="../for-you.html">For you</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="../trending.html">Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="../news.html">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="../sports.html">Sports</a>
        </li>
        <li class="nav-item d-none d-md-block">
          <a class="nav-link" href="../entertainment.html">Entertainment</a>
        </li>
     </ul>
     <!-- image with overlaid text -->
     <img width="100%" height="350" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg">
<!--     <p class="position-relative wd-content-color" style="bottom: 60px; left: 5px">Tennis Tournament . LIVE</p>-->
      <h4 class="position-relative" style="bottom: 40px; left: 5px; color: rgb(110, 118, 125)">SpaceX's Starship</h4>
      <div class="position-relative" style="bottom: 40px;">
        ${PostSummaryList()}
      </div>
     
    `);
}
export default ExploreComponent;
