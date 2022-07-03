
import './App.css';
// import ColletionCard from './components/ColletionCard';
import Header from './components/Header';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import SkeletonsList from './components/SkeletonsList';
import Main from './components/Main';

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

      <Main/>
      {/* <ColletionCard
       id={0} 
       name={'CaveMan'} 
       traits={[{'value' : 1}]} 
       image='https://lh3.googleusercontent.com/RfaomEs0FARQbMtC58tIFiVv6XqYG-Y9C164HlkLMq60W4DhtuzlRl3AHEY8xcRW8NsuOXRIu3s6JDOW_Pj9xEgCdL_YR6aEhL6_PNw=w350' /> */}

     <SkeletonsList SkeletonsListData={SkeletonsListData} />      
    </div>
  )
}

export default App;
