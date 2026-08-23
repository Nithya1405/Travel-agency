# REST API Specification — Natarajan Travel Agency

All endpoints are prefixed with `/api`. Responses strictly use the standardized JSON envelope.

---

## 1. Standard Response Formats

### Success (2xx)
```json
{
  "success": true,
  "message": "Cars retrieved successfully",
  "data": {
    "items": [],
    "total": 0
  }
}
```

### Error (4xx / 5xx)
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "pickupDate",
      "message": "Pickup date must be in the future"
    }
  ]
}
```

---

## 2. API Endpoint Matrix

### 2.1 System Health
* `GET /api/health`
  - Response: `{ "success": true, "message": "Server is healthy", "data": { "status": "UP", "timestamp": "...", "uptime": 120 } }`

---

### 2.2 Cars (`/api/cars`)
* `GET /api/cars`
  - Query Params: `category`, `fuelType`, `transmission`, `seats`, `minPrice`, `maxPrice`, `available`, `sort`, `page`, `limit`
* `GET /api/cars/:id`
  - Retrieve single car details by MongoDB ObjectId
* `POST /api/cars` *(Admin)*
  - Create a new car record
* `PUT /api/cars/:id` *(Admin)*
  - Update vehicle attributes / pricing / images
* `DELETE /api/cars/:id` *(Admin)*
  - Soft-delete or remove car record

---

### 2.3 Bookings (`/api/bookings`)
* `POST /api/bookings`
  - Submit booking inquiry / reservation request
  - Body: `{ carId, customer: { name, email, phone }, pickupLocation, dropLocation, pickupDate, returnDate, notes }`
* `GET /api/bookings/:id`
  - Retrieve booking by ID or human-readable `bookingNumber`
* `GET /api/bookings` *(Admin)*
  - List bookings with filtering by status, date range, search term
* `PUT /api/bookings/:id/status` *(Admin)*
  - Update status: `Pending` | `Confirmed` | `Cancelled` | `Completed`

---

### 2.4 Travel Packages (`/api/packages`)
* `GET /api/packages`
  - Retrieve all active travel packages
* `GET /api/packages/:id`
  - Retrieve single package details
* `POST /api/packages` *(Admin)*
  - Add new tour package

---

### 2.5 Reviews & Testimonials (`/api/reviews`)
* `GET /api/reviews`
  - Retrieve approved customer reviews
* `POST /api/reviews`
  - Submit a new review for moderation

---

### 2.6 FAQs (`/api/faqs`)
* `GET /api/faqs`
  - Retrieve categorized FAQ entries

---

### 2.7 Contact Messages (`/api/contact`)
* `POST /api/contact`
  - Submit an inquiry message
  - Body: `{ name, email, phone, subject, message }`

---

### 2.8 AI Chat Assistant (`/api/chat`)
* `POST /api/chat`
  - Query the intelligent travel agent
  - Body: `{ sessionId: string, message: string }`
  - Response: `{ success: true, data: { reply: string, suggestions: string[], toolResults?: any } }`

---

### 2.9 Authentication (`/api/auth`)
* `POST /api/auth/register`
  - Register new customer account
* `POST /api/auth/login`
  - Authenticate and receive JWT token
* `GET /api/auth/me` *(Authenticated)*
  - Retrieve current user profile
