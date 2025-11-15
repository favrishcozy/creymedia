// src/pages/LiveSessionPage.jsx
import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CustomVideoPlayer from '../components/CustomVideoPlayer';

const LiveSessionContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #0a0a0aff 0%, #000000ff 100%);
  padding: 6rem 5%;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="80" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="60" r="1" fill="rgba(255,255,255,0.1)"/></svg>');
    opacity: 0.1;
  }

  @media (max-width: 768px) {
    padding: 6rem 2rem;
  }
`;

const MobileDemarcation = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 80%;
    height: 10px;
    background: linear-gradient(45deg, #ff6b35, #f7931e);
    margin: 0 auto;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(255, 107, 53, 0.4);
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const HeroText = styled.div`
  flex: 1;
  color: white;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #fff, #f0f8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;

  @media (max-width: 768px) {
    text-align: left;
    font-size: 3rem;
    margin-top: 1rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  font-weight: 300;
`;

const HeroCTA = styled.button`
  background: linear-gradient(45deg, #ff6b35, #f7931e);
  color: white;
  padding: 1.2rem 3rem;
  border: none;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(255, 107, 53, 0.4);

    &::before {
      left: 100%;
    }
  }
`;

const HeroVideo = styled.div`
  flex: 1;
  height: 450px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  border: 3px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    height: 280px;
  }
`;

const VideoSection = styled.section`
  padding: 4rem 5%;
  background: #0a0a0a;
  position: relative;
`;

const VideoSectionTitle = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  color: white;
`;

const VideoSectionSubtitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ff6b35, #f7931e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const VideoSectionDescription = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
`;

const VideoContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 70vh;
  min-height: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.4);
  border: 2px solid rgba(255, 107, 53, 0.2);
  position: relative;
`;

const PodcastSection = styled.section`
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 6rem 5%;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(0,0,0,0.03)"/><circle cx="75" cy="75" r="1" fill="rgba(0,0,0,0.03)"/><circle cx="50" cy="10" r="0.5" fill="rgba(0,0,0,0.03)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 2;
`;

const SectionBadge = styled.div`
  display: inline-block;
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #2d3748, #1a202c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #718096;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const MobileContentDemarcation = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 80%;
    height: 4px;
    background: linear-gradient(45deg, #667eea, #764ba2);
    margin: 0 auto;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);
  }
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
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  .video-info {
    padding: 1.5rem;

    h4 {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: #2d3748;
    }

    p {
      font-size: 1rem;
      color: #718096;
      line-height: 1.5;
    }
  }
`;

const VideosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 5rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    display: flex;
    overflow-x: auto;
    grid-template-columns: none;

    ${VideoCard} {
      flex-shrink: 0;
      min-width: 280px;
      margin-right: 1rem;
    }
  }
`;

const ContentSection = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  background: white;
  border-radius: 25px;
  padding: 4rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
  border: 1px solid rgba(255, 255, 255, 0.8);
  overflow: hidden;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ContentText = styled.div`
  flex: 1;

  h2 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #2d3748, #1a202c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.1;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 2rem;
    color: #667eea;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    line-height: 1.7;
    color: #4a5568;
  }

  button {
    background: linear-gradient(45deg, #667eea, #764ba2);
    color: white;
    padding: 1.2rem 3rem;
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

const ContentVideo = styled.div`
  flex: 1;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(102, 126, 234, 0.1);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #667eea, #764ba2, #ff6b35, #f7931e);
    z-index: -1;
    border-radius: 22px;
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    height: 280px;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    order: -1;

    &::before {
      opacity: 0.5;
    }
  }
`;

const MobileVideoSection = styled.div`
  display: none;
  margin: 2rem auto;
  max-width: 100%;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileContentCard = styled.div`
  @media (max-width: 768px) {
    display: block;
    background: white;
    border-radius: 25px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.8);

    h2 {
      font-size: 2rem;
      font-weight: 800;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, #2d3748, #1a202c);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      line-height: 1.1;
    }

    h3 {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      color: #667eea;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    p {
      font-size: 0.95rem;
      margin-bottom: 1.5rem;
      line-height: 1.6;
      color: #4a5568;
    }

    button {
      background: linear-gradient(45deg, #667eea, #764ba2);
      color: white;
      padding: 0.9rem 2rem;
      border: none;
      border-radius: 50px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3);
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
      }
    }
  }
`;

const MobileVideoPlayer = styled.div`
  @media (max-width: 768px) {
    position: relative;
    height: 280px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);

    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(45deg, #667eea, #764ba2, #ff6b35, #f7931e);
      z-index: -1;
      border-radius: 22px;
      opacity: 0.4;
    }
  }
