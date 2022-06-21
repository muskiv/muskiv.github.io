import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { albumsService } from '../../services/albums';

const PhotosPage = () => {
  const [photos, setPhotos] = useState([]);
  const { state } = useLocation();
  const albumsId = state.id;

  useEffect(() => {
    albumsService.getPhotos(albumsId).then(value => setPhotos([...value]))
  }, [albumsId]);

  return (
    <div>
      {photos.map(photo =>
        <div key={photo.id}>
          <div>Album Id: {photo.albumId}</div>
          <div>Id: {photo.id}</div>
          <div>title: {photo.title}</div>
          <img src={photo.thumbnailUrl} alt='photos' />
        </div>)}
    </div>
  )
};

export { PhotosPage };