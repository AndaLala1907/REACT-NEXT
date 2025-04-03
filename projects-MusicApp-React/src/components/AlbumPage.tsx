import { useParams } from "react-router-dom";
import { Album } from "../interfaces/Album";
import artists from "../data/db";

const AlbumPage = () => {
  const { id } = useParams<{ id: string }>();

  const album: Album | undefined = artists
    .flatMap((artist) => artist.albums)
    .find((a) => a.albumId === id);

  if (!album) {
    return (
      <div className="not-found">
        <h2>Album Not Found!</h2>
        <p>Please check the album ID or return to the homepage.</p>
      </div>
    );
  }

  return (
    <div className="album-page">
      <img
        src={`/images/albums/${album.cover}.jpg`}
        alt={album.title}
        className="album-cover"
      />
      <h1>{album.title}</h1>
      <p>Released: {album.year}</p>
      <p>Price: ${album.price}</p>
    </div>
  );
};

export default AlbumPage;
