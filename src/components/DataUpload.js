 import React, { Component, useEffect, useState } from 'react'
 import { useTranslation } from 'react-i18next';

function DataUpload() {
//     constructor(){
//         super();
//         this.state = {
//            name:"sena"
//         };
//     }
//      componentDidMount(){
//         const rootRef = firebase.database().ref().child('react');
//         const nameRef = rootRef.child('name');
//         nameRef.on('value',snap =>{
//          this.setState({
//              name:snap.val()
//          })
//         })
//      }
const [data, setData] = useState([]);
useEffect(()=>{
    (async ()=>{
        const respData = await fetch("http://localhost:5000/users")
        const jsonData = await respData.json()
        const itemData = jsonData.data[1]
        setData(itemData);
    })();
}, []);
const {t, i18n} = useTranslation();
         return (
             <div>
                 <h3>{t('Account.header')} {data.name}</h3>
                 
             </div>
         )
        
 }

 export default DataUpload
