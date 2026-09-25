# SmartNews

A React-based multi-source news aggregator with AI-powered article summarization. Browse and search news across multiple categories and countries, in 10 Indian languages, and get a concise AI-generated summary of any article without leaving the app.

**Live demo:** [https://smartnews-web.vercel.app/](https://smartnews-web.vercel.app/)

## Features

- **Multi-source news aggregation** via the GNews API — browse by category (National, International, Business, Technology, Sports, Science, Entertainment) or search any topic
- **AI article summaries** powered by Google's Gemini API — get a 4-6 point summary of any article without opening the original
- **Multilingual support** — browse news and read summaries in English, Hindi, Bengali, Gujarati, Kannada, Malayalam, Marathi, Punjabi, Tamil, or Telugu
- **Country selection** — switch the news feed's country focus
- **Light/dark theme** with persisted preference
- **Summary caching** — summaries are cached per article + language in localStorage so you're not re-generating the same summary twice
- **No login, no database required** — all preferences persist locally in the browser



## Tech stack


| Layer        | Technology                           |
| ------------ | ------------------------------------ |
| Frontend     | React, React Router, Vite, plain CSS |
| Backend      | Vercel Serverless Functions          |
| News data    | GNews API                            |
| AI summaries | Google Gemini API                    |
| Persistence  | Browser localStorage (no database)   |
| Deployment   | Vercel + GitHub                      |




## Architecture

```text
                         USER
                           |
                           v
                  +-----------------+
                  | React Frontend  |
                  +--------+--------+
                           |
             +-------------+-------------+
             |                           |
             v                           v
        /api/news                  /api/summarize
             |                           |
             v                           v
         GNews API                  Gemini API
             |                           |
             v                           v
       News articles                AI summary
             |                           |
             +-------------+-------------+
                           v
                    React UI (user sees news)
```

Both external API keys (`GNEWS_API_KEY`, `GEMINI_API_KEY`) live only on the server side, inside the two Vercel serverless functions. The browser never sees them directly — every request from React goes through `/api/news` or `/api/summarize` first.

## Getting started



### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- A free [GNews API key](https://gnews.io/)
- A free [Google Gemini API key](https://ai.google.dev/)



### Setup

1. Clone the repository
  ```bash
   git clone https://github.com/<your-username>/smartnews.git
   cd smartnews
  ```
2. Install dependencies
  ```bash
   npm install
  ```
3. Set up environment variables
  Copy `.env.example` to a new file named `.env.local` and fill in your keys:
4. Run the development server
  ```bash
   npm run dev
  ```
   The app will be available at `http://localhost:3000` (or whatever port Vite prints in the terminal).
5. Build for production
  ```bash
   npm run build
  ```



### Deployment

This project is set up to deploy automatically on Vercel. Connect the GitHub repository to a Vercel project, add the same two environment variables (`GNEWS_API_KEY`, `GEMINI_API_KEY`) in the Vercel dashboard under Project Settings → Environment Variables, and every push to `main` triggers a new deployment.

## Project structure

```text
src/
├── components/
│   ├── layout/       Header, Footer, Layout
│   ├── news/          ArticleCard, NewsFeed, CategoryNav, SearchBar, AiSummary
│   └── ui/            ThemeToggle, Dropdown, Spinner, ErrorMessage, EmptyState
├── hooks/              useNews.js and other custom hooks
├── services/           newsService.js — talks to /api/news
├── styles/             plain CSS files (header.css, layout.css, etc.)
└── data/               countries.js, languages.js

api/
├── news.js             Serverless function — calls GNews, returns JSON
└── summarize.js        Serverless function — calls Gemini, returns a summary
```



## License

This project is for personal/portfolio use.