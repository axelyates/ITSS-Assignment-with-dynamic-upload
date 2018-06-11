# CSV REST API Example

## Setup + Usage

1. `npm install`
2. `node server`

## Try the following endpoints using [Postman](https://www.getpostman.com/):

- GET `localhost:8080/Sacramentorealestatetransactions?beds=2&city=SACRAMENTO&price=40000`
- GET `localhost:8080/Sacramentorealestatetransactions?beds=2&city=RANCHO%20CORDOVA`
- GET `localhost:8080/Sacramentorealestatetransactions?type=Condo`
- GET `localhost:8080/Sacramentorealestatetransactions`
- POST `localhost:8080/newdata` w/ the csv in the body as plain text
- GET `localhost:8080/newdata`