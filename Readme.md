Here is the documentation for the provided URLs:

## API Documentation

### POST `/users/register`

Registers a new user.

#### Request Body
- `email` (string): The email of the user. Must be a valid email address.
- `fullname.firstname` (string): The first name of the user. Must be at least 3 characters long.
- `password` (string): The password of the user. Must be at least 6 characters long.

#### Response
- `201 Created`: User successfully registered.
  - `token` (string): Authentication token.
  - 

user

 (object): The created user object.
- `400 Bad Request`: Validation errors.
  - 

errors

 (array): Array of validation error messages.

#### Example Request
```json
{
  "email": "user@example.com",
  "fullname": {
    "firstname": "John"
  },
  "password": "password123"


}


```

#### Example Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60c72b2f9b1d8c001c8e4e3b",
    "email": "user@example.com",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    }
  }
}
```

### POST `/users/login`

Logs in an existing user.

#### Request Body
- `email` (string): The email of the user. Must be a valid email address.
- `password` (string): The password of the user. Must be at least 6 characters long.

#### Response
- `200 OK`: User successfully logged in.
  - `token` (string): Authentication token.
  - 

user

 (object): The logged-in user object.
- `400 Bad Request`: Validation errors.
  - 

errors

 (array): Array of validation error messages.
- `404 Not Found`: Invalid email or password.
  - 

message

 (string): Error message.

#### Example Request
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

#### Example Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60c72b2f9b1d8c001c8e4e3b",
    "email": "user@example.com",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    }
  }
}
```