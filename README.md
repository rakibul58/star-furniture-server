# Star Furniture

[Live Site](https://star-furniture-server.vercel.app/)

A Node.js/Express.js backend server for the Star Furniture e-commerce platform that handles furniture services and user comments.

## Features

- RESTful API endpoints for furniture services management
- MongoDB integration for data persistence
- CRUD operations for furniture services
- Comments management system
- Environment variable configuration
- CORS enabled for cross-origin requests

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Cors
- Dotenv

## Prerequisites

Before running this project, make sure you have:

- Node.js installed (v14+ recommended)
- MongoDB Atlas account
- Required environment variables configured

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_password
PORT=5000 (optional, defaults to 5000)
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/star-furniture-server.git
cd star-furniture-server
```

2. Install dependencies:
```bash
npm install
```

3. Run the server:
```bash
node index.js
```

## API Endpoints

### Services

- `GET /services` - Get all services
- `GET /services/:id` - Get a specific service by ID
- `POST /services` - Create a new service
- `PATCH /services/:id` - Update a service
- `DELETE /services/:id` - Delete a service

### Comments

- `GET /comments` - Get all comments

## Data Models

### Service Schema
```javascript
{
    title: String,
    image: String,
    price: String,
    description: String
}
```

## Error Handling

The server implements error handling for:
- Database connection errors
- Invalid request parameters
- Server errors

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
