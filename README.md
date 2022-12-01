# Library Management
   It is an API which manages books in a library , where a user can create account , login , issue/return his books , get different kinds of books. An admin can perform CRUD on books , and manage some user's account.

# Features
  A normal user can perform get operations on books , issue/return it which will add book_id into it's data object and also add user_id in book's object to connect them. 
     An admin can perform CRUD operations on books , manage users.
     For authentication , JWT is used.
     The API has been documented using swagger.
     For security , password has been hashed using salt , and Helmet library is used along with rate limiting.
     Logs are available for any activity on the API.
     API has been built using NodeJS and ExpressJS , and MongoDB is used as a database.
     A pictorial representation of data models and callback functions is also added.
     
# How to run this
1. download it as zip and extract it or do a git clone

2. open terminal and write

> npm install

3. open .env file and add your MongoDB url, Password, Username

4. Write this in terminal

> npm start
 
 5. Open the following link on your browser
 http://localhost:7000/api-docs/
