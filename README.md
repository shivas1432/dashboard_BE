# Dashboard Backend

Node.js backend API for the portfolio analytics dashboard, providing user tracking and engagement data.

## Overview

This backend service manages and serves analytics data for the portfolio dashboard. It tracks resume downloads, guest logins, and provides aggregated statistics for monitoring portfolio performance.

## Features

### Data Management
- Resume user tracking and storage
- Guest login monitoring
- Database connection pooling
- Real-time data retrieval

### API Endpoints
- Fetch resume download statistics
- Retrieve guest user data
- Aggregate user engagement metrics

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MySQL2** - Database driver with connection pooling
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## Quick Start

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project
cd dashboard_BE

# Install dependencies
npm install

# Start server
npm start
```

Server runs at: `http://localhost:5000`

## Configuration

Create a `.env` file in the root directory:

```env
PORT=5000
DB_HOST=your_mysql_host
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_DATABASE=your_database_name
```

## API Endpoints

### Resume Users
```
GET /resumeusers
```
Returns list of users who downloaded the resume with total count.

**Response:**
```json
{
  "totalCount": 25,
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
  ]
}
```

### Guest Users
```
GET /guests
```
Returns list of guest visitors with total count.

**Response:**
```json
{
  "totalCount": 150,
  "guests": [
    {
      "id": 1,
      "name": "Guest User"
    }
  ]
}
```

## Database Schema

### resumeusers table
- `id` - Primary key
- `name` - User name
- `email` - User email

### guests table
- `id` - Primary key
- `name` - Guest name

## Project Structure

```
dashboard_BE/
├── server.js           # Main server file
├── package.json        # Dependencies
├── .env               # Environment variables
└── .gitignore         # Git ignore file
```

## Database Connection

Uses MySQL connection pooling for efficient database management:
- Maximum 10 concurrent connections
- Automatic connection management
- Error handling and recovery

## Error Handling

- Database connection error logging
- Query error responses
- Graceful server startup validation

## Integration

This backend serves the dashboard frontend with:
- Real-time user statistics
- Resume download tracking
- Guest visit monitoring
- Portfolio engagement metrics

## Security

- Environment variable protection
- CORS configuration
- Connection pooling limits
- Input validation on queries
---

**Note**: Ensure your MySQL database is running and tables are created before starting the server.
