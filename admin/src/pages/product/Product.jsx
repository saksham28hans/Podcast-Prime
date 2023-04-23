import { Publish } from '@material-ui/icons';
import {React,useState,useContext} from 'react';
import storage from '../../firebase';
import { Link, useLocation } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { productData } from '../../dummyData';
import './product.css';
import { updatePodcast } from '../../context/movieContext/moviesApiCalls';
import { MovieContext } from '../../context/movieContext/MovieContext';
const Product = () => {

  const [movie_st, setmovie_st] = useState(null);
    const [img, setimg] = useState(null);
    const [video, setvideo] = useState(null);
    const [uploaded, setuploaded] = useState(0);
    const {dispatch} = useContext(MovieContext);
  const location = useLocation();
  const movie = location.state.movie;
  const [noFiles, setnoFiles] = useState(-1);
  const handleChange = (e)=>
  {
      const value = e.target.value;
      setmovie_st({...movie_st , [e.target.name] : value})
  };
   console.log(movie_st);
  const upload = (items)=>{
    console.log(items);
    items.forEach((item)=>{
     const filename = new Date().getTime() + item.label + item.file.name;
     const uploadTask = storage.ref(`/items/${filename}`).put(item.file);
     uploadTask.on("state_changed",
     (snapshot)=>{
         console.log(snapshot);
         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
         console.log("Upload is " + progress + "% done.");
      },
      (err)=>{
         console.log(err);
      },
      ()=>{
         uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
             setmovie_st((prev)=>{
                 return { ...prev, [item.label]: url};
             });
             setuploaded((prev)=> prev+1);
         });
      }
      );
    });
 }

  const handleUpload  = (e)=>{
    e.preventDefault();
    if(img && video)
    {
      setnoFiles(2);
    upload([
      {file : img, label :'img'},
      {file : video, label :'file'},
    ])
    }
    else if(img)
    {
      setnoFiles(1);
      upload([
        {file : img, label :'img'},
      ])
    }
    else if(video)
    {
      setnoFiles(1);
      upload([
        {file : video, label :'file'},
      ])
    }
    else
    {
      setnoFiles(0);
    // updatePodcast(movie._id,movie_st,dispatch);
    }
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    // createPodcast(movie,dispatch);
    updatePodcast(movie._id,movie_st,dispatch); updatePodcast(movie,dispatch);
}
  return (
    <div className='product'>
      <div className="productTitleContainer">
        <h1 className="productTitle">Movies</h1>
        <Link to='/newProduct'>
            <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
       <div className="productTopRight">
         <div className="productInfoTop">
            <img src={movie.img} alt="" className="productInfoImg" />
            <span className="productName">{movie.title}</span>
         </div>
         <div className="productInfoBottom">
            <div className="productInfoItem">
                <span className="productInfoKey">Id:</span>
                <span className="productInfoValue">{movie._id}</span>
            </div>
            <div className="productInfoItem">
                <span className="productInfoKey">Speaker:</span>
                <span className="productInfoValue">{movie.speaker}</span>
            </div>
            <div className="productInfoItem">
                <span className="productInfoKey">Category:</span>
                <span className="productInfoValue">{movie.category}</span>
            </div>
            <div className="productInfoItem">
                <span className="productInfoKey">Type:</span>
                <span className="productInfoValue">{movie.type}</span>
            </div>
         </div>
       </div>
      </div>
      <div className="productBottom">
       <form className="productForm">
        <div className="productFormLeft">
            <label>Podcast Title</label>
            <input type="text" placeholder={movie.title} name="title" onChange={handleChange} />
             <label>Speaker</label>
             <input type="text" placeholder={movie.speaker} name="speaker" onChange={handleChange} />
             <label>Category</label>
             <input type="text" placeholder={movie.category} name="category" onChange={handleChange} />
             <label>Type</label>
             <input type="text" placeholder={movie.type} name="type" onChange={handleChange} />
             <label>Video/Audio</label>
             <input type="file" placeholder={movie.video} onChange={(e)=>{setvideo(e.target.files[0])}} />
             
        </div>
        <div className="productFormRight">
            <div className="productUpload">
                <img src={movie.img} alt="" className="productUploadImg" />
                <label for="file">
                    <Publish style={{cursor:'pointer'}}/>
                </label>
                <input type="file" id='file' style={{display:'none'}} onChange={(e)=>{setimg(e.target.files[0])}} />
            </div>
            {uploaded === noFiles ? (
        <button className="addProductButton" onClick={handleSubmit}>Update </button>
        ) :
        (
        <button className="addProductButton" onClick={handleUpload}>Upload</button>
        )}
            {/* <button className="productButton" onClick={handleUpload}>Update</button> */}
        </div>
       </form>
      </div>
    </div>
  );
}

export default Product;
