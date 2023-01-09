import React, { useEffect } from "react"
import {useState,useRef} from "react"
import { adjustColWidth } from "../store/sizeSlice"
import { useDispatch } from "react-redux"
import "./Cell.css"



//a single tabs
const Tab = (props)=>{
    
    const [name,setName] = useState("name")
    const [width,setWidth] = useState(5);
    const [drag,setDrag] = useState({
        resizing:false,
        clientX:0
    })

    useEffect(()=>{
        //dispatch redux store action
        dispatch({type:"size/adjustColWidth",payload:{col:props.col,width:width}})


    },[width])

    const dispatch = useDispatch()

    // console.log("tab rendering",drag)

    // useEffect(()=>{
    //     Ref.current.addEventListener("mousedown",enterResizeMode)
    //    return ()=>{
    //         Ref.current.removeEventListener("mousedown",enterResizeMode)
    //     }
            
    // },[])

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
        // console.log(width);
        if(resizing){
            // console.log(drag,width);
            //get offset 
            let offset = (e.clientX - clientX)/7.5;
            // console.log(offset>0?"expand":"shrink")
            //apply this offset to the cell
            //1 px is 1/16 rem, so the offset would be offset*(1/16) rem
            if(width+offset>=5){
                setWidth(width+offset)
                setDrag({...drag,clientX:e.clientX})
            }
        }
    }

    // console.log("Tab is rendered");
    return <div className="basicCell tab"  style={{width:String(width)+"rem"}} onMouseMove={resize} onMouseUp={leaveResizeMode}>{name}
    
        <div className="handle"  onMouseDown={enterResizeMode}></div>
    </div>
    
}

const memoizedTab = React.memo(Tab);
export default memoizedTab;