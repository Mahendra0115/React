import React, { useState } from "react";
// import React {useState} from 'react'

// using huck

export default function Textform(props) {


  
  // converting text in lower case
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };


  // converting text in lower case
  const handleLoClick = () => {
    //  adding tex
    let newText1 = text.toLowerCase();
    setText(newText1);
  };

//  Copy text Fun 
  const handleCopyText = () => {
    //  adding tex
    let text = document.getElementById("myBox");
    text.select()
    navigator.clipboard.writeText(text.value);
    
  };

  // Remove Space 
    const RemoveSpace = ()=>{
     let newText = text.split(/[ ]+/);
     setText(newText.join(" "));

   }




  const handleOnchange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  
  const [text, setText] = useState("enter text    hello   hiii  ");
  // setText(new text);
  
  return (
    <div>
      <div className="container">
        <h1> {props.headding}</h1>
        <div className="mb-3">
          {/* <label for="textBox" class="form-label">Example textarea</label> */}
          <textarea
            className="form-control"
            value={text}
            onClick={handleOnchange}
            id="myBox"
            rows="8"
          ></textarea>

          {/* Upper case button  */}
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>
            UpperCase
          </button>
          {/* lowerCase button */}
          <button className="btn btn-primary mx-1" onClick={handleLoClick}>
            LowerCase
          </button>
       

             {/* Copy text Button */}

          <button className="btn btn-primary mx-1" onClick={handleCopyText}>
            CopyText
          </button>

              {/* RemoveSpace */}

              <button className="btn btn-primary mx-1" onClick={ RemoveSpace}>
                  RemoveSpace
                  </button>


        </div>
      </div>

      <div className="container my-3">
        <h1>your letest summary</h1>
        {/* useing to  count the words  */}

        <p>
          {text.split(" ").length} words and {text.length} character
        </p>

        {/* using to read time  */}
        <p>{0.008 * text.split(" ").length} minut read</p>

        <h2>Preview</h2>
        <p>{text}</p>


      </div>
    </div>
  );
}











