import React from "react";

function MainPage() {
  return (
    <article className="article">
      <h2 className="titles" id="Main Page">
        Welcome to ME-dia Map!
      </h2>
      <p className="content">
        Media Map allows you to design a list of which Movies, Albums and Books you would like to one day experience. <br></br>
        You can check off the ones on your list that you have experienced to be added to your personal consumer archive.
      </p>
      <h3>Movie List:</h3>
      <h2>Movie Title: <input></input> Directed by: <input></input><button type="button">save</button></h2>
      <h3>Album List:</h3>
      <h2>Album Title: <input></input> Created by: <input></input><button type="button">save</button></h2>
      <h3>Book List:</h3>
      <h2>Book Title: <input></input> Written by: <input></input><button type="button">save</button></h2>
    </article>
  );
}

export default MainPage;