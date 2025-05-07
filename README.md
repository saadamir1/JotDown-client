# JotDown - React Note Taking Application

React frontend for the JotDown note-taking application.

## Overview

JotDown is a simple, clean note-taking application that demonstrates React frontend integration with an Express backend.

## Features

- View all notes in a clean interface
- Add new notes with real-time updates
- Responsive design
- Loading states and error handling

## Screenshot

![JotDown App](https://github.com/user-attachments/assets/e5f35943-c8aa-4667-8bd2-2ce441d47b53)

## Live Demo

Visit the live application: [JotDown App](https://jot-down-client.vercel.app)

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm

### Installation

```bash
# Clone repository
git clone https://github.com/saadamir1/JotDown-client.git

# Install dependencies
cd JotDown-client
npm install
```

### Environment Setup

Create a `.env` file in the project root:

```
REACT_APP_API_URL=http://localhost:5000
```

For production, set this to your deployed API URL.

### Running Locally

```bash
npm start
```

Application runs on [http://localhost:3000](http://localhost:3000)

## Deployment

This client can be easily deployed on Vercel:

1. Connect your GitHub repository
2. Configure as needed:
   - Framework Preset: Create React App
   - Environment Variables: `REACT_APP_API_URL` (your backend URL)

## Backend API

This client connects to the [JotDown API](https://github.com/saadamir1/JotDown-api) for data operations.

## Author

Saad Amir - [Medium](https://medium.com/@saadamir1) - [GitHub](https://github.com/saadamir1) - [Email](mailto:saadamir070@gmail.com)
