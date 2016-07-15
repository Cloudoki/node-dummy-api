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
To check if it's working open your browser at `http://localhost:8787/api/hello`.

**Response:**
```javascript
{
  hello: "world"
}
```

# Using the API

## Handle collections
### Creating
In order to create a new collection do a **POST** request to `api/newcollection/:collection`

### Deleting
To delete a collection do a **DELETE** request to `api/newcollection/:collection`

## Data Operations
### Get
You can get any existing collection data using a **GET** request to `api/:collection/:id`.
If it exists it will return the json data.

### Post
You can add new data to a collection by using a **POST** request to `api/:collection`.
This will add the data with an id and return the data with the id.

### Update
In order to update the data of a collection use a **PUT** or **PATCH** request to `api/:collection/:id`.

### Delete
To delete do a **DELETE** request to `api/:collection/:id`.
