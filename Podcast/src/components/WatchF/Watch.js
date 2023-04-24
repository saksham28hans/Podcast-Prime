import { ArrowBackOutlined } from '@material-ui/icons';
import React from 'react';
import './Watch.scss';
import { Link, useLocation } from 'react-router-dom';

const Watch = () => {
  const location = useLocation();
  console.log(location.state.movie.file)
  return (
    <div className='watch'>
     <Link to = '/'>
       <div className="back">
        <ArrowBackOutlined />
        Home
       </div>
     </Link>
       <video src={location.state.movie.file} className='video' autoPlay progress controls></video>
    </div>
  );
}

export default Watch;
