import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

import { albumsService } from '../../services/albums';

const AlbumsPage = () => {
  const [albums, setAlbums] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    albumsService.getAll(id).then(value => setAlbums([...value]))
  }, [id]);

  return (
    <div>
      <div className='albums'>
        {albums.map(value =>
          <div key={value.id}>
            <div>User Id: {value.userId}</div>
            <div>Id: {value.id}</div>
            <div>Title: {value.title}</div>
            <Link to={value.id.toString() + '/photos'} state={value}><button>Photos</button></Link>
          </div>
        )}
      </div>
      <Outlet />
    </div>
  )
};

export { AlbumsPage };