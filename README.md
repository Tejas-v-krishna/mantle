# Mantle Enterprise OS 🚀

Mantle is a premium, enterprise-grade corporate productivity and workforce management platform. It consolidates eight critical business tools into a single unified workspace, connected by an intelligent data fabric.

## 🌟 Key Features

1.  **AI Analytics & Intelligence**: Unified cross-departmental insights and predictive forecasting.
2.  **HR Optimization**: Org-chart management, employee lifecycle tracking, and burn-rate analytics.
3.  **Project Collaboration**: Real-time Kanban boards, task management, and document versioning.
4.  **Financial Planning**: High-fidelity ROI tracking, budget management, and real-time transaction monitoring.
5.  **Inventory Management**: Supply chain automation with stock threshold alerts and supplier tracking.
6.  **Customer Support Automation**: AI-powered ticketing with sentiment analysis and automated triaging.
7.  **Marketing ROI Engine**: Multi-channel campaign orchestration with real-time conversion funnels.
8.  **Data Security Vault**: SOC2 Type II compliant security perimeter with zero-knowledge encryption (AES-256).

## 🛠 Tech Stack

### Frontend
- **React 19** & **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** & **GSAP** for premium animations
- **Lucide React** for iconography
- **Lenis** for smooth kinetic scrolling

### Backend
- **Node.js** & **Express**
- **Prisma (v7)** ORM
- **PostgreSQL** (Data Fabric)
- **JWT** Multi-tenant Authentication

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- PostgreSQL database

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-repo/mantle.git
    cd mantle
    ```

2.  **Setup Backend**:
    ```bash
    cd server
    npm install
    cp .env.example .env # Configure your DATABASE_URL and JWT_SECRET
    npx prisma migrate dev
    npm start
    ```

3.  **Setup Frontend**:
    ```bash
    cd client
    npm install
    npm run dev
    ```

## 🏗 Architecture

Mantle uses a **Shared-Database Multi-tenancy** model. Every entity in the Prisma schema is scoped by an `orgId`, ensuring strict data isolation while maintaining high performance. The "Unified Brain" (Milestone 6) aggregates data across these tables to provide executive-level insights.

## 📄 License
Enterprise Proprietary - All Rights Reserved.