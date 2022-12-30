import { useState,useEffect } from "react";

import {Input} from "@arco-design/web-react";
import { debounce } from "../utility/utility";
import "./row.css";

export default function Row(props) {

    // const [input,setInput] = useState(true);
    // const [content,setContent] = useState("");
    // useEffect(()=>{
    //     console.log("row",Input);

    // })
    // // const [prev,setPrev] = useState("");

    // function showContent(e){
    //     //update content
    //     console.log(e.target.value);
    //     setContent(e.target.value);
    //     setInput(false);


    // }

    // function getInputVal(val,e){
    //     // console.log(setContent);


    // }



    // function Showinput(){
    //     if(input){

    //         return ;
    //     }
    //     else{
    //         return <span onClick={()=>setInput(true)}>{content}</span>
    //     }
    // }

    // return <div className="row">
    //     {/* <Showinput/> */}
    //     <Input style={{ width: 350 }} defaultValue="hello"/>
    // </div>
    return <Input style={{ width: 350 }} defaultValue="hello"/>;


}


