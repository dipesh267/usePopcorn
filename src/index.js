import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./AppV2";
import StarRating from "./StarRating";
//import TextExtender from "./TextExtender";

function Test() {
  /*
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="purple" onSetRating={setMovieRating} />
      <p>this movie was rated {movieRating} Stars</p>
    </div>
  );
*/
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*
    <StarRating maxRating={10} defaultRating={4} />
    <StarRating
      size={"40"}
      color="green"
      messages={["bad", "not bad", "ok", "good", "great"]}
    />
    {/*
    <Test />
<p>text extender stuff</p>*/}

    <App />
  </React.StrictMode>
);
