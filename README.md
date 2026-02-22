# 🎭 Cypress Automation - Real World App (RWA) Project

This repository contains End-to-End (E2E) test automation developed for the Cypress **Real World App (RWA)**. The main goal of this project was to apply advanced automated testing concepts to a real-world financial application.

## 🚀 Challenges and Completed Exercises

Throughout this training, I implemented critical business flows, focusing on selector stability and synchronization:

1.  **Authentication Flow**:
    * Success and failure tests for Login.
    * Validation of error messages for invalid credentials.
2.  **User Registration**:
    * Creating new users with dynamic data.
    * Database persistence validation.
3.  **Financial Transactions**:
    * Complete flow for sending money between users.
    * Contact search and post-transaction balance validation.
4.  **History and Onboarding (The Final Boss)**:
    * Automation of the "First Time User Experience" (Onboarding).
    * Bank account creation within the welcome modal.
    * Validation of empty history vs. history with existing transactions.

## 🛠️ Tech Stack

* [Cypress.io](https://www.cypress.io/) - Automation Framework.
* [TypeScript](https://www.typescriptlang.org/) - Language for better code type safety.
* [Material UI](https://mui.com/) - Component library of the tested application.

## ⚙️ How to Run the Project

To run these tests on your local machine, follow the steps below:

### 1. Prerequisites
* Node.js installed.
* Git installed.

### 2. Installation
Clone the repository and install the dependencies:
```bash
# Clone the repository
git clone [https://github.com/danieldinizqa/RWA-Exercicios.git](https://github.com/danieldinizqa/RWA-Exercicios.git)

# Enter the folder
cd RWA-Exercicios

# Install dependencies
npm install
