// src/pages/BlogPage.jsx
import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa';

const BlogContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  color: white;
`;

const BlogHeader = styled.section`
  padding: 6rem 5%;
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

const BlogTitle = styled.h1`
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

const BlogSubtitle = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`;

const BlogSection = styled.section`
  padding: 4rem 5%;
  position: relative;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2rem;
  margin-bottom: 5rem;
`;

const BlogCard = styled.div`
  background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 60px rgba(255, 107, 53, 0.2);
    border-color: rgba(255, 107, 53, 0.3);
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  .card-content {
    padding: 2rem;

    .card-meta {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.6);

      .meta-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: white;
      line-height: 1.3;
    }

    p {
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 2rem;
      line-height: 1.6;
    }

    .read-more {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.8rem 1.5rem;
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

      svg {
        transition: transform 0.3s ease;
      }

      &:hover svg {
        transform: translateX(3px);
      }
    }
  }
`;

const BannerSection = styled.section`
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  padding: 5rem 5%;
  text-align: center;
  margin: 0 5% 5rem;
  border-radius: 25px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="90" cy="90" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="20" r="0.5" fill="rgba(255,255,255,0.1)"/></svg>');
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 2;
  }

  p {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 2rem;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    z-index: 2;
  }

  .banner-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2.5rem;
    background: linear-gradient(45deg, #ff6b35, #f7931e);
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    box-shadow: 0 8px 25px rgba(255, 107, 53, 0.3);
    position: relative;
    z-index: 2;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 35px rgba(255, 107, 53, 0.4);
    }

    svg {
      transition: transform 0.3s ease;
    }

    &:hover svg {
      transform: translateX(3px);
    }
  }
`;

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Creative Content",
      excerpt: "Exploring how technology is reshaping the way we create and consume content in the digital age. From AI-powered creation tools to immersive experiences, discover what's next.",
      image: "/images/editor.jpeg",
      date: "Dec 15, 2024",
      author: "Sarah Chen"
    },
    {
      id: 2,
      title: "Building a Sustainable Creative Business",
      excerpt: "Key strategies for maintaining creativity while running a profitable business in the creative industry. Learn from successful entrepreneurs who've mastered this balance.",
      image: "/images/workstation2.jpeg",
      date: "Dec 12, 2024",
      author: "Marcus Johnson"
    },
    {
      id: 3,
      title: "The Power of Storytelling in Branding",
      excerpt: "How effective storytelling can elevate your brand and create deeper connections with your audience. Real case studies from leading brands.",
      image: "/images/Reading.jpeg",
      date: "Dec 10, 2024",
      author: "Emma Rodriguez"
    },
    {
      id: 4,
      title: "Balancing Creativity and Productivity",
      excerpt: "Tips and techniques for maintaining creative flow while meeting deadlines and staying productive. Practical advice from industry professionals.",
      image: "/images/producereditor.jpeg",
      date: "Dec 8, 2024",
      author: "David Kim"
    },
    {
      id: 5,
      title: "The Evolution of Digital Media",
      excerpt: "A look back at how digital media has transformed over the past decade and what's next. Insights from pioneers in the digital space.",
      image: "/images/Ladies_podcast.jpeg",
      date: "Dec 5, 2024",
      author: "Lisa Thompson"
    },
    {
      id: 6,
      title: "Creating Inclusive Content",
      excerpt: "Why representation matters in media and how to create content that resonates with diverse audiences. A comprehensive guide to inclusive storytelling.",
      image: "/images/Homehero_ladiesshow.jpeg",
      date: "Dec 3, 2024",
      author: "James Wilson"
    }
  ];

  return (
    <BlogContainer>
      <Navigation />

      <BlogHeader>
        <BlogTitle>Blog</BlogTitle>
        <BlogSubtitle>
          Insights, stories, and perspectives from the creative community.
          Discover the latest trends, tips, and inspiration for your creative journey.
        </BlogSubtitle>
      </BlogHeader>

      <BlogSection>
        <BlogGrid>
          {blogPosts.map(post => (
            <BlogCard key={post.id}>
              <img src={post.image} alt={post.title} />
              <div className="card-content">
                <div className="card-meta">
                  <div className="meta-item">
                    <FaCalendar />
                    {post.date}
                  </div>
                  <div className="meta-item">
                    <FaUser />
                    {post.author}
                  </div>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <a href="#" className="read-more">
                  Read More
                  <FaArrowRight />
                </a>
              </div>
            </BlogCard>
          ))}
        </BlogGrid>

        <BannerSection>
          <h2>Join Our Creative Community</h2>
          <p>Subscribe to our newsletter and get exclusive insights, behind-the-scenes content, and early access to new features.</p>
          <a href="#" className="banner-button">
            Subscribe Now
            <FaArrowRight />
          </a>
        </BannerSection>
      </BlogSection>

      <Footer />
    </BlogContainer>
  );
};

export default BlogPage;
