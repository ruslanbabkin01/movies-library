import { Outlet } from 'react-router-dom';
import { useState, Suspense } from 'react';
import { VideoGallery } from 'components/VideoGallery';
import { Loader } from 'components/Loader';
import { useLocalStorage } from 'hooks/useLocalStorage';
import Notification from 'components/Notification';

export default function LiabraryPage() {
  const [watchedMovies] = useLocalStorage('watchedMovies', []);
  const [queueMovies] = useLocalStorage('queueMovies', []);
  const [showGallery, setshowGallery] = useState(true);

  const activeStyle = {
    background: 'red',
  };

  return (
    <main>
      <ul className="flex gap-4 justify-center xl:gap-10">
        <li>
          <button
            onClick={() => setshowGallery(true)}
            className="bg-blue-500 p-2 rounded hover:bg-red-600 text-white focus:bg-red-600"
            style={showGallery ? activeStyle : undefined}
          >
            Watched
          </button>
        </li>
        <li>
          <button
            onClick={() => setshowGallery(false)}
            className="bg-blue-500 p-2 rounded hover:bg-red-600 text-white focus:bg-red-600"
            style={!showGallery ? activeStyle : undefined}
          >
            Queue
          </button>
        </li>
      </ul>
      {showGallery ? (
        <VideoGallery movies={watchedMovies} />
      ) : (
        <VideoGallery movies={queueMovies} />
      )}
      {watchedMovies.length === 0 && showGallery ? <Notification /> : undefined}
      {queueMovies.length === 0 && !showGallery ? <Notification /> : undefined}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
}
