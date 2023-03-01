import WhoToFollowListItem from "./WhoToFollowListItem.js";
import whos from "./whos.js"

const WhoToFollowList = () => {
  return (`
    <ul class="list-group">
      <li class="list-group-item list-group-item-action" style="border: none;">Who to follow</li>
    <!-- continue here -->
      ${
          whos.map(who => {
            return(WhoToFollowListItem(who));
          }).join('')
        }
    </ul>
`); }

export default WhoToFollowList;