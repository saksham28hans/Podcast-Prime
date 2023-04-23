import {React,useState} from 'react';
import './newProduct.css'
import storage from '../../firebase';
import {createPodcast } from '../../context/movieContext/moviesApiCalls';
import { useContext } from 'react';
import {MovieContext} from '../../context/movieContext/MovieContext';

const NewProduct = () => {
    const [movie, setmovie] = useState(null);
    const [img, setimg] = useState(null);
    const [video, setvideo] = useState(null);
    const [uploaded, setuploaded] = useState(0);
    const {dispatch} = useContext(MovieContext);

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
      upload([
        {file : img, label :'img'},
        {file : video, label :'file'},
      ])
    }
  return (
    <div className='newProduct'>
       <h1 className="addProductTitle">Add Movie</h1>
       <form className="addProductForm">
        <div className="addProductItem">
            <label>Image</label>
            <input type="file" id='img' onChange={(e)=>{setimg(e.target.files[0])}}/>
        </div>
        <div className="addProductItem">
            <label>Title</label>
            <input type="text" placeholder='Podcast on DSA' name="title"  onChange={handleChange}/>
        </div>
        <div className="addProductItem">
            <label>Description</label>
            <input type="text" placeholder='Description' name="desc"  onChange={handleChange}/>
        </div>
        <div className="addProductItem">
            <label>Speaker</label>
            <input type="text" placeholder='Saksham Hans' name="speaker"  onChange={handleChange}/>
        </div>
        <div className="addProductItem">
            <label>Category</label>
            <input type="text" placeholder='Action' name="category"  onChange={handleChange}/>
        </div>
        <div className="addProductItem">
            <label>Type</label>
            <input type="text" placeholder='video' name="type"  onChange={handleChange}/>
        </div>
        <div className="addProductItem">
            <label>Video</label>
            <input type="file" onChange={(e)=>{setvideo(e.target.files[0])}}/>
        </div>
        {uploaded === 2 ? (
        <button className="addProductButton" onClick={handleSubmit}>Create </button>
        ) :
        (
        <button className="addProductButton" onClick={handleUpload}>Upload</button>
        )}
       </form>
    </div>
  );
}

export default NewProduct;
