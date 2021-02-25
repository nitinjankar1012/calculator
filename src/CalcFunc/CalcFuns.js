import React, { useState } from 'react';



function CalcFuns(e){
    
   const [number1,setNumber1]=useState();
   const [number2,setNumber2]=useState();
   const [number,setNumber]=useState();
  const [result,setResult]=useState();

  const onNum =(e)=>{
    if(number1>-1){
        setNumber1(number1)
        }else{
            alert("Zero Limit Reached");
        }


  }

  function calc()
            {
                var n1 = parseFloat(document.getElementById('number1').value);
                var n2 = parseFloat(document.getElementById('number2').value);
                
                var oper = document.getElementById('operators').value;
                
                if(oper === 'addition is')
                {
                    document.getElementById('result').value = n1+n2;
                }
                
                if(oper === 'subtraction is')
                {
                    document.getElementById('result').value = n1-n2;
                }
                
                if(oper === 'multiplication is')
                {
                    document.getElementById('result').value = n1/n2;
                }
                
                if(oper === 'division is')
                {
                    document.getElementById('result').value = n1*n2;
                }
            }
  

    return(<div>
         <label>First Number : </label>
                    <input className="number1"
                    id="number1"
                  
                    type="number"   
                    placeholder="0"
                    onClick={onNum}
                    value={number1} 
                    
                    onChange={e => setNumber1(+e.target.value)}
                    /><br/>
                 <label>Second Number : </label>
                    <input className="number2"
                    id="number2"
                    type="number" 
                    placeholder="0"
                    value={number2} 
                    onChange={e => setNumber2(+e.target.value)}
                    /><br/>

                            <select
                                className="number" id="operators"
                                onChange={(e) => {
                                const slectedValue = e.target.value;
                                setNumber(slectedValue);
                            //     function onChangeResult(){
                            //     if(slectedValue === 'addition is'){
                            //         setResult(number1+number2)
                            //     }
                            //     if(slectedValue === 'subtraction is'){
                            //         setResult(number1-number2)
                            //     }
                            //     if(slectedValue === 'multiplication is'){
                            //         setResult(number1*number2)
                            //     }
                            //     if(slectedValue === 'division is'){
                            //         setResult(number1/number2)
                            //     }
                               
                            //  }     
                            }}>

                                <option  value="default">Select</option>
                                <option id="addition" value="addition is">1</option>
                                <option id="subtraction" value="subtraction is">2</option>
                                <option id="multiplication" value="multiplication is">3</option>
                                <option id="division"value="division is">4</option>
                            </select>
                            <button onClick={calc}  className="btn_sub">Submit</button>
                            {/* <div id="result">{result}</div> */}
                            {number} <input type="text" id="result"/>

                             
        </div>  )
}
export default CalcFuns;