`;

const LaunchOverlay = ({ onPlay }) => {
  const handleOverlayPlay = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onPlay) onPlay();
  };

  return (
    <div className="text-center text-white max-w-md">
      <h2 className="text-3xl font-bold mb-4">Launch the Podcast Show</h2>
      <button
        onClick={handleOverlayPlay}
        onTouchStart={handleOverlayPlay}
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
      >
        Get Started
      </button>
    </div>
  );
};

const LiveSessionPage = () => {
  return (
    <LiveSessionContainer>
      <Navigation />

      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroText>
            <HeroTitle>Live Session</HeroTitle>
            <HeroDescription>
              Join our live sessions and connect with creators in real-time.
            </HeroDescription>
            <HeroCTA>Join Live</HeroCTA>
          </HeroText>
          <HeroVideo>
            <CustomVideoPlayer
              src="/images/youtuber.mp4"
              poster="/images/Podcast_show.jpeg"
              showControls={true}
              className="h-full"
            />
          </HeroVideo>
        </HeroContent>
      </HeroSection>

      {/* Full Video Section - Live Session Main Player */}
      <VideoSection>
        <VideoSectionTitle>
          <VideoSectionSubtitle>Launch the Podcast Show</VideoSectionSubtitle>
          <VideoSectionDescription>
            Experience our live podcast sessions with interactive content and real-time engagement
          </VideoSectionDescription>
        </VideoSectionTitle>
        <VideoContainer>
          <CustomVideoPlayer
            src="/images/indianguy.mp4"
            poster="/images/Gold_theme_show.jpeg"
            showControls={true}
            overlayContent={
              <LaunchOverlay onPlay={() => {
                // This will be called when the overlay button is clicked
                const videoPlayer = document.querySelector('.video-player-main video');
                if (videoPlayer) {
                  videoPlayer.play();
                }
              }} />
            }
            onOverlayAction={() => {
              // This function will be called when overlay action is triggered
              const videoPlayer = document.querySelector('.video-player-main video');
              if (videoPlayer) {
                videoPlayer.play();
              }
            }}
            className="w-full h-full video-player-main"
          />
        </VideoContainer>
      </VideoSection>

      {/* Podcasts Section */}
      <PodcastSection>
        <SectionHeader>
          <SectionBadge>Services & Podcasts</SectionBadge>
          <SectionTitle>More Latest Podcasts</SectionTitle>
          <SectionSubtitle>
            Discover our collection of engaging podcast episodes featuring industry experts and creative insights
          </SectionSubtitle>
        </SectionHeader>

        <VideosGrid>
          <VideoCard>
            <img src="/images/editor.jpeg" alt="Podcast 1" />
            <div className="video-info">
              <h4>Episode 1: Getting Started</h4>
              <p>Introduction to content creation and the fundamentals of digital media production</p>
            </div>
          </VideoCard>
          <VideoCard>
            <img src="/images/workstation.jpeg" alt="Podcast 2" />
            <div className="video-info">
              <h4>Episode 2: Behind the Scenes</h4>
              <p>An exclusive look at our creative process and production workflow</p>
            </div>
          </VideoCard>
          <VideoCard>
            <img src="/images/Ladies_podcast.jpeg" alt="Podcast 3" />
            <div className="video-info">
              <h4>Episode 3: Community Spotlight</h4>
              <p>Featuring amazing stories and insights from our creative community</p>
            </div>
          </VideoCard>
        </VideosGrid>

        <ContentSection>
          <ContentText>
            <h2>Higher Standards of Company</h2>
            <h3>CATCH OUR LATEST PODCASTS AND VIEW OTHERS YOU MAY HAVE MISSED</h3>
            <p>Kindly check our video library. Subscribe to our newsletter to get updates on our upcoming live sessions and blog posts. We are happy to serve you the best content.</p>
            <button>Get Started Now</button>
          </ContentText>
          <ContentVideo>
            <CustomVideoPlayer
              src="/images/blacklady.mp4"
              poster="/images/davido.jpg"
              showControls={true}
              className="h-full"
            />
          </ContentVideo>
        </ContentSection>

        {/* Mobile Layout - Stacked */}
        <MobileVideoSection>
          <MobileContentCard>
            <h2>Higher Standards of Company</h2>
            <h3>CATCH OUR LATEST PODCASTS</h3>
            <p>Explore our premium video library for exceptional content.</p>
            <button>Get Started Now</button>
          </MobileContentCard>

          <MobileVideoPlayer>
            <CustomVideoPlayer
              src="/images/blacklady.mp4"
              poster="/images/davido.jpg"
              showControls={true}
              className="h-full"
            />
          </MobileVideoPlayer>
        </MobileVideoSection>
      </PodcastSection>

      <Footer />
    </LiveSessionContainer>
  );
};

export default LiveSessionPage;
