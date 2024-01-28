# Expense Tracker Web Application ReadMe

Welcome to the Expense Tracker web application! This React-based application helps you keep track of your transactions, manage your expenses, and maintain a clear view of your total balance. Below is a comprehensive guide on how to use the application and some additional features it offers.

## Features:

### 1. Add Transactions

You can easily add transactions using the "Add Transaction" form. Each transaction requires a description and amount. Transactions can be either income or expense.

### 2. Transaction History

The application maintains a transaction history, providing you with a chronological list of all your recorded transactions. This allows you to keep track of your financial activities over time.

### 3. Total Balance

The total balance is dynamically calculated and updated with each transaction. You can quickly see your current financial standing based on the recorded transactions.

### 4. Dark Mode

We understand that preferences vary, so the application includes a Dark Mode feature. Switch between light and dark themes to suit your visual preferences.

## Backend:

The backend of this application is built using Node.js, Express.js, and MongoDB.

## Getting Started:

1. Clone the Repository:

```bash
git clone https://github.com/TamerTimraz/react-expense-tracker.git
```

2. Navigate to the Project Directory:

```bash
cd react-expense-tracker
```

3. Install Dependencies:

```bash
npm install
```

4. Set up Database:

   1. Create an Account:
      - Visit [MongoDB Atlas](https://www.mongodb.com/atlas) and create an account.
   2. Create a New Cluster:
      - After logging in to MongoDB Atlas, click the "Build a Cluster" button to create a new cluster.
      - Choose a cloud provider, region, and cluster configuration that best fits your needs. You can select the free tier cluster for testing and development purposes.
   3. Deploy Cluster:
      - Click the "Create Cluster" button to deploy your cluster. MongoDB Atlas will provision resources on your selected cloud provider and deploy your cluster.
   4. Connect to your Cluster:
      - Click the "Connect" button for your cluster and choose to connect with drivers.
      - Copy your connection string and paste it where applicable in the program.

5. Run the Application:

```bash
npm run dev
```

This will run both the frontend and backend servers concurrently.

#### The application will be accessible at http://localhost:3000 in your web browser.
