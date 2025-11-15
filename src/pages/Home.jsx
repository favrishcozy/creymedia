// src/pages/HomePage.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import VideoPlayer from '../components/VideoPlayer';
import { FaPlay, FaCalendarAlt } from 'react-icons/fa';
// import { supabase } from '../lib/supabaseClient';

const HomeContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  background: #000016ff;
  color: white;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    min-height: auto;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6rem 5% 2rem;
  max-width: 1200px;
  margin: 0 auto;
  animation: heroFadeIn 1s ease-out;

  @keyframes heroFadeIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 4rem 2% 2rem;
  }
`;

const TitleSection = styled.div`
  margin-bottom: 2rem;
  animation: titleSlideIn 1.2s ease-out 0.3s both;

  @keyframes titleSlideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  animation: aboutSlideIn 1.2s ease-out 0.6s both;

  @keyframes aboutSlideIn {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 2rem;
    flex-wrap: wrap;
  }
`;

const AboutText = styled.p`
  font-size: 0.8rem;
  margin-bottom: 2rem;
  color: white;

  @media (max-width: 768px) {
  margin-top: 1rem;
    font-size: 0.6rem;
    text-align: left;
    margin-bottom: 1rem;
  }
`;

const VideoSection = styled.section`
  width: 90%;
  margin: -180px auto 0;
  position: relative;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.02);
  }

  .video-container {
    position: relative;
    height: 450px;
    background-color: #000;
    border-radius: 16px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.8;
    }

    .play-button {
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80px;
      height: 80px;
      background-color: rgba(0, 191, 255, 0.8);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        background-color: rgba(0, 191, 255, 1);
        transform: translate(-50%, -50%) scale(1.1);
      }

      svg {
        color: white;
        font-size: 2rem;
        margin-left: 5px;
      }
    }
  }

  @media (max-width: 768px) {
    margin: 2rem auto 0;
    width: 95%;

    .video-container {
      height: 250px;
    }
  }
`;

const HeroTitleLine1 = styled.h1`
  font-size: 3.8rem;
  margin-bottom: 0;
  color: white;
  line-height: 1.2;
  letter-spacing: -0.02em;

  span {
    color: #ff7b00;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(45deg, #ff7b00, #ff9500);
      border-radius: 2px;
      animation: underlinePulse 2s ease-in-out infinite;
    }
  }

  @keyframes underlinePulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 1rem;

    span {
      &::after {
        height: 2px;
        bottom: -3px;
      }
    }
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const EstablishedText = styled.div`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
  margin-top: 0.5rem;
  animation: slideIn 1.5s ease-out 0.8s both;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.4;

  .icon-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.25rem;
    opacity: 0.8;
  }

  .established {
    font-size: 0.9rem;
    font-weight: 300;
  }

  .year {
    font-size: 2.2rem;
    font-weight: 600;
    background: linear-gradient(45deg, #00bfff, #0080ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;

    .established {
      font-size: 0.8rem;
    }

    .year {
      font-size: 1.8rem;
    }
  }
`;

const HeroStats = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 5rem;

  div {
    text-align: center;

    h3 {
      font-size: 2rem;
      color: #00bfff;
      margin-bottom: 0.5rem;
    }

    p {
      color: white;
    }
  }

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 0.5rem;
    margin-top: 2rem;

    div {
      h3 {
        font-size: 0.8rem;
        margin-bottom: 0.3rem;
        margin-top: 0rem;
      }

      p {
        font-size: 0.5rem;
      }
    }
  }
`;

const ContentSection = styled.section`
  padding: 4rem 5%;
  animation: fadeInUp 1s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ExploringSection = styled.section`
  padding: 1rem 5%;
  animation: fadeInUp 1s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const TopRow = styled.div`
  display: flex;
  gap: 2rem;
  padding: 0 5%;
  animation: fadeInUp 1s ease-out 0.2s both;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Toplatest = styled.div`
flex: 0.25;
  padding: 4rem 0 0;
  animation: fadeInUp 1s ease-out 0.4s both;
`;

const LeftSide = styled.div`
  flex: 1;
`;

