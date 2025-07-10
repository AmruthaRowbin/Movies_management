# 🎬 Movie Management Backend

A simple Node.js + Express.js backend application that provides **JWT-based authentication** for Admin and User roles, and enables **movie management** including bulk Excel upload and filtering.

---

## 📌 Features

- ✅ Admin/User Role-Based Login
- ✅ JWT Authentication
- ✅ Role-Based Middleware Protection
- ✅ Movie CRUD (Admin)
- ✅ Bulk Upload Movies via Excel
- ✅ Movie List with Pagination & Filtering (Genre, Rating)

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- Multer (for file upload)
- XLSX (for Excel parsing)
- JWT (Authentication)

---

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/AmruthaRowbin/Movies_management.git
   git clone 
   cd movie-management-backend



Environment Variables

PORT=5000
MONGODB_URI=mongodb://localhost:27017/moviedb

Start Server
npm run dev
JWT_SECRET=your_jwt_secret


 Auth Endpoints


| Method | Route          | Description           |
| ------ | -------------- | --------------------- |
| POST   | /auth/register | Register (Admin/User) |
| POST   | /auth/login    | Login                 |



Movie Endpoints (Admin Only)


| Method | Route               | Description             |
| ------ | ------------------- | ----------------------- |
| POST   | /movies             | Create Movie manually   |
| POST   | /movies/bulk-upload | Bulk Upload via Excel   |
| GET    | /movies             | List Movies (all roles) |



Postman Collection

A ready-to-use Postman Collection is included in the repository to help you test all endpoints easily.

Just import the MovieManagement.postman_collection.json file into Postman and replace the {{token}} variable with your JWT token after login.

You can generate the token by logging in via /auth/login.
