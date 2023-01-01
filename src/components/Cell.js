import { useState,useEffect } from "react";
import {Input} from "@arco-design/web-react";
import "./Cell.css";

const Cell = (props)=>{
    const [content,setContent] = useState("");


    function showContent(e){
        //update content
        console.log(e.target.value);
        setContent(e.target.value);



    }

    return  <div className={"cell"}>
        <Input className={"cell-content "+(props.last?" last":"")} defaultValue="hello" onPressEnter={showContent} />
            </div>  
    
}

export default Cell;