import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { Link } from "react-router-dom/dist";
import AddArticle from "./AddArticle";
import "./article.css"
export default function Articles() {
  const db = firebase.firestore();
  const storage = firebase.storage();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData(){
    setArticles([]);
    const documents = [];
    db.collection("Articles")
    .get()
    .then((snapshot) => {
        if (snapshot) {
            snapshot.docs.forEach((doc) => {
            documents.push(doc.data());
        });
      setArticles(documents);
    }
  });
  }

  function handleDelete(id){
    console.log(id);
    db.collection("Articles").doc(id).delete().then(()=>{
        fetchData();
    })
  }
  return (
    <div className="article_main">
      <div className="left_article">
        {articles.length === 0 ? (
          <p>No articles found!</p>
        ) : (
          articles.map(({ Id, title, description, imageUrl, createdAt }) => (
            <div className="article-body" key={Id}>
              <div className="row">
                <div className="col-3">
                  <Link to={`/article/${Id}`}>
                    <img
                      src={imageUrl}
                      alt="title"
                      style={{ height: 180, width: 180 ,borderRadius: "50px", border: "5px"}}
                    />
                  </Link>
                </div>
                <div className="col-9 ps-3">
                  <div className="row">
                    <div className="col-6"></div>
                 
                  </div>
                  <h3 className="heading">{title}</h3>
                  <p>{createdAt.toDate().toDateString()}</p>
                  <h6 className="article_desc">{description}</h6>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="right_article">
            <AddArticle fetchData={fetchData}/>
      </div>
    </div>
  );
}

/** <div className="col-6 d-flex flex-row-reverse">
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(Id)}
                      >
                        Delete
                      </button>
                    </div> */