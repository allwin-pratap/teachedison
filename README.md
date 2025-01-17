# Project Documentation

## Overview
This project is a dynamic and responsive web application built using **Next.js** and **Tailwind CSS**, leveraging modern frontend architecture and state management with **Zustand**. The application handles role-based data views for Admins, Instructors, and Students. Additionally, it includes a **dark and light theme switch**, providing a seamless user experience across different visual preferences.

---

## Features
- **Role-Based Views:** Supports Admin, Instructor, and Student roles with customized data and functionalities.
- **Dynamic Imports:** Optimized loading of components to enhance performance.
- **State Management:** Centralized state using Zustand for handling roles.
- **Responsive Design:** Tailwind CSS for seamless responsiveness.

---

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (LTS version recommended)
- npm or yarn package manager

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   https://teachedison.vercel.app/
   ```

---

## For Role Change

```
Left Bottom corner you may see a name you click that and switch the role
```
---

## File Structure

```
project-directory/
├── public/
│   ├── assets/
│   │   └── img/   # Local Image assets
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Layout for the page
│   │   └── page.tsx             # Page File
│   ├── components/              # UI components like Dropdown, Sidebar, Charts, Course etc.
│   ├── data/
│   │   └── dashboard.json        # JSON Data
│   └── store/
│   │   └── themestore.tsx     # Zustand store for Theme management
│   └── templates/             # Templates for Role Dashboard
└── README.md                # Documentation
```

## Deployment

### Build the project
```bash
npm run build
# or
yarn build
```

### Start the server
```bash
npm start
# or
yarn start
```

---

## Contact
For any questions or feedback, please reach out to [pratap.allwin66@gmail.com].