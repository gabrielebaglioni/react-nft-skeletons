
import './App.css';
import ColletionCard from './components/ColletionCard';
import Header from './components/Header';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import SkeletonsList from './components/SkeletonsList';

function App() {

    // Data from OpenSea
    const [SkeletonsListData, setSkeletonsData] = useState([]);
    // const [selectedSkeletons, setSelectedSkeletons] = useState(0);
  
    useEffect(() => {
      const getNFTs = async () => {
        const options = {
          method: "GET",
          url: "https://testnets-api.opensea.io/api/v1/assets",
          params: {
            order_direction: "asc",
            offset: "0",
            limit: "20",
            asset_contract_address: "0xf51c18a63c2b39275bdA2b93e5e6d494d7b28813",
          },
        };
  
        
        axios.request(options)
          .then(function (response) {
            console.log(response.data.assets)
            setSkeletonsData(response.data.assets);
          })
          .catch(function (error) {
            console.error("err: ", error);
          });
      };
  
      getNFTs();
    }, []);


  return(
    <div className='app'>
      <Header/>
      
     <SkeletonsList SkeletonsListData={SkeletonsListData} />      
    </div>
  )
}

export default App;
