//this is the dropdown when the user click a column tab
import { useEffect,useState } from "react"
import "./Dropdown.css"

const Dropdown = (props)=>{
    const [style,setStyle] = useState({})
    
    useEffect(()=>{
        console.log("dropdown rendered")
        return ()=>{
            console.log("dropdown destroyed")
        }
    },[])

    //the position of this dropdown is going to be determined by its parent
    return <div className="dropdown-wrapper" style={style}>
        I am a dropdown
    </div>

}

export default Dropdown;