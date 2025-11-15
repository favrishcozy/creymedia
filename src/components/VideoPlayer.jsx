import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-youtube';

const VideoPlayer = ({ videoId, options = {} }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  // Check if it's a fallback video ID
  const isFallbackVideo = videoId && (videoId.startsWith('fallback') || !videoId.includes('UC'));

  const defaultOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    techOrder: ['youtube'],
    sources: [{
      src: `https://www.youtube.com/watch?v=${videoId}`,
      type: 'video/youtube'
    }],
    youtube: {
      modestbranding: 1,
      rel: 0,
      showinfo: 0
    }
  };

  useEffect(() => {
    if (!videoId) return;

    const mergedOptions = { ...defaultOptions, ...options };

    if (!playerRef.current) {
      const videoElement = videoRef.current;

      if (!videoElement) return;

      playerRef.current = videojs(videoElement, mergedOptions);
    } else {
      // Update sources if videoId changed
      playerRef.current.src({
        src: `https://www.youtube.com/watch?v=${videoId}`,
        type: 'video/youtube'
      });
    }
  }, [videoId, options]);

  useEffect(() => {
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  // Show fallback content for demo videos
  if (isFallbackVideo) {
    const fallbackImages = {
      'fallback1': '/images/editor.jpeg',
      'fallback2': '/images/Podcast_show.jpeg',
      'fallback3': '/images/workstation.jpeg'
    };

    return (
      <div className="relative w-full h-96 bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center">
        <img
          src={fallbackImages[videoId] || '/images/editor.jpeg'}
          alt="Video placeholder"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-6xl mb-4">🎬</div>
            <h3 className="text-xl font-semibold mb-2">Video Content</h3>
            <p className="text-gray-300">Configure YouTube API to display actual videos</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div data-vjs-player>
      <video
        ref={videoRef}
        className="video-js vjs-big-play-centered"
        playsInline
      />
    </div>
  );
};

export default VideoPlayer;
