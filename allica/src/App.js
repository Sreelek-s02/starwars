import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CharList from "./CharList";
import CharDetails from './CharDetails';
import { connect } from "react-redux";
import './App.css';

function App(props) {
  console.log("props", props)
  
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<CharList/>}/>
      {props.rowClick === true &&
      <Route path="/charDetails" element={<CharDetails data={props.data}/>}/>
}
    </Routes>
</BrowserRouter>
    </div>
  );
}
const mapStateToProps = (state) => ({
  data: state.char.charData,
  rowClick: state.char.rowClicked
});

export default connect(mapStateToProps)(App);
