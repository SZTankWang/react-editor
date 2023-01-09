
import { useDispatch } from "react-redux";
import { addToRowIds } from "../store/sizeSlice";
import {IconPlus} from "@arco-design/web-react/icon";
import "./icon.css";

const Addrow = ()=>{
    const dispatch = useDispatch();
    return <div className="icon-container icon-row" onClick={()=>{dispatch(addToRowIds())}}>
    <IconPlus style={{fontSize:16}}/>    

        </div>

}

export default Addrow;