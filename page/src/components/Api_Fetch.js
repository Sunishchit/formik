import React,{useEffect, useState} from 'react';
import Axios from 'axios';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { spacing } from '@mui/system';

const Api_Fetch = () => {

    const [data, setData] = useState([])
    //const fetchData=async()=>{
      //  const res=await fetch('https://jsonplaceholder.typicode.com/users');
        //const data=await res.json();
        //console.log(data);
        //setData(data);
        //console.log(Data);
    

   // const fData=fetch('https://jsonplaceholder.typicode.com/users').then((res)=> res.json()).then((data)=>console.log(data));
    
   
    const fetchData=async()=>{
        try {
            const res=await Axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(res.data);
            setData(res.data);
        } catch (error) {
            console.error(error)
        }
       
    }
    useEffect(()=>{
      fetchData();
    },[])

  return (
    <div>
      {
        data.map((data)=>(
          <Accordion key={data.id}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{data.id}.{data.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
          ))
        }
    </div>
  )
  }

export default Api_Fetch