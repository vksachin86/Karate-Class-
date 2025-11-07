import React from "react";

const AboutUs = () => {
  return (
    <div className="about-page">
      <div className="about-background"></div>
      <div className="about-container">
        <div className="about-header">
          <h1>About Our Class</h1>
          <p>Traditional Karate Training in Vijayapur</p>
        </div>

        {/* School History Section */}
        <section className="about-section">
          <div className="section-content">
            <h2>Our Story</h2>
            <div className="history-content">
              <p>
                Bharatiya jai Bheem Dal Karate Class was founded in 2010 with a
                vision to bring authentic karate training to the heart of
                Vijayapur. What started as a small training group in a local
                community hall has grown into one of the most respected martial
                arts schools in the region.
              </p>
              <p>
                Our journey began when Sensei Anil, after years of training in
                traditional Japanese karate, returned to his hometown with a
                mission to share the art's profound benefits with his community.
                Through dedication and passion, our Class has nurtured hundreds
                of students, helping them discover their inner strength and
                discipline.
              </p>
            </div>
          </div>
        </section>

        {/* Mission and Vision Section */}
        <section className="mission-section">
          <div className="section-content">
            <h2>Our Mission & Values</h2>
            <div className="mission-grid">
              <div className="mission-card">
                <h3>Mission</h3>
                <p>
                  To empower individuals through traditional karate training,
                  fostering physical fitness, mental discipline, and character
                  development in a supportive community environment.
                </p>
              </div>
              <div className="mission-card">
                <h3>Vision</h3>
                <p>
                  To be the premier martial arts academy in Karnataka, known for
                  excellence in training, character building, and community
                  impact.
                </p>
              </div>
              <div className="mission-card">
                <h3>Values</h3>
                <ul>
                  <li>Discipline & Respect</li>
                  <li>Continuous Improvement</li>
                  <li>Community First</li>
                  <li>Traditional Excellence</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Instructors Section */}
        <section className="instructors-section">
          <div className="section-content">
            <h2>Our Instructors</h2>
            <div className="instructors-grid">
              <div className="instructor-card">
                <div className="instructor-image">
                  <div className="image-placeholder">
                    <span>Sensei Anil</span>
                  </div>
                </div>
                <div className="instructor-info">
                  <h3>Sensei Anil Kumar</h3>
                  <p className="instructor-title">
                    Head Instructor - 4th Dan Black Belt
                  </p>
                  <p className="instructor-bio">
                    With over 15 years of experience in Shotokan Karate, Sensei
                    Anil has trained under renowned masters in Japan and India.
                    His teaching philosophy emphasizes technical precision,
                    mental focus, and character development.
                  </p>
                  <div className="instructor-credentials">
                    <span>JKA Certified Instructor</span>
                    <span>National Gold Medalist</span>
                    <span>15+ Years Experience</span>
                  </div>
                </div>
              </div>

              <div className="instructor-card">
                <div className="instructor-image">
                  <div className="image-placeholder">
                    <span>Sensei Bharati</span>
                  </div>
                </div>
                <div className="instructor-info">
                  <h3>Sensei Bharati</h3>
                  <p className="instructor-title">
                    Senior Instructor - 3rd Dan Black Belt
                  </p>
                  <p className="instructor-bio">
                    Sensei Bharati brings a dynamic and energetic approach to
                    karate training. Specializing in youth development, she has
                    helped numerous young students achieve their black belts
                    while excelling in academics and personal life.
                  </p>
                  <div className="instructor-credentials">
                    <span>Youth Specialist</span>
                    <span>State Champion</span>
                    <span>10+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Unique Features Section */}
        <section className="features-section">
          <div className="section-content">
            <h2>Why Choose Our Class?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🥋</div>
                <h3>Traditional Training</h3>
                <p>
                  Authentic Japanese karate techniques preserved and taught with
                  respect to tradition.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">👥</div>
                <h3>Small Class Sizes</h3>
                <p>
                  Personalized attention with limited students per class for
                  optimal learning.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🏆</div>
                <h3>Competition Training</h3>
                <p>
                  Specialized coaching for students interested in tournament
                  participation.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🌱</div>
                <h3>Character Development</h3>
                <p>
                  Focus on building discipline, respect, and confidence beyond
                  physical training.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="section-content">
            <h2>Student Success Stories</h2>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>
                    "Training at Karate Masters transformed my son's confidence
                    and discipline. He's not just learning karate; he's learning
                    life skills that help him in school too."
                  </p>
                </div>
                <div className="testimonial-author">
                  <strong>Rajesh Kumar</strong>
                  <span>Parent of Student (3 years)</span>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>
                    "As an adult learner, I was hesitant to start karate. The
                    instructors made me feel welcome and have helped me achieve
                    my black belt at 45!"
                  </p>
                </div>
                <div className="testimonial-author">
                  <strong>Anita Desai</strong>
                  <span>Adult Student, Black Belt</span>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>
                    "The Class's emphasis on traditional values and modern
                    teaching methods created the perfect environment for my
                    daughter to excel both in karate and academics."
                  </p>
                </div>
                <div className="testimonial-author">
                  <strong>Sunitha Patel</strong>
                  <span>Parent of National Medalist</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards and Certifications */}
        <section className="awards-section">
          <div className="section-content">
            <h2>Certifications & Affiliations</h2>
            <div className="awards-content">
              <div className="awards-list">
                <div className="award-item">
                  <h3>Japan Karate Association (JKA)</h3>
                  <p>Official Member Class - Certified Instruction</p>
                </div>
                <div className="award-item">
                  <h3>Karate Association of India</h3>
                  <p>Recognized Training Center - State Level</p>
                </div>
                <div className="award-item">
                  <h3>National Awards</h3>
                  <p>5 National Gold Medals - Youth & Senior Divisions</p>
                </div>
                <div className="award-item">
                  <h3>State Championships</h3>
                  <p>15+ State Level Medals - Various Categories</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section">
          <div className="section-content">
            <h2>Class Gallery</h2>
            <div className="gallery-grid">
              <div className="gallery-item">
                <div className="gallery-placeholder">
                  <span>Training Session</span>
                </div>
              </div>
              <div className="gallery-item">
                <div className="gallery-placeholder">
                  <span>Belt Ceremony</span>
                </div>
              </div>
              <div className="gallery-item">
                <div className="gallery-placeholder">
                  <span>Competition</span>
                </div>
              </div>
              <div className="gallery-item">
                <div className="gallery-placeholder">
                  <span>Class Interior</span>
                </div>
              </div>
            </div>
            <div className="gallery-note">
              <p>
                Visit our Class to experience the training environment firsthand!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
