import React, { useEffect, useState } from 'react';
import NavigationButton from '../../components/NavigationButton/NavigationButton';
import PhotoCard from '../../components/PhotoCard/PhotoCard';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import './List.scss';

interface Photo {
  id: number;
  title: string;
  thumbnailUrl: string;
  url: string;
}

const List: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchPhotos = async (page: number) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums/1/photos?_page=${page}&_limit=10`
      );
      const data = await response.json();
      
      if (data.length === 0) {
        setHasMore(false);
        return;
      }

      setPhotos(prev => [...prev, ...data]);
    } catch (error) {
      console.error('Error fetching photos:', error);
    } finally {
      setLoading(false);
    }
  };

  const { page } = useInfiniteScroll({
    onLoadMore: () => fetchPhotos(page),
    hasMore,
    loading,
  });

  useEffect(() => {
    if (photos.length === 0) {
      fetchPhotos(1);
    }
  }, []);

  return (
    <div className="list-page">
      <div className="list-header">
        <h1>Photo List</h1>
        <NavigationButton to="/app1" label="Back to Dashboard" />
      </div>
      
      <div className="photos-container">
        {photos.map(photo => (
          <PhotoCard
            key={photo.id}
            id={photo.id}
            title={photo.title}
            thumbnailUrl={photo.thumbnailUrl}
            url={photo.url}
          />
        ))}
      </div>

      {loading && <div className="loading">Loading...</div>}
      {!hasMore && <div className="no-more">No more photos to load</div>}
    </div>
  );
};

export default List; 