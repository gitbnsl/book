const mongoose = require('mongoose');
const moment = require('moment');


const notesSchema = new mongoose.Schema({
    note: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: moment().format("DD/MM/YYYY") + ";" + moment().format("hh:mm:ss")
    }

});

const Notes = new mongoose.model("Notes", notesSchema);

module.exports = Notes;