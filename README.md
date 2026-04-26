# React Redux Toolkit Application

A modern React application built with Vite, Redux Toolkit, React Router, and Tailwind CSS.
##screenshot
![alt text](<src/assets/Screenshot (181).png>)
![alt text](<src/assets/Screenshot (182).png>)
![alt text](<src/assets/Screenshot (183).png>)

## Features

- **Redux Toolkit** - State management with slices and RTK Query
- **React Router** - Client-side routing with user authentication flow
- **Tailwind CSS** - Utility-first CSS framework
- **JSON Server** - Mock REST API for development

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run start
   ```
   This runs both the JSON server (port 3000) and Vite dev server.

3. For separate execution:
   - Run only dev server: `npm run dev`
   - Run only JSON server: `npm run json-server`

## Project Structure

```
src/
├── components/     # Reusable UI components
├── features/       # Redux slices (counter, employees)
├── layout/         # Layout components
├── pages/          # Page components
├── store/          # Redux store configuration
└── backend/        # JSON server database
```

## Tech Stack

- React 19
- Redux Toolkit 2.x
- React Router DOM 7
- Tailwind CSS 4
- Vite
