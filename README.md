# CSV REST API Example

## Setup + Usage

1. `npm install`
2. `node server`
3. `When you go to localhost:<port number> you can see entire csv file`
4. `You can type in localhost:<port number>/<local csv filename>` if the csv is in the same folder as server.js
5. `You can do standard queries localhost:<port number>/<local csv filename>?<insert query here>` i.e. localhost:8080/users?id=1

## Required packages

1. `npm install --save restify`
2. `npm install --save csvtojson`
3. `npm install --save body-parser`
4. `npm install --save serialize-error`

## Try the following endpoints using [Postman](https://www.getpostman.com/):

- GET `localhost:8080/users?id=2&lname=Yates`
- GET `localhost:8080/users?fname=Amory`
- GET `localhost:8080/users`
- POST `localhost:8080/newdata` w/ the csv in the body as raw Text (text/plain)
- GET `localhost:8080/newdata`