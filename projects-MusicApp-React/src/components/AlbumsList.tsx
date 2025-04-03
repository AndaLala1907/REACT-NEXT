import { Album } from '../interfaces/Album';
import { Link } from 'react-router-dom';

interface AlbumsListProps {
    albums: Album[];
}

const AlbumsList = (props: AlbumsListProps) => {

    const { albums } = props;

    return (
        <div className="albums-grid">
            {albums.map(album => (
                <div className="album-item" key={album.albumId}>
                    <Link to={`/album/${album.albumId}`}>
                        <img className="album-list-images" src={`/images/albums/${album.cover}.jpg`} alt={album.title} />
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default AlbumsList