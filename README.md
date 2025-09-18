# 📚 Express + MongoDB Practice  

A step-by-step practice project to learn **MongoDB Query API** (CRUD + Aggregation Pipelines) and **Express.js REST APIs**.  
This repo documents my **weekly learning progress**, shared on **GitHub** & **LinkedIn**.  

---

## 🛠️ Tech Stack
- **Node.js**  
- **Express.js**  
- **MongoDB** (Mongoose ODM)  
- **Dotenv** for configs  

---

## 📌 Learning Roadmap  

### 🔰 Week 1: Setup & CRUD Basics
- [x] Setup Node.js + Express project  
- [x] Connect MongoDB (Atlas/local)  
- [ ] Create schema (`Book`: `title, author, category, publishedYear`)  
- [ ] Implement CRUD routes:  
  - `POST /api/books` → Create  
  - `GET /api/books` → Read all  
  - `GET /api/books/:id` → Read single  
  - `PUT /api/books/:id` → Update  
  - `DELETE /api/books/:id` → Delete  

---

### 🔰 Week 2: Enhance CRUD with Query Operators
- [ ] Filters (`GET /api/books?author=xyz`)  
- [ ] Comparison operators (`$gt`, `$lt`, `$in`)  
- [ ] Regex search (`title` contains keyword)  
- [ ] Pagination (`?page=2&limit=10`)  
- [ ] Sorting (`?sort=-publishedYear`)  

---

### 🔰 Week 3: Aggregation Pipelines (Analytics Routes)
- [ ] `/api/books/stats/categories` → Group by category, count total books  
- [ ] `/api/books/stats/authors` → Avg published year per author  
- [ ] `/api/books/stats/recent` → Books after 2015, sorted by year  
- [ ] `/api/books/stats/top` → Categories with >5 books  

---

### 🔰 Week 4: Advanced Features
- [ ] Relationships (`User` + `Books borrowed`) with `$lookup`  
- [ ] Middleware (logger, error handling)  
- [ ] Validation (e.g., required fields)  
- [ ] Config with dotenv  
- [ ] API docs (Swagger/Postman)  

---

### 🔰 Week 5: Polish & Share
- [ ] Write clean README with API usage  
- [ ] Push project to GitHub  
- [ ] Share weekly progress on LinkedIn  
- [ ] Deploy backend (Render/Heroku)  

---

## 🚀 How to Run
```bash
# Clone repo
git clone https://github.com/<your-username>/express-mongodb-practice.git
cd express-mongodb-practice

# Install dependencies
npm install

# Run dev server
npm run dev

---


