
# 📚 Full Stack Book Store MERN App

A full-stack Book Store application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The app provides functionality for users to browse, buy books, and manage their profiles, while admins can manage the book inventory and orders.

---

## 🚀 Live Demo

[Insert Live Demo Link Here]

---

## 🛠️ Features

- 🔐 **User Authentication** with Firebase  
- 📚 **Book Management** (Add, Edit, Delete)  
- 🛒 **Shopping Cart** and Checkout  
- 📦 **Order Tracking** for Admin  
- 🌐 **Responsive UI** using Tailwind CSS  
- ⚛️ **State Management** via Redux Toolkit & RTK Query  

---

## 🧰 Tech Stack

- **Frontend**: React.js, Tailwind CSS, Redux Toolkit  
- **Backend**: Node.js, Express.js, MongoDB  
- **Authentication**: Firebase Authentication  
- **Deployment**: [Add Platforms e.g., Vercel / Render / Netlify]  

---

## 📁 Project Structure

```
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── .env
│   └── server.js
├── frontend
│   ├── components
│   ├── pages
│   ├── redux
│   ├── .env.local
│   └── main.jsx
├── book-store.fig
└── README.md
```

---

## ⚙️ Installation & Setup

### Backend

```bash
cd backend
npm install
```

Create a `.env` file and add the following:

```
DB_URL=your_mongo_connection_string
JWT_SECRET_KEY=your_jwt_secret_key
```

Then run:

```bash
npm run start:dev
```

### Frontend

```bash
cd frontend
npm install
```

Create a `.env.local` file and add the following:

```
VITE_API_KEY=your_firebase_api_key
VITE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_PROJECT_ID=your_firebase_project_id
VITE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_APP_ID=your_firebase_app_id
```

Then run:

```bash
npm run dev
```

---

## 🧪 Use Cases

Add your use case diagram here (image or link).  
Example:

- User registers and logs in  
- User browses books  
- User adds books to cart  
- User checks out  
- Admin adds/edits/deletes books  
- Admin manages orders  

**_📍 Diagram Placeholder: ![usecase](https://github.com/MdAsif-Hossain/Book-Store-MERN-Project/blob/main/Diagram/useCase.jpg)

---

## 🧱 Class Diagram

Describe and show the relationship between different classes/models.  
Example: User, Book, Cart, Order, Admin.

**_📍 Diagram Placeholder: /diagrams/class-diagram.png_**

---

## 🔄 Activity Diagram

Describe the flow of activities a user or admin goes through.  
Example: login → browse → add to cart → checkout

**_📍 Admin Diagram Placeholder: ![](https://github.com/MdAsif-Hossain/Book-Store-MERN-Project/blob/main/Diagram/ActivityAdmin.jpg)

**_📍 Customer Diagram Placeholder:
![](https://github.com/MdAsif-Hossain/Book-Store-MERN-Project/blob/main/Diagram/ActivityCustomer.jpg)

**_📍 Visitor Diagram Placeholder: ![](https://github.com/MdAsif-Hossain/Book-Store-MERN-Project/blob/main/Diagram/activityVisitor.jpg)

---

## 🏊 Swimlane Diagram

Shows who does what in a process across User, Admin, and System.

**_📍 Diagram Placeholder: /diagrams/swimlane-diagram.png_**

---

## 🏗️ Architecture & Component Diagram

Illustrates the whole app system:

- React (Client)
- Express/Node (Server)
- MongoDB (Database)
- Firebase Auth (Authentication Service)

**_📍 Diagram Placeholder: /diagrams/architecture-diagram.png_**

---

## ⏱️ Sequence Diagram

Illustrates how the backend and frontend communicate during an operation.  
Example: Order Placement Sequence.

**_📍 Diagram Placeholder: /diagrams/sequence-diagram.png_**

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- [Md Al Mamun](https://www.youtube.com/@mdalmamunit427) – Tutorial Source  
- [Original GitHub Repository](https://github.com/mdalmamunit427/build-full-stack-book-store-mern-app)

---
