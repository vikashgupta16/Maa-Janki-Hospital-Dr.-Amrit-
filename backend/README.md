# Maa Janki Hospital - Backend API

Complete backend API for Maa Janki Hospital & Child Care website with MongoDB and email functionality.

## 🌟 Features

- **Contact Form API** - Handle patient inquiries with validation
- **MongoDB Integration** - Store all contact submissions
- **Email Notifications** - Automatic email to hospital and patient
- **Admin Dashboard API** - Statistics and contact management
- **Emergency Handling** - Special processing for urgent cases
- **Rate Limiting** - Prevent spam submissions
- **Input Validation** - Comprehensive data validation with Joi
- **Error Handling** - Robust error management

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account (or local MongoDB)
- Gmail account with App Password

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment Setup:**
   Create a `.env` file in the root directory with:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   EMAIL_USER=your_gmail@gmail.com
   EMAIL_PASS=your_app_password
   ```

3. **Start the server:**
   ```bash
   # Development
   npm run dev

   # Production
   npm start
   ```

## 📧 Email Configuration

### Setting up Gmail App Password:

1. Enable 2-Factor Authentication on your Google account
2. Go to [Google Account Settings](https://myaccount.google.com/)
3. Navigate to Security → App passwords
4. Generate a new app password for "Mail"
5. Use this password in the `EMAIL_PASS` environment variable

## 🛠️ API Endpoints

### Contact Form
- **POST** `/api/contact` - Submit contact form
- **GET** `/api/contact` - Get all contacts (with pagination)
- **GET** `/api/contact/dashboard` - Get statistics
- **GET** `/api/contact/emergency` - Get emergency contacts
- **PUT** `/api/contact/:id/status` - Update contact status

### Health Check
- **GET** `/health` - Server health check
- **GET** `/` - API information

## 📊 Request/Response Examples

### Submit Contact Form
```bash
POST /api/contact
Content-Type: application/json

{
  "name": "राम कुमार",
  "phone": "9876543210",
  "email": "ram@example.com",
  "childAge": "2 years",
  "message": "मेरे बच्चे को बुखार है",
  "urgency": "urgent"
}
```

**Response:**
```json
{
  "success": true,
  "message": "आपका संदेश सफलतापूर्वक भेजा गया है। हम जल्द ही आपसे संपर्क करेंगे।",
  "data": {
    "id": "607c1f1e1234567890abcdef",
    "name": "राम कुमार",
    "phone": "9876543210",
    "urgency": "urgent",
    "submittedAt": "2024-01-15T10:30:00.000Z",
    "emailSent": true
  },
  "emailStatus": "sent"
}
```

## 🔒 Security Features

- **Rate Limiting** - 5 submissions per 15 minutes per IP
- **Input Validation** - Joi schema validation
- **CORS Protection** - Configured for specific origins
- **Helmet Security** - HTTP security headers
- **Error Sanitization** - No sensitive data in error responses

## 📈 Monitoring

### Logs
The server provides detailed logging for:
- Contact form submissions
- Email sending status
- Emergency contact alerts
- Database operations
- API requests

### Dashboard Statistics
- Total contacts received
- Today's submissions
- Emergency contacts count
- Status distribution
- Recent contacts list

## 🚨 Emergency Handling

When a contact is marked as "emergency":
- Immediate email notification to hospital
- Special email template with urgent styling
- Console alert for server monitoring
- Prioritized in dashboard view

## 🔧 Production Deployment

### Using PM2 (Recommended)
```bash
npm install -g pm2
pm2 start server.js --name "maa-janki-api"
pm2 startup
pm2 save
```

### Environment Variables for Production
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://...
EMAIL_USER=dr.amritkumar.maa.janki@gmail.com
EMAIL_PASS=your_app_password
```

### Nginx Configuration
```nginx
server {
    listen 80;
    server_name api.maajanki.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🧪 Testing

Run the test script to verify all functionality:
```bash
node test-api.js
```

This will test:
- Health check endpoint
- Contact form submission
- Email notifications
- Dashboard statistics
- Emergency contact handling

## 📱 Frontend Integration

Update your frontend to use the API:
```javascript
const response = await fetch('http://localhost:5000/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(contactData),
});
```

## 🛡️ Error Handling

The API returns consistent error responses:
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "phone",
      "message": "Please enter a valid 10-digit Indian phone number"
    }
  ]
}
```

## 📞 Support

For technical support:
- **Hospital Phone:** 9128231000, 9525552675
- **Email:** dr.amritkumar.maa.janki@gmail.com
- **Location:** Mairwa, West Champaran, Bihar

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**माँ जानकी हॉस्पिटल एंड चाइल्ड केयर**  
विशेषज्ञ बाल चिकित्सा देखभाल | Expert Pediatric Care  
Mairwa, Bihar | 24x7 Emergency Services
