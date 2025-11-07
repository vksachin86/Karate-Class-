import React, { useState } from "react";

const HomePage = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    school: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleBookTrial = () => {
    setShowForm(true);
  };

  const handleContact = () => {
    window.location.href = "/contact";
  };

  const handleViewSchedule = () => {
    document.getElementById("schedule").scrollIntoView({ behavior: "smooth" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the message for WhatsApp
    const whatsappMessage =
      `New Trial Class Request:%0A%0A` +
      `Name: ${formData.name}%0A` +
      `Age: ${formData.age}%0A` +
      `School: ${formData.school}%0A` +
      `Mobile: ${formData.mobile}%0A` +
      `Email: ${formData.email}%0A` +
      `Message: ${formData.message}`;

    // Format the message for Email
    const emailSubject = `New Trial Class Request - ${formData.name}`;
    const emailBody =
      `New Trial Class Request:%0A%0A` +
      `Name: ${formData.name}%0A` +
      `Age: ${formData.age}%0A` +
      `School: ${formData.school}%0A` +
      `Mobile: ${formData.mobile}%0A` +
      `Email: ${formData.email}%0A` +
      `Message: ${formData.message}`;

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/9060888902?text=${whatsappMessage}`, "_blank");

    // Also open email as fallback
    window.open(
      `mailto:vksachin86@gmail.com?subject=${emailSubject}&body=${emailBody}`,
      "_blank"
    );

    // Reset form and close
    setFormData({
      name: "",
      age: "",
      school: "",
      mobile: "",
      email: "",
      message: "",
    });
    setShowForm(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="homepage">
      {/* Trial Class Form Modal */}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Book Your Free Trial Class</h3>
              <button className="close-btn" onClick={closeForm}>
                ×
              </button>
            </div>
            <form className="trial-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="age">Age *</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="school">School/College</label>
                <input
                  type="text"
                  id="school"
                  name="school"
                  value={formData.school}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="mobile">Mobile Number *</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Any specific requirements or questions..."
                ></textarea>
              </div>

              <div className="form-buttons">
                <button type="submit" className="btn-primary">
                  Submit & Contact via WhatsApp
                </button>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={closeForm}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Master the Art of Karate</h1>
            <p className="hero-subtitle">
              Traditional Japanese Karate Training in Vijayapur
            </p>
            <p className="hero-description">
              Build strength, discipline, and confidence through authentic
              karate training. Join our community of martial artists and
              discover your true potential.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={handleBookTrial}>
                Book Trial Class
              </button>
              <button className="btn-secondary" onClick={handleContact}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the HomePage content remains the same */}
      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Welcome to Bharatiya jai Bheem Dal Karate Class</h2>
              <p>
                Founded in 2010, Bharatiya jai Bheem Dal Karate Class has been
                the premier destination for traditional karate training in
                Vijayapur. Our Class combines ancient martial arts wisdom with
                modern teaching methods to help students of all ages achieve
                their goals.
              </p>
              <p>
                We believe in nurturing not just physical strength, but also
                mental discipline, respect, and character development. Our
                certified instructors are dedicated to helping each student
                reach their full potential.
              </p>
              <button
                className="btn-outline"
                onClick={() => (window.location.href = "/about")}
              >
                Learn More About Us
              </button>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span>Class Training Session</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="programs-section">
        <div className="container">
          <h2>Our Karate Programs</h2>
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">👦</div>
              <h3>Kids Karate (5-12 years)</h3>
              <p>
                Fun, engaging classes focusing on discipline, coordination, and
                basic self-defense techniques. Perfect for building confidence
                in young minds.
              </p>
              <ul>
                <li>Age-appropriate training</li>
                <li>Discipline development</li>
                <li>Fun learning environment</li>
              </ul>
            </div>

            <div className="program-card">
              <div className="program-icon">👨</div>
              <h3>Teens & Adults (13+ years)</h3>
              <p>
                Comprehensive karate training for teenagers and adults. Focus on
                technique, strength, and traditional martial arts values.
              </p>
              <ul>
                <li>Full curriculum training</li>
                <li>Belt advancement</li>
                <li>Self-defense skills</li>
              </ul>
            </div>

            <div className="program-card">
              <div className="program-icon">🥋</div>
              <h3>Advanced Training</h3>
              <p>
                For dedicated students seeking mastery. Advanced katas,
                competition training, and instructor development programs.
              </p>
              <ul>
                <li>Black belt training</li>
                <li>Competition preparation</li>
                <li>Leadership development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="schedule-section" id="schedule">
        <div className="container">
          <h2>Class Schedule</h2>
          <div className="schedule-content">
            <div className="schedule-card">
              <h3>Weekly Timetable</h3>
              <div className="schedule-table">
                <div className="schedule-row">
                  <span className="day">Monday - Friday</span>
                  <span className="time">6:00 AM - 8:00 AM</span>
                  <span className="class">Morning Session</span>
                </div>
                <div className="schedule-row">
                  <span className="day">Monday - Friday</span>
                  <span className="time">5:00 PM - 7:00 PM</span>
                  <span className="class">Evening Session</span>
                </div>
              </div>
              <button className="btn-primary" onClick={handleBookTrial}>
                Book Your Spot
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="instructors-preview">
        <div className="container">
          <h2>Meet Our Masters</h2>
          <div className="instructors-grid">
            <div className="instructor-preview">
              <div className="instructor-image">
                <div className="image-placeholder-small">
                  <span>Sensei Anil</span>
                </div>
              </div>
              <div className="instructor-info">
                <h3>Sensei Anil Kumar</h3>
                <p className="instructor-title">4th Dan Black Belt</p>
                <p>15+ years experience in Shotokan Karate</p>
              </div>
            </div>

            <div className="instructor-preview">
              <div className="instructor-image">
                <div className="image-placeholder-small">
                  <span>Sensei Bharati</span>
                </div>
              </div>
              <div className="instructor-info">
                <h3>Sensei Bharati</h3>
                <p className="instructor-title">3rd Dan Black Belt</p>
                <p>Youth development specialist</p>
              </div>
            </div>
          </div>
          <button
            className="btn-outline"
            onClick={() => (window.location.href = "/about")}
          >
            View All Instructors
          </button>
        </div>
      </section>

      <section className="testimonials-preview">
        <div className="container">
          <h2>What Our Students Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-preview">
              <div className="testimonial-content">
                <p>
                  "My son has gained incredible confidence since joining Karate
                  Masters. The instructors are amazing with kids!"
                </p>
              </div>
              <div className="testimonial-author">
                <strong>Rajesh Kumar</strong>
                <span>Parent</span>
              </div>
            </div>

            <div className="testimonial-preview">
              <div className="testimonial-content">
                <p>
                  "Training here has transformed not just my physical health but
                  also my mental discipline. Highly recommended!"
                </p>
              </div>
              <div className="testimonial-author">
                <strong>Anita Desai</strong>
                <span>Adult Student</span>
              </div>
            </div>

            <div className="testimonial-preview">
              <div className="testimonial-content">
                <p>
                  "The best decision I made for my child's overall development.
                  The values taught here are priceless."
                </p>
              </div>
              <div className="testimonial-author">
                <strong>Sunitha Patel</strong>
                <span>Parent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Start Your Karate Journey Today</h2>
            <p>
              Join our community and experience the transformative power of
              karate. Your first trial class is on us!
            </p>
            <div className="cta-buttons">
              <button className="btn-primary-large" onClick={handleBookTrial}>
                Book Free Trial Class
              </button>
              <button className="btn-secondary-large" onClick={handleContact}>
                Get More Information
              </button>
            </div>
            <div className="cta-info">
              <p>📞 Call us: 9060888902</p>
              <p>📧 Email: vksachin86@gmail.com</p>
              <p>📍 Location: Vijayapur, Karnataka</p>
            </div>
          </div>
        </div>
      </section>

      <section className="social-section">
        <div className="container">
          <h2>Join Our Community</h2>
          <p>
            Follow us on social media for updates, tips, and behind-the-scenes
            content
          </p>
          <div className="social-links">
            <button className="social-btn facebook" aria-label="Facebook">
              <span>Facebook</span>
            </button>
            <button className="social-btn instagram" aria-label="Instagram">
              <span>Instagram</span>
            </button>
            <button className="social-btn youtube" aria-label="YouTube">
              <span>YouTube</span>
            </button>
            <button
              className="social-btn whatsapp"
              onClick={() => window.open("https://wa.me/9060888902")}
              aria-label="WhatsApp"
            >
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
