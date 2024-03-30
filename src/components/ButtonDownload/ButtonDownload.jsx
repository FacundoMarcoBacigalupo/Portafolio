import React from 'react'
import { saveAs } from "file-saver";
import CVFile from '../../assets/files/CV - Facundo Marco Bacigalupo.pdf';
import "./buttonDownload.css"


const ButtonDownload = () =>{
  const dowload = () =>{
      fetch(CVFile)
      .then((response) => response.blob())
      .then(blob =>{
        saveAs(blob, 'CV - Facundo Marco Bacigalupo.pdf');
      })
  }


  return (
    <div onClick={() => dowload()}>
      <span id='styleButton2'>
        <span id="styleB"> </span>
      </span>
    </div>
  )
}


export default ButtonDownload