import React from "react";
import "./style.css";
import {useState,useEffect} from "react";

export default function Faces(){
	const [con , setCon] = useState();
	const [pic , setPic] = useState([100]);
	const [liste , setListe] = useState(["./photos/1.webp",
    "./photos/2.webp",
    "./photos/3.webp",
    "./photos/4.webp",
    "./photos/5.webp",
    "./photos/6.webp",
    "./photos/7.webp",
    "./photos/8.webp",
    "./photos/9.webp",
    "./photos/10.webp",
    "./photos/11.webp",
    "./photos/12.webp",
    "./photos/13.webp",
    "./photos/14.webp",
    "./photos/15.webp",
    "./photos/16.webp",
    "./photos/17.webp",
    "./photos/18.webp",
    "./photos/19.webp"]);
	let i = Math.floor(Math.random() * liste.length);
	let b = Math.floor(Math.random() * liste.length);
	useEffect(()=>setPic([...pic, i,b]),[]) ;
const [fitem,setFitem]=useState(i);
const [sitem,setSitem]=useState(b);

function fp() {
  let i = Math.floor(Math.random() * liste.length);
   while (pic.includes(i)){
	   i = Math.floor(Math.random() * liste.length);
   }
    setPic([...pic, i]);
    setSitem(i);
  if (pic.length == 18) {
    setCon(fitem);
  }
}


function sp() {
    let i = Math.floor(Math.random() * liste.length);
   while (pic.includes(i)){
	   i = Math.floor(Math.random() * liste.length);
   }

    setPic([...pic, i]);
    setFitem(i);
  

  if (pic.length == 19) {
    setCon(sitem);
  }

}

	
	return(
	<>
	<div className="container"> <h1>Face match </h1>
	<div className="flex">
	{con?<><img src={liste[con]} className="imageStyle"/> <b>won</b></>:<>
	<img src={liste[fitem]} className="imageStyle" onClick={()=>fp()}/>
	<b>Or</b>
    <img src={liste[sitem]} className="imageStyle" onClick={()=>sp()}/> </>} 
	</div>
	</div>
	</>
	)
}