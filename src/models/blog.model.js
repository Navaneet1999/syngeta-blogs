const mongoose = require('mongoose');

const blogDataSchema = new mongoose.Schema({
    title : {type: String, required: true},
    description : {type: String, required: true},
    labels: {type: String, required: true},
    author: {type: String, required: true},
    like: {type: Number, required: false}
},
{
    versionKey: false,
    timestamps: true,
}
);

const Data = mongoose.model("data", blogDataSchema)
module.exports = Data;