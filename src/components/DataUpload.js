import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import './DataUpload.css'
import {BASE_URL} from '../enviroments'

function DataUpload() {

const {t, i18n} = useTranslation();

const [data, setData] = useState([]);
const [Namedata, setNamedata]= useState([]);

useEffect(()=>{
    (async ()=>{
        const respData = await fetch(`${BASE_URL}/users`)
        const jsonData = await respData.json()
        const [itemData] = jsonData.data
        setData(itemData);

       
        let idUser =  localStorage.getItem('user-info').split(',')[2].split(':')[1].split('"')[1]
        const resName = await fetch(`${BASE_URL}/users/${idUser}`)
        const jsonName = await resName.json()
        setNamedata(jsonName.data.name); 
    })();
}, []);

         return (
             <div>
                 <h3 className="Username">{t('Account.header')} {Namedata}</h3>
                 
             </div>
         )
        
 }

 export default DataUpload
