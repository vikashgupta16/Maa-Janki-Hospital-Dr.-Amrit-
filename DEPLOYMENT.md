# 🚀 Deployment Guide for Maa Janki Hospital

## Complete Vercel Deployment Instructions

### 📋 Prerequisites
- Vercel account (free)
- GitHub repository
- MongoDB Atlas account
- Gmail with App Password

---

## 🔥 Part 1: Backend Deployment (API)

### Step 1: Deploy Backend to Vercel

1. **Login to Vercel:**
   ```bash
   npm install -g vercel
   vercel login
   ```

2. **Deploy Backend:**
   ```bash
   cd backend
   vercel
   ```

3. **Follow prompts:**
   - Project name: `maa-janki-hospital-api`
   - Framework: Other
   - Directory: `./` (current directory)

### Step 2: Configure Environment Variables in Vercel

Go to Vercel Dashboard → Your Backend Project → Settings → Environment Variables

Add these variables:
```
NODE_ENV = production
MONGODB_URI = mongodb+srv://dramritkumarmaajanki:36NXpI1fcNPaYEjP@cluster0.uzxvbf0.mongodb.net/
EMAIL_USER = dr.amritkumar.maa.janki@gmail.com
EMAIL_PASS = bovb xeae zoex nbst
```

### Step 3: Redeploy Backend
```bash
vercel --prod
```

**Your backend will be available at:** `https://maa-janki-hospital-api.vercel.app`

---

## 🌐 Part 2: Frontend Deployment

### Step 1: Update API URL in Frontend

Update `.env.production`:
```env
VITE_API_URL=https://your-backend-url.vercel.app
VITE_ENVIRONMENT=production
```

### Step 2: Deploy Frontend to Vercel

1. **From root directory:**
   ```bash
   vercel
   ```

2. **Follow prompts:**
   - Project name: `maa-janki-hospital`
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`

### Step 3: Configure Environment Variables

Go to Vercel Dashboard → Your Frontend Project → Settings → Environment Variables

Add:
```
VITE_API_URL = https://your-backend-url.vercel.app
VITE_ENVIRONMENT = production
```

### Step 4: Deploy Production
```bash
vercel --prod
```

---

## 🔗 Quick Deploy Commands

### Method 1: Using Vercel CLI (Recommended)

```bash
# 1. Deploy Backend
cd backend
vercel --prod

# 2. Get backend URL and update frontend config
# Update VITE_API_URL in .env.production

# 3. Deploy Frontend
cd ..
vercel --prod
```

### Method 2: GitHub Integration

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Production ready deployment"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to vercel.com
   - Import GitHub repository
   - Configure environment variables
   - Deploy automatically

---

## 🛡️ Security Configuration

### Admin Dashboard Protection
- Username: `admin`
- Password: `MaaJanki@2025`
- Authentication stored in localStorage
- Protected routes implemented

### Production Security Checklist
- ✅ Environment variables secured
- ✅ CORS configured for production domains
- ✅ Rate limiting enabled
- ✅ Input validation implemented
- ✅ Admin authentication required

---

## 🔧 Post-Deployment Configuration

### 1. Update CORS in Backend
Add your frontend domain to CORS configuration in `backend/server.js`:

```javascript
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://your-frontend-domain.vercel.app'
  ],
  credentials: true
}));
```

### 2. Test Deployment

Test these URLs:
- **Frontend:** `https://your-frontend.vercel.app`
- **Contact Form:** `https://your-frontend.vercel.app/contact`
- **Admin Dashboard:** `https://your-frontend.vercel.app/admin`
- **Backend API:** `https://your-backend.vercel.app/health`

### 3. Email Testing
Submit a test contact form to verify:
- ✅ Email notifications working
- ✅ Database storage working
- ✅ Admin dashboard displaying data

---

## 📱 Production URLs

After deployment, you'll have:

- **Hospital Website:** `https://maa-janki-hospital.vercel.app`
- **Admin Dashboard:** `https://maa-janki-hospital.vercel.app/admin`
- **Backend API:** `https://maa-janki-hospital-api.vercel.app`

---

## 🐛 Troubleshooting

### Common Issues:

1. **API Not Working:**
   - Check environment variables in Vercel dashboard
   - Verify MongoDB connection string
   - Check CORS configuration

2. **Email Not Sending:**
   - Verify Gmail App Password
   - Check EMAIL_USER and EMAIL_PASS variables
   - Test email configuration

3. **Admin Dashboard Not Loading:**
   - Check API URL in frontend environment variables
   - Verify backend deployment is successful
   - Check browser console for errors

### Debug Commands:
```bash
# Check backend health
curl https://your-backend.vercel.app/health

# Test contact form API
curl -X POST https://your-backend.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","phone":"9876543210","message":"Test message","urgency":"normal"}'
```

---

## 🎉 Success Checklist

After successful deployment:
- ✅ Frontend website accessible
- ✅ Contact form submitting data
- ✅ Emails being sent (check hospital email)
- ✅ Admin dashboard working with authentication
- ✅ MongoDB storing data
- ✅ All pages responsive and functional

---

## 📞 Support

If you encounter any issues:
- Check Vercel function logs
- Monitor MongoDB Atlas connections
- Verify email service status
- Contact technical support if needed

**Ready to deploy! 🚀**
