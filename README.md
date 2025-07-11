# Movie Search App

A simple React app to search for movies using [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api). Users can search for movies by title, view posters, overviews, ratings, and release dates. Results are sorted by rating (highest first).

## Features

- Search for movies by title
- View movie posters, overviews, ratings, and release dates
- Results sorted by rating (highest to lowest)
- Responsive grid layout
- Stylish background image

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Setup

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd 05moviesearch
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **TMDb API Key:**
   - Create a free account at [TMDb](https://www.themoviedb.org/).
   - Go to your account settings and generate an API key.
   - Create a `.env` file in the project root and add:
     ```
     VITE_API_KEY=your_tmdb_api_key_here
     ```

4. **Start the development server:**
   ```sh
   npm run dev
   ```

5. **Open in browser:**
   - Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Project Structure

```
05moviesearch/
├── public/
├── src/
│   ├── App.jsx        # Main React component
│   ├── App.css        # App-specific styles (background image)
│   ├── index.css      # Tailwind and global styles
│   └── main.jsx       # Entry point
├── .env               # API key (not committed)
├── package.json
└── README.md
```

## Customization

- **Background Image:**  
  Change the background image URL in `src/App.css` under the `body` selector.
- **Styling:**  
  Uses [Tailwind CSS](https://tailwindcss.com/) for utility-first styling.

## Notes

- Make sure your API key is kept private and **never committed to a public repo**.
- The app uses the `/search/movie` endpoint from TMDb.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.