//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
//import img from '../public/img';
import html2canvas from 'html2canvas';

function App() {
  const [linea1,setLinea1]=useState('')
  const [linea2,setLinea2]=useState('')
  const [imagen,setImagen]=useState('')
 

  const onChangeLinea1 = function(evento){

  setLinea1(evento.target.value)
                    
  }

  const onChangeLinea2 = function(evento){

    
    setLinea2(evento.target.value)                  
    }
    const onChangeImagen= function (evento){

      setImagen (evento.target.value)
    }
    
    const onClickExportar = function(evento){
       html2canvas(document.querySelector("#memes")).then(canvas => {
        var image =canvas.toDataURL("img/png");
        var link =document.createElement('a');
        link.download ='memes.png';
        link.href =image;
        link.click();
        
    });
    }
  return (
    <div className="App">
    
      <select onChange={onChangeImagen}>
        <option value="fire">fire</option>
        <option value="futurama">futurama</option>
        <option value="history">history</option>
        <option value="matrix">matrix</option>
        <option value="philosoraptor">philosoraptor</option>
        <option value="smart">smart</option>
      </select>
      <br />
      <input onChange={onChangeLinea1} type="text" placeholder='linea 1' />
      <br />
      <input onChange={onChangeLinea2} type="text" placeholder='linea 2' />
      <br />
      <button onClick={onClickExportar}>Exportar</button>
      
      <div className='memes' id='memes'>
      <span>{linea1}</span>
      <span>{linea2}</span>
      
      <img src={"/img/" + imagen + ".jpg"}alt=' img'/>
      </div>
 </div>
  );
}

export default App;
