// src/pages/About.jsx
import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CustomVideoPlayer from '../components/CustomVideoPlayer';
import { FaMicrophone, FaBook, FaVideo, FaPodcast, FaPlay, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const AboutContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
  color: white;
`;

const HeroSection = styled.section`
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

  @media (max-width: 768px) {
    padding: 12rem 1rem 4rem;
    background: linear-gradient(0deg, rgba(15,15,15,0.8) 0%, rgba(26,26,26,0.7) 100%), url('/images/Homehero_ladiesshow.jpeg') no-repeat center center / cover;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.4);
      opacity: 0.7;
    }
  }
`;

const HeroTitle = styled.h1`
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

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`;

const VideoShowcase = styled.div`
  max-width: 800px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  position: relative;
  z-index: 2;
`;

const AboutSection = styled.section`
  padding: 6rem 5%;
  position: relative;
`;

const ServiceSection = styled.div`
  text-align: center;
  margin-bottom: 6rem;

  h2 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 2rem;
    background: linear-gradient(45deg, #ff6b35, #f7931e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.9);
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 6rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContentImage = styled.div`
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const ContentText = styled.div`
  h3 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: white;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 2rem;
  }

  .highlight {
    color: #ff6b35;
    font-weight: 600;
  }
`;

const CategoriesSection = styled.div`
  margin-bottom: 6rem;
`;

const CategoriesTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #ff6b35, #f7931e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 1rem;
    padding: 0 1rem;

    &::-webkit-scrollbar {
      height: 6px;
    }

    &::-webkit-scrollbar-track {
      background: rgba(255,255,255,0.1);
      border-radius: 3px;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(255,107,53,0.5);
      border-radius: 3px;
    }
  }
`;

const CategoryCard = styled.div`
  background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(255, 107, 53, 0.2);
    border-color: rgba(255, 107, 53, 0.3);
  }

  .icon-container {
    width: 100px;
    height: 100px;
    background: linear-gradient(45deg, #ff6b35, #f7931e);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 1.5rem;
    box-shadow: 0 10px 30px rgba(255, 107, 53, 0.3);

    svg {
      font-size: 2.5rem;
      color: white;
    }
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: white;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
  }
`;

const ProcessSection = styled.div`
  margin-bottom: 6rem;
`;

const ProcessTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #ff6b35, #f7931e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProcessCard = styled.div`
  background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;

  &::before {
    content: "✓";
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    color: #ff6b35;
    font-weight: bold;
    font-size: 1.5rem;
    width: 30px;
    height: 30px;
    background: rgba(255, 107, 53, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h4 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: white;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
  }
`;

const BrandSection = styled.div`
  margin-bottom: 6rem;
  text-align: center;
`;

const BrandTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #ff6b35, #f7931e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const BrandLogos = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;

  .brand-logo {
    width: 150px;
    height: 80px;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
    }

    img {
      max-width: 120px;
      max-height: 60px;
      object-fit: contain;
    }
  }
`;

const TaglineSection = styled.div`
  text-align: center;
  margin-bottom: 6rem;
  position: relative;
`;

const QuoteContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem;

  .quote-icon {
    position: absolute;
    top: -10px;
    left: -10px;
    color: rgba(255, 107, 53, 0.3);
    font-size: 4rem;
  }

  .quote-icon-end {
    position: absolute;
    bottom: -10px;
    right: -10px;
    color: rgba(255, 107, 53, 0.3);
    font-size: 4rem;
  }
`;

const Tagline = styled.h2`
  font-size: 2.5rem;
  font-style: italic;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;
  position: relative;
  z-index: 2;
`;

const ContactSection = styled.div`
  text-align: center;
  background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%);
  border-radius: 25px;
  padding: 4rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: white;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  .contact-button {
    display: inline-block;
    margin-top: 2rem;
    padding: 1rem 2rem;
    background: linear-gradient(45deg, #ff6b35, #f7931e);
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 8px 25px rgba(255, 107, 53, 0.3);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 35px rgba(255, 107, 53, 0.4);
    }
  }
