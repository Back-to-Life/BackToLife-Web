 import React, { Component } from 'react'
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
const {t, i18n} = useTranslation();
         return (
             <div>
                 <h3>{t('Account.header')} User</h3>
             </div>
         )
     
 }

 export default DataUpload
