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
              console.log(url.toString());
            localStorage.setItem('imageUrl',url.toString());
            window.location.reload();
            });
           
        }
      );
    };
   const [imgData, setImagedata]= useState([]);
   const [img, setdataImage]= useState([]);
   useEffect(() => {
     ( async ()=>{
        const respImg = await fetch("http://localhost:5000/users/")
        const jsonImg = await respImg.json()
        // const itemImg= jsonImg.data.imageUrl;
        setImagedata(jsonImg.data.imageUrl); 
      


       for(let i=0;i < (jsonImg.count); i++){
         if(jsonImg.data[i].login == true){
           var idUser=jsonImg.data[i]._id
           const resImg = await fetch(`http://localhost:5000/users/${idUser}`)
           const jsoImg = await resImg.json()
           setdataImage(jsoImg.data.imageUrl); 
          //  console.log(img)
         }
        
       }
     })();
   }, []);
 
   //console.log("id",localStorage.getItem('user-info').split(',')[2].split(':')[1].split('"')[1])
 //  localStorage.getItem('imageUrl') == null ? localStorage.getItem('imageUrl')  : imgData.imageUrl
    return (
        <div >
             <IconContext.Provider value={{color:'#58c4bc'}}>
            <br/>
             <img src={(img == null || localStorage.getItem('imageUrl') == null ) ? "https://bit.ly/3y4chbU" : img } alt="firebase-image" /> 
            <h3></h3>
            <br/>
         
            <br/>  
               <div className="kapsayici">
               <input type="file" id="file" onChange={handleChange} hidden/> 
               <label htmlFor="file" id="selector" >
                   <MdPhotoLibrary className="smallicon"/> <span className="imgSpan">Select File</span></label>
               <label className="buttons" onClick={handleUpload} align="center" >
                  <RiFolderUploadFill className="smallicon"/> <span className="imgSpan">Upload File</span></label> 
               </div>
               
              
               </IconContext.Provider>
        </div>
    )
}
 
export default ImageUpload
        
    

