import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import PhotoCard from '../PhotoCard/PhotoCard';
import './FavoritesSection.scss';

const FavoritesSection: React.FC = () => {
  const favorites = useSelector((state: RootState) => state.favorites.favorites);

  return (
    <div className="favorites-section">
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((photo) => (
            <PhotoCard
              key={photo.id}
              id={photo.id}
              title={photo.title}
              thumbnailUrl={photo.thumbnailUrl}
              url={photo.url}
              showFavoriteButton={false}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesSection; 