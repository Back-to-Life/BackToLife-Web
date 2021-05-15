 import React, { useEffect, useState } from 'react'
 import { useTranslation } from 'react-i18next';
import './DataUpload.css'
function DataUpload() {
const {t, i18n} = useTranslation();

const [data, setData] = useState([]);
const [Namedata, setNamedata]= useState([]);
useEffect(()=>{
    (async ()=>{
        const respData = await fetch("http://localhost:5000/users")
        const jsonData = await respData.json()
        const [itemData] = jsonData.data
        setData(itemData);

        for(let i=0;i < (jsonData.count); i++){
            if(jsonData.data[i].login == true){
             var idUserData=jsonData.data[i]._id
              const resData = await fetch(`http://localhost:5000/users/${idUserData}`)
              const jsoData = await resData.json()
              setNamedata(jsoData.data.name); 
              
            }
           
          }
    })();
}, []);

         return (
             <div>
                 <h3 className="Username">{t('Account.header')} {Namedata}</h3>
                 
             </div>
         )
        
 }

 export default DataUpload
