import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import {Card, Button} from "react-bootstrap";
import { removeFromFavList } from '../redux/reduxSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./FavoritesView.css"



const FavoritesView = (props) => {

  const dispatch = useDispatch();

 function removeFromList(items){
dispatch(removeFromFavList(items))
 }
    return(
      <div>
       {props.data.map((items)=>{
        return(
  <Card border="primary" className="fav-details" style={{ width: '18rem'}}>
    <Card.Header><Button onClick={()=>removeFromList(items)}>Remove</Button></Card.Header>
  <Card.Body>
    <Card.Title>Name: {items.details.name}</Card.Title>
    <Card.Text>
      gender: {items.details.gender} <br/>
      Home Planet: {items.details.homeworld}<br/>
      Height: {items.details.height}<br/>
    </Card.Text>   
  </Card.Body>
</Card>
        )
})}
</div>
    )
}


export default FavoritesView;