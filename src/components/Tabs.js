import { useSelector } from "react-redux";
import {selectColIds} from "../store/sizeSlice";
import Tab from "./Tab";

const Tabs = ()=>{
    //container for tabs
    //listen to addCol action
    const cols = useSelector(selectColIds)

    return <div className="row">
        {cols.map(x=> <Tab key={x} col={x}/>)}
    </div>
}

export default Tabs;