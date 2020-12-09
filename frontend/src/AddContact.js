import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import shortid from 'shortid';
import Heading from './Heading';
import axios from 'axios'
import { BsArrowLeft } from 'react-icons/bs';

export default function AddContact() {
    const history = useHistory();
    const [user, setUser] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const { name, phone, email } = user

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            id: shortid.generate(),
            name: name,
            phone: phone,
            email: email
        }
        await axios.post('/users', user);
        history.push(`/`);
    }

    return (
        <div className="add-contact">
            <Heading text="Add New Contacts"/>
            <div className="container mt-4">
            <form className="form-style" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" name="name" value={name} placeholder="Enter Name" onChange={(e) => handleChange(e)} required />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="phone" value={phone} placeholder="Enter Phone Number" onChange={(e) => handleChange(e)} required />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" name="email" value={email} placeholder="Enter Email" onChange={(e) => handleChange(e)} required />
                </div>

                <div className="form-group">
                    <button className="btn btn-success mr-2">Save Contact</button>
                    <Link className="btn btn-default back-icon" to="/"><span><BsArrowLeft/></span>Go Back</Link>
                </div>
            </form>
        </div>
    </div>
    )
}
