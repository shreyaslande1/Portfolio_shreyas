import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./AdminPage.css";

const AdminPage = () => {
  return (
    <>
      <Navbar />
      <section className="admin-section section">
        <div className="section-content">
          <div className="admin-header">
            <h1>Admin Dashboard</h1>
            <p className="admin-subtitle">Portfolio Management & Analytics</p>
          </div>

          <div className="admin-grid">
            {/* Stats Cards */}
            <div className="admin-card stats-card">
              <div className="stat-icon">👁️</div>
              <h3>Portfolio Views</h3>
              <p className="stat-number">2,450</p>
              <span className="stat-trend">+12% this month</span>
            </div>

            <div className="admin-card stats-card">
              <div className="stat-icon">💬</div>
              <h3>Messages</h3>
              <p className="stat-number">34</p>
              <span className="stat-trend">+5 unread</span>
            </div>

            <div className="admin-card stats-card">
              <div className="stat-icon">📁</div>
              <h3>Projects</h3>
              <p className="stat-number">12</p>
              <span className="stat-trend">+2 in progress</span>
            </div>

            <div className="admin-card stats-card">
              <div className="stat-icon">⭐</div>
              <h3>Rating</h3>
              <p className="stat-number">4.8/5</p>
              <span className="stat-trend">From 58 reviews</span>
            </div>
          </div>

          {/* Admin Sections */}
          <div className="admin-sections">
            {/* Projects Management */}
            <div className="admin-card admin-section-card">
              <h2>Manage Projects</h2>
              <p>Add, edit, or delete portfolio projects</p>
              <button className="admin-btn">Manage Projects →</button>
            </div>

            {/* Messages Management */}
            <div className="admin-card admin-section-card">
              <h2>View Messages</h2>
              <p>Review and respond to contact form submissions</p>
              <button className="admin-btn">View Messages →</button>
            </div>

            {/* Skills Management */}
            <div className="admin-card admin-section-card">
              <h2>Update Skills</h2>
              <p>Modify your technical skills and proficiency levels</p>
              <button className="admin-btn">Update Skills →</button>
            </div>

            {/* Analytics */}
            <div className="admin-card admin-section-card">
              <h2>Analytics</h2>
              <p>View portfolio statistics and visitor insights</p>
              <button className="admin-btn">View Analytics →</button>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="admin-card recent-activities">
            <h2>Recent Activities</h2>
            <div className="activity-list">
              <div className="activity-item">
                <span className="activity-icon">📧</span>
                <div className="activity-info">
                  <p className="activity-title">New Message from John Doe</p>
                  <p className="activity-time">2 hours ago</p>
                </div>
              </div>

              <div className="activity-item">
                <span className="activity-icon">📝</span>
                <div className="activity-info">
                  <p className="activity-title">
                    Project "E-Commerce Platform" Updated
                  </p>
                  <p className="activity-time">5 hours ago</p>
                </div>
              </div>

              <div className="activity-item">
                <span className="activity-icon">⭐</span>
                <div className="activity-info">
                  <p className="activity-title">
                    New Portfolio Review Received
                  </p>
                  <p className="activity-time">1 day ago</p>
                </div>
              </div>

              <div className="activity-item">
                <span className="activity-icon">🔧</span>
                <div className="activity-info">
                  <p className="activity-title">Profile Information Updated</p>
                  <p className="activity-time">3 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AdminPage;
