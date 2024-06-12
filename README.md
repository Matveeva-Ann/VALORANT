# Project "Valorant Stats" 🎮📊

View the project: ([https://valorant.com](https://valorant-delta.vercel.app/))

## Used Technologies ⚙️:
- Next.js
- TypeScript
- Tailwindcss
- Redux Toolkit + RTK Query
- Tsparticles library
- Jest

## About the Project 💻
The 'Valorant Stats' project provides statistics from the game Valorant, including leaderboard data, player match details, and news articles with filters. Additionally, the project is covered with unit tests to ensure code reliability and functionality.

## Functionality:

- Infinite scrolling:
    - Created a page that displays posts and a page with player ratings from an external data source.
    - Implemented infinite scrolling (loading additional data when clicking the button).
- Routing + data fetching:
    - When clicking on the post title or image, users are redirected to the "Post Details" page.
    - When users click on a player, they are redirected to a page showing the recent matches of that player.
- Search:
    - Added a search bar at the top of the news page in the application.
    - Search returns a list of posts where the query matches the author's name or post content.
    - Search optimization: data is fetched only after 500 ms of user inactivity.
