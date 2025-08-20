# API Contracts - Coders Software Agency Website

## Overview
This document outlines the backend implementation requirements to integrate with the frontend-only website that currently uses mock data.

## Current Mock Data Usage
- **Location**: `/app/frontend/src/utils/mockApi.js`
- **Functions**: `submitContactForm(formData)`
- **Data Flow**: Contact form submissions are currently logged to console

## Backend Implementation Requirements

### 1. Contact Form API
**Endpoint**: `POST /api/contact`

**Request Body**:
```json
{
  "name": "string (required)",
  "email": "string (required, email format)",
  "company": "string (optional)",
  "projectType": "string (optional)",
  "budget": "string (optional)", 
  "message": "string (required)"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Contact form submitted successfully",
  "id": "generated_submission_id"
}
```

**Functionality**:
- Validate form data
- Store submission in MongoDB
- Send email notification to `rub97ab@gmail.com`
- Return success/error response

### 2. Email Integration
**Service**: Email sending capability
**Recipient**: `rub97ab@gmail.com`
**Purpose**: Forward client inquiries from contact form

**Email Template**:
```
Subject: New Contact Form Submission - Coders

Name: {name}
Email: {email}
Company: {company}
Project Type: {projectType}
Budget: {budget}

Message:
{message}

---
Submitted at: {timestamp}
```

## Database Schema

### Contact Submissions Collection
```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required),
  company: String,
  projectType: String,
  budget: String,
  message: String (required),
  createdAt: Date (default: now),
  status: String (default: "new") // new, contacted, completed
}
```

## Frontend Integration Changes
1. Remove mock API import from ContactSection.js
2. Replace mockApi.submitContactForm() with actual API call to `/api/contact`
3. Handle real API responses and errors
4. Update success/error messaging

## Error Handling
- Validation errors (400)
- Server errors (500)
- Email sending failures
- Database connection issues

## Security Considerations
- Input validation and sanitization
- Rate limiting for contact form
- CORS configuration
- Email content filtering

## Environment Variables Required
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
NOTIFICATION_EMAIL=rub97ab@gmail.com
```

## Success Criteria
- ✅ Contact form submissions save to database
- ✅ Email notifications sent to rub97ab@gmail.com
- ✅ Proper error handling and user feedback
- ✅ Form validation and security measures
- ✅ Frontend shows real-time success/error states