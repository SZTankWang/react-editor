import React,{ useState,useEffect } from "react";
import { useSelector } from "react-redux";
import {selectColWidth} from "../store/sizeSlice"
import {Input} from "@arco-design/web-react";
import "./Cell.css";

const Cell = (props)=>{
    const [content,setContent] = useState("");
    const [width,setWidth] = useState(5);
    //subscibe to column width store 
    const colWidth = useSelector(selectColWidth);


    useEffect(()=>console.log("cell is re-rendered"));
    useEffect(()=>{
        console.log("col adjusting",colWidth.width)
        if(colWidth.col == props.col){
            setWidth(colWidth.width);
        }
    },[colWidth])




    return  <div className="cell">
                <div contentEditable className="cellEditor basicCell" style={{width:String(width)+"rem"}}></div>
            </div>  
    
}

function cellChanged(prevProp,newProp){
    console.log(newProp.last,prevProp.last);
    return prevProp.last === newProp.last;
}

const MemoizedCell = React.memo(Cell);
export default MemoizedCell;