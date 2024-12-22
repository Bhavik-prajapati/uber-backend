# User Routes

## Register User

**URL:** `/register`

**Method:** `POST`

**Body Parameters:**
- `email` (string): User's email address. Must be a valid email.
- `fullname.firstname` (string): User's first name. Must be at least 3 characters long.
- `password` (string): User's password. Must be at least 6 characters long.

**Response:**
- `201 Created`: Returns the generated token and user details.
- `400 Bad Request`: Returns validation errors.

## Login User

**URL:** `/login`

**Method:** `POST`

**Body Parameters:**
- `email` (string): User's email address. Must be a valid email.
- `password` (string): User's password. Must be at least 6 characters long.

**Response:**
- `200 OK`: Returns the generated token and user details.
- `400 Bad Request`: Returns validation errors.
- `404 Not Found`: Returns if the email or password is invalid.

## Get User Profile

**URL:** `/profile`

**Method:** `GET`

**Headers:**
- `Authorization`: Bearer token.

**Response:**
- `200 OK`: Returns the user's profile details.
- `401 Unauthorized`: Returns if the user is not authenticated.

## Logout User

**URL:** `/logout`

**Method:** `GET`

**Headers:**
- `Authorization`: Bearer token.

**Response:**
- `200 OK`: Returns a success message.
- `401 Unauthorized`: Returns if the user is not authenticated.