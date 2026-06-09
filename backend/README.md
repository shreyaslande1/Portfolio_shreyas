# Portfolio Backend API

Professional Node.js/Express backend for Shreyas Lande's portfolio website.

---

## 📁 Folder Structure

```
backend/
├── server.js                 # Main Express server
├── package.json             # Project dependencies
├── .env                     # Environment variables (local)
├── .env.example             # Environment variables template
├── .gitignore               # Git ignore patterns
│
├── config/                  # Configuration files
│   └── database.js          # MongoDB connection setup
│
├── models/                  # Mongoose schemas
│   ├── Project.js           # Project schema
│   ├── Message.js           # Contact message schema
│   └── Skill.js             # Skill schema
│
├── controllers/             # Business logic
│   ├── projectController.js # Project CRUD operations
│   └── contactController.js # Contact form handling
│
├── routes/                  # API endpoints
│   ├── projectRoutes.js     # /api/projects routes
│   └── contactRoutes.js     # /api/contact routes
│
├── middleware/              # Custom middleware
│   ├── auth.js              # Authentication middleware
│   └── validation.js        # Input validation
│
└── utils/                   # Utility functions
```

---

## 📂 Folder Descriptions

### **server.js**

- Main Express application file
- Configures middleware (CORS, JSON parser, error handlers)
- Initializes database connection
- Starts the server on specified port
- Handles graceful shutdown

### **config/**

- **database.js**: MongoDB connection configuration with retry logic

### **models/**

- **Project.js**: Schema for portfolio projects (title, description, technologies, links)
- **Message.js**: Schema for contact form messages (name, email, message, status)
- **Skill.js**: Schema for technical skills (name, proficiency, category)

### **controllers/**

- **projectController.js**: CRUD operations for projects (get all, get one, create, update, delete)
- **contactController.js**: Message handling (send, retrieve, mark read, delete)

### **routes/**

- **projectRoutes.js**: Routes for `/api/projects` endpoints
- **contactRoutes.js**: Routes for `/api/messages` endpoints

### **middleware/**

- **auth.js**: JWT authentication middleware for protected routes
- **validation.js**: Input validation for contact form and other data

### **utils/**

- Reserved for helper functions (email sending, file uploads, etc.)

---

## 🚀 Getting Started

### Installation

```bash
cd backend
npm install
```

### Environment Setup

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

Edit `.env` with your settings:

- `MONGODB_URI`: Your MongoDB connection string
- `PORT`: Server port (default: 5000)
- `CLIENT_URL`: Frontend URL for CORS

### Running the Server

**Development** (with auto-reload):

```bash
npm run dev
```

**Production**:

```bash
npm start
```

---

## 📡 API Endpoints

### Health Check

```
GET /api/health
```

Response: Server status

### Projects

```
GET     /api/projects           # Get all projects
GET     /api/projects/:id       # Get single project
POST    /api/projects           # Create project (admin)
PUT     /api/projects/:id       # Update project (admin)
DELETE  /api/projects/:id       # Delete project (admin)
```

### Messages (Contact)

```
POST    /api/messages           # Send contact message
GET     /api/messages           # Get all messages (admin)
GET     /api/messages/:id       # Get single message (admin)
PATCH   /api/messages/:id/read  # Mark as read (admin)
DELETE  /api/messages/:id       # Delete message (admin)
```

---

## 🔑 Key Features

### ✅ Express.js Server

- RESTful API structure
- Modular route organization
- Error handling middleware

### ✅ CORS Configuration

- Allows requests from frontend (localhost:5173)
- Configurable origin
- Credentials support

### ✅ MongoDB Integration

- Mongoose ODM for database operations
- Schema validation
- Timestamps on all models
- Retry connection logic

### ✅ Environment Variables

- Sensitive data in `.env`
- Development vs production configs
- Easy deployment configuration

### ✅ Middleware

- JSON body parser
- CORS middleware
- Request logging
- Global error handler
- 404 handler

### ✅ Validation

- Input validation middleware
- Email format validation
- Required field checking

### ✅ Authentication Ready

- JWT middleware structure
- Protected route examples
- Admin authorization pattern

---

## 📝 Configuration

### Environment Variables

See `.env.example` for all available variables:

```env
# Server
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173

# Database
MONGODB_URI=mongodb://localhost:27017/portfolio

# Authentication
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d

# Email (for future contact notifications)
SMTP_SERVICE=gmail
SMTP_EMAIL=your_email@gmail.com
```

---

## 🛡️ Error Handling

The server includes comprehensive error handling:

- **400**: Bad Request (validation errors)
- **401**: Unauthorized (missing/invalid token)
- **403**: Forbidden (invalid token)
- **404**: Not Found (route not found)
- **500**: Server Error (internal errors)

---

## 📦 Dependencies

### Production

- **express** (5.2.1): Web framework
- **mongoose** (9.6.3): MongoDB ODM
- **cors** (2.8.6): Cross-origin requests
- **dotenv** (17.4.2): Environment variables

### Development

- **nodemon** (3.1.14): Auto-reload on file changes

---

## 🔄 Development Workflow

1. **Start development server**:

   ```bash
   npm run dev
   ```

2. **Create model** in `models/YourModel.js`

3. **Create controller** in `controllers/yourController.js`

4. **Create routes** in `routes/yourRoutes.js`

5. **Add routes to server.js**:

   ```javascript
   const yourRoutes = require("./routes/yourRoutes");
   app.use("/api/your", yourRoutes);
   ```

6. **Test endpoints** with Postman/Insomnia

---

## 🔐 Security Considerations

- [ ] Implement JWT authentication for admin routes
- [ ] Add rate limiting to prevent abuse
- [ ] Validate and sanitize all user inputs
- [ ] Use HTTPS in production
- [ ] Add request logging and monitoring
- [ ] Implement password hashing for user credentials
- [ ] Add CSRF protection if needed
- [ ] Regular dependency updates

---

## 📈 Future Enhancements

- [ ] User authentication system
- [ ] Admin dashboard backend
- [ ] File upload for project images
- [ ] Email notifications
- [ ] Analytics and statistics
- [ ] Search and filtering
- [ ] Pagination
- [ ] Unit tests
- [ ] API documentation (Swagger)

---

## 📚 Next Steps

**Phase 11**: Database Setup & Seeding

- Configure MongoDB Atlas or local MongoDB
- Create seed data for projects, skills
- Add migration scripts

**Phase 12**: Frontend Integration

- Connect frontend forms to API
- Implement API calls with fetch/axios
- Handle responses and errors

**Phase 13**: Authentication

- Implement JWT-based authentication
- Protect admin routes
- Add role-based access control

**Phase 14**: Deployment

- Deploy to Heroku/Railway/AWS
- Configure production database
- Setup CI/CD pipeline

---

## 🆘 Troubleshooting

### MongoDB Connection Fails

- Check MongoDB is running locally or connection string is valid
- Verify `MONGODB_URI` in `.env`
- Check network connectivity

### CORS Errors

- Verify `CLIENT_URL` matches frontend URL
- Check CORS configuration in `server.js`

### Port Already in Use

- Change `PORT` in `.env`
- Or kill process using current port

---

**Created**: June 3, 2026  
**Version**: 1.0.0  
**Author**: Shreyas Lande Portfolio Backend
