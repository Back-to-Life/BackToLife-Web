import React, { Component } from 'react'
import {MdPhotoLibrary} from 'react-icons/md'
import {IconContext} from 'react-icons/lib'
import {RiFolderUploadFill} from 'react-icons/ri'
import './ImageUpload.css'


export default class ImageUpload extends Component {
    render() {
        return (
            <div >
                 <IconContext.Provider value={{color:'#58c4bc'}}>
                <br/>
                <img src='https://ardeco.com.tr/public/upload/20200306095606_profilpng.png' alt="" height="100" width="500" />
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
