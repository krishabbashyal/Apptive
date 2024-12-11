# Apptive

**Apptive** is a web application designed to help users effectively manage and track their job applications. Based on a job application tracking spreadsheet, Apptive provides a streamlined, intuitive interface to assist users in their job search journey.

Built with **Next.js** and styled using **Tailwind CSS**, Apptive offers a range of features to simplify the process of job application management.

## Key Features

### 1. User Authentication
- Secure user registration and login with Email and Password, or Google and Github.
- Authentication handled through **Auth.js**

### 2. Job Application Entry
- Add new job applications with the following details:
  - **Job Title**
  - **Company Name**
  - **Application Date**
  - **Job Application Link**
  - **Application Status** (e.g., “Applied,” “Interviewing,” “Offer,” “Rejected”)

### 3. Job Status Tracking
- Update the status of each application as it progresses.

### 4. Dashboard/Overview
- A central dashboard provides a snapshot of all job applications.
- Filters available to display applications by status (e.g., show only "Interviewing" applications).

### 5. Notes Section
- Attach personal notes to each application, such as:
  - Interview preparation details.
  - Contact information for recruiters.
  - Additional information relevant to the job search.


### 6. Map of Applications
- Visualize job applications on a map with pins indicating location.
- Group applications by cities for easier tracking of multiple opportunities.

### 7. Responsive Design
- Fully responsive, optimized for mobile devices.
- Manage job applications on the go.

### 8. Salary Comparison Feature (Proposed)
- Compare entered salaries against industry averages or trends based on location and job title.

---

## Tech Stack

- **Frontend**: Next.js (React framework)
- **Backend**: Next.js (Server Actions)
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL, accessed via **Prisma ORM** for efficient data management.
- **Authentication**: Auth.js

---

## Vision

**Apptive** aims to simplify the job search process, providing users with an easy-to-use platform to track, manage, and update their job applications wherever they are.


