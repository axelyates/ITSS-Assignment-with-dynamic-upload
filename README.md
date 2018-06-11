# CSV REST API Example

## Setup + Usage

1. `npm install`
2. `node server`

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