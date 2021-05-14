import React,{ useState,useEffect }  from 'react'
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
   const [imgData, setImagedata]= useState([]);
   useEffect(() => {
     ( async ()=>{
       const respImg = await fetch("http://localhost:5000/users")
       const jsonImg = await respImg.json()
       const itemImg= jsonImg.data[1];
       setImagedata(itemImg);
     })();
   }, []);
   
 //  localStorage.getItem('imageUrl') == null ? localStorage.getItem('imageUrl')  : imgData.imageUrl
    return (
        <div >
             <IconContext.Provider value={{color:'#58c4bc'}}>
            <br/>
            <img src={(imgData.imageUrl == null || localStorage.getItem('imageUrl') == null ) ? "https://bit.ly/3y4chbU" : imgData.imageUrl } alt="firebase-image" />
            
            <br/>
         
            <br/>  
               <div className="kapsayici">
               <input type="file" id="file" onChange={handleChange} hidden/> 
               <label htmlFor="file" id="selector" >
                   <MdPhotoLibrary /> &nbsp;Select File</label>
               <label className="buttons" onClick={handleUpload} align="center" >
                  <RiFolderUploadFill/> &nbsp;Upload File</label> 
               </div>
               
              
               </IconContext.Provider>
        </div>
    )
}
 
export default ImageUpload
        
    

