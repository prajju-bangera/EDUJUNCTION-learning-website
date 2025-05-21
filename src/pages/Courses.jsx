import React, { useState, useEffect } from "react";
import "./Courses.css";

const courses = [
  { id: "Ke90Tje7VS0", title: "React JS Crash Course 2023", platform: "YouTube", category: "Technology & Management" },
  { id: "PkZNo7MFNFg", title: "JavaScript Tutorial for Beginners", platform: "YouTube" , category: "Technology & Management"},
  { id: "rfscVS0vtbw", title: "Python Full Course - Learn Python in 11 Hours", platform: "YouTube" , category: "Technology & Management"},
  { id: "TlB_eWDSMt4", title: "Node.js Crash Course", platform: "YouTube" , category: "Technology & Management"},
  { id: "F_oOtaxb0L8", title: "Kubernetes Full Course - Beginners Tutorial", platform: "YouTube" , category: "Technology & Management"},
  { id: "BwuLxPH8IDs", title: "TypeScript Tutorial for Beginners", platform: "YouTube" , category: "Technology & Management"},
  { id: "7eh4d6sabA0", title: "Machine Learning Tutorial for Beginners", platform: "YouTube" , category: "Technology & Management"},
  { id: "Ia-UEYYR44s", title: "AWS Certified Solutions Architect - Full Course", platform: "YouTube" , category: "Technology & Management"},
  { id: "8hly31xKli0", title: "Data Structures & Algorithms in JavaScript - Full Course", platform: "YouTube" , category: "Technology & Management"},
  { id: "upDLs1sn7g4", title: "JavaScript ES6 Tutorial", platform: "YouTube" , category: "Technology & Management"},
  { id: "mTz0GXj8NN0", title: "Next.js Crash Course", platform: "YouTube" , category: "Technology & Management"},
  { id: "FXpIoQ_rT_c", title: "Vue.js 3 Crash Course", platform: "YouTube" , category: "Technology & Management"},
  { id: "2OHbjep_WjQ", title: "Angular Full Tutorial for Beginners", platform: "YouTube" , category: "Technology & Management"},
  { id: "JJSoEo8JSnc", title: "CSS Flexbox Tutorial for Beginners", platform: "YouTube" , category: "Technology & Management"},
  { id: "pfaSUYaSgRo", title: "Tailwind CSS Crash Course", platform: "YouTube" , category: "Technology & Management"},
  { id: "VywxIQ2ZXw4", title: "Postman Tutorial for Beginners", platform: "YouTube", category: "Technology & Management" },
  { id: "jS4aFq5-91M", title: "MongoDB Tutorial for Beginners", platform: "YouTube", category: "Technology & Management" },
  { id: "j5-yKhDd64s", title: "Figma UI/UX Design Essentials", platform: "YouTube" , category: "Technology & Management"},
  { id: "ZQL7tL2S0oQ", title: "GraphQL Tutorial for Beginners", platform: "YouTube",category: "Technology & Management" },
  { id: "sBws8MSXN7A", title: "Flutter Tutorial for Beginners", platform: "YouTube",category: "Technology & Management" },
  { id: "zJSY8tbf_ys", title: "Django Full Course for Beginners", platform: "YouTube" ,category: "Technology & Management"},

  { id: "lm2ym3J4FMw", title: "Corporate Finance Fundamentals - CFI Course", platform: "YouTube", category: "Business & Finance" },
{ id: "QOO8dCB9ZB0", title: "Understanding the Basics of Financial Accounting", platform: "YouTube", category: "Business & Finance" },
{ id: "dZnq8XUiuD0", title: "Advanced Excel Full Course 2025 | Simplilearn", platform: "YouTube" ,category: "Business & Finance"},
{ id: "aY3azPAljrQ", title: "CA Inter Income Tax & GST | Introduction to Taxation | CA Vivek Gaba", platform: "YouTube" , category: "Business & Finance"},
{ id: "MCItmVVmFsk", title: "Business Analyst Full Course 2025 | Simplilearn", platform: "YouTube" , category: "Business & Finance"},
// MBA / MCom Related Courses
{ id: "8aI3cttyuVk", title: "Foundations of Business Strategy - Core Principles and Frameworks", platform: "YouTube" ,category: "Business & Finance"},
{ id: "xkL_7aGft_0", title: "Developing Emotional Intelligence As A Leader", platform: "YouTube" ,category: "Business & Finance"} ,
{ id: "BZLUEKnMfIY", title: "Digital Marketing Tutorial For Beginners | Simplilearn", platform: "YouTube" ,category: "Business & Finance"} ,
{ id: "YP_ZcGdlbH0", title: "PMP Full Course 2025 | Project Management Tutorial for Beginners", platform: "YouTube" ,category: "Business & Finance"},

// MSW Related Courses
{ id: "WjzYW7VywwI", title: "What is Social Work? | Introduction to Social Work", platform: "YouTube",category: "Social Work & Community"  },
{ id: "rtABcNUIQwQ", title: "How Does Food Impact Mental Health?", platform: "YouTube" ,category: "Social Work & Community" },
{ id: "lJXSf-cx8V8", title: "Basic Skills of a Counselor", platform: "YouTube" ,category: "Social Work & Community" },
{ id: "HHNfaPuoZHM", title: "What are Children's Rights?", platform: "YouTube" ,category: "Social Work & Community" },


  { "id": "GQS7wPujL2k", "title": "Graphic Design Basics | FREE COURSE", "platform": "YouTube", "category": "Creative Arts & Design" },
  { "id": "B6BkjnCAjf0", "title": "Art and Design at WVU | College of Creative Arts", "platform": "YouTube", "category": "Creative Arts & Design" },
  { "id": "CMHObagtVsk", "title": "Explore the process behind creative design | Short Courses", "platform": "YouTube", "category": "Creative Arts & Design" },
  { "id": "gxQPzN8tC1k", "title": "Breaking Into Creative Arts | Career Paths, Portfolio Tips", "platform": "YouTube", "category": "Creative Arts & Design" },

{ "id": "I2Z1vHJCuNU", "title": "What is Electrical Engineering?", "platform": "YouTube", "category": "Science & Engineering" },
{ "id": "ehi_hkLlutw", "title": "Fundamentals of Mechanical Engineering – Engineering Institute of Technology", "platform": "YouTube", "category": "Science & Engineering" },
{ "id": "njRlZ2tD-1k", "title": "5 Hour Full Course | Engineering Physics | Free Certified", "platform": "YouTube", "category": "Science & Engineering" },
{ "id": "WgWNQVdhE9A", "title": "Introduction to Chemical Engineering | Lecture 1", "platform": "YouTube", "category": "Science & Engineering" },
{ "id": "LCyZFTEyNoo", "title": "Civil Engineering Basic Knowledge You Must Learn", "platform": "YouTube", "category": "Science & Engineering" },


{ "id": "dQw4w9WgXcQ", "title": "Effective Communication Skills - Full Course", "platform": "YouTube", "category": "Languages & Communication" },
{ "id": "4zCVYWtYKV8", "title": "Improve Your English Conversation Skills | 6 Communication & Small Talk Tips", "platform": "YouTube", "category": "Languages & Communication" },
// { "id": "eZ1yg29hMg8", "title": "Business Communication 101 | Learn Business Communications Basics, Fundamentals, and Best Practices", "platform": "YouTube", "category": "Languages & Communication" },
{ "id": "i5mYphUoOCs", "title": "Public Speaking For Beginners", "platform": "YouTube", "category": "Languages & Communication" },
{ "id": "QGHBq5OEsBM", "title": "Effective Communication Skills in the Workplace", "platform": "YouTube", "category": "Languages & Communication" },





  {
    "id": "eTYcZO01z3w",
    "title": "Community Organizing 101: Tools for Change and the Power of People",
    "platform": "YouTube",
    "category": "Social Work & Community" 
  },
  {
    "id": "1jt9gZ7P-Fw",
    "title": "Casework: Definition, Characteristics, Elements, Principles",
    "platform": "YouTube",
    "category": "Social Work & Community" 

  },

];


