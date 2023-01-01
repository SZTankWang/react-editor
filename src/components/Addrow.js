
import { useDispatch } from "react-redux";
import { addRow } from "../store/sizeSlice";
import {IconPlus} from "@arco-design/web-react/icon";
import "./icon.css";

const Addrow = ()=>{
    const dispatch = useDispatch();
    return <div className="icon-container icon-row" onClick={()=>{dispatch(addRow())}}>
    <IconPlus style={{fontSize:16}}/>    

        </div>

}

export default Addrow;