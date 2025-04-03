import { Artist } from '../interfaces/Artist';
import { Link } from 'react-router-dom';

interface ArtistItemProps {
    artist: Artist;
}

const ArtistItem = (props: ArtistItemProps) => {

    const { artist } = props;

    return (
        <div className="artist-item">
            <Link to={`/artist/${artist.id}`}>
                <div className="artist-image-container">
                    <img src={`/images/covers/${artist.cover}.jpg`} alt={artist.name} />
                    <button className="artist-name-button">{artist.name}</button> {/* Butoni me emrin e artistit */}
                </div>
            </Link>
        </div>
    );
}

export default ArtistItem;
