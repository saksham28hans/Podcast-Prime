import React, { useContext } from 'react'
import Search from './SearchF/Search'
import List from './ListF/List'
import { GlobalContext } from '../context/GlobalState';
import Header from './HeaderF/Header';

function Home() {
    const context=useContext(GlobalContext);
    const {input}=context;
  return (
    <>
        <Header/>
         <Search/>
                {input==="" && 
                  <>
                  <List/>
                  <List/>
                  <List/>
                  </>}
    </>
  )
}

export default Home