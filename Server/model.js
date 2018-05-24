const mongoose = require('mongoose')
const Schema = mongoose.Schema
//Create admin schema
const adminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: "KUPhSA Member"
    },posts:{
        type:[{
            title: {
                type: String
            },
            description: {
                type: String
            },
            content: {
                type: String
            },
            date: {
                type: String,
                default: new Date().toDateString()
            }, commments: {
                type: [{
                    name: String,
                    comment: String,
                    timestamp: {
                        type: String,
                        default: new Date().toDateString()
                    }

                }]
            }
        }]
    }
})

//create admin model
const Admin = mongoose.model('admin', adminSchema)

module.exports = {
    Admin,
    Post
}

