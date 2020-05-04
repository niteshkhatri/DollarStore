# Dollar Store / Online Grocery Store

Our project is a simple implementation of database used in a website. Our website offers a service which helps customers to order groceries in our online store. This website has two important roles which include users and admin. The first page of this system is a login page where customers and admin can login to our system. This system differentiates admin and general customers based on the information available in our database (which are user email and password). We also included user registration page so that new customers can register and make use of the service provided by this system. When a customer/admin login to our system, it will redirect to the next page accordingly. If a customer login to our system, he/she will be redirected to the home screen where they can view and buy the items. If admin logins to our system he will be redirected to a different page which looks similar to the customer home page but has some more options like inserting an item, updating information about a product in the database. Admin page also has another option called archive inventory where admin can look through the item that were deleted by from the store. This delete option given to the admin is a soft delete i.e. if the admin deletes a product from this system, that product will not be deleted from the database. Every customer in this system can search and view products Any customer in this system can create, view and edit his/her personal shopping cart. Customers can also filter their search on products by name, department, brands, and price. They can also view detailed information of the selected product. Shopping cart option in this system lets the customers to add, delete products from their digital cart. Customers can also go through their purchase history after logging into their account.

## Contributors

Nitesh Kumar
Saketh Reddy Basika
Sandeep Reddy Gopu


## How to use

To run the website, follow below steps:
1.	First create the Mongo Database named DollarStore and create 4 collections based on the Database Design in next section. Using the json files at location “/SampleData/DatabaseFiles/DollarStore/” to insert new data in the database.
2.	Store Pictures (i.e item images and banners) in the folder "/public/items". If Mongodump is used, store pictures from "/SampleData/Pictures/" into views folder "/public/items". Also 6 banners are used by default for carousel i.e banners can be named banner1.jpg, banner2.jpg and soon. You can add more images in carousel.
3.	Open terminal at DollarStore path and run nodserver via command “nodemon”.
4.	URL “localhost:4000” can be used in any browser to use the Dollar Store.

*Note*
*1.	Register with username "admin@admin.com" to use the admin account.*

*2.	Grocery images should be saved with item name i.e item-name.jpg*

*3.	Delete button in the Home Page is used to soft delete the items. However, delete button in the Archive Inventory page of admin account is used to permanently remove the item from database.*

*4.	There should be only two tags to the product and they should be in the format “Laundry,Tide”.*

## Database Design

### Database Type
NoSQL(MongoDB) 

### Database Name
DollarStore

## Collection List

### Transactions
After the user logs out, all the details related to that particular transaction along with that username is saved in this document. These documents are later used to display purchase history of that particular user.

### Items
Each document in Items collection represent an item in the Dollar Store.

**Available**: It is used for checking the availability of the item. When an item is soft deleted, it’s available property is set to false.
**Tags**: They are used for filtering an item. 2 tags can be provided comma separated. For ex, “Laundry,Tide”. In this example, “Laundry” is the Department and “Tide” is the Brand.
**Name** and Description** are used for searching an item.
**TotalQuantity**: The number of quantity available in stock.
**PricePerItem**: Price of single quantity.
**ImagePath**: Path of the image of the item.

### Sessions
This document is basically used to store session variables and maintaining the cart data. It is automatically created when a user is logged in by “express-session” package.

**Expires**: When the session is expired.
**Session**: Session information

### Users
This document saves the username and encrypted password of users. User with username “admin@admin.com” is considered as an admin user.

## Languages/ Framework

We used MERN stack setup to develop this system. The term MERN stack refers to the following technologies: 

### MongoDB
t’s a cross platform document-oriented database program

### Express.js
It’s a web application framework for Node.js. 

### React
It’s a JavaScript library for building user interfaces.

### Node.js
It’s an open source, cross-platform JavaScript run-time environment that executes JavaScript code outside of the browser (server side).

In this project, for the server-side work we use Node.js and Express.js and connect it with MongoDB. Then we create some API’s. We will use React to build user interfaces and connect our front-end to the backend.

## Main Functionalities

### Home
This page is the home page for general customer’s once they login into this system. They can search and view the products that are available in the database.

### Home Filters
In this, user can categorize their search based on departments, Brands, and prices. 

### Item Description
Customers can view the detailed information about a product present in the database when they click on the product in their search.

### Shopping Cart
After shopping in this online store, customers can see their purchases in their shopping cart. Customers can add, delete, and edit their products in their shopping cart.

### Login
This is a common login page for both customers and admin.

### Registration
Customers who are new to this system can use our service once they get registered using this registration page. 

### Insert
Admin can add new products into the database using this insert feature in the system. When a new item is added, it will be shown to the customers in their home page.

### Update
Admin can also update some information about a product that is present in the database by using the update feature present in this system. 

### Archive Inventory
It’s a soft delete option given to admin to delete an item from the product listing. If the admin deletes an item/ product, it will not be completely deleted from the database.
