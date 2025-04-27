# Toyshop API Documentation

## Overview

The Toyshop API is a RESTful service designed to manage a toy shop's inventory, orders, and customers. It provides endpoints for creating, reading, updating, and deleting data related to toys, customers, and orders.

### Features

- Manage toy inventory (CRUD operations)
- Handle customer information
- Process orders and track their status

---

## API Endpoints

### Toys

- **GET /toys**: Retrieve a list of all toys.
- **GET /toys/{id}**: Retrieve details of a specific toy.
- **POST /toys**: Add a new toy to the inventory.
- **PUT /toys/{id}**: Update details of a specific toy.
- **DELETE /toys/{id}**: Remove a toy from the inventory.

### Customers

- **GET /customers**: Retrieve a list of all customers.
- **GET /customers/{id}**: Retrieve details of a specific customer.
- **POST /customers**: Add a new customer.
- **PUT /customers/{id}**: Update details of a specific customer.
- **DELETE /customers/{id}**: Remove a customer.

### Orders

- **GET /orders**: Retrieve a list of all orders.
- **GET /orders/{id}**: Retrieve details of a specific order.
- **POST /orders**: Create a new order.
- **PUT /orders/{id}**: Update details of a specific order.
- **DELETE /orders/{id}**: Cancel an order.

---

## Database Schema

### Tables

#### Toys

| Column       | Type        | Description              |
|--------------|-------------|--------------------------|
| id           | INT         | Primary key              |
| name         | VARCHAR(50) | Name of the toy          |
| price        | DECIMAL     | Price of the toy         |
| stock        | INT         | Quantity in stock        |
| description  | TEXT        | Description of the toy   |

#### Customers

| Column       | Type        | Description              |
|--------------|-------------|--------------------------|
| id           | INT         | Primary key              |
| name         | VARCHAR(50) | Name of the customer     |
| email        | VARCHAR(100)| Email address            |
| phone        | VARCHAR(15) | Phone number             |
| address      | TEXT        | Address of the customer  |

#### Orders

| Column       | Type        | Description              |
|--------------|-------------|--------------------------|
| id           | INT         | Primary key              |
| customer_id  | INT         | Foreign key (Customers)  |
| order_date   | DATETIME    | Date of the order        |
| total_amount | DECIMAL     | Total order amount       |

#### Order_Items

| Column       | Type        | Description              |
|--------------|-------------|--------------------------|
| id           | INT         | Primary key              |
| order_id     | INT         | Foreign key (Orders)     |
| toy_id       | INT         | Foreign key (Toys)       |
| quantity     | INT         | Quantity of the toy      |
| price        | DECIMAL     | Price per unit           |

---

## How to Use

1. Clone the repository.
2. Set up the database using the schema above.
3. Run the API server.
4. Use tools like Postman or cURL to interact with the API.

---