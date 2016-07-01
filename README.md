# Node Dummy API
Node application tha will generate endpoint to use with defined dummy data.

## Configuring
Add the dummy collections you want into `db/db.json` then you'll be able to use CRUD in that collections.

### Example
**db.json**
```javascript
{
  "users": [
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
