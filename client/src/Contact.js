import React from 'react';
import { Link } from 'react-router-dom';
import ContactDetail from './ContactDetail';
import Heading from './Heading';
import {BsPlus} from 'react-icons/bs'

export default function Contact() {

    return (
        <div>
            <Link to="/create-new-contact" className="add-icon"><BsPlus/></Link>
            <Heading text="Modern Contact App"/>
            <ContactDetail/>
        </div>
    )
}
