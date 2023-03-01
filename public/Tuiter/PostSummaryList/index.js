import postSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";
const postSummaryList = () => {
  return (`
    <ul class="list-group">
    ${
      posts.map(post => {
        return(postSummaryItem(post))
      }).join('')
      }
    </ul>
  `);
}

export default postSummaryList;