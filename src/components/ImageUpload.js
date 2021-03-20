import React, { Component } from 'react'
import {storage} from '../firebase' 
import './ImageUpload.css'
import {MdPhotoLibrary} from 'react-icons/md'
import {IconContext} from 'react-icons/lib'
import {RiFolderUploadFill} from 'react-icons/ri'

export default class imageUpload extends Component {
    constructor(props){
        super(props);
        this.state={
            image:null,
            url:'',
            progress: 0
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleUpload=this.handleUpload.bind(this);
    }
    handleChange = e => {
        if(e.target.files[0]){
            const image = e.target.files[0];
            this.setState(()=>({image}));
        }
    } 
    handleUpload = () =>{
        const {image} = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
        (snapshot) =>{
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            this.setState({progress});
        }, 
        (error)=>{
            console.log(error);
        },
        ()=>{
            storage.ref('images').child(image.name).getDownloadURL().then(url=>{
                console.log(url);
                this.setState({url});
            })
        });

    }
    render() {
        const style = {
            
            
        }
        return (
            <div style={style}>
                 <IconContext.Provider value={{color:'#58c4bc'}}>
                {/* <progress value={this.state.progress} max="100"/> */}
                <br/>
                <img src={this.state.url || 'https://ardeco.com.tr/public/upload/20200306095606_profilpng.png'} alt="" height="100" width="500" />
                <br/>
                <br/>  
                   <div className="kapsayici">
                   <input type="file" id="file" onChange={this.handleChange} hidden/> 
                   <label htmlFor="file" id="selector" >
                       <MdPhotoLibrary /> &nbsp;Select File</label>
                  <button className="buttons" onClick={this.handleUpload} align="center" >
                      <RiFolderUploadFill/> &nbsp;Upload File</button> 
                   </div>
                   </IconContext.Provider>
            </div>
        )
    }
}
