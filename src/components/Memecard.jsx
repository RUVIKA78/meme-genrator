import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate} from "react-router-dom"
const Memecard = (props) => {
    const navigate=useNavigate()
    return (
        <div>
            <Card style={{ width: '18rem', margin:'25px' }}>
                <Card.Img variant="top" src={props.image} width="400px" height="350px" />
                <Card.Body>
                    <Card.Title>{ props.title}</Card.Title>
                    
                    <Button onClick={e => navigate(`edit/?url=${props.image}`)} variant="primary">Edit</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Memecard