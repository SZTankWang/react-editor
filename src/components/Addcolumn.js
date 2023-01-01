import {useDispatch} from "react-redux";
import {addCol} from "../store/sizeSlice";

import {IconPlus} from "@arco-design/web-react/icon";
import "./icon.css";


const Addcolumn = ()=>{
    const dispatch = useDispatch();
    return <div className="icon-container icon-col" onClick={()=>dispatch(addCol())}>
        <IconPlus style={{fontSize:16}}/>    

            </div>

}

export default Addcolumn;
