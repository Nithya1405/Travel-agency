# Database Schema & Data Dictionary — Natarajan Travel Agency

This document defines the MongoDB collections, field types, constraints, relationships, and indexing strategies for the Natarajan Travel Agency database.

---

## 1. Collections Overview

| Collection | Model Name | Description |
| :--- | :--- | :--- |
| `users` | `User` | Customer and Admin accounts |
| `cars` | `Car` | Rental car inventory and specifications |
| `bookings` | `Booking` | Car rental reservation requests and statuses |
| `packages` | `Package` | Pre-configured travel itineraries and tour packages |
| `reviews` | `Review` | Customer feedback and testimonials |
| `faqs` | `FAQ` | Categorized Frequently Asked Questions |
| `contact_messages` | `ContactMessage` | Inquiries submitted via the Contact form |
| `chat_sessions` | `ChatSession` | Contextual conversation history for AI assistant |

---

## 2. Detailed Schemas

### 2.1 User (`users`)
```typescript
interface IUser {
  _id: ObjectId;
  name: string;
  email: string;
  phone: string;
  passwordHash: string;
  role: 'customer' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}
```
* **Indexes**: `{ email: 1 }` (unique), `{ role: 1 }`.

---

### 2.2 Car (`cars`)
```typescript
interface ICar {
  _id: ObjectId;
  name: string;            // e.g. "Toyota Innova Crysta"
  brand: string;           // e.g. "Toyota"
  model: string;           // e.g. "Innova Crysta 2.4 VX"
  category: 'Sedan' | 'SUV' | 'Hatchback' | 'Luxury' | 'Tempo Traveller';
  images: string[];        // Array of URLs
  seats: number;           // e.g. 7
  transmission: 'Manual' | 'Automatic';
  fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
  pricePerDay: number;     // In INR (₹)
  features: string[];      // ['AC', 'Bluetooth', 'Airbags', 'GPS', 'Luggage Carrier']
  description: string;
  available: boolean;      // true/false
  rating?: number;         // e.g. 4.8
  reviewCount?: number;
  createdAt: Date;
  updatedAt: Date;
}
```
* **Indexes**: `{ category: 1, available: 1 }`, `{ pricePerDay: 1 }`.

---

### 2.3 Booking (`bookings`)
```typescript
interface IBooking {
  _id: ObjectId;
  bookingNumber: string;   // Human-readable code, e.g. "NTA-2026-0001"
  customer: {
    name: string;
    email: string;
    phone: string;
    userId?: ObjectId;     // Optional reference if registered
  };
  car: ObjectId | ICar;    // Ref -> 'Car'
  pickupLocation: string;
  dropLocation: string;
  pickupDate: Date;
  returnDate: Date;
  totalDays: number;
  estimatedTotal: number;  // In INR (₹)
  status: 'Pending' | 'Confirmed' | 'Cancelled' | 'Completed';
  customerNotes?: string;
  adminNotes?: string;
  createdAt: Date;
  updatedAt: Date;
}
```
* **Indexes**: `{ bookingNumber: 1 }` (unique), `{ 'customer.email': 1 }`, `{ status: 1 }`, `{ pickupDate: 1 }`.

---

### 2.4 Travel Package (`packages`)
```typescript
interface IPackage {
  _id: ObjectId;
  title: string;           // e.g. "Ooty & Kodaikanal Hill Tour"
  description: string;
  destination: string;     // e.g. "Ooty, Tamil Nadu"
  duration: string;        // e.g. "3 Days / 2 Nights"
  price: number;           // In INR (₹)
  images: string[];
  highlights: string[];
  available: boolean;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

---

### 2.5 Review (`reviews`)
```typescript
interface IReview {
  _id: ObjectId;
  customerName: string;
  location?: string;       // e.g. "Chennai"
  rating: number;          // 1 to 5
  comment: string;
  carOrPackage?: string;   // e.g. "Innova Crysta Rental"
  approved: boolean;       // Admin moderation flag
  createdAt: Date;
}
```

---

### 2.6 FAQ (`faqs`)
```typescript
interface IFAQ {
  _id: ObjectId;
  question: string;
  answer: string;
  category: 'Booking' | 'Pricing' | 'Vehicles' | 'Cancellation' | 'General';
  order: number;
  active: boolean;
}
```

---

### 2.7 Contact Message (`contact_messages`)
```typescript
interface IContactMessage {
  _id: ObjectId;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  status: 'Unread' | 'Read' | 'Replied';
  createdAt: Date;
}
```

---

### 2.8 Chat Session (`chat_sessions`)
```typescript
interface IChatMessage {
  sender: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  toolCalls?: Array<{
    name: string;
    params: Record<string, any>;
    result: Record<string, any>;
  }>;
}

interface IChatSession {
  _id: ObjectId;
  sessionId: string;
  messages: IChatMessage[];
  createdAt: Date;
  updatedAt: Date;
}
```
