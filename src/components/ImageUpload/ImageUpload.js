import React, { useState, useEffect } from "react";
import { MdPhotoLibrary } from "react-icons/md";
import { IconContext } from "react-icons/lib";
import { RiFolderUploadFill } from "react-icons/ri";
import "./ImageUpload.css";
import { storage } from "../../components/firebase/Firebaseindex";
import { useTranslation } from "react-i18next";
import { BASE_URL } from "../../enviroments";

const ImageUpload = () => {
  const { t, i18n } = useTranslation();

  const [img, setdataImage] = useState([]);
  const [image, setImage] = useState(null);
  const [imageUrl, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [nameUser, setName] = useState([]);  

  let idUser = localStorage.getItem("user-info").split(",")[2].split(":")[1].split('"')[1];
  //seçilen dosyayı setler
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    const uploadTask = storage.ref(`images/${nameUser} -> ${idUser}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //dosyanın yüklenme durumu için
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      async () => {
        storage
          .ref("images")
          .child(`${nameUser} -> ${idUser}`)
          .getDownloadURL()
          .then((imageUrl) => {
            setUrl(imageUrl);
            console.log(imageUrl.toString());

            localStorage.setItem("imageUrl", imageUrl.toString());

            let item = { imageUrl };
            console.log("new url: ", item);

            let result = fetch(`${BASE_URL}/users/${idUser}/updateUrl`, {
              method: "PUT",
              body: JSON.stringify(item),
              headers: {
                "Content-Type": "application/json",
              },
            })
            setTimeout(()=>{
              (window.location.reload());
            }, 1000);
         
          });
      }
    );
  };
  useEffect(() => {
    (async () => {
      
      const resImg = await fetch(`${BASE_URL}/users/${idUser}`);
      const jsoImg = await resImg.json();
      setdataImage(jsoImg.data.imageUrl);
      setName(jsoImg.data.name)
    })();
  }, []);

  var imageChange =
    img == null || localStorage.getItem("imageUrl") == null
      ? "images/nullpp.jpeg"
      : img;

  return (
    <div>
      <IconContext.Provider value={{ color: "#58c4bc" }}>
        <br />
        <img src={imageChange} />
        <div className="progrs">
          <progress value={progress} max={100} />
          <span className="progressbar">{progress}%</span>
        </div>

        <div className="kapsayici">
          <input type="file" id="file" onChange={handleChange} hidden />
          <label htmlFor="file" id="selector">
            <MdPhotoLibrary className="smallicon" />{" "}
            <span className="imgSpan">{t("Account.select")}</span>
          </label>
          <label className="buttons" onClick={handleUpload} align="center">
            <RiFolderUploadFill className="smallicon" />{" "}
            <span className="imgSpan">{t("Account.upload")}</span>
          </label>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default ImageUpload;
