# Serverless Contact Form Using AWS DynamoDB, Lambda, and API Gateway

This project creates a fully functional contact form with a React UI that interacts with AWS services.

## 📌 Features

### Frontend (React)
- A simple form where users can enter their name, email, and message.
- Submits form data to AWS API Gateway, which triggers a Lambda function.

### Backend (AWS Services)
- **Lambda**: Handles form submission.
- **DynamoDB**: Stores form data.
- **API Gateway**: Exposes the API to the frontend.

---

## 🛠️ AWS Setup

### 1️⃣ Create a DynamoDB Table
1. Go to **DynamoDB** → **Create Table**.
2. Table Name: `ContactForm`.
3. Partition Key: `form_id` (String).
4. Create the table and note the table name.

### 2️⃣ Create an AWS Lambda Function
1. Go to **AWS Lambda** → **Create Function** → Choose **"Author from Scratch"**.
2. **Runtime**: Select Python 3.8+.
3. **IAM Role**: Assign a role with **DynamoDB access**.
4. Deploy Lambda code to handle form submission.
5. Save the function ARN for API Gateway integration.

### 3️⃣ Setup API Gateway
1. Go to **API Gateway** → **Create REST API**.
2. Create the following endpoint:
   - **POST** `/submit` → Connects to the form submission Lambda function.
3. Enable **CORS** to allow frontend access.
4. Deploy the API and copy the **API URL** for frontend integration.

---

## 🎨 Frontend (React UI)

### 📌 Project Setup
1. Create a React App.
2. Install `axios` for making API requests.
3. Set up a simple form with fields for:
   - Name
   - Email
   - Message
4. Connect the form to API Gateway for submitting form data.

---

## 🚀 Deployment

### 1️⃣ Deploy Backend (AWS Services)
1. Ensure that **Lambda, API Gateway, and DynamoDB** are correctly configured.
2. Test API Gateway endpoints using **Postman** or **cURL**.
3. Verify that form data is stored in **DynamoDB**.

