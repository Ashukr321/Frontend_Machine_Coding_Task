# Client-Side Pagination React App

A simple React application that fetches posts from an API and displays them with client-side pagination.

## Features

- Fetches posts from a public API (`https://jsonplaceholder.typicode.com/posts`).
- Client-side pagination with configurable items per page.
- Displays total pages and current page number.
- Navigation buttons: **Prev** and **Next** (disabled on first/last page).
- Styled post cards displaying:
  - Post ID
  - User ID
  - Title
  - Body
- Responsive and clean UI layout.
- Hover effects on post cards.
- Modular code with API calls separated into a service file.
- Basic error handling for API requests.
- Pagination buttons fixed at bottom-right for easy access.