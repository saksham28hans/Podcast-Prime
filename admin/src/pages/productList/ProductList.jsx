import {React,useContext,useState,useEffect} from 'react';
import './productList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { deletePodcast, getPodcast } from '../../context/movieContext/moviesApiCalls';

const ProductList = () => {

    const [data, setdata] = useState(productRows);
    const {movies,dispatch} = useContext(MovieContext);

    useEffect(() => {
     getPodcast(dispatch);
    }, []);

    console.log(movies);
    const handleDelete = (id)=>{
        deletePodcast(id,dispatch)
    }
    const columns = [
        { field: '_id', headerName: 'ID', width: 190 },
        {
          field: 'movie',
          headerName: 'Movie',
          width: 250,
          editable: true,
          renderCell: (params)=>{
            return (
                <div className="productListItem">
                    <img className='productListImg' src={params.row.img} alt="" />
                    {params.row.title}
                </div>
            )
          }
        },
        {
          field: 'speaker',
          headerName: 'Speaker',
          width: 150,
          editable: true,
        },
        {
          field: 'category',
          headerName: 'Category',
          width: 150,
          editable: true,
        },
        {
          field: 'type',
          headerName: 'Type',
          width: 120,
          editable: true,
        },
        {
          field : 'action',
          headerName : 'Action',
          width: 150,
          renderCell : (params)=>{
            return (
              <>
                <Link to={'/product/' + params.row._id} state={{movie : params.row}}>
                <button className='productListEdit'>Edit</button>
                </Link>
                <DeleteOutline className='productListDelete' onClick = {()=>handleDelete(params.row._id)} />
              </>
            )
          }
        }
      ];
  return (
    <div className='productList'>
   <Link to='/newProduct'>
            <button className="productAddButton">Create</button>
    </Link>
      <DataGrid
        rows={movies}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
        getRowId={(r)=> r._id}
      />
    </div>
  );
}

export default ProductList;
