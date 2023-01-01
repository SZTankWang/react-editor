import logo from './logo.svg';
import './App.css';
import Row from './components/Row';
import Addcolumn from './components/Addcolumn';
import Addrow from './components/Addrow';
import {useSelector} from "react-redux";
import {selectCol,selectRow} from "./store/sizeSlice";

function App() {
  const col = useSelector(selectCol);
  const row = useSelector(selectRow);
  return (
      <div className='container'>
        <Row/>
        <Addcolumn/>
        <Addrow/>
      </div>
    );
}

export default App;
