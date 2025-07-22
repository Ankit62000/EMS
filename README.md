echo "# 🧑‍💼 Employee Task Management Dashboard (React)

A task management system built with **React.js**, designed for organizations to assign, view, and manage tasks for employees. Admins can create tasks, while employees can view their respective task dashboards.

---

## 🚀 Features

### 👨‍💼 Admin
- Log in as Admin
- Create tasks for employees
- View task list by status (New, Active, Completed, Failed)
- Monitor task numbers

### 🧑‍💻 Employee
- Log in as Employee
- View assigned tasks filtered by status
- See task count by type
- Logout securely

### 🧠 Tech Stack
- **Frontend:** React, Tailwind CSS
- **State Management:** React Context API
- **Routing & Conditional Rendering**
- **Persistent Login:** LocalStorage

---

## 📁 Folder Structure

```plaintext
src/
├── components/
│   ├── Auth/
│   │   └── Login.jsx
│   ├── Dashboard/
│   │   ├── AdminDashboard.jsx
│   │   └── EmployeeDashboard.jsx
│   ├── Other/
│   │   ├── AllTask.jsx
│   │   ├── CreateTask.jsx
│   │   ├── Header.jsx
│   │   └── TaskListNumbers.jsx
│   └── TaskList/
│       ├── AcceptTask.jsx
│       ├── CompleteTask.jsx
│       ├── FailedTask.jsx
│       ├── NewTask.jsx
│       └── TaskList.jsx
├── context/
│   ├── AuthContext.jsx
│   ├── AuthProvider.jsx
│   └── TaskContext.jsx
├── pages/
├── utils/
│   └── localStorage.jsx
├── App.css
├── App.jsx
├── index.css
├── index.js
├── main.jsx
```





## 🔗 Live Demo

🌐 **Deployed on:** Vercel  
🔗 **Live Site:** [https://fitrashtra-task.vercel.app](https://fitrashtra-task.vercel.app)

---
---

## 🧾 How to Run the Project

### 1. Clone the repo

\`\`\`bash
git clone https://github.com/yourusername/task-dashboard.git
cd task-dashboard
\`\`\`

### 2. Install dependencies

\`\`\`bash
npm install
\`\`\`

### 3. Start the development server

\`\`\`bash
npm run dev
\`\`\`

### 4. Open in browser

\`\`\`
http://localhost:5173/
\`\`\`

---

## 🗃️ Data Persistence

- The \`localStorage\` is used to persist:
  - Logged in user (\`loggedInUser\`)
  - Task data (mock/stored in state for now)

---

## 🛠 Future Improvements

- Add database & backend integration (e.g., Firebase, MongoDB)
- Employee can update task status (e.g., mark as complete/failed)
- Admin dashboard analytics
- Dark/light theme toggle

---

## 📸 Screenshots

1. Admin Dashboard

![](<asset/admindashboard ss.png>)


2. Employee Dashboard 

![alt text](<asset/Employeedashboard ss.png>)


---

## 🙌 Author

**Ankit **  
GitHub: [@ankit62000](https://github.com/ankitchaturvedi)  
Project by [Ankit ]

---

