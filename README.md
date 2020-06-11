# Assignment - Search Application

The front end is built with React.js whereas back end is built with Express
Framework and MongoDB.

## Front-end

For this assignment of building a search application, to populate larger set of
data points quickly, I choose to use dummy data from
[Star Wars API](https://swapi.dev).

Once the application is loaded, at the top of the page you will see a search
input field along with filter select menu.

In the middle of page show search result of the Star Wars character profiles in
table form. You may select different filter and then proceed to search by
keyword.

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

A json file that contains profile of 50 Star Wars characters is prepared
beforehand.

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
