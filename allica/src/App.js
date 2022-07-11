import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CharList from "./CharList/CharList";
import CharDetails from './CharDetails/CharDetails';
import FavoritesView from './FavoritesView/FavoritesView';
import { connect } from "react-redux";
import './App.css';

function App(props) {
  
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<CharList/>}/>
      <Route path="/favoritesView" element={<FavoritesView data={props.favList}/>}/>
       {props.rowClick === true &&
      <Route path="/charDetails" element={<CharDetails data={props.data} favList={props.favList}/>}/>
}
    </Routes>
</BrowserRouter>
    </div>
  );
}
const mapStateToProps = (state) => ({
  data: state.char.charData,
  rowClick: state.char.rowClicked,
  favList: state.char.favList
});

export default connect(mapStateToProps)(App);
