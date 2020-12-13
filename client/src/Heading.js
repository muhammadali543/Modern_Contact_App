import React from 'react';
import iconContact from '../src/icon-contact.png';

export default function Heading({text}) {
    return (
        <div>
            <h4 className="text-captilize text-center"><img src={iconContact} alt="Icon" width='60px' style={{paddingRight: '5px', marginBottom: '5px'}}/>{text}</h4>
            <hr/>
        </div>
    )
}
