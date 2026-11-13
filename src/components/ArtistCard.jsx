function ArtistCard({ artist }) {
  return (
    <article className="artist-card">
      {artist.artist_name === "The Illusionz" && (
        <img src="/images/the-illusionz-2.png" alt="The Illusionz cover art" />
      )}

      {artist.artist_name?.trim().toLowerCase() === "0nce0nfire" && (
        <img src="/images/once-on-fire-2.png" alt="0nce0nFire cover art" />
      )}
      <h3>{artist.artist_name}</h3>
      <p className="artist-genre">{artist.genre}</p>
      <p>{artist.bio}</p>
    </article>
  );
}

export default ArtistCard;
