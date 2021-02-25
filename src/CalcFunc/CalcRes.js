import React from 'react';
import CalcFunc from './CalcFunc';

function CalcRes(props){
    return(
        <div className="main_result">
            Result : {props.result}
        </div>
    )
}
export default CalcRes;