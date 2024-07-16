import React from "react";

function Save() {
  const save = document.getElementById("save");
  var input1 = document.getElementById("user-input1").value
  var input2 = document.getElementById("user-input2").value
  save.addEventListener("click", function () {
    document.getElementById("list").innerHTML = input1 + " " + "by" + " " + input2
  })
}

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
      <h2>Movie Title: <input id="user-input1"></input> Directed by: <input id="user-input2"></input><br></br><button onClick={Save} type="button" id="save">save</button></h2>
      <h5 id="list"></h5>
      <h3>Album List:</h3>
      <h2>Album Title: <input></input> Created by: <input></input><br></br><button type="button" id="save">save</button></h2>
      <h3>Book List:</h3>
      <h2>Book Title: <input></input> Written by: <input></input><br></br><button type="button" id="save">save</button></h2>
    </article>
  );
}

export default MainPage;