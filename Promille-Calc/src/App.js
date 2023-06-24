import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import React from 'react';


function Main(props) {

  const [inputs, setInputs] = useState({});
  const [value1, setValue1] = useState("0.25");
  const [value2, setValue2] = useState("0.125");
  const [value3, setValue3] = useState("0.25");
  const [value4, setValue4] = useState("0.02");
  const [value5, setValue5] = useState("0.125");
  const [value6, setValue6] = useState("0.02");
  const [sex, setValueSex] = useState("0.8");

  function handleChange2(event){
    setValue1(event.target.value)
  }

function handleChange3(event){
  setValue2(event.target.value)
}

function handleChange4(event){
  setValue3(event.target.value)
}

function handleChange5(event){
  setValue4(event.target.value)
}

function handleChange6(event){
  setValue5(event.target.value)
}
function handleChange7(event){
  setValue6(event.target.value)
}

function handleChangeSex(event){
  setValueSex(parseFloat(event.target.value))
}

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
   }

   const handleChange8 = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
   }

  const handleChange1 = (event) => {
    if(isNaN(inputs.bier)){
      inputs.bier = 0;
    }
    if(isNaN(inputs.wein)){
      inputs.wein = 0;
    }
    if(isNaN(inputs.sekt)){
      inputs.sekt = 0;
    }
    if(isNaN(inputs.likör)){
      inputs.likör = 0;
    }
    if(isNaN(inputs.cocktail)){
      inputs.cocktail = 0;
    }
    if(isNaN(inputs.schnaps)){
      inputs.schnaps = 0;
    }

    if(isNaN(inputs.bier_p)){
      inputs.bier_p = 5;
    }
    if(isNaN(inputs.wein_p)){
      inputs.wein_p = 11;
    }
    if(isNaN(inputs.sekt_p)){
      inputs.sekt_p = 10;
    }
    if(isNaN(inputs.likör_p)){
      inputs.likör_p = 18;
    }
    if(isNaN(inputs.cocktail_p)){
      inputs.cocktail_p = 30;
    }
    if(isNaN(inputs.schnaps_p)){
      inputs.schnaps_p = 40;
    }
    

    const g_bier = parseInt(inputs.bier)*parseFloat(value1) * (inputs.bier_p/100) * sex;
    const g_wein = parseInt(inputs.wein)*parseFloat(value2) * (inputs.wein_p/100) * sex;
    const g_sekt = parseInt(inputs.sekt)*parseFloat(value3) * (inputs.sekt_p/100) * sex;
    const g_likör = parseInt(inputs.likör)*parseFloat(value4) * (inputs.likör_p/100) * sex;
    const g_cocktail = parseInt(inputs.cocktail)*parseFloat(value5) * (inputs.cocktail_p/100) * sex;
    const g_schnaps = parseInt(inputs.schnaps)*parseFloat(value6) * (inputs.schnaps_p/100) * sex;

    const g_ges = (g_bier + g_wein + g_sekt + g_likör + g_cocktail + g_schnaps) * 1000 ;
    console.log(g_ges);
    props.changerg(g_ges);
  }


  
  return (
    <div className="lmdaa">
    <div className="field1">

    <label>Bier: &nbsp; &nbsp; &nbsp;&nbsp;
    <input
      type="number"
      name="bier"
      value={inputs.bier}
      onChange={handleChange}
    />
    </label>

    <label for="bier_amount">Amount['Liters']</label>
    <select value={value1} onChange={handleChange2}>
    <option value="0.25">0.25L</option>
    <option value="0.33">0.33L</option>
    <option value="0.5">0.5L</option>
    <option value="0.75">0.75L</option>
    </select>

    <label>Alkohol in %:
    </label>
    <input 
    type="number" 
    placeholder="5" 
    name="bier_p"
    value={inputs.bier_p}
    onChange={handleChange}/>
    </div>

    <div className="field2">
    <label>Wein: &nbsp; &nbsp;&nbsp;
    <input
      type="number"
      name="wein"
      value={inputs.wein}
      onChange={handleChange}
    />
    </label>

    <label for="bier_amount">Amount['Liters']</label>
    <select value={value2} onChange={handleChange3}>
    <option value="0.125">0.125L</option>
    <option value="0.25">0.25L</option>
    </select>

    <label>Alkohol in %:
    </label>
    <input 
    type="number" 
    placeholder="11" 
    name="wein_p"
    value={inputs.wein_p}
    onChange={handleChange8}/>
    
    </div>

    <div className="field3">
    <label>Sekt: &nbsp; &nbsp;&nbsp; 
    <input
      type="number"
      name="sekt"
      value={inputs.sekt}
      onChange={handleChange}
    />
    </label>

    <label for="bier_amount">Amount['Liters']</label>
    <select value={value3} onChange={handleChange4}>
    <option value="0.25">0.25L</option>
    <option value="0.33">0.33L</option>
    <option value="0.5">0.5L</option>
    <option value="0.75">0.75L</option>
    </select>

    <label>Alkohol in %:
    </label>
    <input 
    type="number" 
    placeholder="10" 
    name="sekt_p"
    value={inputs.sekt_p}
    onChange={handleChange8}/>

    </div>

    <div className="field4">
    <label>Likör: &nbsp; &nbsp;&nbsp;
    <input
      type="number"
      name="likör"
      value={inputs.likör}
      onChange={handleChange}
    />
    </label>

    <label for="bier_amount">Amount['cl']</label>
    <select value={value4} onChange={handleChange5}>
    <option value="0.02">2cl</option>
    <option value="0.04">4cl</option>
    </select>

    <label>Alkohol in %:
    </label>
    <input 
    type="number" 
    placeholder="18" 
    name="likör_p"
    value={inputs.likör_p}
    onChange={handleChange8}/>

    </div>

    <div className="field5">
    <label>Cocktail: &nbsp; &nbsp;&nbsp;
    <input
      type="number"
      name="cocktail"
      value={inputs.cocktail}
      onChange={handleChange}
    />
    </label>

    <label for="bier_amount">Amount['Liters']</label>
    <select value={value5} onChange={handleChange6}>
    <option value="0.125">0.125l</option>
    <option value="0.25">0.25l</option>
    <option value="0.33">0.33l</option>
    </select>

    <label>Alkohol in %:
    </label>
    <input 
    type="number" 
    placeholder="30" 
    name="cocktail_p"
    value={inputs.cocktail_p}
    onChange={handleChange8}/>

    </div>


    <div className="field6">
    <label>Schnaps: &nbsp; &nbsp;&nbsp;
    <input
      type="number"
      name="schnaps"
      value={inputs.schnaps}
      onChange={handleChange}
    />
    </label>

    <label for="bier_amount">Amount['cl']</label>
    <select value={value6} onChange={handleChange7}>
    <option value="0.02">2cl</option>
    <option value="0.04">4cl</option>
    </select>

    <label>Alkohol in %:
    </label>
    <input 
    type="number" 
    placeholder="40" 
    name="schnaps_p"
    value={inputs.schnaps_p}
    onChange={handleChange8}/>

    </div>

    

    <br></br>
    <br></br>
    <div>

      <button onClick={handleChange1} className="button1">Calculate</button>
      <div>
      <select className="sex" value={sex} onChange={handleChangeSex}>
      <option value="0.8">Male</option>
      <option value="0.6">Female</option>
      </select>
      </div>

    </div>

 </div>
  );
}

