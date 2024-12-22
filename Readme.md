# API Documentation

## Base URL

`http://localhost:4000/`

## User Routes

### Register User

**URL:** `/users/register`

**Method:** `POST`

**Body Parameters:**
- `email` (string): User's email address. Must be a valid email.
- `fullname.firstname` (string): User's first name. Must be at least 3 characters long.
- `password` (string): User's password. Must be at least 6 characters long.

**Response:**
- `201 Created`: Returns the generated token and user details.
- `400 Bad Request`: Returns validation errors.

### Login User

**URL:** `/users/login`

**Method:** `POST`

**Body Parameters:**
- `email` (string): User's email address. Must be a valid email.
- `password` (string): User's password. Must be at least 6 characters long.

**Response:**
- `200 OK`: Returns the generated token and user details.
- `400 Bad Request`: Returns validation errors.
- `404 Not Found`: Returns if the email or password is invalid.

### Get User Profile

**URL:** `/users/profile`

**Method:** `GET`

**Headers:**
- `Authorization`: Bearer token.

**Response:**
- `200 OK`: Returns the user's profile details.
- `401 Unauthorized`: Returns if the user is not authenticated.

### Logout User

**URL:** `/users/logout`

**Method:** `GET`

**Headers:**
- `Authorization`: Bearer token.

**Response:**
- `200 OK`: Returns a success message.
- `401 Unauthorized`: Returns if the user is not authenticated.

## Captain Routes

### Register Captain

**URL:** `/captains/register`

**Method:** `POST`

**Body Parameters:**
- `email` (string): Captain's email address. Must be a valid email.
- `fullname.firstname` (string): Captain's first name. Must be at least 3 characters long.
- `password` (string): Captain's password. Must be at least 6 characters long.
- `vehicle.color` (string): Vehicle color. Must be at least 3 characters long.
- `vehicle.plate` (string): Vehicle plate number. Must be at least 3 characters long.
- `vehicle.capacity` (number): Vehicle capacity. Must be a number.
- `vehicle.vehicleType` (string): Vehicle type. Must be one of 'motorcycle', 'car', 'auto'.

**Response:**
- `201 Created`: Returns the generated token and captain details.
- `400 Bad Request`: Returns validation errors.