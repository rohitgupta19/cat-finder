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

Currently the assumption is cat breeds with 5 rating is most popular/user friendly

## To fetch the cat breeds by child_friendly parameter

http://localhost:3000/cat/list?child_friendly=true

## To fetch the cat breeds by stranger_friendly parameter

http://localhost:3000/cat/list?stranger_friendly=true

## To fetch the cat breeds by dog_friendly parameter

http://localhost:3000/cat/list?dog_friendly=true

if no parameter is passed then it will combine all the parameters in a single query by default
Example : http://localhost:3000/cat/list and the final endpoint which will be executed will be
(https://api.thecatapi.com/v1/breeds?limit=5&child_friendly=5&dog_friendly=5&stranger_friendly=5)

Note : The API without passing any limit is fetching all the cats but when passing 2 parameters example : https://api.thecatapi.com/v1/breeds?limit=5&dog_friendly=5

its not returning all the cats with only dog_friendly as 5 (max ratings). Also child friendly is only 1 cat with 5 rating

One option to implement is fetching all the cats one without a limit and then filter it with
5 rating but the requirement is how do we filter the cats if not enough with 5 rating.
Thats why limit is used in the api and additional paramter as dog_friendly assuming the end api can be fixed.

If this is not the case then might need some discussion on fetching
