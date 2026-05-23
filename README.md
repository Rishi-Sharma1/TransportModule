# TransportOps - Transport Management System

A full-stack Transport Management System built for manufacturing and logistics operations. The application helps manage vehicles, drivers, and delivery operations through a modern dashboard interface.

---

# Features

## Authentication

* JWT-based login system
* Protected frontend and backend routes
* Role-based access control

---

## Vehicle Management

* Create vehicles
* View all vehicles
* Update vehicle details
* Soft delete vehicles

---

## Driver Management

* Create drivers
* Manage driver information
* Assign drivers to vehicles
* Driver status tracking

---

## Delivery Management

* Create delivery orders
* Assign vehicles and drivers
* Track delivery status
* View all deliveries

---

## Dashboard

* Real-time statistics
* Total vehicles
* Total drivers
* Total deliveries
* Active deliveries overview

---

# Tech Stack

## Frontend

* React.js
* Vite
* Ant Design
* Axios
* React Router DOM

---

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Zod Validation

---

# Project Structure

## Backend

```bash
server/
├── src/
│   ├── config/
│   ├── middlewares/
│   ├── modules/
│   │   ├── auth/
│   │   ├── vehicle/
│   │   ├── driver/
│   │   └── delivery/
│   ├── routes/
│   ├── utils/
│   ├── app.js
│   └── server.js
```

---

## Frontend

```bash
client/
├── src/
│   ├── layouts/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── store/
│   ├── App.jsx
│   └── main.jsx
```

---

# Installation

## Clone Repository

```bash
git clone <YOUR_GITHUB_REPO_URL>
```

---

# Backend Setup

```bash
cd server

npm install
```

Create `.env` file:

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET_KEY
```

Run backend:

```bash
npm run dev
```

---

# Frontend Setup

```bash
cd client

npm install

npm run dev
```

---

# API Endpoints

## Authentication

### Register

```http
POST /api/v1/auth/register
```

### Login

```http
POST /api/v1/auth/login
```

---

## Vehicles

### Get All Vehicles

```http
GET /api/v1/vehicles
```

### Create Vehicle

```http
POST /api/v1/vehicles
```

### Update Vehicle

```http
PATCH /api/v1/vehicles/:id
```

### Delete Vehicle

```http
DELETE /api/v1/vehicles/:id
```

---

## Drivers

### Get All Drivers

```http
GET /api/v1/drivers
```

### Create Driver

```http
POST /api/v1/drivers
```

### Update Driver

```http
PATCH /api/v1/drivers/:id
```

### Delete Driver

```http
DELETE /api/v1/drivers/:id
```

---

## Deliveries

### Get All Deliveries

```http
GET /api/v1/deliveries
```

### Create Delivery

```http
POST /api/v1/deliveries
```

### Update Delivery

```http
PATCH /api/v1/deliveries/:id
```

### Delete Delivery

```http
DELETE /api/v1/deliveries/:id
```
