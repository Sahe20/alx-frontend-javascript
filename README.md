# 📘 TypeScript Fundamentals Project

This project explores foundational and intermediate concepts in **TypeScript**, focusing on type safety, object-oriented programming, DOM manipulation, and TypeScript-specific features like namespaces and declaration merging. The tasks follow a progressive structure — starting with basic types and interfaces, and culminating in advanced branding techniques.

---

## 📚 Project Learning Objectives

By the end of this project, I am expected to be able to explain — without external help — the following TypeScript concepts:

- Basic types in TypeScript
- Interfaces, Classes, and Functions
- Working with the DOM in TypeScript
- Generic Types
- Using **Namespaces**
- Declaration Merging
- Using an **Ambient Namespace** to import external libraries
- **Nominal Typing** with Interface Branding

---

## 🛠️ Project Setup & Requirements

- ✅ **Editor Used:** Visual Studio Code (VS Code)
- ✅ **Operating System:** Ubuntu 18.04
- ✅ **Version Control:** Git (locally) and GitHub (remote repository)
- ✅ **Type Checking:** No compiler warnings or errors (strict mode)
- ✅ **Testing Framework:** Jest (v24.9.\*)
- ✅ **File Standards:**
  - All files end with a new line
  - All TypeScript source files use the `.ts` extension

---

## 🔍 Project Scope & Tasks

This project contains several TypeScript exercises that demonstrate:

### ✔ Interfaces and Classes
- Created and implemented interfaces such as `Student`, `Teacher`, and credit-based branded interfaces (`MajorCredits`, `MinorCredits`).
- Extended interfaces using declaration merging and inheritance in namespaces like `Subjects`.

### ✔ DOM Manipulation
- Worked with the browser's DOM using TypeScript to ensure strong typing and runtime safety.

### ✔ Namespaces
- Grouped related interfaces and classes under namespaces (e.g., `Subjects`) for better modularity and scope management.

### ✔ Generic Types and Branding
- Used branded interfaces to simulate nominal typing, which distinguishes structurally identical but conceptually different types.

---

## 📂 Project Structure

```

task\_0/
task\_1/
task\_2/
task\_3/
task\_4/
task\_5/
-webpack.config.js
-tsconfig.json
-package.json
README.md

````

Each `task_X/` directory includes TypeScript files for individual concepts or challenge problems, such as creating reusable interfaces, working with modules, and implementing subject-class hierarchies.

---

## 📦 Dependencies

- TypeScript v3.6.4
- Webpack v4.41.2
- Jest v24.9.0
- ts-loader, ts-jest, @types/jest, and other supporting dev dependencies for transpiling and testing

---

## 🚀 Running the Project

### Transpile with Webpack:
```bash
npm run build
````

### Start Development Server:

```bash
npm run start-dev
```

### Run Tests:

```bash
npm run test
```

Ensure all TypeScript files compile without error, and all tests pass.

---

## 📘 Author

**Musa Sahe Jackiteh**
TypeScript Developer & Software Engineer
Liberia | GitHub: [Sahe20](https://github.com/Sahe20)

---

## 📝 License

This project is part of the ALX TypeScript curriculum and is intended for educational purposes only.

