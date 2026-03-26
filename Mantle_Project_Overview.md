# Mantle: Corporate Productivity & Enterprise Solutions Overview

## Project Mission
Mantle is a high-end corporate productivity platform (formerly Gofex-new/Helpr) designed to optimize workplace efficiency, automate workflows, and provide enterprise-grade analytics. It targets decision-makers, HR leaders, and managers looking to streamline operations and maximize ROI through technology.

## Core Value Proposition
- **Efficiency**: Reducing manual tasks through AI and automation.
- **Productivity**: Specialized tools for project management, HR, and finance.
- **ROI Driven**: Integrated calculators to measure business impact and cost savings.
- **Premium Experience**: A visually stunning, high-performance UI built for modern professionals.

## Technical Stack
- **Frontend**: React (v19) with Vite, Tailwind CSS 4, Framer Motion, GSAP, and Lenis (smooth scroll).
- **Backend**: Node.js, Express.js, MongoDB (MERN stack).
- **Auth**: JWT-based authentication with role-based access control (Admin, Manager, Viewer).
- **Architecture**: Component-based React with an animated mega-dropdown navigation and page transitions.

## Application Structure & Pages

### 1. Core Platform Pages
- **Home (`/`)**: Landing page featuring the mission statement, core problem discovery, and the **Helpr ROI Calculator**.
- **Services Overview (`/services-overview`)**: A central hub highlighting all enterprise productivity solutions.
- **Benefits Leaders (`/for-benefits-leaders`)**: A targeted landing page for HR and corporate benefit managers.
- **About Us (`/company/about`)**: Background on the vision and team behind Mantle.

### 2. Specialized Corporate Services
Each service is a dedicated tool within the workspace:
- **AI Analytics Dashboard (`/services/ai-analytics`)**: Data-driven insights for business intelligence.
- **Customer Support Automation (`/services/customer-support`)**: AI-powered internal and external support tools.
- **HR Optimization (`/services/hr-optimization`)**: Tools for hiring, retention, and employee productivity.
- **Financial Planning Tools (`/services/financial-planning`)**: Strategic fiscal management resources.
- **Marketing Campaign Manager (`/services/marketing-campaign`)**: Centralized control for corporate outreach.
- **Inventory Management System (`/services/inventory-management`)**: Supply chain and asset tracking.
- **Project Collaboration Suite (`/services/project-collaboration`)**: Unified team workspace and task management.
- **Data Security Solutions (`/services/data-security`)**: Enterprise-grade protection for corporate assets.

### 3. Resource & Knowledge Hub
Comprehensive documentation and community support:
- **Knowledge Base (`/resources/knowledge-base`)**: Searchable support engine.
- **API Documentation (`/resources/api-docs`)**: Integration guides for developers.
- **Articles & Blog (`/resources/articles`, `/resources/blog`)**: Thought leadership on productivity.
- **Case Studies (`/resources/case-studies`)**: Real-world ROI proof from client implementations.
- **Tutorials & Video Library (`/resources/tutorials`, `/resources/videos`)**: Onboarding and training materials.
- **Webinars & Whitepapers (`/resources/webinars`, `/resources/whitepapers`)**: In-depth industry analysis.
- **Community Forum (`/resources/community`)**: Peer-to-peer enterprise networking.

### 4. Conversion & Demo Flow
- **Service Selection (`/book-demo/select-services`)**: Interactive step to pick specific tools for a trial.
- **Booking Form (`/book-demo/form`)**: Enterprise consultation scheduling.

## Key Features & UI Components
- **Helpr ROI Calculator**: A dynamic tool allowing businesses to input data and see potential time/cost savings.
- **Animated Mega Navigation**: A sophisticated menu system for easy access to the extensive service directory.
- **Smooth Interaction Flow**: Uses GSAP and Lenis for a "premium" feel during page transitions and scrolling.
- **Problem Statement Component**: Engages users by identifying corporate pain points and offering solutions.
- **Newsletter Subscription**: Integrated to keep corporate clients updated on platform enhancements.

## Backend API Infrastructure
- **Authentication**: `POST /api/auth/login`, `POST /api/auth/register` (Role-based).
- **Demo Submissions**: `POST /api/demo-request` (Stores inquiries in MongoDB).
- **Newsletter**: `POST /api/subscribe`.
- **Admin Dashboard**: Protected routes to manage user roles and review demo requests.
