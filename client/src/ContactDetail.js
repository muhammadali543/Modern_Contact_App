import React, { useEffect, useState } from 'react';
import Avatar from 'react-avatar';
import {BsTrash, BsPencil} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ContactDetail() {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        getContacts();
    }, []);

    const getContacts = async () => {
        const { data } = await axios.get('http://localhost:8080/api');
        setContacts(data);
    }

    const deleteContact = async (id) => {
        await axios.delete(`http://localhost:8080/api/${id}`);
        getContacts();
    }
    
    const handleDelete = (id) => {
        // const confirm = window.confirm('Are you sure you want to delete this contact?');
        // if (confirm) {
        //     deleteContact(id);
        // }
        deleteContact(id);
    }    

    return (
        <div className="contact-wrapper">
            <div className="container">
                <div className="table-responsive table-borderless">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>                            
                            {contacts.map(contact =>(
                            <tr key={contact.id}>
                                <td>
                                    <Avatar name={contact.name} size="45" round={true} className="avatar"/>
                                </td>
                                <td>
                                    {contact.name}
                                </td>
                                <td>
                                    {contact.phone}
                                </td>
                                <td>
                                    {contact.email}
                                </td>
                                <td>
                                    <ul className="list-unstyled">
                                        <li className="d-inline pr-3"><Link to={`/update-contact/${contact._id}`} className="text-dark"><BsPencil/></Link></li>
                                        <li className="d-inline remove-icon" onClick={() => handleDelete(contact._id)}><BsTrash/></li>
                                    </ul>
                                </td>
                            </tr>
                            ))} 
                        </tbody>
                    </table>
                    { contacts.length === 0 ? <div align='center'>No Contacts Create One!</div> : null}
                </div>
            </div>
        </div>
    )
}