const RightSide = styled.div`
  flex: 0 0 200px;
  border: 2px solid #00bfff;
  border-radius: 8px;
  padding: 0.5rem 0.5rem 0.25rem;

  @media (max-width: 768px) {
    flex: none;
    width: 100%;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #111;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const BrandBar = styled.button`
  background: linear-gradient(45deg, #00bfff, #0080ff);
  color: white;
  border: none;
  border-radius: 25px;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 191, 255, 0.3);
  margin-top: 0rem;
  margin-bottom: 0.1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 191, 255, 0.4);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 2rem;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;

  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #666;

    &:hover {
      color: #000;
    }
  }

  h3 {
    color: #00bfff;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

const SlimBar = styled.div`
  width: 100%;
  height: 3px;
  background: linear-gradient(45deg, #00bfff, #0080ff);
  margin: 1rem 0;

  @media (max-width: 768px) {
    height: 2px;
    margin: 0.5rem 0;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;

  .content-card {
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
      transform: translateY(-5px) scale(1.02);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    }

    img {
      width: 100%;
      height: 150px;
      object-fit: cover;
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.05);
      }
    }

    .card-content {
      padding: 1rem;

      h3 {
        margin-bottom: 0.5rem;
        color: #111;
        font-size: 1rem;
      }

      p {
        color: #666;
        margin-bottom: 1rem;
        font-size: 0.9rem;
      }

      a {
        color: #00bfff;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.3s;

        &:hover {
          color: #0099cc;
        }
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
    overflow-x: auto;
    grid-template-columns: none;

    .card-content {
      padding: 0.5rem;
      flex-shrink: 0;
      min-width: 250px;
    }
  }
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.25rem;

  .content-card {
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-5px);
    }

    img {
      width: 100%;
      height: 90px;
      object-fit: cover;
    }

    .card-content {
      padding: 0.5rem;

      h3 {
        margin-bottom: 0.25rem;
        color: #111;
        font-size: 0.9rem;
      }

      p {
        color: #666;
        margin-bottom: 0.25rem;
        font-size: 0.8rem;
      }

      a {
        color: #00bfff;
        text-decoration: none;
        font-weight: 500;
        font-size: 0.8rem;
        transition: color 0.3s;

        &:hover {
          color: #0099cc;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .card-content {
      padding: 0.25rem;
    }

    display: flex;
    overflow-x: hidden;
    animation: carouselScroll 15s linear infinite;
    width: calc(300%);

    @keyframes carouselScroll {
      0% { transform: translateX(0); }
      33.33% { transform: translateX(-33.333%); }
      66.66% { transform: translateX(-66.666%); }
      100% { transform: translateX(-100%); }
    }
  }
`;

const Home = () => {
  const [showAboutModal, setShowAboutModal] = useState(false);

  return (
    <HomeContainer>
      <Navigation />
      
      <HeroSection>
        <HeroContent>
          <TitleSection>
            <HeroTitleLine1>We Are a <span>Creative</span> News & Lifestyle Brand</HeroTitleLine1>
          </TitleSection>

          <SlimBar />

          <TitleSection>
            <EstablishedText>
              <div className="icon-row">
                <FaCalendarAlt />
                <div className="established">Established</div>
              </div>
              <div className="year">2025</div>
            </EstablishedText>
          </TitleSection>

          <AboutSection>
            <BrandBar onClick={() => setShowAboutModal(true)}>crey dreamhouse</BrandBar>

            <StatsContainer>
              <div>
                <h3>4+</h3>
                <p>years of experience</p>
              </div>
              <div>
                <h3>20+</h3>
                <p>completed projects</p>
              </div>
              <div>
                <h3>25+</h3>
                <p>published books</p>
              </div>
            </StatsContainer>
          </AboutSection>
        </HeroContent>
      </HeroSection>

      {showAboutModal && (
        <ModalOverlay onClick={() => setShowAboutModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setShowAboutModal(false)}>&times;</button>
            <h3>About Crey Dreamhouse</h3>
            <p>crey dreamhouse is a media house set to bring engaging topics to you via live sessions with influential personas.</p>
          </ModalContent>
        </ModalOverlay>
      )}

      <VideoSection>
        <div className="video-container">
          {/* Fallback image when no live video is configured */}
          <img src="/images/Homehero_ladiesshow.jpeg" alt="Live Session" />
          <div className="play-button">
            <FaPlay />
          </div>
        </div>
      </VideoSection>
      
      <TopRow>
        <LeftSide>
          <ContentSection>
            <SectionTitle>Trending Articles</SectionTitle>
            <ContentGrid>
              {[
                { title: 'Creative Industry Trends', desc: 'Exploring the latest trends shaping the creative industry and digital media.', img: '/images/editor.jpeg' },
                { title: 'The Art of Storytelling', desc: 'Mastering the craft of storytelling in digital media and content creation.', img: '/images/Reading.jpeg' },
                { title: 'Building Creative Communities', desc: 'Strategies for fostering engaged communities around creative content.', img: '/images/Ladies_podcast.jpeg' }
              ].map((article, index) => (
                <div className="content-card" key={index}>
                  <img src={article.img} alt={article.title} />
                  <div className="card-content">
                    <h3>{article.title}</h3>
                    <p>{article.desc}</p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              ))}
            </ContentGrid>
          </ContentSection>

          <ExploringSection>
            <SectionTitle>Exploring Books</SectionTitle>
            <ContentGrid>
              {[
                { title: 'The Last Werewolf', desc: 'A thrilling supernatural adventure that explores the world of werewolves and ancient mysteries.', img: '/images/The Last Werewolf (The Last Werewolf 1) (The Last Werewolf Trilogy).jpeg' },
                { title: 'Moonlight Druid', desc: 'An epic fantasy tale of druids, magic, and the struggle between light and darkness.', img: '/images/moonlightdruidbook.jpeg' },
                { title: 'Catching Chase', desc: 'A captivating story of pursuit, mystery, and the secrets that bind us together.', img: '/images/Catching Chasebook.jpeg' }
              ].map((book, index) => (
                <div className="content-card" key={index}>
                  <img src={book.img} alt={book.title} />
                  <div className="card-content">
                    <h3>{book.title}</h3>
                    <p>{book.desc}</p>
                    <a href="#">Learn More</a>
                  </div>
                </div>
              ))}
            </ContentGrid>
          </ExploringSection>
        </LeftSide>

        <Toplatest>
          <RightSide>
            <SectionTitle>Latest Videos</SectionTitle>
            <VideoGrid>
              {[
                { title: 'Live Session Highlights', desc: 'Catch up on our latest live sessions featuring industry experts and creative discussions.', img: '/images/Podcast_show.jpeg' },
                { title: 'Behind the Scenes', desc: 'Get an exclusive look at how we create compelling content for our audience.', img: '/images/workstation.jpeg' },
                { title: 'Creative Content Creation', desc: 'Learn about the latest trends in creative content creation and digital media production.', img: '/images/producereditor.jpeg' }
              ].map((video, index) => (
                <div className="content-card" key={index}>
                  <img src={video.img} alt={video.title} />
                  <div className="card-content">
                    <h3>{video.title}</h3>
                    <p>{video.desc}</p>
                    <a href="#">Watch Now</a>
                  </div>
                </div>
              ))}
            </VideoGrid>
          </RightSide>
        </Toplatest>
      </TopRow>


      
      <Footer />
    </HomeContainer>
  );
};

export default Home;
