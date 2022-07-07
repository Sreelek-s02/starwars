import React, {useState, useEffect} from "react";

import axios from "axios";
import { BrowserRouter, Route, Switch, Link, Navigate    } from 'react-router-dom' 
import DataGrid,  { Paging , SearchPanel, HeaderFilter, FilterRow,Selection} from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.light.css';
import CharDetails from "./CharDetails";
import Routes from './Routes';
import { useSelector, useDispatch } from 'react-redux';
import { charData } from './reduxSlice';
import "./Chartlist.css";


const CharList = () => {

    let [resultDetails,setResultDetails] = useState([])
    let [rowClicked, setRowClicked] = useState(false)
    let [rowData, setRowData] = useState([])
    const dispatch = useDispatch();
    const columns = ['name', 'gender', 'homeworld'];

    useEffect(()=>{
        console.log("call api")
        getCharacters("https://swapi.dev/api/people");
    },[])

    function getCharacters(path){
        axios.get(path).then(
            (response) => {
                var result = response.data.results;
                setResultDetails(result);      
            },
            (error) => {
                console.log(error);
            }
        );


    }

    function onSelectionChanged({selectedRowsData}){
    const data = selectedRowsData[0];
        console.log("data",data, selectedRowsData[0])
        setRowClicked(true)
            setRowData(data);
            dispatch(charData({data:selectedRowsData[0]}))
    
    }

    return(
        <div>
        <DataGrid
        dataSource={resultDetails}
        defaultColumns={columns}
        showBorders={true}
        onSelectionChanged={onSelectionChanged}
        >
            <Selection mode="single" />
<Paging defaultPageSize={10} />
<FilterRow visible={true}/>
<SearchPanel visible={true}/>

        </DataGrid>
        <div>
            {rowClicked && 
            
            <Navigate to="/charDetails" replace={true} />
                }
        </div>
        </div>
      
    )
}

export default CharList;