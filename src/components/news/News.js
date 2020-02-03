import React, { useContext } from "react";
import { NewsContext } from "./NewsProvider";
import "./News.css"

export default ({ news, props, friendStatus }) => {
  const { deleteNews } = useContext(NewsContext);
  let newsSectionClass = 'newsCard'
  let deleteNewsButton = ""
  let editNewsButton = ""
  if (friendStatus === false) {
    deleteNewsButton = <>
      <button className="btn btn-light" onClick={
        () => {
         const confirm = window.confirm("Are you sure you want to delete this?")
          if (confirm=== true ) {
            deleteNews(news);
          }
        }
      }>Delete</button>
       <button className="btn btn-light" onClick={() => {
        props.history.push(`/editNews/${news.id}`)
      }}>Edit</button>
      
    </>
  } 
  if (friendStatus === true) {
    newsSectionClass= "friendsClass"
  }

  return (
    
    <section className={newsSectionClass}>
      <div className="newsInfo">
      <div>Title: {news.title} </div>
      <div className="synopsis">Synopsis: {news.synopsis} </div>
      <a href="{news.url}">{news.url}</a>
      <div>Date: {news.date}</div>
      {deleteNewsButton}
      {editNewsButton}
      </div>
    </section>
  );
};


//italicize font and cornsilk background