import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FaNewspaper, FaFilter, FaCalendar, FaUser, FaExternalLinkAlt, FaClock } from 'react-icons/fa';

const NewsContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
  color: white;
`;

const NewsHeader = styled.section`
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

const NewsTitle = styled.h1`
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

const NewsSubtitle = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`;

const NewsSection = styled.section`
  padding: 0 5% 6rem;
  position: relative;
`;

const CategoryFilter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 2;

  .filter-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
    color: rgba(255, 255, 255, 0.8);

    svg {
      color: #ff6b35;
    }

    span {
      font-size: 1.1rem;
      font-weight: 500;
    }
  }

  .category-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }

  .category-btn {
    padding: 0.8rem 1.5rem;
    border: 2px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    color: rgba(255, 255, 255, 0.8);
    border-radius: 50px;
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      border-color: #ff6b35;
      background: rgba(255, 107, 53, 0.1);
      color: #ff6b35;
      transform: translateY(-2px);
    }

    &.active {
      border-color: #ff6b35;
      background: linear-gradient(45deg, #ff6b35, #f7931e);
      color: white;
      box-shadow: 0 8px 25px rgba(255, 107, 53, 0.3);
    }
  }
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2rem;
`;

const NewsCard = styled.div`
  background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 60px rgba(255, 107, 53, 0.2);
    border-color: rgba(255, 107, 53, 0.3);
  }

  .news-image {
    position: relative;
    height: 220px;
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

    .news-category {
      position: absolute;
      top: 1rem;
      left: 1rem;
      background: linear-gradient(45deg, #ff6b35, #f7931e);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  }

  .news-content {
    padding: 2rem;

    .news-meta {
      display: flex;
      align-items: center;
      gap: 1.5rem;
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
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .read-more {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: #ff6b35;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      transition: all 0.3s ease;

      &:hover {
        color: #f7931e;
        transform: translateX(5px);
      }

      svg {
        font-size: 0.8rem;
      }
    }
  }
`;

const FeaturedNews = styled.div`
  margin-bottom: 4rem;

  .featured-card {
    background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%);
    border-radius: 25px;
    overflow: hidden;
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    min-height: 400px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      min-height: auto;
    }

    .featured-image {
      position: relative;
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

      .featured-badge {
        position: absolute;
        top: 2rem;
        left: 2rem;
        background: linear-gradient(45deg, #ff6b35, #f7931e);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
    }

    .featured-content {
      padding: 3rem;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .featured-category {
        display: inline-block;
        background: rgba(255, 107, 53, 0.2);
        color: #ff6b35;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 1rem;
        align-self: flex-start;
      }

      h2 {
        font-size: 2.5rem;
        font-weight: 800;
        margin-bottom: 1rem;
        color: white;
        line-height: 1.2;
      }

      p {
        font-size: 1.1rem;
        color: rgba(255, 255, 255, 0.8);
        line-height: 1.6;
        margin-bottom: 2rem;
      }

      .featured-meta {
        display: flex;
        align-items: center;
        gap: 2rem;
        margin-bottom: 2rem;
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.6);

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
      }

      .read-featured {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        background: linear-gradient(45deg, #ff6b35, #f7931e);
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s ease;
        box-shadow: 0 8px 25px rgba(255, 107, 53, 0.3);

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(255, 107, 53, 0.4);
        }

        svg {
          font-size: 0.9rem;
        }
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
    width: 60px;
    height: 60px;
    border: 3px solid rgba(255, 255, 255, 0.2);
    border-top: 3px solid #ff6b35;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 1.5rem;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  p {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #ff6b35;

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: white;
  }

  p {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: rgba(255, 255, 255, 0.8);

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: white;
  }

  p {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('general');

  const categories = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Business' },
    { value: 'technology', label: 'Technology' },
    { value: 'sports', label: 'Sports' },
    { value: 'health', label: 'Health' },
    { value: 'science', label: 'Science' },
  ];

  // Mock news data since NewsAPI might not be available
  const mockArticles = [
    {
      title: "Revolutionary AI Technology Transforms Creative Industries",
      description: "New artificial intelligence tools are revolutionizing how creatives work, offering unprecedented possibilities for innovation and efficiency.",
      urlToImage: "/images/workstation.jpeg",
      publishedAt: "2024-12-15T10:00:00Z",
      author: "Sarah Chen",
      source: { name: "Tech Daily" }
    },
    {
      title: "Sustainable Practices in Modern Content Creation",
      description: "Leading creators share their strategies for maintaining creativity while building environmentally conscious businesses.",
      urlToImage: "/images/Ladies_podcast.jpeg",
      publishedAt: "2024-12-14T08:30:00Z",
      author: "Marcus Johnson",
      source: { name: "Creative Business" }
    },
    {
      title: "The Future of Digital Storytelling",
      description: "Exploring emerging trends in narrative techniques and how technology is reshaping the way we tell stories.",
      urlToImage: "/images/Reading.jpeg",
      publishedAt: "2024-12-13T14:15:00Z",
      author: "Emma Rodriguez",
      source: { name: "Digital Arts" }
    },
    {
      title: "Building Strong Creative Communities Online",
      description: "Strategies for fostering collaboration and support networks in the digital creative space.",
      urlToImage: "/images/editor.jpeg",
      publishedAt: "2024-12-12T11:45:00Z",
      author: "David Kim",
      source: { name: "Community Focus" }
    },
    {
      title: "Innovation in Video Content Production",
      description: "How new technologies and techniques are changing the landscape of video content creation.",
      urlToImage: "/images/producereditor.jpeg",
      publishedAt: "2024-12-11T09:20:00Z",
      author: "Lisa Thompson",
      source: { name: "Video Weekly" }
    },
    {
      title: "The Psychology of Creative Work",
      description: "Understanding the mental processes behind creativity and how to optimize your creative workflow.",
      urlToImage: "/images/Homehero_ladiesshow.jpeg",
      publishedAt: "2024-12-10T16:10:00Z",
      author: "James Wilson",
      source: { name: "Creative Mind" }
    }
  ];

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        setArticles(mockArticles);
      } catch (err) {
        setError('Failed to load news');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [category]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <NewsContainer>
      <Navigation />

      <NewsHeader>
        <NewsTitle>Latest News</NewsTitle>
        <NewsSubtitle>
          Stay informed with the latest insights, trends, and developments in the creative industry.
          Discover stories that inspire and inform.
        </NewsSubtitle>
      </NewsHeader>

      <NewsSection>
        <CategoryFilter>
          <div className="filter-header">
            <FaFilter />
            <span>Filter by Category</span>
          </div>
          <div className="category-buttons">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setCategory(cat.value)}
                className={`category-btn ${category === cat.value ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </CategoryFilter>

        {loading && (
          <LoadingSpinner>
            <div className="spinner"></div>
            <p>Loading the latest news...</p>
          </LoadingSpinner>
        )}

        {error && (
          <ErrorMessage>
            <h3>Oops! Something went wrong</h3>
            <p>{error}</p>
          </ErrorMessage>
        )}

        {!loading && !error && articles.length > 0 && (
          <>
            {/* Featured News Article */}
            <FeaturedNews>
              <div className="featured-card">
                <div className="featured-image">
                  <img src={articles[0].urlToImage} alt={articles[0].title} />
                  <div className="featured-badge">Featured</div>
                </div>
                <div className="featured-content">
                  <div className="featured-category">{category}</div>
                  <h2>{articles[0].title}</h2>
                  <p>{articles[0].description}</p>
                  <div className="featured-meta">
                    <div className="meta-item">
                      <FaUser />
                      {articles[0].author || 'Anonymous'}
                    </div>
                    <div className="meta-item">
                      <FaCalendar />
                      {formatDate(articles[0].publishedAt)}
                    </div>
                    <div className="meta-item">
                      <FaNewspaper />
                      {articles[0].source.name}
                    </div>
                  </div>
                  <a href="#" className="read-featured">
                    Read Full Article
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </FeaturedNews>

            {/* News Grid */}
            <NewsGrid>
              {articles.slice(1).map((article, index) => (
                <NewsCard key={index}>
                  <div className="news-image">
                    <img src={article.urlToImage} alt={article.title} />
                    <div className="news-category">{category}</div>
                  </div>
                  <div className="news-content">
                    <div className="news-meta">
                      <div className="meta-item">
                        <FaUser />
                        {article.author || 'Anonymous'}
                      </div>
                      <div className="meta-item">
                        <FaCalendar />
                        {formatDate(article.publishedAt)}
                      </div>
                    </div>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                    <a href="#" className="read-more">
                      Read More
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </NewsCard>
              ))}
            </NewsGrid>
          </>
        )}

        {!loading && !error && articles.length === 0 && (
          <EmptyState>
            <h3>No news articles available</h3>
            <p>Check back later for the latest updates!</p>
          </EmptyState>
        )}
      </NewsSection>

      <Footer />
    </NewsContainer>
  );
};

export default News;
