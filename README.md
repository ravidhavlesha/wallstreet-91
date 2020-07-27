# Realtime Stock Application

A realtime stock application which display user's selected stock and changes as the stock value changes.
The stock changes are mocked programatically using random values.

This system is built with **NodeJS**, **MongoDB**, **Socket.io**, and **ReactJS**.

## Getting Started

### Software Requirements

-   NodeJS **8+**
-   NPM **3.5+**
-   MongoDB **4+**

### How to install?
1. Clone the project from github.
```bash
git clone https://github.com/ravidhavlesha/wallstreet-91.git ./wallstreet-91
```
2. Install dependencies.
```bash
cd wallstreet-91
npm install
```
3. Setup environment variables. 
- You will find a file named `.env.example` in root directory of this project.
- Create a new file by copying `.env.example` file and renaming it to `.env`.

 ```bash
cp .env.example .env
```
- Update the newly created `.env` file with your values.

### Running the server locally.
```bash
npm run dev
```
### Running the server as production.
```bash
npm run start
```
