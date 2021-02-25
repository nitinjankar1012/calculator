import React,{useState, useRef} from 'react';
import CalcRes from "./CalcRes";
import './CalcFunc.css';

function CalcFunc(props){
    let [calVal]= useState(0);
    const [slectedValue]= useState(0);
    const [number1, setNumber1]=useState(0);
    const [number2, setNumber2]=useState(0);
    const [result, setResult]=useState();
    const [show, setShow]=useState(false);
    const [select,setSelect]=useState();
    const [number, setNumber]=useState();
    const [seleResult,setseleResult]=useState();
    let [allChange]=useState();
    

    const add = "Addition";
    const sub = "Subtraction";
    const mul = "Multiplication";
    const div = "Division";

    function onChangeVal(e) {
        
        
        console.log(e.target.value);
        if(e.target.value === "Addition is"){
            Add();
        } else if(e.target.value === "Subtraction is"){
            Sub();
        } else if(e.target.value === "Multiplication is"){
            Mul();
        } else if(e.target.value === "Division is"){
            Div();
        }
        
    }

    function  Add() {
        calVal= (number1 + number2);
    }
    function  Sub() {
        calVal= (number1 - number2);
    }
    function  Mul() {
        calVal= (number1 * number2);
    }
    function  Div() {
        calVal= (number1 / number2);
    }
    function showRes(e) {
        setShow(true);
        // setNumber(e.target.value);
    }
    function onChnageClear(){
        setNumber1(0);
        setNumber2(0);
        setResult();
        setShow(false);
        setSelect('');
        setNumber('');
    }
   
    function onChangeResult(e){
        setResult(calVal);
    }
    return(

        <div className="main_div">
            <div className="center_div">
                <h2>Maths Function</h2>

                 <label>First Number : </label>
                    <input className="number1"
                    type="number"   
                    placeholder="0"
                    value={number1} 
                    onChange={e => setNumber1(+e.target.value)}
                    /><br/>
                 <label>Second Number : </label>
                    <input className="number1"
                    type="number" 
                    pattern="[0-9]*"
                    placeholder="0"
                    value={number2} 
                    onChange={e => setNumber2(+e.target.value)}
                    /><br/>

                <div>
                 <label >Choose a Number : </label>
                    <select value={select} className="number" id="number" 
                    onClick={showRes}
                    onChange={onChangeVal}
                    >
                         <option value="default ">Select</option>
                         <option value="Addition is">1</option>
                         <option value="Subtraction is">2</option>
                         <option value="Multiplication is">3</option>
                         <option value="Division is">4</option>
                     </select><br/>
                         <label>1:{add}</label> 
                         <label>2:{sub}</label>
                         <label>3:{mul}</label>
                         <label>4:{div}</label>
                         <div>
                    </div>
                    <div>
                       
                    {show?<button className="btn_sub" onClick={onChangeResult}>Submit</button>:null}
                    <button className="btn_res"  onClick={onChnageClear}>Reset</button>
                </div>
            </div>
           <div className="result">
           Result : {number} {result}
             </div>
               </div>
     </div>
    )
}
export default CalcFunc;