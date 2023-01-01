import { debounce } from "../utility/utility";
import "./row.css";
import Cell from "./Cell";
import { useState } from "react";
import { nanoid } from 'nanoid'

export default function Row(props) {
    //maintain a count of cells
    const [cell,addCell] = useState(2);

    function createRow(){
        let arr = [];
        for(let i=0;i<cell;i++){
            let id=nanoid(10);
            arr.push(<Cell key={id} last={i==cell-1}/>)
        }
        return arr;
    }

    return <div className="row">
        {createRow()}
        
     </div>

}


