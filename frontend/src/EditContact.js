import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import Heading from './Heading';
import axios from 'axios'
import { BsArrowLeft } from 'react-icons/bs';

export default function EditContact() {
    const { id } = useParams();
    const history = useHistory();
    const [user, setUser] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    useEffect(() => {
        getContact(id);
    }, [id]);

    const getContact = async (id) => {
        const { data } = await axios.get(`/users/${id}`);
        setUser(data);
    }

    const { name, phone, email } = user

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`/users/${id}`, user);
        history.push('/');
    }    

    return (
        <div className="edit-contact">
            <Heading text="Update Contact"/>
            <div className="container">
            <form action="" className="form-style" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" name="name" value={name} placeholder="Enter Name" onChange={(e) => handleChange(e)} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="phone" value={phone} placeholder="Enter Phone Number" onChange={(e) => handleChange(e)} />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" name="email" value={email} placeholder="Enter Email" onChange={(e) => handleChange(e)} />
                </div>

                <div className="form-group">
                    <button className="btn btn-warning text-white">Update Contact</button>
                    <Link className="btn btn-default back-icon" to="/"><span><BsArrowLeft/></span>Go Back</Link>
                </div>
            </form>
        </div>
    </div>
    )
}
