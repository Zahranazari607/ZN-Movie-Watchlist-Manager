# 🎬 Movie Watchlist Manager
A professional React application built for the **Week 2 Assignment**. This project focuses on mastering React fundamentals like State, Props, Derived State, and Conditional Rendering.

## Features
- **Dynamic Add:** Add movies with titles and genres (Action, Drama, Comedy, etc.).
- **Smart Filtering:** Filter movies by "All", "Watched", or "Unwatched".
- **Toggle Status:** Easily switch between watched and unwatched states.
- **Delete:** Remove movies from your list instantly.
- **Live Stats:** Real-time updates for total, watched, and unwatched counts.

## Core React Concepts Used
- **useState:** Managed local state for movies, form inputs, and current filter.
- **Derived State:** Computed all movie counts and filtered lists on-the-fly (No redundant state).
- **Lists & Keys:** Used `.map()` with unique `Date.now()` IDs for optimal performance.
- **Conditional Rendering:** - Shows "No movies found. Add one!" for empty lists.
  - Displays a "You watched everything! 🎉" celebration message when the list is completed.

## Styling & UI
- **Cinema Background:** High-quality cinema curtain backdrop.
- **Glassmorphism:** Modern transparent UI card with `backdrop-filter: blur`.
- **Responsive Design:** Beautifully centered layout using Flexbox.
- **Interactive Hover:** Gradient animations on the main container.

## Installation & Setup
1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/movie-watchlist.git](https://github.com/your-username/movie-watchlist.git)
