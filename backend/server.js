import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import { testEmailConfig } from './config/email.js';
import contactRoutes from './routes/contact.js';

// Load environment variables
dotenv.config({ path: '../.env' });

// Initialize Express app
const app = express();

// Trust proxy for accurate IP addresses
app.set('trust proxy', 1);

// Connect to MongoDB
connectDB();

// Test email configuration on startup
testEmailConfig();

// Global rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again later.'
  }
});

// Middleware
app.use(helmet({
  crossOriginResourcePolicy: false,
}));

app.use(cors({
  origin: [
    'http://localhost:5173', // Vite dev server
    'http://localhost:3000', // React dev server
    'http://127.0.0.1:5173',
    'http://127.0.0.1:3000',
    // Production domains
    'https://maa-janki-hospital-dr-amrit.vercel.app',
    'https://maa-janki-hospital-dr-amrit-*.vercel.app',
    'https://*.vercel.app'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

app.use(limiter);
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'Maa Janki Hospital API is running',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// API routes
app.use('/api/contact', contactRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: '🏥 माँ जानकी हॉस्पिटल एंड चाइल्ड केयर API',
    description: 'Backend API for Maa Janki Hospital & Child Care website',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      contact: '/api/contact',
      dashboard: '/api/contact/dashboard',
      emergency: '/api/contact/emergency'
    },
    hospital: {
      name: 'माँ जानकी हॉस्पिटल एंड चाइल्ड केयर',
      location: 'Mairwa, Bihar',
      phone: ['9128231000', '9525552675'],
      services: ['NICU', 'Emergency Care', 'Pediatric Consultation'],
      doctor: 'Dr. Amrit Kumar (BAMS, KSDSU Darbhanga)'
    }
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found',
    availableEndpoints: [
      'GET /',
      'GET /health',
      'POST /api/contact',
      'GET /api/contact',
      'GET /api/contact/dashboard',
      'GET /api/contact/emergency',
      'PUT /api/contact/:id/status'
    ]
  });
});

// Global error handler
app.use((error, req, res, next) => {
  console.error('❌ Global error handler:', error);
  
  res.status(error.status || 500).json({
    success: false,
    message: error.message || 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
  });
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log('❌ Unhandled Promise Rejection:', err.message);
  // Close server & exit process
  server.close(() => {
    process.exit(1);
  });
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.log('❌ Uncaught Exception:', err.message);
  console.log('Shutting down the server due to uncaught exception');
  process.exit(1);
});

// Start server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`
🚀 ============================================
🏥 माँ जानकी हॉस्पिटल एंड चाइल्ड केयर API
🚀 ============================================
✅ Server running on port ${PORT}
🌐 Environment: ${process.env.NODE_ENV || 'development'}
📅 Started at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
🔗 API URL: http://localhost:${PORT}
📊 Health Check: http://localhost:${PORT}/health
📝 Contact API: http://localhost:${PORT}/api/contact
🚀 ============================================
  `);
});

export default app;
