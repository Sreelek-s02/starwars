import React, {useState, useEffect} from "react";
import axios from "axios";
import {  Navigate  } from 'react-router-dom' 
import DataGrid,  { Paging , SearchPanel, HeaderFilter, FilterRow,Selection, Column, Button} from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.light.css';
import { useDispatch } from 'react-redux';
import { getCharListData, charData, setFavListData } from '../redux/reduxSlice';
import "./Chartlist.css";


const CharList = () => {

    let [resultDetails,setResultDetails] = useState([])
    let [rowClicked, setRowClicked] = useState(false)
    let [goToFav, setGoToFav] = useState(false)
    let [rowData, setRowData] = useState([])
    const dispatch = useDispatch();

    useEffect(()=>{
        getCharacters("https://swapi.dev/api/people");
    },[])

    function getCharacters(path){
        axios.get(path).then(
            (response) => {
                var result = response.data.results;
                setResultDetails(result);    
                dispatch(getCharListData({data: result}))  
            },
            (error) => {
                console.log(error);
            }
        );


    }

    function onSelectionChanged({selectedRowsData}){
    const data = selectedRowsData[0];
        setRowClicked(true)
        setGoToFav(false);
            setRowData(data);
            dispatch(charData({data:selectedRowsData[0]}))
    
    }

    function addToFavorites(e){
        dispatch(setFavListData({data: e.row.data}))
        setGoToFav(false);
    }

    function goToFavories(){
        setGoToFav(true);
    }

    return(
        <div>
            <div ><button className="fav-button" onClick={goToFavories}> Go To Favorites</button>
        
            {goToFav&& 
            <Navigate to="/favoritesView" replace={true} />
            }
            </div>
        <DataGrid
        dataSource={resultDetails}
        showBorders={true}
        onSelectionChanged={onSelectionChanged}
        >               
        <Column dataField="name" />
        <Column dataField="gender" />
        <Column dataField="homeworld" />
        <Column dataField=" " type="buttons">
                    <Button
                        text="Add to favorites"
                        hint="Add to favorites"
                        onClick={addToFavorites}
                        visible={true}
                    />
                </Column>
            <Selection mode="single" />
            <Paging defaultPageSize={5} />
            <FilterRow visible={true}/>
            <SearchPanel visible={true}/>

        </DataGrid>
        <div>
            {rowClicked && 
            
            <Navigate to="/charDetails"  replace={true} />
                }
        </div>
        </div>
      
    )
}

export default CharList;