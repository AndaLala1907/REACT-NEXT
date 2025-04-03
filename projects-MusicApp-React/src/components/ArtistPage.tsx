import { useParams } from "react-router-dom";
import artists from "../data/db";
import AlbumsList from "./AlbumsList";

const ArtistPage = () => {
  const { id } = useParams<{ id: string }>();
  const artist = artists.find((a) => a.id === parseInt(id || "0"));

  if (!artist) {
    return (
      <div className="not-found">
        <h2>Artist Not Found</h2>
        <p>Check the artist ID or go back to the homepage.</p>
      </div>
    );
  }

  return (
    <div className="artist-page">
      {/* Imazhi më i vogël */}
      <img
        src={`/images/covers/${artist.cover}.jpg`}
        alt={artist.name}
        className="artist-cover small-artist-cover"
      />
      <div className="artist-details">
        <h1>{artist.name}</h1>
        <p>{artist.bio}</p>
      </div>
      <AlbumsList albums={artist.albums} />
    </div>
  );
};

export default ArtistPage;
