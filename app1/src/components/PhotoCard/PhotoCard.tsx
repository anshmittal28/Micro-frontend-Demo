import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { toggleFavorite } from '../../store/favoritesSlice';
import './PhotoCard.scss';

interface PhotoCardProps {
  id: number;
  title: string;
  thumbnailUrl: string;
  url: string;
  showFavoriteButton?: boolean;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ 
  id, 
  title, 
  thumbnailUrl, 
  url,
  showFavoriteButton = true 
}) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.favorites);
  const isFavorite = favorites.some(fav => fav.id === id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite({ id, title, thumbnailUrl, url }));
  };

  return (
    <div className="photo-card">
      <div className="photo-content">
        <img src={thumbnailUrl} alt={title} />
        <div className="photo-info">
          <span className="photo-id">ID: {id}</span>
          <p className="photo-title">{title}</p>
        </div>
      </div>
      {showFavoriteButton && (
        <button 
          className={`favorite-button ${isFavorite ? 'active' : ''}`}
          onClick={handleToggleFavorite}
        >
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      )}
    </div>
  );
};

export default PhotoCard; 