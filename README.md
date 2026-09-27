# SmartNews

A React-based multi-source news aggregator with AI-powered article summarization. Browse and search news across multiple categories and countries, in 10 languages including English and 9 Indian languages, and get a concise AI-generated summary of any article without leaving the app.

**Live demo:** [https://smartnews-web.vercel.app/](https://smartnews-web.vercel.app/](https://smartnews-web.vercel.app/?utm_source=gemini))

## Screenshots

### Homepage



![SmartNews Homepage](./screenshots/smartnews-home.png)



### Category Page



![SmartNews Category Page](./screenshots/smartnews-category.png)



### AI Article Summary



![SmartNews AI Article Summary](./screenshots/smartnews-aisummary.png)



### Multilingual Support



![SmartNews Multilingual Support](./screenshots/smartnews-multilingual.png)



## Features

- **Multi-source news aggregation** via the GNews API — browse by category or search any topic
- **AI article summaries** powered by Google's Gemini API — get a concise 4–6 point summary without opening the original article
- **Multilingual support** — browse news and read summaries in 10 languages including English and 9 Indian languages
- **Country selection** — switch the news feed's country focus
- **Category-based browsing** — National, International, Business, Technology, Sports, Science, Health, and Entertainment
- **Article pages** — view article details, AI summaries, and direct links to the original publisher
- **Search** — search headlines and topics across available news
- **Light/dark theme** with persisted preference
- **Summary caching** — summaries are cached per article and language in `localStorage` to avoid unnecessary regeneration
- **Responsive design** — optimized for desktop and mobile viewports
- **No login, no database required** — all preferences and cached summaries persist locally in the browser

## Tech stack

| Layer | Technology | 

 | ----- | ----- | 

| **Frontend** | React, React Router, Vite, plain CSS | 

| **Backend** | Vercel Serverless Functions | 

| **News data** | GNews API | 

| **AI summaries** | Google Gemini API | 

| **Persistence** | Browser `localStorage` (no database) | 

| **Deployment** | Vercel + GitHub | 

## Architecture

```

                        USER

                          |

                          v

                 +-----------------+

                 | React Frontend  |

                 +--------+--------+

                          |

             +------------+------------+

             |                         |

             v                         v

        /api/news               /api/summarize

             |                         |

             v                         v

         GNews API                Gemini API

             |                         |

             v                         v

       News articles               AI summary

             |                         |

             +------------+------------+

                          |

                          v

                       React UI

```

Both external API keys `GNEWS_API_KEY`, `GEMINI_API_KEY`) live only on the server side, inside the two Vercel serverless functions. The browser never sees them directly — every request from React goes through `/api/news` or `/api/summarize` first.

## Getting started

### Prerequisites

- [Node.js]([https://nodejs.org/?utm_source=gemini](https://nodejs.org/?utm_source=gemini)) (v18 or later recommended)
- A free [GNews API key]([https://gnews.io/?utm_source=gemini](https://gnews.io/?utm_source=gemini))
- A free [Google Gemini API key]([https://ai.google.dev/?utm_source=gemini](https://ai.google.dev/?utm_source=gemini))

### Setup

1. **Clone the repository**
  ```

   git clone [https://github.com/<your-username>/smartnews.git](https://github.com/<your-username>/smartnews.git)

   cd smartnews

  ```
2. **Install dependencies**
  ```

   npm install

  ```
3. **Set up environment variables**
  Copy `.env.example` to a new file named `.env.local`:
   Open `.env.local` and add your API keys:
4. **Run the development server**
  ```

   npm run dev

  ```
   The app will be available at `http://localhost:3000` (or whatever port Vite prints in the terminal).
5. **Build for production**
  ```

   npm run build

  ```

### Deployment

This project is set up to deploy automatically on Vercel:

1. Connect your GitHub repository to a Vercel project.
2. Add the environment variables `GNEWS_API_KEY`, `GEMINI_API_KEY`) in the Vercel dashboard under **Project Settings → Environment Variables**.
3. Every push to `main` will automatically trigger a new deployment.

## Project structure

```

smartnews/

├── api/

│   ├── news.js           Serverless function — calls GNews, returns JSON

│   └── summarize.js      Serverless function — calls Gemini, returns a summary

├── src/

│   ├── components/

│   │   ├── layout/       Header, Footer, Layout

│   │   ├── news/         ArticleCard, NewsFeed, CategoryNav, SearchBar, AiSummary

│   │   └── ui/           ThemeToggle, Dropdown, Spinner, ErrorMessage, EmptyState

│   ├── data/             countries.js, languages.js

│   ├── hooks/            useNews.js and other custom hooks

│   ├── services/         newsService.js — talks to /api/news

│   └── styles/           plain CSS files (header.css, layout.css, etc.)

├── screenshots/          README preview images

├── .env.example

├── package.json

└── [README.md](http://README.md)

```

## License

This project is for personal/portfolio use.