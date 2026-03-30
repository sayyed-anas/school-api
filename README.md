# School Management API

A RESTful API built using **Node.js**, **Express.js**, and **MySQL** to manage school data.
This system allows users to **add new schools** and **retrieve schools sorted by proximity** to a user-specified location.

---

# Features

- Add new school
- Retrieve schools sorted by distance
- MySQL database integration
- Input validation
- RESTful API design
- Postman collection ready
- Deployment ready

---

# Tech Stack

**Backend**

- Node.js
- Express.js

**Database**

- MySQL

**Packages Used**

- mysql2
- dotenv
- cors
- nodemon

---

# Project Structure

```
school-management-api
│
├── config
│   └── db.js
│
├── controllers
│   └── schoolController.js
│
├── routes
│   └── schoolRoutes.js
│
├── server.js
├── .env
├── package.json
└── README.md
```

---

# Installation & Setup

## 1️. Clone Repository

```bash
git clone https://github.com/your-username/school-management-api.git
cd school-api
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3️. Setup MySQL Database

### Create Database

```sql
CREATE DATABASE school_management;
USE school_management;
```

### Create Table

```sql
CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);
```

---

## 4️. Environment Variables

Create a `.env` file in root directory:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=school_management
PORT=5000
```

---

# Run Server

```bash
npm run dev
```

Server will run on:

```
http://localhost:5000
```

---

# API Endpoints

---

# 1. Add School API

### Endpoint

**POST** `http://localhost:5000/addSchool`

### Request Body

```json
{
  "name": "ABC School",
  "address": "Pune",
  "latitude": 18.5204,
  "longitude": 73.8567
}
```

### Success Response

```json
{
  "message": "School added successfully",
  "id": 1
}
```

### Validation Rules

- All fields are required
- Latitude must be number
- Longitude must be number

---

# 2️. List Schools API

### Endpoint

**GET** `http://localhost:5000/listSchools?latitude=18.5204&longitude=73.8567`

### Query Parameters

| Parameter | Type  | Required |
| --------- | ----- | -------- |
| latitude  | Float | Yes      |
| longitude | Float | Yes      |

### Success Response

```json
[
  {
    "id": 1,
    "name": "ABC School",
    "address": "Pune",
    "latitude": 18.5204,
    "longitude": 73.8567,
    "distance": 0
  }
]
```

---

# Sorting Mechanism

Schools are sorted using **geographical distance** calculated via the **Haversine Formula**.

The API:

1. Fetches all schools from database
2. Calculates distance from user location
3. Sorts schools by nearest distance
4. Returns sorted list

---

# Testing with Postman

### Steps

1. Open Postman
2. Create POST request → `/addSchool`
3. Add JSON body
4. Send request
5. Create GET request → `/listSchools`
6. Add latitude & longitude
7. Verify sorted response

---

# Deployment

You can deploy this API on:

- Render
- Railway
- Heroku
- AWS EC2

---

# Deliverables

- ✔ Source Code Repository
- ✔ Live API Endpoints
- ✔ MySQL Database Schema
- ✔ Postman Collection
- ✔ Distance-based Sorting

---

# Author

**Syed Anas**
