import React, { useContext, useEffect, useState } from "react";
import Search from "../SearchF/Search";
import List from "../ListF/List";
import { GlobalContext } from "../../context/GlobalState";
import Header from "../HeaderF/Header";
import axios from "axios";
import './Home.css';

function Home() {
  const context = useContext(GlobalContext);
  const { input } = context;

  const [lists, setLists] = useState([]);

  useEffect(() => {
    const getList = async () => {
      try {
        const res = await axios.get(`lists`);
        // , {
        //   headers: {
        //     token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDM4MjA4YmI1MmRmYzUwZDU1MjA0NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjI4MjMxNSwiZXhwIjoxNjgyNzE0MzE1fQ.Jz9XKU95rCt_KFCBrfM99V7kUnqlLeihT_wL1DiblBE`,
        //   },
        // });
        // console.log(res.data)
        setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getList()
  }, []);

  return (
    <>
      <Header />
      <Search />
      {input === "" && (
        <>
        
        {lists.map((list)=>(

          <List key={list._id} list={list} />
        ))}
        </> 
       )}  
    </>
  );
}

export default Home;