function Table(props) {
  const values = [];
  const values2 = [];
  const values3 = [];


  for (let i = 40; i <= 55; i++) {
       values[i] = {id:i+1, U:i, I:(props.g/(i*0.7)).toFixed(3)};
       values2[i] = {id2:i+14, U:i+14, I:(props.g/(i*0.7)).toFixed(3)};
       values3[i] = {id3:i+30, U:i+30, I:(props.g/(i*0.7)).toFixed(3)};
  }
  const table = {};
  const table_style = {color : 'black', border: '1px solid', };

  return (
    <div className="tables">
      <table>
            <tbody>
            <tr style = {table_style}>
                <th style = {table_style}>Weight[kg]</th>
                <th style = {table_style}>Promille[%]</th>
            </tr>
            {values.map(({id, U, I}) => (
                <tr key={id} style = {table_style }>
                    <td style = {table_style}>{U}</td>
                    <td style = {table_style}>{I}</td>
                </tr>
            ))}
            </tbody>
        </table>

        <table>
            <tbody>
            <tr style = {table_style}>
                <th style = {table_style}>Weight[kg]</th>
                <th style = {table_style}>Promille[%]</th>
            </tr>
            {values2.map(({id2, U, I}) => (
                <tr key={id2} style = {table_style }>
                    <td style = {table_style}>{U}</td>
                    <td style = {table_style}>{I}</td>
                </tr>
            ))}
            </tbody>
        </table>

        <table>
            <tbody>
            <tr style = {table_style}>
                <th style = {table_style}>Weight[kg]</th>
                <th style = {table_style}>Promille[%]</th>
            </tr>
            {values3.map(({id3, U, I}) => (
                <tr key={id3} style = {table_style }>
                    <td style = {table_style}>{U}</td>
                    <td style = {table_style}>{I}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  );
}

function App() {

  const [alcg, setalcg] = useState();

return (
 <div className="App">

     <Main changerg={setalcg}/>
     <Table g={alcg}/>

 </div>
);
}

export default App;
