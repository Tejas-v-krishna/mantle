# Mantle Deployment Guide 🚢

This guide outlines the steps to deploy Mantle to a production environment.

## 🐳 Docker Deployment (Recommended)

Mantle is designed to be containerized for maximum security and portability.

### 1. Build the Docker Image
```bash
docker build -t mantle-enterprise .
```

### 2. Environment Variables
Ensure the following variables are configured in your production environment:
- `NODE_ENV=production`
- `DATABASE_URL=postgresql://user:password@host:port/dbname`
- `JWT_SECRET=your-extemely-long-secret`
- `PORT=8080`

### 3. Run with Docker Compose
```yaml
version: '3'
services:
  db:
    image: postgres:15
    environment:
      POSTGRES_DB: mantle
      POSTGRES_PASSWORD: password
  app:
    build: .
    ports:
      - "80:8080"
    depends_on:
      - db
    environment:
      DATABASE_URL: postgresql://postgres:password@db:5432/mantle
```

## ☁️ Cloud Providers

### AWS (ECS/EKS)
1. Push the image to **Amazon ECR**.
2. Deploy using **ECS Fargate** for serverless scaling.
3. Use **AWS RDS** (PostgreSQL) for the data fabric.

### Vercel (Frontend Only)
Mantle's React client can be deployed to Vercel. Ensure you set the `VITE_API_BASE_URL` to point to your backend.

## 🔒 Security Best Practices
- **VPC Isolation**: Deploy the backend and database within a private VPC.
- **SSL/TLS**: All traffic must be served over HTTPS.
- **Key Rotation**: Rotate your `JWT_SECRET` and database credentials periodically.

## 🛡 Performance Tuning
- **Prisma Connection Pooling**: Use a tool like **PgBouncer** if scaling beyond 100 concurrent agent interactions.
- **CDN**: Use CloudFront or Cloudflare for assets and the "Digital Canvas" static files.
