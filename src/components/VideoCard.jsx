import React, { useState } from 'react';
import { FaPlay, FaCalendar, FaEye } from 'react-icons/fa';
import VideoPlayer from './VideoPlayer';

const VideoCard = ({ video }) => {
  const [showPlayer, setShowPlayer] = useState(false);
  const [imageError, setImageError] = useState(false);

  if (!video || !video.snippet) return null;

  const { snippet } = video;
  const videoId = video.id.videoId || video.id;
  const thumbnail = snippet.thumbnails?.medium?.url || snippet.thumbnails?.default?.url;
  const fallbackImage = videoId === 'fallback1' ? '/images/editor.jpeg' :
                       videoId === 'fallback2' ? '/images/Podcast_show.jpeg' :
                       videoId === 'fallback3' ? '/images/workstation.jpeg' : '/images/editor.jpeg';
  const title = snippet.title;
  const description = snippet.description;
  const publishedAt = snippet.publishedAt ? new Date(snippet.publishedAt).toLocaleDateString() : new Date().toLocaleDateString();

  const handlePlayClick = (e) => {
    e.preventDefault();
    setShowPlayer(true);
  };

  const handleClosePlayer = () => {
    setShowPlayer(false);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative">
          <img
            src={imageError ? fallbackImage : thumbnail}
            alt={title}
            className="w-full h-48 object-cover"
            onError={() => setImageError(true)}
          />
          <div
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            onClick={handlePlayClick}
          >
            <div className="bg-orange-500 rounded-full p-4">
              <FaPlay className="text-white text-xl ml-1" />
            </div>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-orange-600 transition-colors">
            {title}
          </h3>

          <p className="text-gray-600 text-sm mb-3 line-clamp-3">
            {description}
          </p>

          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center">
              <FaCalendar className="mr-1" />
              <span>{publishedAt}</span>
            </div>
            <button
              onClick={handlePlayClick}
              className="text-orange-500 hover:text-orange-600 font-medium flex items-center"
            >
              <FaPlay className="mr-1" />
              Watch
            </button>
          </div>
        </div>
      </div>

      {/* Modal Player */}
      {showPlayer && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-semibold text-lg text-gray-900 truncate">{title}</h3>
              <button
                onClick={handleClosePlayer}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="p-4">
              <VideoPlayer videoId={videoId} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoCard;
