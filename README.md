# Node Dummy API
Node application that will generate endpoint to use with defined dummy data.

## Configuring
Add the dummy collections you want into `db/db.json` then you'll be able to use CRUD in that collections.

### Example
**db.json**
```javascript
{
  "users": [
    {
      "id": 1,
      "first_name": "Steven",
      "last_name": "Gutierrez",
      "username": "sgutierrez0",
      "gender": "Male",
      "email": "sgutierrez0@instagram.com"
    }
  ]
}
```
Now you can go to `/api/users` and use http CRUD operations.

## Running
To start running the dummy API run one of the following commands:
```javascript
$ npm start
```
or
```javascript
$ npm run start
```

### Is it working?
To check if it's working open your browser at `http://localhost:8080/api/hello`.

**Response:**
```javascript
{
  hello: "world"
}
```

## Create new collections
In order to create a new collection just access `/api/newcollection/:collection`.
