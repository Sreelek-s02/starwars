import React, { useEffect, useState } from "react";
import {Card, Button, ListGroupItem, ListGroup} from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { setFavListData } from '../redux/reduxSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CharDetails.css";



const CharDetails = (props) => {

let [fav,setFav] = useState(false);
const dispatch = useDispatch();
useEffect(()=>{
  if(props.favList.length !== 0){
  props.favList.map((fav)=>{
    if(fav.details["name"] === props.data.name){
      setFav(true);
    }else{
      setFav(false);
    }
  })
}
},[props.data, props.favList])

function AddToFavList(){
  dispatch(setFavListData({data: props.data}))
}

    return(
      <div >
        <>
        <Card className="char-details" border="primary" style={{ width: '18rem' }}>
        <Card.Header>Character Details</Card.Header>
  <Card.Body>
    <Card.Title>Name: {props.data.name}</Card.Title>
    <Card.Text>
      gender: {props.data.gender} <br/>
      Home Planet: {props.data.homeworld} <br/>
      Eye color: {props.data.eye_color}<br/>
      Hair color: {props.data.hair_color}<br/>
      List of films:
    {props.data.films.map((data,index)=>{
          <ListGroup className="list-group-flush">
          <ListGroupItem>{data}</ListGroupItem>
        </ListGroup>
    })}<br/>
      List of strships:
    {props.data.starships.map((data,index)=>{
          <ListGroup className="list-group-flush">
          <ListGroupItem>{data}</ListGroupItem>
        </ListGroup>
    })}<br/>
    </Card.Text>
    {!fav &&
    <Button className="button" variant="primary" onClick={AddToFavList}>Ädd to favorites</Button>}
  </Card.Body>
</Card>
</>
</div>
    )
}

  
  
export default (CharDetails);