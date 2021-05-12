import React,{ useState }  from 'react'
import {MdPhotoLibrary} from 'react-icons/md'
import {IconContext} from 'react-icons/lib'
import {RiFolderUploadFill} from 'react-icons/ri'
import './ImageUpload.css'
import {storage} from '../components/firebase'

const ImageUpload=()=>{
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
  
    const handleChange = e => {
      if (e.target.files[0]) {
        setImage(e.target.files[0]);
       
      }
    };
  
    const handleUpload = () => {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgress(progress);
        },
        error => {
          console.log(error);
        },
        () => {
          storage
            .ref("images").child(image.name).getDownloadURL()
            .then(url => {
              setUrl(url);
            localStorage.setItem('imageUrl',url.toString());
            window.location.reload();
            });
     
           
            
        }
      );
    };
  
    return (
        <div >
             <IconContext.Provider value={{color:'#58c4bc'}}>
            <br/>
            <img src={ localStorage.getItem('imageUrl') == null ? "https://ardeco.com.tr/public/upload/20200306095606_profilpng.png" : localStorage.getItem('imageUrl') } alt="firebase-image" />
            
            <br/>
           
            <br/>  
               <div className="kapsayici">
               <input type="file" id="file" onChange={handleChange} hidden/> 
               <label htmlFor="file" id="selector" >
                   <MdPhotoLibrary /> &nbsp;Select File</label>
              <button className="buttons" onClick={handleUpload} align="center" >
                  <RiFolderUploadFill/> &nbsp;Upload File</button> 
               </div>
               </IconContext.Provider>
        </div>
    )
}
 
export default ImageUpload
        
    

