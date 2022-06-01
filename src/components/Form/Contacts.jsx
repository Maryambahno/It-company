import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Contact from './Contact.jsx'

const Contacts = () => {
  useEffect(()=>{
      getContacts();
  },[]);
   const [contacts,setContacts]=useState([]);
   const [loading,setLoading]=useState(false);
   
   const getContacts=async()=>{
       const res=await axios.get("https://randomuser.me/api/?results=12");
       try {
           setContacts(res.data.results );
           setLoading(true);
           
       } catch (err) {
           alert(err.message);
       }
   };
  return (
   <div>
       <Fragment>
       <Row>
           {loading && contacts.map((contact)=>{
               return(
               <Col sm={12} md={6} lg={4} key={contact.login.uuid}>
               <Contact contact={contact}/>
               </Col>
           )})}
       </Row>
       </Fragment>
   </div>
  )
}

export default Contacts