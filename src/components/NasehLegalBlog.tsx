import React from "react";
import styled from "styled-components";

// Styled Components for the NasehLegalBlog Section
const BlogSection = styled.section`
  background-color: #f9fafb; /* Light gray background */
  padding: 4rem 1rem;

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 2rem;

    h2 {
      font-size: 2rem;
      font-weight: bold;
      color: #1e3a8a;
    }

    a {
      color: #d97706; /* Golden color for link */
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: #b45309; /* Darker golden on hover */
      }

      svg {
        font-size: 1.2rem;
      }
    }
  }

  .blogs-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .blog-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-5px); /* Lift on hover */
    }

    .blog-image {
      width: 100%;
      height: 180px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .blog-content {
      padding: 1.5rem;

      .blog-category {
        font-size: 0.9rem;
        color: #6b7280; /* Light gray */
        margin-bottom: 0.5rem;
      }

      .blog-title {
        font-size: 1.25rem;
        font-weight: bold;
        color: #374151; /* Dark gray */
        margin-bottom: 1rem;
      }

      .blog-description {
        font-size: 1rem;
        color: #6b7280;
        line-height: 1.6;
      }
    }
  }
`;

const NasehLegalBlog: React.FC = () => {
  // Sample data for blogs
  const blogs = [
    {
      id: 1,
      image: "https://blog.toodledo.com/wp-content/uploads/2018/11/law.jpg", // Replace with the actual image path
      title: "Divorce Process in Qatar: What you need to know",
      category: "Legal Consultations",
      date: "June 23, 2024",
      description:
        "Avoiding Trouble: Common Legal Mistakes to Keep Away. In Qatar, as in any country, it is important for its citizens and expatriates to follow the local laws and regulations to avoid legal problems.",
    },
    {
      id: 2,
      image: "https://blog.toodledo.com/wp-content/uploads/2018/11/law.jpg",
      title: "Public Holidays and vacations in Qatar",
      category: "Legal Consultations",
      date: "June 23, 2024",
      description:
        "Avoiding Trouble: Common Legal Mistakes to Keep Away. In Qatar, as in any country, it is important for its citizens and expatriates to follow the local laws and regulations to avoid legal problems.",
    },
    {
      id: 3,
      image: "https://blog.toodledo.com/wp-content/uploads/2018/11/law.jpg",
      title: "Moving to Qatar? Here’s What You Need to Know About Immigration Laws",
      category: "Legal Consultations",
      date: "June 23, 2024",
      description:
        "Avoiding Trouble: Common Legal Mistakes to Keep Away. In Qatar, as in any country, it is important for its citizens and expatriates to follow the local laws and regulations to avoid legal problems.",
    },
  ];

  return (
    <BlogSection>
      {/* Section Header */}
      <div className="section-header">
        <h2>Naseh Legal Blog</h2>
        <a href="#view-all">
          View All Blogs →
        </a>
      </div>

      {/* Blog Cards Grid */}
      <div className="blogs-grid">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <div className="blog-image">
              <img src={blog.image} alt={blog.title} />
            </div>
            <div className="blog-content">
              <p className="blog-category">{blog.date} • {blog.category}</p>
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </BlogSection>
  );
};

export default NasehLegalBlog;
