import React from 'react'
import { saveAs } from "file-saver";
import CVFile from '../../assets/files/Facundo_Marco_Bacigalupo_CV.pdf';
import "./buttonDownload.css"

const ButtonDownload = () =>{
  const dowload = () =>{
      fetch(CVFile)
      .then((response) => response.blob())
      .then(blob =>{
        saveAs(blob, 'Facundo_Marco_Bacigalupo_CV.pdf');
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