import {useDispatch} from "react-redux";
import {addToColIds} from "../store/sizeSlice";

import {IconPlus} from "@arco-design/web-react/icon";
import "./icon.css";
import { useEffect } from "react";


const Addcolumn = ()=>{
    useEffect(()=>console.log("col render"),[]);
    const dispatch = useDispatch();
    return <div className="icon-container icon-col" onClick={()=>dispatch(addToColIds())}>
        <IconPlus style={{fontSize:16}}/>    

            </div>

}

export default Addcolumn;
