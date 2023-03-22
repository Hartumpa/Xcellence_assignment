import MoodAnalytics from "./components/MoodAnalytics";
import Navbar from "./components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";


function App() {
  const [data,setData] = useState([]);
  useEffect(()=>{
   axios.get('http://api.reward-dragon.com:8000/customers/customer-josh-reason-today/?user_profile=500',{
      headers:{
        Authorization:'c3fb04334a7c647338cdfd500e2997bb9898cf52'
      }
    }).then((res)=>{
      setData(res.data.moodalytics);
    }).catch((err)=>console.log(err,'err'))
  },[])
  return (
    <>
      <Navbar />
      <MoodAnalytics pdata={data} />
    </>
  );
}

export default App;
