 import React, { Component } from 'react'

 export class DataUpload extends Component {
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
     render() {
         return (
             <div>
                 <h3>Welcome User</h3>
             </div>
         )
     }
 }

 export default DataUpload
