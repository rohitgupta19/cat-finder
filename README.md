# cat-finder

## Overview

This is the Node and Express API project built using TypeScript.

The Nodejs application exposed a single end point to return the list of cats breed by Dog Friendly,
Stranger Friendly and Child Friendly parameters.

Note - I do found an issue working both limit and additional parameters
https://api.thecatapi.com/v1/breeds?limit=5&stranger_friendly=5

This project is build using node js 14x version and should work on 14+ versions as well.

## Installation

Run the below command to install the npm packages

```bash
$ nvm use
$ npm install
$ npm run start
```

## Running the app locally

```bash
$ npm run start
```

This will start the application locally at `http://localhost:3000/`

## Environment variables

A .env file is created with the configuration used by the app which can be changed if needed.

Example LIMIT = 5 which can be changed as 10 or more.
It can also be passed from the user as a parameter but as of now its configured as only return 5 due to the current requirement.

## Linting and Formatting the code

```bash
$ npm run lint
$ npm run prettier
```

## Testing the api

Currently the assumption is cat breeds with 5 rating is most popular/user friendly.
There are 2 API's created

1. one is fetching all the cat breeds (/category) first and then filtering the records.

## API fetching all cat breeds and filtering based on parameter passed :

http://localhost:3000/cat/category?id=child_friendly

http://localhost:3000/cat/category?id=stranger_friendly

http://localhost:3000/cat/category?id=dog_friendly

2. second using limit in the api by fetching the records (/list) but seems buggy.

## API using limit in the cat api to fetch only 5 :

Note : The API without passing any limit is fetching all the cats but when passing 2 parameters example : https://api.thecatapi.com/v1/breeds?limit=5&dog_friendly=5

its not returning all the cats with only dog_friendly as 5 (max ratings). Also child friendly is only 1 cat with 5 rating

## To fetch the cat breeds by child_friendly parameter

http://localhost:3000/cat/list?id=child_friendly

## To fetch the cat breeds by stranger_friendly parameter

http://localhost:3000/cat/list?id=stranger_friendly

## To fetch the cat breeds by dog_friendly parameter

http://localhost:3000/cat/list?id=dog_friendly
