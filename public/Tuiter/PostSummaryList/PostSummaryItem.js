const PostSummaryItem = (post) => {
  return (`
    <li class="pt-3 ps-2 pe-2 pb-2 list-group-item list-group-item-action">
      <div>
        <img src=${post.image} style="width: 80px; height: 80px; border-radius: 10px; float: right">
        <span style="color: rgb(110, 118, 125)">${post.topic}</span></br>
        <span>${post.userName}</span><span class="ms-1"><i class="fa fa-check-circle"></i></span><span style="color: rgb(110, 118, 125)"> - ${post.time}</span>
        <p>${post.title}</p>
      </div>
    </li>
  `);
}

export default PostSummaryItem;