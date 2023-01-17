import React, { useEffect } from "react"
import {useState,useRef} from "react"
import { adjustColWidth } from "../../store/sizeSlice"
import { useDispatch } from "react-redux"
import "../Cell/Cell.css"
import "../Dropdown/Dropdown.css"
import Dropdown from "../Dropdown/Dropdown"
import {CSSTransition} from "react-transition-group"

//a single tabs
const Tab = (props)=>{
    
    const [name,setName] = useState("name")
    const [width,setWidth] = useState(5);
    const [drag,setDrag] = useState({
        resizing:false,
        clientX:0
    })
    const [showDropdown,setShowDropdown] = useState(false);
    const dropDownRef = useRef(null)

    useEffect(()=>{
        console.log("showDropDown is ",showDropdown)
    },[showDropdown])

    useEffect(()=>{
        //dispatch redux store action
        dispatch({type:"size/adjustColWidth",payload:{col:props.col,width:width}})


    },[width])

    useEffect(()=>{
        if(drag.resizing===true){
            console.log("listener added")
            document.addEventListener("mousemove",resize);
            document.addEventListener("mouseup",leaveResizeMode);
    
        }
        return ()=>{
            document.removeEventListener("mousemove",resize);
            document.removeEventListener("mouseup",leaveResizeMode);
   
        }
    },[drag])

    const dispatch = useDispatch()



    function enterResizeMode(e){
        
        // console.log("resize is true")
        setDrag({resizing:true,clientX:e.clientX})


    }
    function leaveResizeMode(e){
        // console.log("resize is false")
        setDrag({...drag,resizing:false})

    }

    //resize handler
    function resize(e){
        //determine the distance between mouse and handle
        const {resizing,clientX} = drag;
        
        // console.log(resizing);
        if(resizing){
            // console.log(drag,width);
            //get offset 
            let offset = (e.clientX - clientX)/7.5;
            // console.log(width+offset)
            //apply this offset to the cell
            //1 px is 1/16 rem, so the offset would be offset*(1/16) rem
            if(width+offset>=5){
                setWidth(width+offset)
                setDrag({...drag,clientX:e.clientX})
            }
            // console.log("resizing")
        }
    }

    function toggleDropdown(){
            console.log("toggled")
            setShowDropdown(!showDropdown);


    }
    
    //show dropdown
    function GetDropdown(){
        return showDropdown ? <Dropdown/> :null
    }

    // console.log("Tab is rendered");


    return    <div className="tab-container">
    <div className="basicCell tab" onClick={toggleDropdown} style={{width:String(width)+"rem"}}>{name}
    </div>
 
        <div className="handle"  onMouseDown={enterResizeMode}></div>
        <CSSTransition 
        in={showDropdown} 
        classNames="Dropdown"
        timeout={500}
        
        unmountOnExit
         >
            <Dropdown/>

        </CSSTransition>
        

    </div>
    
}

const memoizedTab = React.memo(Tab);
export default memoizedTab;