import React, { useState } from "react";
import "./App.css";

function App() {
  // 1. State
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("Action");
  const [filter, setFilter] = useState("All");

  // 2. Derived State (Computed values)
  const totalMovies = movies.length;
  const watchedCount = movies.filter((m) => m.watched).length;
  const unwatchedCount = totalMovies - watchedCount;

  const filteredMovies = movies.filter((m) => {
    if (filter === "Watched") return m.watched;
    if (filter === "Unwatched") return !m.watched;
    return true;
  });

  const handleAddMovie = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    setMovies([...movies, { id: crypto.randomUUID(), title, genre, watched: false }]);
    setTitle("");
  };

  return (
    <div className="container-fluid">
      <div className="app-card">
        <h1>Movie List</h1>

        {/* Add Movie Form */}
        <form onSubmit={handleAddMovie} className="add-form">
          <input 
            type="text" placeholder="Title..." 
            value={title} onChange={(e) => setTitle(e.target.value)} 
          />
          <select value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option>Action</option>
            <option>Drama</option>
            <option>Comedy</option>
          </select>
          <button type="submit" className="btn-add">Add</button>
        </form>

        {/* Filter Controls */}
        <div className="filter-group">
          {["All", "Watched", "Unwatched"].map(f => (
            <button 
              key={f} 
              className={`filter-btn ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
            >{f}</button>
          ))}
        </div>

        {/* Summary (Derived State) */}
        <div className="stats">
          <span>Total: {totalMovies}</span>
          <span>✅ {watchedCount}</span>
          <span>⏳ {unwatchedCount}</span>
        </div>

        {watchedCount === totalMovies && totalMovies > 0 && 
          <p style={{textAlign:'center', color:'green'}}>🎉 All caught up!</p>
        }

        {/* Movies List */}
        <div className="movie-list">
          {filteredMovies.length === 0 ? (
            <p style={{textAlign:'center', color:'#999'}}>No movies found.</p>
          ) : (
            filteredMovies.map((movie) => (
              <div key={movie.id} className="movie-item">
                <div>
                  <span className={movie.watched ? "watched-text" : ""}>{movie.title}</span>
                  <span className="badge">{movie.genre}</span>
                </div>
                <div className="actions">
                  <button onClick={() => setMovies(movies.map(m => m.id === movie.id ? {...m, watched: !m.watched} : m))}>
                    {movie.watched ? "⏪" : "✔️"}
                  </button>
                  <button onClick={() => setMovies(movies.filter(m => m.id !== movie.id))}>🗑️</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;