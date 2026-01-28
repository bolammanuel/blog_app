# Vue Blog Application

A modern, feature-rich blog application built with Vue.js 3, Vue Router, and Axios. This project demonstrates best practices in Vue development including lazy loading, error handling, and responsive design.

![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?logo=vue.js&logoColor=white)
![Vue Router](https://img.shields.io/badge/Vue_Router-4.x-4FC08D?logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)

## Features

-  **Dynamic Routing** - Navigate between home page and individual blog posts
-  **API Integration** - Fetches real blog posts from external API
-  **Lazy Loading** - Components are lazy-loaded for optimal performance
-  **Error Boundaries** - Graceful error handling with user-friendly messages
-  **404 Handling** - Custom not found page for invalid routes
-  **Suspense** - Loading states while fetching data
-  **Responsive Design** - Mobile-friendly interface
-  **Navigation** - Back button and home navigation
-  **Typography** - Classic blogging fonts (Garamond for headings, Futura for body)

## Tech Stack

- **Framework:** Vue.js 3 (Composition API)
- **Routing:** Vue Router 4
- **HTTP Client:** Axios
- **Build Tool:** Vite
- **Styling:** CSS3 (Scoped Styles)
- **Fonts:** EB Garamond, Futura

## Project Structure

```
vue-blog-app/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── main.css
│   ├── components/
│   │   ├── PostCard.vue
│   │   ├── LoadingSpinner.vue
│   │   ├── ErrorDisplay.vue
│   │   └── ErrorBoundary.vue
│   ├── views/
│   │   ├── HomePage.vue
│   │   ├── DetailPage.vue
│   │   └── NotFound.vue
│   ├── router/
│   │   └── index.js
│   ├── App.vue
│   └── main.js
├── package.json
├── vite.config.js
└── README.md
```

## Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd vue-blog-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

The production-ready files will be in the `dist/` folder.

## API Integration

This project fetches blog posts from:
```
https://api.oluwasetemi.dev/posts
```

### API Response Structure
```javascript
{
  data: [
    {
      id: "713f6905-743d-4068-b00d-4fe236561f39",
      title: "Understanding GraphQL Subscriptions",
      slug: null,
      content: "Full blog post content...",
      excerpt: "Short excerpt...",
      created_at: "2024-01-15T10:30:00Z"
    },
    // ... more posts
  ],
  meta: {
    page: 1,
    limit: 10,
    total: 501,
    totalPages: 51,
    hasNextPage: true,
    hasPreviousPage: false
  }
}
```

## Features Breakdown

### 1. Home Page (`HomePage.vue`)
- Displays grid of blog post cards
- Fetches posts from API on mount
- Shows loading spinner while fetching
- Error handling with retry option
- Responsive grid layout (1-3 columns based on screen size)

### 2. Detail Page (`DetailPage.vue`)
- Shows full blog post content
- Dynamic routing with post ID
- Back navigation button
- Home navigation button
- Handles non-existent posts gracefully

### 3. Post Card Component (`PostCard.vue`)
- Displays post title and excerpt
- Clickable link to detail page
- Hover effects for better UX
- Line clamping for consistent card heights

### 4. Error Handling
- **Error Boundary** - Catches runtime errors
- **Error Display** - Shows user-friendly error messages
- **Loading States** - Spinner while data loads
- **404 Page** - Custom not found page

### 5. Routing
```javascript
/ → Home Page (list of posts)
/post/:id → Detail Page (single post)
/* → 404 Not Found Page
```

## Key Implementation Details

### Lazy Loading Routes
```javascript
const HomePage = () => import('../views/HomePage.vue')
const DetailPage = () => import('../views/DetailPage.vue')
const NotFound = () => import('../views/NotFound.vue')
```

### API Call with Axios
```javascript
const options = { 
  method: 'GET', 
  url: 'https://api.oluwasetemi.dev/posts' 
}

const response = await axios.request(options)
posts.value = response.data.data
```

### Error Boundary
```javascript
onErrorCaptured((err) => {
  hasError.value = true
  errorMessage.value = err.message
  return false
})
```

## Styling

- **Headings:** EB Garamond (serif) - Classic, elegant
- **Body Text:** Futura (sans-serif) - Clean, modern
- **Color Scheme:** Blue/Indigo gradients for home, Green/Teal for details
- **Responsive:** CSS Grid for adaptive layouts
- **Animations:** Smooth transitions and hover effects

## Troubleshooting

### Posts not showing
- Check browser console for API errors
- Verify internet connection
- Check if API endpoint is accessible

### Build errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Router not working
- Ensure Vue Router is installed: `npm install vue-router@4`
- Check router configuration in `src/router/index.js`

## Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Lint code (if configured)
```

##  Deployment

### Vercel
```bash
npm install -g vercel
vercel --prod
```

##  Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

##  License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Your Name**
- GitHub: [@bolammanuel](https://github.com/bolammanuel)
- Email:ajibolae123@gmail.com

##  Acknowledgments

- [Vue.js](https://vuejs.org/) - The Progressive JavaScript Framework
- [Vue Router](https://router.vuejs.org/) - Official router for Vue.js
- [Axios](https://axios-http.com/) - Promise-based HTTP client
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- API provided by [Oluwasetemi](https://api.oluwasetemi.dev/)

## Screenshots

### Home Page
![Home Page](./dist/assets/Blog_app.png)

### Detail Page
![Detail Page](./dist/assets/Detail_page.png)


---