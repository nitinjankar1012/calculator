import React, { useState } from 'react';

function Nj(){
    let [calVal]= useState(0);
    const [result,setResult]=useState();
    const [n1,setN1]=useState();
    const [n2,setN2]=useState();

    function onChangeVal(e) {
        console.log(e.target.value);
        if(e.target.value == '+'){
            Add();
        } else if(e.target.value == '-'){
            Sub();
        } else if(e.target.value == '*'){
            Mul();
        } else if(e.target.value == '/'){
            Div();
        }
        
    }
 
    function  Add() {
        calVal= (n1 + n2);
    }
    function  Sub() {
        calVal= (n1 - n2);
    }
    function  Mul() {
        calVal= (n1 * n2);
    }
    function  Div() {
        calVal= (n1 / n2);
    }

    function calcRes(e) {
        setResult(calVal);
    }

    return(<div>

        <label>number 1</label>
        <input className="n1" id="n1" value={n1} onChange={e => setN1(+e.target.value)}/>
        <label>number 2</label>
        <input className="n2" id="n2" value={n2} onChange={e => setN2(+e.target.value)}/>
        <br/>
        <select id="operator" className="operator"
        // onClick={reultHandler}
        onChange={onChangeVal}
           
           >
        <option id="op1" value="+">+</option>
        <option id="op2" value="-">-</option>
        <option id="op3" value="*">*</option>
        <option id="op4" value="/">/</option>
        </select>
        <button onClick={calcRes} className="result">Submit</button>
        

        <input type="text" id="result"/>
        <p>Result is {result}</p>








        </div>
    )
}
export default Nj;