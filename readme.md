<details>
  <summary>Click to expand</summary>
  
  Your hidden content goes here.

</details>



# Ecommerce Applications

## Milestone 1: Project Overview

1. Authentication : login logout signup
2. Product page: All the products
3. Orders page : Shows orders for each user
4. Payment gateway

## Milestone 2:

1. Setting up of the frontend with following commands and packages
   1. tailwind CSS
   2. React (npm create vite@latest frontend)
2. setting up of the backend with following commands and packages
   npm init || npm init -y

   1. express (npm i express)
   2. mongoose (npm i mongoose)
   3. cors (npm i cors)
   4. nodemon (npm i nodemon)

   <!-- (Server) express helps us write the API's for the app
   mongoose() config the database with backend
   cors - Allowing access to Cross origin website or requests.
   nodemon - monitoring and watching of the backend nodejs application. -->

## Milstone 3

1. Setting up of nodejs sevrer and handling the api requests.
2. Connect your application to MongoDB to store and manage data.
3. connetion between Database and server.
4. Error Handler (these handler rectify where has the error occured filename.js)
5.

<!-- express - API routes or endpoints  -->

## Milestone 4

1. User Model for our database, (Done)
2. setting up controllers to handle user-related data,
3. enabling file uploads using Multer.

## Milestone 5

1. Created a signup page
2. Created validation Object using RegEx
3. Setup React-Router for the Present Pages

## Milestone 7

- Created two routes signup and login
- For Signup:

  1.  Take the data sent by the user
  2.  const {name, email, password} = req.body
  3.  check if user is already present in the DB
      1. if Yes-> return saying user is already present , Direct Login
      2. If No->
         1. Hash the password (Bcrypt.js, argon2.js)
         2. Create a user and store the name, email, password in DB

- For Login:
  1.  Take the data sent const {email, password} = req.body
  2.  check if the user entry is present in DB also compare the password.
      1. If Yes-> create a token and send that as cookies
      2. If No-> return saying Signup first

## Milestone 8

1. Card Componet
2. Display of all the products with dummy data in Home page.

## Milestone 9

1. Created Product Entry Form
2. Used form data to send the data over the network call.

## MileStone 10

1. Product Schema
2. cerate end point to wirte the data into DB.
   1. Cloudinary, multer

## Milestone 11

1. Wirting the GET endpoint to fetch the data from DB and send to the client.

## Milestone 12

## Milestone 13 (Updation)

1.  Backend: PUT route for updateing
2.  Frontend: Page for auto filling the updated data [id] except images fetch data from backend and once we have data in frontend we fill the input boxes with that data

## milestone 14

1.  DELETE route in the backend
2.  Delete button at the frontend

## MileStone 15

1. Added Navbar component (Mobile Responsive with Drop Down)

## MileStone 16

1. Added Single Page product Details
2. Created Image Modal Component

## MileStone 17

1. Cart Schema,
2. cart route
3. Cart Controller [get and addToCart]

## MileStone 18

1. Get Cart Data Route

## Milestone 19

1. Added Cart UI
2. Fetched Cart Details of the User

## milestone 20

1. Added UI for profile route
2. ceated route for user data

## Milestone 21

1. Creted page for the Address city, country, address1, address2, adderss3 and address type.
2. write the end point for the backend to receive and store it in the backend


## Milestone 34
1. Used JWT in login and any communication between  client and the server
2. stored jwt in cookie

## Milestone 35
1. deployment server - https://follow-along-ecom.onrender.com
2. deployment client - https://ecomfollowalong.vercel.app
