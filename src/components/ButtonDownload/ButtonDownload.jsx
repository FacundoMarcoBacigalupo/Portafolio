import React from 'react'
import { saveAs } from "file-saver";
import CVFile from '../../assets/files/Facundo_Marco_Bacigalupo_CV.pdf';
import "./buttonDownload.css"

const ButtonDownload = ({label}) =>{
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
        <span id="styleB" data-text={label}> </span>
      </span>
    </div>
  )
}

export default ButtonDownload