import { Publish } from '@material-ui/icons';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { productData } from '../../dummyData';
import './list.css';
const List = () => {
  const location = useLocation();
  const list = location.state.list;
  return (
    <div className='product'>
      <div className="productTitleContainer">
        <h1 className="productTitle">List Title</h1>
        <Link to='/newList'>
            <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
       <div className="productTopRight">
         <div className="productInfoTop">
            <span className="productName">{list.title}</span>
         </div>
         <div className="productInfoBottom">
            <div className="productInfoItem">
                <span className="productInfoKey">Id:</span>
                <span className="productInfoValue">{list._id}</span>
            </div>
            <div className="productInfoItem">
                <span className="productInfoKey">Category:</span>
                <span className="productInfoValue">{list.category}</span>
            </div>
         </div>
       </div>
      </div>
      <div className="productBottom">
       <form className="productForm">
        <div className="productFormLeft">
            <label>List Title</label>
            <input type="text" placeholder={list.title} />
             <label>Category</label>
             <input type="text" placeholder={list.category} />
        </div>
        <div className="productFormRight">
            <button className="productButton">Update</button>
        </div>
       </form>
      </div>
    </div>
  );
}

export default List;
