//this is the dropdown when the user click a column tab
import { useEffect,useState,useRef } from "react"
import "./Dropdown.css"
import { Input } from 'antd';

const Dropdown = (props)=>{
    const [style,setStyle] = useState({})
    const ref = useRef();
    useEffect(()=>{
        console.log("dropdown rendered")
        
        return ()=>{
    
            console.log("dropdown destroyed")
        }
    },[])


    //the position of this dropdown is going to be determined by its parent
    return <div className={"dropdown-wrapper "+(props.visible?"fade-in":"")} >

        <div className="dropdown-item">
            
        <span>colName</span>
        <Input 
        ref = {ref}
        defaultValue={props.displayName} 
        onPressEnter={()=>props.editName(ref.current.input.value)}
        />
        </div> 
        
    </div>

}

export default Dropdown;