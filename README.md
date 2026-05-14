# Hintro Dashboard

A clean, responsive frontend dashboard built with Next.js following the Hintro design system. Integrates with mock APIs to display user data, call sessions, and feedback management.

## Tech Stack

- **Framework**: Next.js 15 
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React hooks + localStorage

## Features

- ✅ Dashboard with stats cards and recent calls
- ✅ Call Insights page with pagination
- ✅ Feedback modal with star rating and conditional text fields
- ✅ Feedback History with localStorage persistence
- ✅ Responsive design (desktop & mobile)
- ✅ Active navigation state tracking
- ✅ Logout confirmation modal
- ✅ Both user states (u1: empty, u2: populated)

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/maharshiicodes/hintro-dashboard.git
```

### 2. Navigate to Project Directory

```bash
cd hintro-dashboard
```

### 3. Install Dependencies

Using npm:
```bash
npm install
```

Or using pnpm:
```bash
pnpm install
```


```

### 4. Run Development Server

```bash
npm run dev
```

Or with pnpm:
```bash
pnpm dev
```

Visit `http://localhost:3000`


## API Integration

Uses mock server at `https://mock-backend-hintro.vercel.app` with `x-user-id` header for user switching (u1 = empty, u2 = populated).

## Testing

- Switch between `u1` (new user) and `u2` (active user) using the mock API
- Test feedback submission → data persists in localStorage
- Test pagination on Call Insights page
- Mobile responsive tested on common breakpoints

## Assumptions & Notes

- Login page is a placeholder (no actual auth)
- No pagination as on every api response pagination was 1

## Deployed

https://hintro-dashboard-nine.vercel.app
