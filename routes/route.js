const express = require('express');
const route = express.Router();
const bodyParse = require('body-parser');
const Notes = require('../database/model')
const { check, validationResult } = require('express-validator');


route.use(bodyParse.json());
route.use(bodyParse.urlencoded({ extended: true }));


route.get("/notes", async (req, res) => {

    try {

        const note = await Notes.find()
        console.log(note)
        // req.notesData = note
        res.status(201).send(note);

    } catch (error) {
        res.status(400).json({ msg: 'Server Error Get Request' })
        console.log(error)
    }

});

route.post("/notes", [
    check('note').not().isEmpty().trim().escape()
], async (req, res) => {

    const error = validationResult(req);

    if (!error.isEmpty()) {
        res.status(400).json({
            status: false,
            message: error.array()
        })
    }

    try {
        const notes = req.body.note;

        const notesdata = await new Notes({
            note: notes
        });

        await notesdata.save()

        return res.status(200).json({
            status: true,
            message: "Notes add Successfully",
            note: req.body,
        })


    } catch (err) {
        return res.status(400).json({
            status: false,
            message: "Failed ! Internal Server Error",
            error: err
        });
    }

});


route.delete("/notes", (req, res) => {

});


module.exports = route;

