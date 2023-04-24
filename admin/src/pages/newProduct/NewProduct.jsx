import {React,useState,useEffect} from 'react'; 
import './newProduct.css'
import storage from '../../firebase';
import {createPodcast } from '../../context/movieContext/moviesApiCalls';
import { useContext } from 'react';
import {MovieContext} from '../../context/movieContext/MovieContext';
import Spinner from '../../components/Spinner'
import { useNavigate } from "react-router";



const NewProduct = () => {
    const [movie, setmovie] = useState(null);
    const [img, setimg] = useState(null);
    const [video, setvideo] = useState(null);
    const [uploaded, setuploaded] = useState(0);
    const {dispatch} = useContext(MovieContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    if(uploaded == 2)
    setLoading(false);
      
    }, [uploaded])
    
    const handleChange = (e)=>
    {
        const value = e.target.value;
        setmovie({...movie , [e.target.name] : value})
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        createPodcast(movie,dispatch);
    }
    
    const upload = (items)=>{
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
                setmovie((prev)=>{
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
      setLoading(true); 
      console.log(loading);
      upload([
        {file : img, label :'img'},
        {file : video, label :'file'},
      ])
      
      console.log(loading);
    }
  return (
   <>
    <div className='newProduct'>
       <h1 className="addProductTitle">Add Podcasts</h1>
       <form className="addProductForm">
        <div className="addProductItem">
            <label>Image</label>
            <input type="file" id='img' onChange={(e)=>{setimg(e.target.files[0])}} required/>
        </div>
        <div className="addProductItem">
            <label>Title</label>
            <input type="text" placeholder='Podcast on DSA' name="title"  onChange={handleChange} required/>
        </div>
        <div className="addProductItem">
            <label>Description</label>
            <input type="text" placeholder='Description' name="desc"  onChange={handleChange} required/>
        </div>
        <div className="addProductItem">
            <label>Speaker</label>
            <input type="text" placeholder='Speaker Name' name="speaker"  onChange={handleChange} required/>
        </div>
        <div className="addProductItem">
            <label>Category</label>
            <input type="text" placeholder='Action' name="category"  onChange={handleChange} required/>
        </div>
        <div className="addProductItem">
            <label>Type</label>
            <input type="text" placeholder='video' name="type"  onChange={handleChange} required/>
        </div>
        <div className="addProductItem">
            <label>Audio/Video</label>
            <input type="file" onChange={(e)=>{setvideo(e.target.files[0])}} required/>
        </div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginLeft:'2px'}}>
        {uploaded === 2 ? 
                (
                <button className="addProductButton" onClick={handleSubmit}>Create</button>
                ) :
                (
                <button className="addProductButton" onClick={handleUpload} disabled={loading}>{loading?<Spinner/>:'Upload'}</button>
                )}
       </div>
       </form>
    </div>
   </>
  );
}

export default NewProduct;
