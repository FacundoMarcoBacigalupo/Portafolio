import React from 'react'
import { saveAs } from "file-saver";
import CVFile from '../../assets/files/CV-Facundo-Marco-Bacigalupo-Programador.pdf';
import "./buttonDownload.css"



const ButtonDownload = () =>{
  const dowload = () =>{
      fetch(CVFile)
      .then((response) => response.blob())
      .then(blob =>{
        saveAs(blob, 'CV-Facundo-Marco-Bacigalupo-Programador.pdf');
      })
  }


  return (
    <div onClick={() => dowload()} className="box-1">
      <div className="btn btn-one">
        <span>Descargar CV</span>
      </div>
    </div>
  )
}


export default ButtonDownload