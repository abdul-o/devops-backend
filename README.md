# Stage 1 DevOps API

## Overview

This is a simple REST API built and deployed as part of the HNG Stage 1 DevOps task.
The API is hosted on a Linux server and served publicly using Nginx as a reverse proxy with HTTPS enabled.

---

## Tech Stack

* Node.js (Express)
* Nginx (Reverse Proxy)
* PM2 (Process Manager)
* Linux (Ubuntu Server)

---

## How to Run Locally

```bash
git clone https://github.com/abdul-o/stage1-api.git
cd stage1-api
npm install
node index.js
```

Server will run on:

```
http://localhost:3000
```

---

## API Endpoints

### 1. GET /

Response:

```json
{"message":"API is running"}
```

---

### 2. GET /health

Response:

```json
{"message":"healthy"}
```

---

### 3. GET /me

Response:

```json
{
  "name": "Abdullateef Dauda",
  "email": "abdullateefdauda01@gmail.com",
  "github": "https://github.com/abdul-o"
}
```

---

## Live URL

```
https://abdul-o.duckdns.org
```

---

## Notes

* The application runs on a private port (3000)
* Nginx is used to proxy requests to the application
* HTTPS is enabled using Let's Encrypt
* PM2 ensures the app stays running
