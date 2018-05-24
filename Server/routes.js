var express = require('express')
var route = express.Router()
const mongoose = require('mongoose')
const assert = require('assert')
const conn = mongoose.connection
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const { Admin } = require('./model')
const { mongourl, jwtSecret } = require('./keys')
const multer = require('multer')
const GridFsStorage = require('multer-gridfs-storage')
const Grid = require('gridfs-stream')
const crypto = require('crypto')
const path = require('path')

route.use(cors())
route.use(bodyParser.json())
route.use(bodyParser.urlencoded({ extended: true }))

//Setup mongoose and gridfs-stream
mongoose.promise = global.Promise

Grid.mongo = mongoose.mongo

mongoose.connect(mongourl)

conn.once('open', () => {
    console.log('CONNECTED TO DATABASE')
    const gfs = Grid(conn.db)
})
//var appDomain = new Domain()

conn.on('error', () => {
    console.log('ERROR CONNECTING TO DATABASE')
})
//@route
route.get('/', (req, res) => {
    console.log('Endpoint hit')
    Admin.find({}, (err, user) => {
        if (err) { throw err }
        console.log(user)
    })
    res.status(200).json({ message: 'API functional' })
})


//@route
//register admins
route.get('/register', (req, res) => {
    const test = req.query.name && req.query.password && req.query.email ? true : false
    if (test) {
        Admin.findOne({ name: req.query.name }, (err, user) => {
            if (user) {
                res.status(200).json({ message: 'That username is already taken' })
            } else {
                console.log('registration endpoint hit')
                const adminData = {
                    name: req.query.name,
                    password: req.query.password,
                    email: req.query.email
                }
                const admin = new Admin(adminData)
                admin.save((err, user) => {
                    if (err) { throw new Error('Admin registration failed') }
                    console.log(`${user} was successfully registered`)
                })
                res.status(200).json({ message: 'API functional' })
            }
        })

    }

    else {
        res.status(202).json({ error: 'Registration error. Check whether correct data was given' })
    }
})

//@route
//login route for admins
route.post('/login', (req, res) => {
    //console.log('post endpoint hit')
    const test = req.body.name && req.body.password ? true : false
    console.log(test)
    if (test) {
        console.log(req.body.name)
        Admin.findOne({ name: req.body.name, password: req.body.password }, (err, user) => {
            console.log(user)
            console.log(req.body.name)
            console.log(req.body.password)
            if (err) { throw err }
            if (user) {
                const adminData = {
                    name: req.body.name,
                    password: req.body.password,
                }
                jwt.sign(adminData, jwtSecret, (err, token) => {
                    if (err) { throw err }
                    console.info(`${adminData.name} has logged in`)
                    res.status(200).json({ token })
                })
            } else {
                res.status(403).json({ error: 'Admin account not found' })
            }
        })
    }
})


const verifyToken = (req, res, next) => {
    if (req.headers['authorization'] === undefined) {
        res.status(404).json({ error: '404: FORBIDDEN' })
    } else {
        const bearerHeader = req.headers['authorization']
        const bearer = bearerHeader.split(' ')
        const token = bearer[1]
        req.token = token
        jwt.verify(req.token, jwtSecret, (err, admin) => {
            if (err) {
                res.status(403).json({ error: "404: FORBIDDEN" })
            }
            next()
        })
    }
}

const fileDetails = (req,file) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png' ){
        return (new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buff) => {
                if (err) { reject(err) }
                let filename = buff.toString('hex').path.extname(file)
                let fileInfo = {
                    filename,
                    bucketName:'postImages'
                }
                resolve(fileInfo)
            })
        }))
    }
}

const storage = new GridFsStorage({
    url: mongourl,
    file:fileDetails
})

const upload = multer({storage})

//@route
//This route is used by admins to post data to the kUPhSa Blog
route.post('/newpost', verifyToken,upload.single('postImage'),(req, res) => {
    console.log(req)
    res.status(200).json({ message: 'New post made' })
})

module.exports = {
    route
}