const getThumbnailUrl = (videoId) =>
  `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

const categories = [
  "All",
  "Business & Finance",
  "Technology & Management",
  "Social Work & Community",
  "Creative Arts & Design",
  "Science & Engineering",
  "Languages & Communication",
];

const ITEMS_PER_PAGE = 9;

const Courses = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [hoveredVideoId, setHoveredVideoId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter(course => course.category === selectedCategory);
      const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);

  // Get current page courses
  const currentCourses = filteredCourses.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top on page change
  };


    useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setShowSidebar(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    return (
    <div className="courses-container" style={{ display: "flex", gap: "20px" }}>
      
       {/* Mobile Toggle Button */}
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="sidebar-toggle"
        style={{
          display: window.innerWidth <= 1024 ? "block" : "none",
          position: "fixed",
          top: "80px",
          left: "15px",
          zIndex: 1000,
          background: "#1e2a38",
          color: "#fff",
          border: "none",
          padding: "10px 14px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        ☰ Categories
      </button>

      {/* Sidebar */}
      {(showSidebar || window.innerWidth > 1024) && (
        <div
          className={`category-sidebar ${showSidebar ? "show" : ""}`}
          style={{
            minWidth: "220px",
            maxWidth: "220px",
            backgroundColor: "#fff",
            padding: "10px",
            borderRadius: "8px",
            position: window.innerWidth > 1024 ? "sticky" : "fixed",
            top: "90px",
            left: showSidebar ? "0" : "-100%",
            transition: "left 0.3s ease",
            height: "fit-content",
            zIndex: 999,
          }}
        >

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              goToPage(1);
            }}
            style={{
              display: "block",
              width: "100%",
              padding: "10px 12px", // Increased vertical padding
        marginBottom: "15px", // Increased margin between buttons from 8p
              cursor: "pointer",
              borderRadius: "4px",
              border: "none",
              borderLeft: selectedCategory === category ? "4px solid #1e2a38" : "4px solid transparent",
              backgroundColor: "#fff",
              color: selectedCategory === category ? "#1e2a38" : "#666",
              fontWeight: selectedCategory === category ? "600" : "500",
              textAlign: "left",
              transition: "all 0.3s ease",
              fontSize: "15px",
              boxShadow: selectedCategory === category ? "0 2px 4px rgba(0,0,0,0.05)" : "none",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
            onMouseEnter={(e) => {
              if (selectedCategory !== category) {
                e.currentTarget.style.borderLeft = "4px solid rgb(39, 221, 26)";
                e.currentTarget.style.color = "#1e2a38";
              }
            }}
            onMouseLeave={(e) => {
              if (selectedCategory !== category) {
                e.currentTarget.style.borderLeft = "4px solid transparent";
                e.currentTarget.style.color = "#666";
              }
            }}
          >
            {category}
          </button>
        ))}
      </div>
       )}

      {/* Right Section */}
      <div style={{ flex: 1 }}>
        {/* Heading */}
        <h2 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "20px" }}>
          Top YouTube Courses
        </h2>

        {/* Course Cards Grid */}
        <div
          className="courses-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "20px",
            marginLeft: "100px",
          }}
        >
          {currentCourses.map(({ id, title, platform }) => (
            <div
              key={id}
              className="course-card"
              onMouseEnter={() => setHoveredVideoId(id)}
              onMouseLeave={() => setHoveredVideoId(null)}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
                height: "50px"
              }}
            >
              <a
                href={`https://www.youtube.com/watch?v=${id}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  width: "100%",
                  height: "380px",
                  overflow: "hidden",
                }}
              >
                {hoveredVideoId === id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${id}&modestbranding=1&rel=0`}
                    title={title}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    style={{ width: "100%", height: "180px" }}
                  ></iframe>
                ) : (
                  <img
                    src={getThumbnailUrl(id)}
                    alt={title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/320x180?text=No+Thumbnail";
                    }}
                    style={{ width: "100%", height: "180px", objectFit: "cover" }}
                  />
                )}
              </a>
              <div style={{ 
                padding: "15px",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "flex-start" // Changed from space-between to flex-start
              }}>
                <div>
                  <h3 style={{ 
                    fontSize: "16px",
                    margin: "0 0 8px",
                    lineHeight: "1.4",
                    height: "44px",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical"
                  }}>
                    {title}
                  </h3>
                  <p style={{ 
                    fontSize: "14px",
                    color: "#555",
                    margin: "0 0 15px",
                    fontWeight: "500"
                  }}>
                    {platform}
                  </p>
                </div>
                <a
                  href={`https://www.youtube.com/watch?v=${id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    color: "#1e2a38;",
                    textDecoration: "none",
                    fontWeight: "bold",
                    display: "inline-block",
                    padding: "8px 0",
                    fontSize: "20px",
                    textAlign: "center",
                    marginTop: "30px"
                  }}
                >
                  Watch on YouTube
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div
            style={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {/* Prev */}
            <button
              onClick={() => currentPage > 1 && goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              style={{
                padding: "8px 12px",
                borderRadius: "5px",
                border: "1px solid #007bff",
                backgroundColor: currentPage === 1 ? "#ddd" : "#007bff",
                color: currentPage === 1 ? "#666" : "#fff",
                cursor: currentPage === 1 ? "not-allowed" : "pointer",
              }}
            >
              Prev
            </button>

            {/* Page Buttons */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => goToPage(pageNum)}
                style={{
                  padding: "8px 12px",
                  borderRadius: "5px",
                  border: pageNum === currentPage ? "2px solid #007bff" : "1px solid #ccc",
                  backgroundColor: pageNum === currentPage ? "#007bff" : "#fff",
                  color: pageNum === currentPage ? "#fff" : "#333",
                  cursor: "pointer",
                  fontWeight: pageNum === currentPage ? "600" : "normal",
                  minWidth: "36px",
                }}
              >
                {pageNum}
              </button>
            ))}

            {/* Next */}
            <button
              onClick={() => currentPage < totalPages && goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              style={{
                padding: "8px 12px",
                borderRadius: "5px",
                border: "1px solid #007bff",
                backgroundColor: currentPage === totalPages ? "#ddd" : "#007bff",
                color: currentPage === totalPages ? "#666" : "#fff",
                cursor: currentPage === totalPages ? "not-allowed" : "pointer",
              }}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;

