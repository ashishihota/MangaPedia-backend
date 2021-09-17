# MangaPedia

### This is a simple project I am making to learn more about how the APIs works and how to deal with them.

### The API I am using is the mangadex api, which can be found on [MangaDex](https://api.mangadex.org).

<br/>

### This will automatically install all the necessary dependencies for the project.

<br/>
<br/>

# Frontend

### The fronend of this app is created using the React framework. The whole project is like a testing thing for me to hone my JavaScript skills and learn React and NodeJS.

<br/>

### To use this app -

1. clone this repo
2. cd into that folder
3. run this command

```sh
    > npm install
```

4. and that's it.

### This will connect to my backend and will fetch the manga of your desire.

<br/>
<br/>

# Backend

### To be honest, I am very noob to backend. I have done some previous projects with Node and Express, but this project is way-way bigger than any of the previous ones combines together. Like

1. I had to work with databases which I am not familiarized with.
2. Working with APIs is kinda new for me, specially an API which requires you to update your credential almost every time you make a request.
3. I had never used docker before this project and I had to learn that for somethings (which I am not sure about).
4. Making an app of this size is a bit tiring for me, because I procastinate a lot and at the end of the day I have to code the whole day's worth of code in couple of hours.

   <br/>

> ### I am using Babel as the compiler for the ES to JS compilation.

<br/>

> ### I am using the MongoDB as my preferred Database.

<br/>

> ### To work with API, I am using GraphQL.

<br/>
<br/>

## **Setting up the MongoDB is pretty simple.**

### You just have to hvae the docker installed on your PC and then just run

```sh
    docker pull monog:5.0
```

### This will pull the v5.0 of the image and then run

```sh
    > docker run -p 0.0.0.0:3999:27017 --name mangapedia-mongo -d mongo:latest
```

#### This will create 2 databases.

#### We need to DBs for -

1. To cache the latest result.
2. To store the chapter list for different mangas.

<br/>

### Why not just download all the chapters and store them in the cache you asked ? Well my friend, because it is illegal. You can't

<br/>

#### After that you could simply use a mongoDB visualiser like mongo-Atlas to connect to the port and localhost to visualise and crete a database with GUI if you prefer

<br/>

#### I don't think there will be any problems with this, and if there are any, just ask our friend Google.

<br/>
<br/>

# Packages used

    1. Express
    2. Mongoose
    3. Helmet
    4. Morgan
    5. Parcel (for the frontend)
    6. Babel (to compile into js)
        6.1 @babel/core
        6.2 @babel/preset-env
        6.3 babel-watch
    7. graphql (with apollo)
    8. CORS

<br/>
<br/>

# Notes to self

## Ports :-

1. 3000 - main backend server
2. 3047 - our CORN job for the mongoDB
3. 3001 - parcel frontend

<br/>
<br/>

# Problems I have faced so far (I am new to webdev) :-

<br/>

## 1. Babel 6 regeneratorRuntime is not defined

> This is because I am using babel-watch to compile this code (ECMAScript) into js code and I am babel needs helps with converting. To solve this problem i am using the .babel.config.js file with

    module.exports = {

        "presets": ["@babel/env"]

    }

<br/>

## 2. Deleting important files and then regretting

> This repo is the answer to that problem. I was reluctant to upload this to my repo becaues of my bad code, but I thought "WHO CARES??!!". So I am making it public instead of private, cause fuck the haters and love yourself.

<br/>
<br/>

## 3. Problems with the API

> I am using the MangadexAPI to gather the data, which isn't the problem as I have said before, which is fantastic, but to make my life more miserable, I am making my frontend and backend two seperate apps, and to deal with the complications I am using GraphQL, which I am a novice in, but I want to learn it.
