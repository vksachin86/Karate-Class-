// Gallery.js
import React, { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample gallery images - replace with your client's actual images
  const galleryImages = [
    {
      id: 1,
      category: "training",
      title: "Morning Training Session",
      description: "Students practicing basic techniques",
      placeholder: "Training Session 1"
    },
    {
      id: 2,
      category: "training", 
      title: "Kata Practice",
      description: "Advanced kata demonstrations",
      placeholder: "Kata Practice"
    },
    {
      id: 3,
      category: "training",
      title: "Sparring Session",
      description: "Students practicing kumite",
      placeholder: "Sparring"
    },
    {
      id: 4,
      category: "achievements",
      title: "Belt Ceremony",
      description: "Students receiving new belts",
      placeholder: "Belt Ceremony"
    },
    {
      id: 5,
      category: "achievements",
      title: "Competition Winners",
      description: "Our champions with their medals",
      placeholder: "Competition Winners"
    },
    {
      id: 6,
      category: "achievements", 
      title: "National Awards",
      description: "National level achievements",
      placeholder: "National Awards"
    },
    {
      id: 7,
      category: "instructors",
      title: "Sensei Anil Teaching",
      description: "Head instructor demonstrating techniques",
      placeholder: "Sensei Anil"
    },
    {
      id: 8,
      category: "instructors",
      title: "Sensei Bharati with Students",
      description: "Youth training session",
      placeholder: "Sensei Bharati"
    },
    {
      id: 9,
      category: "events",
      title: "Annual Day Celebration",
      description: "Cultural program and demonstrations",
      placeholder: "Annual Day"
    },
    {
      id: 10,
      category: "events",
      title: "Workshop Session",
      description: "Special training workshop",
      placeholder: "Workshop"
    },
    {
      id: 11,
      category: "facility",
      title: "Dojo Interior",
      description: "Our training facility",
      placeholder: "Dojo Interior"
    },
    {
      id: 12,
      category: "facility",
      title: "Training Equipment",
      description: "Professional training gear",
      placeholder: "Equipment"
    }
  ];

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "training", name: "Training Sessions" },
    { id: "achievements", name: "Achievements" },
    { id: "instructors", name: "Instructors" },
    { id: "events", name: "Events" },
    { id: "facility", name: "Our Facility" }
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-page">
      <div className="gallery-background"></div>
      <div className="gallery-container">
        <div className="gallery-header">
          <h1>Our Gallery</h1>
          <p>Capturing Moments of Excellence in Karate Training</p>
        </div>

        {/* Category Filters */}
        <section className="gallery-filters">
          <div className="container">
            <div className="filter-buttons">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="gallery-main">
          <div className="container">
            <div className="gallery-grid">
              {filteredImages.map(image => (
                <div 
                  key={image.id} 
                  className="gallery-item"
                  onClick={() => openModal(image)}
                >
                  <div className="gallery-image-placeholder">
                    <span>{image.placeholder}</span>
                    <div className="image-overlay">
                      <div className="overlay-content">
                        <h4>{image.title}</h4>
                        <p>{image.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredImages.length === 0 && (
              <div className="empty-gallery">
                <h3>No photos found in this category</h3>
                <p>Please select another category to view photos</p>
              </div>
            )}
          </div>
        </section>

        {/* Gallery Info */}
        <section className="gallery-info">
          <div className="container">
            <div className="info-content">
              <h2>Share Your Karate Moments</h2>
              <p>
                We're always adding new photos from our training sessions, competitions, and events. 
                Follow us on social media to see the latest updates and share your own karate journey with us!
              </p>
              <div className="info-stats">
                <div className="stat-item">
                  <span className="stat-number">1000+</span>
                  <span className="stat-label">Training Hours</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">150+</span>
                  <span className="stat-label">Students Trained</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Competitions</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal-overlay" onClick={closeModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedImage.title}</h3>
              <button className="modal-close-btn" onClick={closeModal}>
                ×
              </button>
            </div>
            <div className="modal-image">
              <div className="modal-image-placeholder">
                <span>{selectedImage.placeholder}</span>
              </div>
            </div>
            <div className="modal-footer">
              <p>{selectedImage.description}</p>
              <div className="modal-actions">
                <button className="btn-primary">Download</button>
                <button className="btn-secondary" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;