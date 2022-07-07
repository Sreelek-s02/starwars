import React from "react";
import {Card} from "react-bootstrap";



const CharDetails = (props) => {
    // const data = useSelector(state => state.char.charData)
console.log("data from tstae", props.data )
    return(
        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Name: {props.data.name}</Card.Title>
    <Card.Text>
      gender: {props.data.gender}
    </Card.Text>
    <Card.Text>
      Home Plnet: {props.data.homeworld}
    </Card.Text>
    <Card.Text>
      Eye color: {props.data.eye_color}
    </Card.Text>
    <Card.Text>
      Hair color: {props.data.hair_color}
    </Card.Text>
    <Card.Text>
      List of films:
    {props.data.films.map((data,index)=>{
        console.log(data)
        return(
            <li>{data}</li>
        )
    })}
    </Card.Text>
    <Card.Text>
      List of strships:
    {props.data.starships.map((data,index)=>{
        console.log(data)
        return(
            <li>{data}</li>
        )
    })}
    </Card.Text>
    
  </Card.Body>
</Card>
    )
}

  
  
  export default (CharDetails);