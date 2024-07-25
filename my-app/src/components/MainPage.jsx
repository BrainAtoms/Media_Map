import React from "react";

function SaveMovie() {
    const save = document.getElementById("save-movie");
    const movieInput1 = document.getElementById("movie-input1").value
    const movieInput2 = document.getElementById("movie-input2").value
    save.addEventListener("click", function () {
      document.getElementById("movie-list").innerHTML = movieInput1 + " " + "by" + " " + movieInput2
    })
  }

  function SaveAlbum() {
    const save = document.getElementById("save-album");
    const albumInput1 = document.getElementById("album-input1").value
    const albumInput2 = document.getElementById("album-input2").value
    save.addEventListener("click", function () {
      document.getElementById("album-list").innerHTML = albumInput1 + " " + "by" + " " + albumInput2
    })
  }

  function SaveBook() {
    const save = document.getElementById("save-book");
    const bookInput1 = document.getElementById("book-input1").value
    const bookInput2 = document.getElementById("book-input2").value
    save.addEventListener("click", function () {
      document.getElementById("book-list").innerHTML = bookInput1 + " " + "by" + " " + bookInput2
    })
  }

function MainPage() {
    return (
      <article className="article">
        <h2 className="titles" id="Main Page">
          Welcome to ME-dia Map!
        </h2>
        <p className="content">
          Media Map allows you to design a list of which Movies, Albums and Books you would like to one day own or experience. <br></br>
          You can check off the ones on your list that you have experienced to be added to your personal consumer archive.
        </p>
        <h3>Movie Wish List Creator:</h3>
        <h2>Movie Title: <input id="movie-input1"></input> Directed by: <input id="movie-input2"></input><br></br><button onClick={SaveMovie} type="button" id="save-movie">save</button></h2>
        <h3>Album Wish List Creator:</h3>
        <h2>Album Title: <input id="album-input1"></input> Created by: <input id="album-input2"></input><br></br><button onClick={SaveAlbum} type="button" id="save-album">save</button></h2>
        <h3>Book Wish List Creator:</h3>
        <h2>Book Title: <input id="book-input1"></input> Written by: <input id="book-input2"></input><br></br><button onClick={SaveBook} type="button" id="save-book">save</button></h2>
        <h3>Movie Wish List</h3>
        <h5 id="movie-list"></h5>
        <h3>Album Wish List</h3>
        <h5 id="album-list"></h5>
        <h3>Book Wish List</h3>
        <h5 id="book-list"></h5>
      </article>
    );
  }
  

export default MainPage;
