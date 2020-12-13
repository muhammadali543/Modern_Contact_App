const express = require('express');

const router = express.Router();

const Contacts = require('../models/Contact');


// Routes
router.get('/', (req, res) => {

    Contacts.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', 'something went wrong!');
        });
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    Contacts.findById(id)
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', 'something went wrong!');
        });
});


router.post('/save', (req, res) => {
    const data = req.body;

    const newContact = new Contacts(data);

    newContact.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }

        return res.json({
            msg: 'Your data has been saved!!!!!!'
        });
    });
});

router.put('/:id', (req, res) => {
    let id = req.params.id;
    const data = req.body;
    Contacts.findByIdAndUpdate(id, {
        ...data
    }, (error) => {
        if (error) {
            console.log('error: ', 'something went wrong!');
        }else{
            res.json({msg: "Updated Successfully"});
        }
    });
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    Contacts.findByIdAndRemove(id, (error) => {
        if (error) {
            console.log('error: ', 'something went wrong!');
        }else{
            res.json({msg: "Deleted Successfully"});
        }
    })
});


module.exports = router;