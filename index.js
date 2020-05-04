const expressEdge = require('express-edge')
const mongoose = require('mongoose')
const bodyParser = require ('body-parser')
const fileUpload = require('express-fileupload')
const express = require('express')
const expressSession = require('express-session')
const connectMongo = require('connect-mongo')
const connectFlash = require('connect-flash')
const edge = require('edge.js')

const insertItemController = require('./controllers/insertItem')
const homePageController = require('./controllers/homePage')
const postItemController = require('./controllers/postItem')
const getItemController = require('./controllers/getItem')
const registerController = require('./controllers/register')
const createUserController = require('./controllers/createUser')
const loginController = require('./controllers/login')
const signInUserController = require('./controllers/signInUser')
const logoutController = require('./controllers/logout')
const addToCartController = require('./controllers/addToCart')
const storeTransactionController = require('./controllers/storeTransaction')
const cartController = require('./controllers/cart')
const isRegisteredController = require('./controllers/isRegistered')
const removeFromCartController = require('./controllers/removeFromCart')
const updateCartController = require('./controllers/updateCart')
const purchaseHistoryController = require ('./controllers/purchaseHistory')
const updateItemController = require ('./controllers/updateItem')
const editItemController = require ('./controllers/editItem')
const deleteItemController = require ('./controllers/deleteItem')
const archiveItemController = require ('./controllers/archiveItem')
const inventoryController =  require ('./controllers/inventory')
const searchNfilterController = require('./controllers/searchNfilter')
const getFilterController = require('./controllers/getFilters')


const app = new express()
mongoose.connect('mongodb://localhost/DollarStore')

app.use(fileUpload())
app.use(express.static('public'))
app.use(expressEdge)
app.set('views',`${__dirname}/views`)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true }))
app.use(connectFlash())


const mongoStore = connectMongo(expressSession)
app.use(expressSession({
    secret:'secret',
    store: new mongoStore({
        mongooseConnection : mongoose.connection
    })
}))

app.use('*',(req,res,next)=>{
        edge.global('auth',req.session.userId)
    next()
})

const auth = require('./middleware/auth')
const redirectOnAuth = require('./middleware/redirectOnAuth')
const postItem = require('./middleware/postItem')

app.get('/',homePageController)
app.get('/insertItem',auth,insertItemController)
app.get('/item/:id',getItemController)


app.get('/register',redirectOnAuth,registerController)
app.get('/login',redirectOnAuth,loginController)
app.get('/logout',auth,logoutController)
app.get('/cart',cartController)
app.get('/isRegistered/:id',isRegisteredController)
app.get('/purchaseHistory',purchaseHistoryController)
app.get('/updateItem/:id',updateItemController)
app.get('/deleteItem/:id',deleteItemController)
app.get('/archiveItem/:id',archiveItemController)
app.get('/inventory',inventoryController)
app.get('/searchNfilter/:search/:brand/:category/:minPrice/:maxPrice',searchNfilterController)
app.get('/getFilters',getFilterController)


app.post('/postItem',postItem,postItemController)
app.post('/createUser',redirectOnAuth,createUserController)
app.post('/signInUser',redirectOnAuth,signInUserController)
app.post('/addToCart',addToCartController)
app.post('/storeTransaction',storeTransactionController)
app.post('/removeFromCart',removeFromCartController)
app.post('/updateCart',updateCartController)
app.post('/editItem',editItemController)


app.use((req,res)=>res.render('notFound'))

app.listen(4000,()=>{
    console.log("App Listening")
})