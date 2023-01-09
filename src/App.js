import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs';
import MemoizedRow from './components/Row';
import Addcolumn from './components/Addcolumn';
import Addrow from './components/Addrow';
import {useDispatch, useSelector} from "react-redux";
import {selectRowIds,addToRowIds, addToColIds} from "./store/sizeSlice";
import { useEffect } from 'react';
import { nanoid } from 'nanoid'

function App() {
  // const col = useSelector(selectCol);
  // const row = useSelector(selectRow);
  const rowIds = useSelector(selectRowIds);
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log("App render")
    //add the first basic column
    dispatch(addToRowIds())
    dispatch(addToColIds())
  },[]);

  return (
      <div className='container'>
        <Tabs/>
        {rowIds.map(x=><MemoizedRow key={x}/>)}
        <Addcolumn/>
        <Addrow/>
      </div>
    );
}

export default App;
