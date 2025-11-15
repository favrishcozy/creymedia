import React, { useState } from 'react';
import { FaCalendar, FaUser, FaExternalLinkAlt } from 'react-icons/fa';

const NewsCard = ({ article }) => {
  const [imageError, setImageError] = useState(false);

  if (!article) return null;

  const {
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    source
  } = article;

  const formattedDate = publishedAt ? new Date(publishedAt).toLocaleDateString() : '';
  const sourceName = source?.name || 'Unknown Source';

  // Use fallback images based on article index or content
  const fallbackImages = [
    '/images/editor.jpeg',
    '/images/Reading.jpeg',
    '/images/Ladies_podcast.jpeg',
    '/images/workstation2.jpeg',
    '/images/producereditor.jpeg',
    '/images/Homehero_ladiesshow.jpeg'
  ];
  const fallbackImage = urlToImage ? urlToImage : fallbackImages[Math.abs(title.length) % fallbackImages.length];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={imageError ? fallbackImage : (urlToImage || fallbackImage)}
        alt={title}
        className="w-full h-48 object-cover"
        onError={() => setImageError(true)}
      />

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-orange-600 transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {description}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <div className="flex items-center">
            <FaUser className="mr-1" />
            <span>{sourceName}</span>
          </div>
          {formattedDate && (
            <div className="flex items-center">
              <FaCalendar className="mr-1" />
              <span>{formattedDate}</span>
            </div>
          )}
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium text-sm transition-colors"
        >
          Read Full Article
          <FaExternalLinkAlt className="ml-1 text-xs" />
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
