import {Link} from "react-router-dom";

const postItem = (
    {
        post = {
          "userName": "Elon Musk",
          "handle": "elonmusk",
          "time": "23h",
          "title": "Amazing show about @Inspiration4x mission",
          "comment": "4.2k",
          "retweet": "3.5k",
          "like": "37.5k",
          "avatarIcon": "/images/elonmusk.png",
          "image":"/images/inspiration4.png"
        }
    }

) => {
  return (
    <li className="pt-3 ps-2 pe-2 pb-2 list-group-item list-group-item-action">
    <div className="row">
      <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-1 col-xxl-1">
        <img src={post.avatarIcon} width={50} height={50} className="rounded-circle"/>
      </div>
      <div className="col-10 col-sm-10 col-md-10 col-lg-11 col-xl-11 col-xxl-11">
        <div className={"ps-2"}>
          <span><h6 style={{display: 'inline-block'}}>{post.userName}</h6></span>
          <span style={{display: 'inline-block', color: 'rgb(110, 118, 125)'}}>@{post.handle}</span>
          <span className="ms-1" style={{display: 'inline-block'}}><i className="bi bi-check-circle"></i></span>

          <span style={{display: 'inline-block', color: 'rgb(110, 118, 125)'}}>- {post.time}</span>
          <span style={{color: 'rgb(110, 118, 125)', float: 'right'}}>...</span>
        </div>


        <p className={"ps-2"}>{post.title}</p>
        <img style={{width: '100%', height: '350px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', borderColor: 'rgb(110, 118, 125)'}} src={post.image}/>

        {post.userName === 'Elon Musk' &&
      <div className="pb-2 ps-2 pe-2 pt-2" style={{borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', borderStyle:'solid', borderColor: 'lightgray'}}>
        <h6>Countdown: Inspiration4 Mission to Space | netflix Official Site</h6>
        <span style={{color: 'rgb(110, 118, 125)'}}>From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...</span>
        <p style={{color: 'rgb(110, 118, 125)'}}><i className="fas fa-link"></i>netflix.com</p>
      </div>}


        <div className="row">
        <div className="col-3" style={{textDecoration: 'none'}}>
          <Link to="#" style={{textDecoration: 'none'}}>
            <i className="fa fa-comment"></i>
            <span style={{color: 'rgb(110, 118, 125)'}}>{post.comment}</span>
          </Link>
        </div>
        <div className="col-3" style={{textDecoration: 'none'}}>
          <Link to="#" style={{textDecoration: 'none'}}>
            <i className="bi bi-retweet"></i>
            <span style={{color: 'rgb(110, 118, 125)'}}>{post.retweet}</span>
          </Link>
        </div>
        <div className="col-3" style={{textDecoration: 'none'}}>
          <Link to="#" style={{textDecoration: 'none'}}>
            <i className="bi bi-heart"></i>
            <span style={{color: 'rgb(110, 118, 125)'}}>{post.like}</span>
          </Link>
        </div>
        <div className="col-3">
          <Link to="#" style={{textDecoration: 'none'}}>
            <i className="bi bi-upload"></i>
          </Link>
        </div>
        </div>
      </div>
    </div>
    </li>
  );
}

export default postItem;