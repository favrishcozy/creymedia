import React, { useRef, useState, useEffect, useCallback } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaExpand, FaTimes, FaSpinner } from 'react-icons/fa';

const CustomVideoPlayer = ({
  src,
  poster,
  className = '',
  autoPlay = false,
  showControls = true,
  overlayContent = null,
  onOverlayAction = null
}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showOverlay, setShowOverlay] = useState(!!overlayContent);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => {
      setDuration(video.duration);
      setIsLoaded(true);
      setIsLoading(false);
    };
    const handleEnded = () => {
      setIsPlaying(false);
      setShowOverlay(!!overlayContent);
    };
    const handlePlay = () => {
      setIsPlaying(true);
      setShowOverlay(false);
    };
    const handlePause = () => setIsPlaying(false);
    const handleLoadStart = () => setIsLoading(true);
    const handleCanPlay = () => {
      setIsLoading(false);
      setError(null);
    };
    const handleError = (e) => {
      setError('Failed to load video');
      setIsLoading(false);
      console.error('Video error:', e);
    };

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, [overlayContent]);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video || error) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play().catch((error) => {
        console.error('Video play failed:', error);
        setError('Unable to play video');
      });
    }
  }, [isPlaying, error]);

  const handleProgressChange = (e) => {
    const video = videoRef.current;
    if (!video) return;

    const newTime = (e.target.value / 100) * duration;
    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e) => {
    const video = videoRef.current;
    if (!video) return;

    const newVolume = e.target.value / 100;
    video.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isMuted) {
      video.volume = volume;
      setIsMuted(false);
    } else {
      video.volume = 0;
      setIsMuted(true);
    }
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      video.requestFullscreen();
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleVideoInteraction = useCallback((e) => {
    e.preventDefault();
    togglePlay();
  }, [togglePlay]);

  return (
    <div className={`relative ${className}`} style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#000',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'inherit'
    }}>
      {/* Loading State */}
      {isLoading && !isLoaded && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center z-20">
          <div className="text-center text-white">
            <FaSpinner className="animate-spin text-3xl mx-auto mb-2" />
            <p className="text-sm">Loading video...</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center z-20">
          <div className="text-center text-white max-w-xs mx-4">
            <div className="text-4xl mb-4">⚠️</div>
            <h3 className="text-lg font-semibold mb-2">Video Error</h3>
            <p className="text-sm opacity-80">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm"
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      {/* Video Element */}
      <video
        ref={videoRef}
        src={src}
        poster={isPlaying ? undefined : poster}
        onClick={handleVideoInteraction}
        onTouchStart={handleVideoInteraction}
        autoPlay={autoPlay}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          display: 'block',
          backgroundColor: '#000',
          position: 'absolute',
          top: 0,
          left: 0,
          borderRadius: 'inherit'
        }}
        controls={isMobile ? true : false}
        playsInline
        preload="metadata"
        muted={isMobile}
        className="rounded-inherit"
      />

      {/* Overlay Content */}
      {showOverlay && overlayContent && !error && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-inherit"
             style={{ zIndex: 10 }}>
          <button
            onClick={() => setShowOverlay(false)}
            className="absolute top-4 right-4 text-white hover:text-orange-400 transition-colors"
            style={{ zIndex: 20 }}
          >
            <FaTimes size={24} />
          </button>
          <div style={{ zIndex: 20 }}>
            {overlayContent}
          </div>
        </div>
      )}

      {/* Custom Controls for Desktop */}
      {showControls && !isMobile && !error && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-80 rounded-b-inherit z-10">
          <div className="flex items-center gap-4 text-white">
            <button
              onClick={togglePlay}
              className="p-2 rounded hover:bg-white hover:bg-opacity-20 transition-colors"
            >
              {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
            </button>

            <div className="flex-1 mx-4">
              <input
                type="range"
                min="0"
                max="100"
                value={(currentTime / duration) * 100 || 0}
                onChange={handleProgressChange}
                className="w-full h-1 bg-gray-600 rounded appearance-none cursor-pointer slider"
                style={{
                  background: 'transparent'
                }}
              />
            </div>

            <div className="text-xs font-mono flex-shrink-0">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>

            <button
              onClick={toggleMute}
              className="p-1 rounded hover:bg-white hover:bg-opacity-20 transition-colors"
            >
              {isMuted ? <FaVolumeMute size={16} /> : <FaVolumeUp size={16} />}
            </button>

            <button
              onClick={toggleFullscreen}
              className="p-1 rounded hover:bg-white hover:bg-opacity-20 transition-colors"
            >
              <FaExpand size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Play Button Overlay for Desktop */}
      {!isPlaying && !showOverlay && !isMobile && !error && (
        <div className="absolute inset-0 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
          <button
            onClick={togglePlay}
            className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-6 shadow-lg"
          >
            <FaPlay size={24} className="text-black ml-1" />
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomVideoPlayer;
