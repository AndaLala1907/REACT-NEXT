import artists from '../data/db'
import ArtistItem from './ArtistItem'

const ArtistsList = () => {
    return (
        <div className="artists-list">

            {artists.map(artist => (
                <ArtistItem artist={artist} />
            ))}

        </div>
    )
}

export default ArtistsList