`;

const About = () => {
  const processSteps = [
    {
      title: "Live Sessions",
      description: "We host interactive live sessions with industry professionals, thought leaders, and creative experts to share valuable insights and foster meaningful discussions."
    },
    {
      title: "Content Curation",
      description: "Our team carefully curates high-quality content across multiple platforms, ensuring each piece delivers value and resonates with our diverse audience."
    },
    {
      title: "Community Building",
      description: "We actively engage with our community through events, workshops, and collaborative projects that bring together like-minded individuals and brands."
    },
    {
      title: "Research & Innovation",
      description: "We stay ahead of trends through continuous research and experimentation with new formats, technologies, and storytelling approaches."
    },
    {
      title: "Impact Measurement",
      description: "We regularly assess our impact on society and continuously refine our approach to maximize positive change through our creative work."
    }
  ];

  return (
    <AboutContainer>
      <Navigation />

      <HeroSection>
        <HeroTitle>About Us</HeroTitle>
        <HeroSubtitle>
          We are a creative news and lifestyle brand dedicated to delivering exceptional content that inspires, educates, and transforms lives.
        </HeroSubtitle>
        <VideoShowcase>
          <CustomVideoPlayer
            src="/images/podcastshow.mp4"
            poster="/images/Homehero_ladiesshow.jpeg"
            showControls={true}
            className="h-full"
          />
        </VideoShowcase>
      </HeroSection>

      <AboutSection>
        <ServiceSection>
          <h2>Delivering Exceptional Creative Experiences</h2>
          <p>
            At the heart of our brand is a passion for creativity and innovation. We believe that great content has the power to inspire change,
            spark conversations, and build stronger communities. Our mission is to create meaningful connections between creators and audiences
            through authentic, high-quality content that matters.
          </p>
        </ServiceSection>

        <ContentGrid>
          <ContentImage>
            <img src="/images/workstation.jpeg" alt="Creative Workspace" />
          </ContentImage>
          <ContentText>
            <h3>Our Creative Journey</h3>
            <p>
              Founded with a vision to revolutionize content creation, we've grown from a small team of passionate creators to a leading voice
              in the creative industry. Our journey has been guided by the belief that <span className="highlight">creativity knows no bounds</span>
              and that every story deserves to be told with excellence.
            </p>
            <p>
              Today, we continue to push boundaries, embrace new technologies, and maintain our commitment to authenticity and quality in everything we create.
            </p>
          </ContentText>
        </ContentGrid>

        <CategoriesSection>
          <CategoriesTitle>Our Services</CategoriesTitle>
          <CategoriesGrid>
            <CategoryCard>
              <div className="icon-container">
                <FaMicrophone />
              </div>
              <h3>Live Sessions</h3>
              <p>Interactive live discussions and workshops with industry leaders and creative professionals</p>
            </CategoryCard>

            <CategoryCard>
              <div className="icon-container">
                <FaBook />
              </div>
              <h3>Content Creation</h3>
              <p>Comprehensive content strategy and creation services for brands and individuals</p>
            </CategoryCard>

            <CategoryCard>
              <div className="icon-container">
                <FaVideo />
              </div>
              <h3>Video Production</h3>
              <p>Professional video content creation, from concept to final delivery</p>
            </CategoryCard>

            <CategoryCard>
              <div className="icon-container">
                <FaPodcast />
              </div>
              <h3>Podcast Services</h3>
              <p>End-to-end podcast production and audio content creation</p>
            </CategoryCard>
          </CategoriesGrid>
        </CategoriesSection>

        <ProcessSection>
          <ProcessTitle>How We Work</ProcessTitle>
          <ProcessGrid>
            {processSteps.map((step, index) => (
              <ProcessCard key={index}>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </ProcessCard>
            ))}
          </ProcessGrid>
        </ProcessSection>

        <BrandSection>
          <BrandTitle>Trusted By Industry Leaders</BrandTitle>
          <BrandLogos>
            <div className="brand-logo">
              <img src="/images/logos_adobe.png" alt="Adobe" />
            </div>
            <div className="brand-logo">
              <img src="/images/logos_netflix.png" alt="Netflix" />
            </div>
            <div className="brand-logo">
              <img src="/images/logos_spotify.png" alt="Spotify" />
            </div>
            <div className="brand-logo">
              <img src="/images/logos_youtube.png" alt="YouTube" />
            </div>
          </BrandLogos>
        </BrandSection>

        <TaglineSection>
          <QuoteContainer>
            <FaQuoteLeft className="quote-icon" />
            <Tagline>
              "We strive for a positive society with a healthy mindset through creative expression and meaningful connections"
            </Tagline>
            <FaQuoteRight className="quote-icon-end" />
          </QuoteContainer>
        </TaglineSection>

        <ContactSection>
          <h3>Let's Create Together</h3>
          <p>Ready to bring your creative vision to life?</p>
          <p>We're always excited to collaborate on new projects.</p>
          <a href="/contact" className="contact-button">Get In Touch</a>
        </ContactSection>
      </AboutSection>

      <Footer />
    </AboutContainer>
  );
};

export default About;
