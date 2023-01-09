import { debounce } from "../utility/utility";
import "./row.css";
import MemoizedCell from "./Cell";
import React, { useState } from "react";
import { nanoid } from 'nanoid'
import { useSelector } from "react-redux";
import {selectColIds} from "../store/sizeSlice";

const Row = (props)=> {
    //maintain a count of cells through redux
    // const [cell,addCell] = useState(2);
    const cells = useSelector(selectColIds);
    

    return <div className="row">
        {cells.map(x=><MemoizedCell key={x} col={x}/>)}
        
     </div>

}

function rowNotChanged(){
    return true;
}
const MemoizedRow = React.memo(Row,rowNotChanged);
export default MemoizedRow;




