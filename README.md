# Assignment - Search Application

The front end is built with React.js whereas back end is built with Express
Framework and MongoDB.

## Front-end

Once the application is loaded, at the top of the page you will be greeted with a search
input field to enter title keyword.

Once keyword has been entered into search input field, the application will send a GET request to server. If there are matches in search result, it will return a response with an array of data object and show the search result below the input field. Keyword will be highlighted in the search result title.

Below search result table, on the left, you may select to show number of search
result. On the right, is the pagination element showing current page and also
allows to navigate previous and next search result.

Install npm dependencies

```
yarn
```

Run react application

```
yarn start
```

## Back-end

For this assignment, I am using Node.js Express framework to develop backend.
There can be scenarios that given database contains a massive data set and the
search queries may return large number of matching results. To manage this, I am
using pagination approach to limit a certain number of search results to be
displayed once at a time. User may navigate previous and next search page
result. There is an option to select number of results to be shown per search
result page.

When you spin up back end server, the json file will be loaded once into
database for the first time.

You will need to download and install MongoDB into machine. You may refer to
[installation guide](https://docs.mongodb.com/manual/installation/#mongodb-community-edition-installation-tutorials)
to follow installation guide.

Once you have MongoDB installed in your machine, run following command to start
daemon process for MongoDB system.

```
mongod
```

Install npm dependencies for back end

```
npm install
```

Spin up Express server

```
npm start
```

To clear existing MongoDB database to reload new set of data, run following
command to enter Mongo shell first

```
mongo
```

Select database

```
use pagination
```

Delete selected database to allow backend server to load new json data on next
spin up

```
db.dropDatabase()
```
