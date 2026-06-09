# React Router Configuration

## Project Routing Setup

This document describes the complete routing configuration for the Shreyas Lande Portfolio website.

---

## Routes Overview

### 1. Home Route (`/`)

- **Component**: `Home.jsx`
- **Description**: Landing page displaying all portfolio sections
- **Sections Included**:
  - Navbar (fixed navigation)
  - Hero section (introduction)
  - About section
  - Skills section
  - Projects section
  - Contact section
  - Footer

---

### 2. About Route (`/about`)

- **Component**: `AboutPage.jsx`
- **Description**: Dedicated about page with detailed information
- **Layout**:
  - Navbar (fixed navigation)
  - About component
  - Footer

---

### 3. Projects Route (`/projects`)

- **Component**: `ProjectsPage.jsx`
- **Description**: Showcase of all portfolio projects
- **Layout**:
  - Navbar (fixed navigation)
  - Projects component with full details
  - Footer

---

### 4. Contact Route (`/contact`)

- **Component**: `ContactPage.jsx`
- **Description**: Contact form page with validation
- **Features**:
  - Form validation (name, email, message)
  - Success message on submission
  - Contact info cards
  - Social media links
- **Layout**:
  - Navbar (fixed navigation)
  - Contact component
  - Footer

---

### 5. Admin Route (`/admin`)

- **Component**: `AdminPage.jsx`
- **Description**: Admin dashboard for portfolio management
- **Features**:
  - Statistics cards (views, messages, projects, ratings)
  - Management sections (Projects, Messages, Skills, Analytics)
  - Recent activities feed
- **Layout**:
  - Navbar (fixed navigation)
  - Admin dashboard content
  - Footer

---

### 6. 404 Not Found Route (`*`)

- **Component**: `NotFound.jsx`
- **Description**: Error page for invalid routes
- **Features**:
  - 404 error code display
  - Helpful links to main pages
  - Bounce animation
  - "Back to Home" button

---

## File Structure

```
src/
├── App.jsx                          # Main app with RouterProvider
├── router.jsx                       # Router configuration
├── main.jsx                         # Entry point
├── index.css                        # Global styles
├── App.css                          # Global app styles
├── pages/
│   ├── Home.jsx                     # Home page component
│   ├── AboutPage.jsx                # About page component
│   ├── ProjectsPage.jsx             # Projects page component
│   ├── ContactPage.jsx              # Contact page component
│   ├── AdminPage.jsx                # Admin dashboard component
│   ├── AdminPage.css                # Admin page styles
│   ├── NotFound.jsx                 # 404 page component
│   └── NotFound.css                 # 404 page styles
└── components/
    ├── Navbar.jsx                   # Navigation component with routing
    ├── Navbar.css
    ├── Hero.jsx
    ├── About.jsx
    ├── Skills.jsx
    ├── Projects.jsx
    ├── Contact.jsx
    ├── Footer.jsx
    └── [other components...]
```

---

## Navigation Behavior

### Desktop Navigation

- Navigation links use React Router `Link` component
- Smooth scrolling to sections on the home page (Home → About, Home → Skills)
- Full page navigation for separate routes (Home → About, Home → Contact, etc.)

### Mobile Navigation

- Hamburger menu with slide-down animation
- Menu closes automatically after link click
- Same routing behavior as desktop

### Admin Link

- Styled with gradient button appearance
- Always visible in navigation
- Accessible from any page

---

## Router Configuration (router.jsx)

```javascript
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
```

---

## Key Features

### 1. Layout Consistency

- Every page includes Navbar and Footer for consistent navigation
- Page-specific content in the middle
- Seamless transitions between routes

### 2. Navigation Features

- **Location Awareness**: Uses `useLocation()` hook to detect current page
- **Smooth Transitions**: CSS animations for page entrance
- **Mobile Responsive**: Hamburger menu for mobile devices
- **Active States**: Visual indicators for current page

### 3. Error Handling

- Custom 404 page for invalid routes
- Error boundary with helpful navigation links
- Bounce animation for visual interest

### 4. Admin Dashboard

- Statistics overview with animated counters
- Recent activity feed
- Management sections for future backend integration
- Professional glassmorphism design

---

## Installation & Setup

### 1. Install React Router DOM

```bash
npm install react-router-dom
```

### 2. Update App.jsx

Uses `RouterProvider` to enable routing throughout the application

### 3. Create Page Components

Each route has its own page component located in `src/pages/`

### 4. Update Navbar

Navbar uses React Router `Link` component for navigation

---

## Usage Examples

### Navigation in Components

```javascript
import { Link, useNavigate } from "react-router-dom";

// Using Link for navigation
<Link to="/about">Go to About</Link>;

// Using useNavigate for programmatic navigation
const navigate = useNavigate();
navigate("/projects");
```

### Accessing Current Route

```javascript
import { useLocation } from "react-router-dom";

const location = useLocation();
console.log(location.pathname); // Current path
```

---

## Future Enhancements

1. **Scroll Position Restoration**: Save scroll position when navigating back
2. **Page Transitions**: Add smooth page transition animations
3. **Route-Based Authentication**: Add admin authentication/protection
4. **Dynamic Routes**: Add routes for individual project pages
5. **Lazy Loading**: Code splitting with React.lazy() for performance
6. **Nested Routes**: Sub-routes for admin dashboard sections

---

## Browser Compatibility

- React Router DOM v6+ supports all modern browsers
- Requires ES6+ JavaScript support
- Mobile-responsive design for all screen sizes

---

## Performance Considerations

- Routes are pre-rendered at build time
- No code splitting currently implemented (can be added)
- Client-side routing for fast navigation
- Navbar and Footer re-render on route change (consider memoization if needed)

---

## Deployment Notes

- Routes work with client-side routing
- For deployment on platforms like Netlify/Vercel, ensure `_redirects` or `vercel.json` is configured
- Hash routing alternative: Use `HashRouter` if client-side routing isn't fully supported

---

**Last Updated**: June 3, 2026  
**Version**: 1.0.0
