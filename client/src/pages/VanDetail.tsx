import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getVanDetail } from '../api';

type Van = {
    _id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    type: string;
  };
  

export const VanDetail = () => {
    
    const [ currentvan, setCurentvan ] = useState<Van[]>([]);
    const param = useParams()
    const paramId = param.id
    console.log("ParamId", paramId)
    
    useEffect(() => {
        async function fetchVans() {
          const van = await getVanDetail();
          setCurentvan(van);
        }
        fetchVans();
      }, []);

      console.log(currentvan)

  return (
    <div>VanDetail</div>
  )
}
