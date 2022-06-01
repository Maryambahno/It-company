import React from 'react'
import {Card} from 'react-bootstrap'
import './style.css'
const Contact = ({contact}) => {
    console.log(contact);
  return (
      <>
      <div className="card my-3 pa-3 rounded h-3">
          <img className='img' alt='' src={contact.picture.large}/>
        <Card.Body>
            <Card.Title>
                {`${contact.name.first+" "+ contact.name.last}` }
            </Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>Adress</Card.Subtitle>
        <Card.Text>
            <div>
                <strong>Number:</strong>{contact.location.street.number}
            </div>
            <div>
                <strong>Street:</strong>{contact.location.street.name}
            </div>
            <div>
                <strong>City:</strong>{contact.location.city}
            </div>
            <div>
                <strong>State:</strong>{contact.location.state}
            </div>
            </Card.Text> 
            <Card.Subtitle className='mb-2 text-muted'>Phone</Card.Subtitle>
            <Card.Text>
            <div>{contact.phone}</div>
           </Card.Text>
            <Card.Subtitle className='mb-2 text-muted'>Email</Card.Subtitle>
            <Card.Text>
            <div>{contact.email}</div>
           </Card.Text>

       
        </Card.Body>
      </div>
      </>
  )
}

export default Contact