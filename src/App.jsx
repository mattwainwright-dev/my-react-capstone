import "./App.css";
import { useTable } from "./hooks/useTable";
import ArtistCard from "./components/ArtistCard";

function App() {
  const { data: artists, loading, error } = useTable("artists");

  return (
    <div className="app">
      <header>
        <h1>PULSE</h1>
        <p>Bring Music To Your Life</p>
      </header>

      <main>
        <h2>Level 3 React Capstone</h2>
        <p>React + Supabase</p>
        <section>
          <h2>Artist Explorer</h2>

          {loading && <p>Loading artists...</p>}
          {error && <p>Error: {error}</p>}

          {!loading && !error && artists.length === 0 && (
            <p>No artists available yet.</p>
          )}
          <div className="artist-grid">
            {!loading &&
              !error &&
              artists
                .filter((artist) =>
                  ["The Illusionz", "0nce0nFire"].includes(artist.artist_name),
                )
                .map((artist) => (
                  <ArtistCard key={artist.id} artist={artist} />
                ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
