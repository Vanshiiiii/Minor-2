import React, { useState, useEffect } from "react";
import firebase from "firebase";
import "./article.css"

export default function AddArticle(props) {
  const db = firebase.firestore();
  const storage = firebase.storage();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    createdAt:new Date()
  });

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };
  const handlePublish = () => {
    if (!formData.title || !formData.description || !formData.image) {
      alert("Please fill all the fields");
      return;
    }
   const uploadTask=storage.ref("Articles/"+formData.image.name).put(formData.image);

    
    uploadTask.on(
      "state_changed",

      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      ()=>{
        storage
        .ref("Articles")
        .child(formData.image.name)
        .getDownloadURL()
        .then((imageUrl)=>{
            db.collection("Articles").add({
              title: formData.title,
              description: formData.description,
              imageUrl: imageUrl,
              createdAt:formData.createdAt
            }).then((docRef)=>{
                db.collection("Articles").doc(docRef.id)
                .update({Id:docRef.id})
                .then(()=>{
                    setFormData({
                      title: "",
                      description: "",
                      image: "",
                    });
                    props.fetchData();
                    setProgress(0);
                });
            });
        });
      }
    );
  };

  return (
    <div className="form" >
      <h1 className="font1"> Create Article</h1>
      <label className="font2"> TITLE</label>
      <input
        type="text"
        name="title"
        className="form-control"
        value={formData.title}
        onChange={(e) => handleChange(e)}
      />

      <label className="font2">DESCRIPTION</label>
      <textarea
        name="description"
        className="form-control"
        value={formData.description}
        onChange={(e) => handleChange(e)}
      />

      <label className="font2">IMAGE</label>
      <input
        type="file"
        name="image"
        accept="image/*"
        className="form-control"
        onChange={(e) => handleImageChange(e)}
      />
      {progress === 0 ? null : (
        <div className="progress">
          <div
            className="progress-bar progress-bar striped mt-2"
            style={{ width: `$(progress)%` }}
          >
            {`uploading image ${progress}%`}
          </div>
        </div>
      )}

      <button
        className="form-control_btn"
        onClick={handlePublish}
        

      >
        {" "}
        PUBLISH
      </button>
    </div>
  );
}
