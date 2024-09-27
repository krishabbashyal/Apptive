# AppTrack

**AppTrack** is a web application designed to help users manage and track job applications effectively. It is based on a job application tracking spreadsheet, built with a **Next.js** frontend and styled using **Tailwind CSS**.

## Key Features

### 1. **User Authentication**
- Users can sign up, log in, and manage their profiles.
- Authentication could be handled using a simple and secure service like **Firebase Authentication** for easy integration and user management.

### 2. **Job Application Entry**
- Users can add new job applications with essential details:
  - **Job Title**
  - **Company Name**
  - **Application Date**
  - **Job Description Link**
  - **Application Status** (e.g., “Applied,” “Interviewing,” “Offer,” “Rejected”)

### 3. **Job Status Tracking**
- Users can update the status of each application as they progress through their job search.
- Status updates ensure users can follow their application journey step by step.

### 4. **Dashboard/Overview**
- A central dashboard displays all job applications at a glance.
- Applications can be viewed as a list or in card format.
- Filters allow users to display applications based on status (e.g., show only "Interviewing" applications).

### 5. **Notes Section**
- Users can attach personal notes to each job application, such as:
  - Interview preparation details
  - Contact information for recruiters or company representatives
  - Additional information relevant to the job search process

### 6. **Reminders/Notifications**
- A simple notification system to remind users of:
  - Follow-up deadlines
  - Upcoming interviews
  - Important job application-related events

### 7. **Map of Applications**
- A visual map with pins representing all the locations where users have applied for jobs.
- Map includes grouping for cities where multiple job applications have been made.

### 8. **Responsive Design**
- **AppTrack** is fully responsive and optimized for mobile use, allowing users to manage their job applications on the go.

---

## Tech Stack

- **Frontend**: Next.js (React framework)  
- **Styling**: Tailwind CSS for clean, responsive, and customizable UI components.
- **Database**: PostgreSQL, accessed via **Prisma ORM** for smooth integration and data handling.
- **Authentication**: Firebase Authentication (or any preferred auth provider).

---

### Database Consideration

To avoid working with a local database, you can look for affordable, hosted PostgreSQL database options. Some reliable and cost-effective hosting services include:

- **ElephantSQL**
- **Heroku Postgres**
- **DigitalOcean Managed Databases**
- **Amazon RDS**

---

**AppTrack** aims to simplify the job search process, giving users an intuitive platform to track, manage, and update their job applications from anywhere.
