import React from 'react';
import './Home.css'; // Assuming you create a corresponding CSS file for styling

const Home = () => {
  return (
    <div className="homepage">
      <section className="hero-section">
        <h1>Welcome to LawSync CRM</h1>
        <p>
          The all-in-one CRM platform designed specifically for law firms. LawSync CRM helps streamline your firm's workflow, enhance client relationships, and improve overall productivity. From case management and document storage to billing and client communication, LawSync makes managing your firm’s operations easier than ever.
        </p>
      </section>

      <section className="features-section">
        <h2><strong>Key Features</strong></h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Client & Case Management</h3>
            <ul>
              <li>Comprehensive client profiles</li>
              <li>Track case milestones and deadlines</li>
              <li>Sync case details with calendars</li>
              <li>Task assignment and progress tracking</li>
            </ul>
          </div>

          <div className="feature-item">
            <h3>Document Management</h3>
            <ul>
              <li>Secure cloud-based document storage</li>
              <li>eSignature integration for easy document signing</li>
              <li>Document templates for common legal forms</li>
              <li>Collaborate and share documents securely with clients</li>
            </ul>
          </div>

          <div className="feature-item">
            <h3>Billing & Time Tracking</h3>
            <ul>
              <li>Track billable hours and generate invoices</li>
              <li>Support for retainer billing and automated alerts</li>
              <li>Expense tracking and integrated payment gateways</li>
            </ul>
          </div>

          <div className="feature-item">
            <h3>Legal Workflow Automation</h3>
            <ul>
              <li>Automated client follow-ups and notifications</li>
              <li>Streamline legal document generation</li>
              <li>Task templates for common legal workflows</li>
              <li>Sync reminders and deadlines with calendars</li>
            </ul>
          </div>

          <div className="feature-item">
            <h3>Task & Deadline Management</h3>
            <ul>
              <li>Automated reminders for important deadlines</li>
              <li>Customizable task templates and workflows</li>
              <li>Priority task management based on urgency</li>
            </ul>
          </div>

          <div className="feature-item">
            <h3>Confidential Client Communication</h3>
            <ul>
              <li>Secure client portal for case updates and document access</li>
              <li>Two-factor authentication (2FA) for security</li>
              <li>Internal messaging system for secure communication</li>
            </ul>
          </div>

          <div className="feature-item">
            <h3>Lead & Referral Tracking</h3>
            <ul>
              <li>Track and categorize leads from various sources</li>
              <li>Referral source tracking and success evaluation</li>
              <li>Monitor client satisfaction through surveys</li>
            </ul>
          </div>

          <div className="feature-item">
            <h3>Compliance & Legal Reporting</h3>
            <ul>
              <li>Real-time compliance dashboards</li>
              <li>Detailed audit logs for client interactions</li>
              <li>Legal performance reports on case outcomes and financials</li>
            </ul>
          </div>

          <div className="feature-item">
            <h3>Integration with Legal Tools</h3>
            <ul>
              <li>Integrates with case law databases like Westlaw and LexisNexis</li>
              <li>Seamless integration with court filing systems</li>
              <li>Sync with third-party time tracking tools</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to boost your firm's productivity?</h2>
        <p>
          Experience the efficiency of LawSync CRM today. Start your free trial and streamline your practice with ease.
        </p>
        <button className="cta-button">Start Free Trial</button>
      </section>

      <section className="testimonial-section">
        <h2>What Our Clients Are Saying</h2>
        <blockquote>
          "LawSync CRM has revolutionized the way we manage our law practice. The ease of tracking cases, handling documents, and keeping clients informed has drastically improved our workflow."
        </blockquote>
        <p>- Attorney Jane Doe, Law Firm Partner</p>
      </section>
    </div>
  );
};

export default Home;
