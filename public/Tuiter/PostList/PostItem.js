const postItem = (post) => {
  return (`
    <li class="pt-3 ps-2 pe-2 pb-2 list-group-item list-group-item-action">
    <div class="row">
      <!--      image area-->
      <div class="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-1 col-xxl-1">
        <img src=${post.avatarIcon} style="width: 50px; height: 50px; border-radius: 50px;">
      </div>
<!--      post area-->
      <div class="col-10 col-sm-10 col-md-10 col-lg-11 col-xl-11 col-xxl-11">
        <div>
          <span><h6 style="display: inline-block;">Elon Musk</h6></span>
          <span style="display: inline-block; color: rgb(110, 118, 125)">@${post.handle}</span>
          <span class="ms-1" style="display: inline-block;"><i class="fa fa-check-circle"></i></span>
          
          <span style="display: inline-block; color: rgb(110, 118, 125)"> - ${post.time}</span>
          <span style="color: rgb(110, 118, 125); float:right">...</span>
        </div>
        
        
        <p>${post.title}</p>
        <img style="width: 100%; height: 350px; border-top-left-radius: 10px; border-top-right-radius: 10px; border-color: rgb(110, 118, 125)" src=${post.image}>
        
        ${post.userName === 'Elon Musk' ? 
        '<div class="pb-2 ps-2 pe-2 pt-2" style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-color: rgb(110, 118, 125)">' 
      + '<h6>Countdown: Inspiration4 Mission to Space | netflix Official Site</h6>' 
      + '<span style="color: rgb(110, 118, 125);">From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...</span>' 
      + '<p style="color: rgb(110, 118, 125);"><i class="fas fa-link"></i>netflix.com</p>' 
      + '</div>' : ''}
        
        
        <!--      icon area-->
        <div class="row">
        <div class="col-3" style="text-decoration: none;">
          <a href="#" style="text-decoration: none;">
            <i class="fa fa-comment" style="color: rgb(110, 118, 125)"></i>
            <span style="color: rgb(110, 118, 125);">${post.comment}</span>
          </a>
        </div>
        <div class="col-3" style="text-decoration: none;">
          <a href="#" style="text-decoration: none;">
            <i class="fa fa-retweet" style="color: rgb(110, 118, 125)"></i>
            <span style="color: rgb(110, 118, 125);">${post.retweet}</span>
          </a>
        </div>
        <div class="col-3" style="text-decoration: none;">
          <a href="#" style="text-decoration: none;">
            <i class="fa fa-heart" style="color: rgb(110, 118, 125)"></i>
            <span style="color: rgb(110, 118, 125);">${post.like}</span>
          </a>
        </div>
        <div class="col-3">
          <a href="#" style="text-decoration: none;">
            <i class="fa fa-upload" style="color: rgb(110, 118, 125)"></i>
          </a>
        </div>
        </div>
      </div>
    </div>
    </li>
  `);
}

export default postItem;