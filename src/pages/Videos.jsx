import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CustomVideoPlayer from '../components/CustomVideoPlayer';
import { FaPlay, FaClock, FaEye, FaThumbsUp } from 'react-icons/fa';

const VideosContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: white;
`;

const VideosHeader = styled.section`
  padding: 6rem 5% 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,107,53,0.1)"/><circle cx="80" cy="80" r="2" fill="rgba(255,107,53,0.1)"/><circle cx="40" cy="60" r="1" fill="rgba(255,107,53,0.1)"/></svg>');
    opacity: 0.3;
  }
`;

const VideosTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #fff, #f0f8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  z-index: 2;
`;

const VideosSubtitle = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`;

const VideosSection = styled.section`
  padding: 0 5% 6rem;
  position: relative;
`;

const FeaturedVideo = styled.div`
  margin-bottom: 4rem;
  background: white;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.8);
`;

const FeaturedVideoPlayer = styled.div`
  height: 500px;
  position: relative;
`;

const FeaturedVideoInfo = styled.div`
  padding: 2.5rem;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #1a202c;
    line-height: 1.2;
  }

  p {
    font-size: 1.1rem;
    color: #4a5568;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .video-stats {
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;

    .stat {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #718096;
      font-size: 0.9rem;
    }
  }

  .play-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    background: linear-gradient(45deg, #667eea, #764ba2);
    color: white;
    border: none;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);
    }
  }
`;

const VideosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`;

const VideoCard = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.8);

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  }

  .video-thumbnail {
    position: relative;
    height: 200px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }

    .play-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;

      .play-icon {
        width: 60px;
        height: 60px;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #1a202c;
        font-size: 1.5rem;
        transition: all 0.3s ease;
      }
    }

    &:hover .play-overlay {
      opacity: 1;

      .play-icon {
        transform: scale(1.1);
        background: white;
      }
    }
  }

  .video-info {
    padding: 1.5rem;

    .video-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;

      .duration {
        background: #e53e3e;
        color: white;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.8rem;
        font-weight: 600;
      }

      .views {
        color: #718096;
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }
    }

    h3 {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: #1a202c;
      line-height: 1.3;
    }

    p {
      color: #4a5568;
      font-size: 1rem;
      line-height: 1.5;
      margin-bottom: 1rem;
    }

    .video-stats {
      display: flex;
      gap: 1rem;

      .stat {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        color: #718096;
        font-size: 0.9rem;
      }
    }
  }
