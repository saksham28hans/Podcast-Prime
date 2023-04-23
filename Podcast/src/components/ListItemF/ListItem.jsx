import { Add, PlayArrow, ThumbDownOutlined,ThumbUpAltOutlined } from '@material-ui/icons';
import {React, useState, useEffect} from 'react';
import './ListItem.scss';
import axios from "axios";
import { Link } from 'react-router-dom';

const ListItem = ({index, item}) => {
  const [isHovered, setisHovered] = useState(false);
  const [movie, setmovie] = useState({});
  function Remove()
  {
    
  }
//   useEffect(() => {
//     const getMovie = async()=>{
//       try {
//         const mov = await axios('movies/find/'+item);
//         setmovie(mov.data);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     getMovie();
//   }, [item]);
  return (
    // <Link to = {'/watch'} state = {{movie : movie}}>
    <div className='listItem' 
    style={{left:isHovered && 3 * 225 -50 + 3*2.5}}
    onMouseEnter={()=>{setisHovered(true)}} onMouseLeave={()=>{setisHovered(false)}}>
      <img src="/img.jpg" alt="flower" />

      <div className="itemInfo">
      <div class="listitemdetails">
        <nav>Title</nav>  
        <a onclick="Remove()"><i class="fa-regular fa-star"></i></a>
        </div>
        {isHovered && (
         <>
         {/* <video src="" controls autoPlay={true}  loop></video> */}
        <div className="itemInfoTop">
          <span>1h 44 min</span>
          <span className="limit">+18</span>
          <span>2023</span>
        </div>
        <div className="desc">
         lorejsnns
        </div>
        <div className="genre">Comedy</div>
        </>
        )}
      </div>
    </div>
    // </Link>
  );
}

export default ListItem;
