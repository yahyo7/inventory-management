
# Full Stack Inventory Management Dashboard

## Overview

This project is a complete full-stack inventory management dashboard application built using the following technologies:

- **Frontend**: Next.js, Tailwind CSS, Material UI Data Grid
- **State Management**: Redux Toolkit, Redux Toolkit Query
- **Database**: PostgreSQL
- **Backend**: Node.js, Prisma ORM
- **Cloud Services**: AWS (RDS, EC2, API Gateway, Amplify, S3)

![Dashboard Screenshot](/home-dash.png)

## Features

- **Frontend**: Responsive UI with Next.js, styled with Tailwind CSS, and complex data handling with Material UI Data Grid.
- **State Management**: Efficient state management using Redux Toolkit and data fetching with Redux Toolkit Query.
- **Backend**: REST API built with Node.js and Prisma ORM for seamless database interactions.
- **AWS Integration**: Comprehensive use of AWS services for a scalable and robust application.
- *Note: I used mock data for some parts*

## Live Demo

Check out the live demo of the application: [Live Demo]([https://your-live-demo-link.com)](https://main.d3g1wfn7t7szh.amplifyapp.com/)

## Installation

To get started with this project, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yahyo7/inventory-management.git
   cd inventory-management
   ```

2. **Install Dependencies**

   For the backend:

   ```bash
   cd server
   npm install
   ```

   For the frontend:

   ```bash
   cd client
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in both the `server` and `client` directories with the necessary environment variables. Example variables might include:

   ```env
   # Client (Frontend)
   NEXT_PUBLIC_API_BASE_URL=https://your-api-url.com

   # Server (Backend)
   DATABASE_URL=postgresql://username:password@host:port/database
   ```

4. **Run Migrations**

   ```bash
   cd server
   npx prisma migrate dev --name init
   ```

5. **Start the Development Server**

   For the backend:

   ```bash
   cd server
   npm run dev
   ```

   For the frontend:

   ```bash
   cd client
   npm run dev
   ```

   The application should now be running on `http://localhost:3000` (frontend) and `http://localhost:8000` (backend).

## Deployment

Deployment details are covered in the tutorial, including:

- **AWS RDS**: For database management
- **AWS EC2**: For computing power
- **AWS API Gateway**: For creating robust APIs
- **AWS Amplify**: For frontend deployment
- **AWS S3**: For storage solutions

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.


## Acknowledgements

- **Next.js**: [Next.js Documentation](https://nextjs.org/docs)
- **Tailwind CSS**: [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- **Material UI Data Grid**: [Material UI Documentation](https://mui.com/components/data-grid/)
- **Prisma**: [Prisma Documentation](https://www.prisma.io/docs/)
- **AWS**: [AWS Documentation](https://docs.aws.amazon.com/)

For any questions or feedback, feel free to open an issue on GitHub.