`;

const LoadingSpinner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  color: rgba(255, 255, 255, 0.8);

  .spinner {
    width: 50px;
    height: 50px;
    border: 3px solid rgba(255, 255, 255, 0.2);
    border-top: 3px solid #ff6b35;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 1rem;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #ff6b35;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: white;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: rgba(255, 255, 255, 0.8);

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: white;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock video data since YouTube API isn't configured
  const mockVideos = [
    {
      id: { videoId: '1' },
      snippet: {
        title: "Behind the Scenes: Creative Process",
        description: "Join us as we walk through our creative process and share insights from our latest projects.",
        thumbnails: { high: { url: "/images/workstation.jpeg" } },
        publishedAt: "2024-12-15T10:00:00Z"
      },
      statistics: {
        viewCount: "12500",
        likeCount: "450",
        duration: "15:30"
      }
    },
    {
      id: { videoId: '2' },
      snippet: {
        title: "Industry Experts Roundtable",
        description: "A discussion with leading creative professionals about the future of digital content.",
        thumbnails: { high: { url: "/images/Ladies_podcast.jpeg" } },
        publishedAt: "2024-12-12T14:30:00Z"
      },
      statistics: {
        viewCount: "8900",
        likeCount: "320",
        duration: "28:45"
      }
    },
    {
      id: { videoId: '3' },
      snippet: {
        title: "Content Creation Tips & Tricks",
        description: "Practical advice and techniques for creating engaging content that resonates with audiences.",
        thumbnails: { high: { url: "/images/editor.jpeg" } },
        publishedAt: "2024-12-10T09:15:00Z"
      },
      statistics: {
        viewCount: "15600",
        likeCount: "680",
        duration: "22:10"
      }
    },
    {
      id: { videoId: '4' },
      snippet: {
        title: "The Art of Storytelling",
        description: "Exploring the power of narrative in modern content creation and brand building.",
        thumbnails: { high: { url: "/images/Reading.jpeg" } },
        publishedAt: "2024-12-08T16:45:00Z"
      },
      statistics: {
        viewCount: "11200",
        likeCount: "520",
        duration: "19:55"
      }
    },
    {
      id: { videoId: '5' },
      snippet: {
        title: "Tech Trends in Creative Industries",
        description: "How emerging technologies are transforming the way we create and consume content.",
        thumbnails: { high: { url: "/images/producereditor.jpeg" } },
        publishedAt: "2024-12-05T11:20:00Z"
      },
      statistics: {
        viewCount: "9800",
        likeCount: "410",
        duration: "25:30"
      }
    },
    {
      id: { videoId: '6' },
      snippet: {
        title: "Building Creative Communities",
        description: "Strategies for fostering collaboration and building supportive networks in creative fields.",
        thumbnails: { high: { url: "/images/Homehero_ladiesshow.jpeg" } },
        publishedAt: "2024-12-03T13:10:00Z"
      },
      statistics: {
        viewCount: "13400",
        likeCount: "590",
        duration: "31:15"
      }
    }
  ];

  useEffect(() => {
    const loadVideos = async () => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        setVideos(mockVideos);
      } catch (err) {
        setError('Failed to load videos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadVideos();
  }, []);

  const formatViews = (views) => {
    const num = parseInt(views);
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <VideosContainer>
      <Navigation />

      <VideosHeader>
        <VideosTitle>Video Library</VideosTitle>
        <VideosSubtitle>
          Explore our collection of videos featuring interviews, discussions, tutorials, and creative content.
          Discover insights from industry experts and learn from our creative process.
        </VideosSubtitle>
      </VideosHeader>

      <VideosSection>
        {loading && (
          <LoadingSpinner>
            <div className="spinner"></div>
            <p>Loading amazing content...</p>
          </LoadingSpinner>
        )}

        {error && (
          <ErrorMessage>
            <h3>Oops! Something went wrong</h3>
            <p>{error}</p>
          </ErrorMessage>
        )}

        {!loading && !error && videos.length > 0 && (
          <>
            {/* Featured Video */}
            <FeaturedVideo>
              <FeaturedVideoPlayer>
                <CustomVideoPlayer
                  src="/images/sceneshot.mp4"
                  poster={videos[0]?.snippet?.thumbnails?.high?.url}
                  showControls={true}
                  className="w-full h-full"
                />
              </FeaturedVideoPlayer>
              <FeaturedVideoInfo>
                <h2>{videos[0]?.snippet?.title}</h2>
                <p>{videos[0]?.snippet?.description}</p>
                <div className="video-stats">
                  <div className="stat">
                    <FaEye />
                    {formatViews(videos[0]?.statistics?.viewCount || '0')} views
                  </div>
                  <div className="stat">
                    <FaThumbsUp />
                    {videos[0]?.statistics?.likeCount || '0'} likes
                  </div>
                  <div className="stat">
                    <FaClock />
                    {videos[0]?.statistics?.duration || '0:00'}
                  </div>
                </div>
                <button className="play-button">
                  <FaPlay />
                  Watch Full Video
                </button>
              </FeaturedVideoInfo>
            </FeaturedVideo>

            {/* Video Grid */}
            <VideosGrid>
              {videos.slice(1).map((video) => (
                <VideoCard key={video.id.videoId}>
                  <div className="video-thumbnail">
                    <img
                      src={video.snippet.thumbnails.high.url}
                      alt={video.snippet.title}
                    />
                    <div className="play-overlay">
                      <div className="play-icon">
                        <FaPlay />
                      </div>
                    </div>
                  </div>
                  <div className="video-info">
                    <div className="video-meta">
                      <span className="duration">
                        {video.statistics?.duration || '0:00'}
                      </span>
                      <span className="views">
                        <FaEye />
                        {formatViews(video.statistics?.viewCount || '0')}
                      </span>
                    </div>
                    <h3>{video.snippet.title}</h3>
                    <p>{video.snippet.description.substring(0, 100)}...</p>
                    <div className="video-stats">
                      <div className="stat">
                        <FaThumbsUp />
                        {video.statistics?.likeCount || '0'}
                      </div>
                      <div className="stat">
                        {formatDate(video.snippet.publishedAt)}
                      </div>
                    </div>
                  </div>
                </VideoCard>
              ))}
            </VideosGrid>
          </>
        )}

        {!loading && !error && videos.length === 0 && (
          <EmptyState>
            <h3>No videos available</h3>
            <p>Check back later for new content!</p>
          </EmptyState>
        )}
      </VideosSection>

      <Footer />
    </VideosContainer>
  );
};

export default Videos;
