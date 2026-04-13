# Hola9 v2 Database Schemas

## PostgreSQL (Relational Data)

### 1. Users Table
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    full_name VARCHAR(255),
    role VARCHAR(50) DEFAULT 'user', -- 'user', 'admin', 'moderator'
    trust_score INT DEFAULT 0,
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### 2. User Profiles
```sql
CREATE TABLE user_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    avatar_url TEXT,
    phone_number VARCHAR(20),
    location_name TEXT,
    bio TEXT,
    preferences JSONB,
    last_active TIMESTAMP WITH TIME ZONE
);
```

### 3. Transactions (Promotions/Payments)
```sql
CREATE TABLE transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    amount DECIMAL(10, 2),
    currency VARCHAR(10),
    status VARCHAR(50), -- 'pending', 'completed', 'failed'
    payment_method VARCHAR(50),
    plan_id VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

---

## MongoDB (Dynamic Content)

### 1. Listings Collection
```json
{
  "_id": "ObjectId",
  "title": "String",
  "slug": "String",
  "description": "String",
  "price": {
    "amount": "Number",
    "currency": "String",
    "isNegotiable": "Boolean"
  },
  "category": "String",
  "subCategory": "String",
  "location": {
    "type": "Point",
    "coordinates": [longitude, latitude],
    "city": "String",
    "state": "String",
    "address": "String"
  },
  "media": {
    "images": ["String (S3 URLs)"],
    "videos": ["String (S3 URLs)"]
  },
  "attributes": {
    "// Dynamic fields based on category": "Mixed",
    "condition": "String",
    "brand": "String",
    "model": "String",
    "year": "Number"
  },
  "seller": {
    "userId": "UUID",
    "name": "String",
    "trustScore": "Number"
  },
  "stats": {
    "views": "Number",
    "clicks": "Number",
    "savedCount": "Number"
  },
  "status": "String", // 'active', 'sold', 'expired', 'under_review'
  "promotion": {
    "isFeatured": "Boolean",
    "expiresAt": "Date"
  },
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### 2. Notifications Collection
```json
{
  "_id": "ObjectId",
  "userId": "UUID",
  "type": "String", // 'price_drop', 'new_listing', 'message', 'alert'
  "content": "String",
  "read": "Boolean",
  "metadata": "Object",
  "createdAt": "Date"
}
```

---

## Redis (Caching & Sessions)
- `session:{userId}`: User authentication state.
- `listing_views:{listingId}`: Hot counter for views.
- `search_suggestions:{query}`: Cached results for frequent lookups.
- `online_users`: Set of active user IDs.
