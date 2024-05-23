# React Stack Template

This is a template repository for creating a React application. It includes a set of pre-configured packages and scripts to help you get started quickly with a modern development workflow.

## Table of Contents

- [Features](#features)
- [Packages](#packages)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Adding React Router](#adding-react-router)
- [Working on a New Repository](#working-on-a-new-repository)
- [License](#license)

## Features

- **Vite** for fast development and build.
- **React 18** for building user interfaces.
- **Tailwind CSS** for utility-first CSS styling.
- **ESLint** for code linting.
- **React Query**, **Zustand**, **Axios**, and other useful libraries.

## Packages - [ in the time of making this repo ]

### Dependencies list

- `@tanstack/react-query`: ^5.37.1
- `axios`: ^1.7.2
- `lucide-react`: ^0.379.0
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `react-hook-form`: ^7.51.5
- `react-hot-toast`: ^2.4.1
- `react-loader-spinner`: ^6.1.6
- `zustand`: ^4.5.2

### DevDependencies

- `@types/react`: ^18.2.66
- `@types/react-dom`: ^18.2.22
- `@vitejs/plugin-react-swc`: ^3.5.0
- `autoprefixer`: ^10.4.19
- `eslint`: ^8.57.0
- `eslint-plugin-react`: ^7.34.1
- `eslint-plugin-react-hooks`: ^4.6.0
- `eslint-plugin-react-refresh`: ^0.4.6
- `postcss`: ^8.4.38
- `tailwindcss`: ^3.4.3
- `vite`: ^5.2.0

## Getting Started

To get started with this template, clone the repository and install the dependencies:

```bash
git clone https://github.com/rafiqul-bashar/stack-template.git

cd dashboard-react-template

npm install
```

#### Available Scripts

In the project directory, you can run:

```bash
    npm run dev: Starts the development server.
    npm run build: Builds the app for production.
    npm run lint: Runs ESLint to check for linting errors.
    npm run preview: Previews the production build locally.

```

### Adding React Router

Note that react-router-dom is not included in this template. If you need to use React Router for navigation, you can install it using the following command:

```bash
npm install react-router-dom
```

After installing react-router-dom, you can add it to your project by importing and using its components in your React code.

### Working on a New Project

> Do not commit/push any changes in this repository. For new project create another repository.

**_Remove the Existing Remote_**

To prevent pushing changes to the original repository, remove the existing remote:

```bash

git remote remove origin

git remote add origin https://github.com/username/new-repo.git

git push -u origin main

```

You can now continue working on your project and pushing changes to the new repository:

```bash

git add .
git commit -m "Your commit message"
git push
```

**_Author: Rafiqul Bashar_**
