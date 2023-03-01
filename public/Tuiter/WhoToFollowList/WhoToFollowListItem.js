const WhoToFollowListItem = (who) => {
  return (`
      <li class="list-group-item list-group-item-action " style="display: flex; border: none;">
        <img class="me-1" style="width: 60px; height: 60px; border-radius: 50px;" src=${who.avatarIcon}>
        <div style="display: flex">
<!--          Northeastern U.-->
            ${who.userName}
          <span class="ms-1"><i class="fa fa-check-circle"></i></span>
        </div>
        <span class="position-absolute" style="left: 80px; top: 30px; color: rgb(110, 118, 125)">@${who.handle}</span>
        <button class="position-absolute btn btn-primary btn-block rounded-pill" style="right: 10px; justify-content: center;">follow</button>
      </li>

<!--      <div class="list-group-item list-group-item-action" style="display: flex; border: none;">-->
<!--        <img class="me-1" style="width: 60px; height: 60px; border-radius: 50px" src="https://pbs.twimg.com/profile_images/1561717677600686083/Dm80jwOp_400x400.jpg">-->
<!--        <div style="display: flex">-->
<!--          Matt Wallace-->
<!--          <span class="ms-1"><i class="fa fa-check-circle wd-highlighted-color"></i></span>-->
<!--          <span class="position-absolute" style="left: 80px; top: 30px; color: rgb(110, 118, 125)">@MattWallace888</span>-->
<!--        </div>-->
<!--        <button class="position-absolute btn btn-primary btn-block rounded-pill" style="right: 10px; align-items: center;">follow</button>-->
<!--      </div>-->

<!--      <div class="list-group-item list-group-item-action" style="display: flex; border: none;">-->
<!--        <img class="me-1" style="width: 60px; height: 60px; border-radius: 50px" src="https://play-lh.googleusercontent.com/BctQd9Bq2q6GJYUL80jwTaGcl05RFeany_m_IU5_wOa2QpEInGkPKPXg6TWIhup-KHE">-->
<!--        <div style="display: flex">-->
<!--          PointsBet Sportsb...-->
<!--          <span class="ms-1"><i class="fa fa-check-circle wd-highlighted-color"></i></span>-->
<!--        </div>-->
<!--        <span class="position-absolute" style="left: 80px; top: 30px; color: rgb(110, 118, 125)">@PointsBetUSA</span>-->
<!--        <span class="position-absolute" style="left: 80px; top: 55px; color: rgb(110, 118, 125); font-size: 13px"><i class="fas fa-arrow-alt-circle-up"></i><span> Promoted</span></span>-->
<!--        <button class="position-absolute btn btn-primary" style="right: 10px; align-items: center;">follow</button>-->
<!--      </div>-->
  `);
}

export default WhoToFollowListItem