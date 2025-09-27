import React, { useState } from 'react';
import './index.css'

function App() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText('https://usertest.app/r/wg74gJ');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="app-container">
      {/* Fixed Top Navigation Bar */}
      <nav className="navbar-custom">
        {/* Left side: Home + Breadcrumbs */}
        <div className="nav-breadcrumb">
          <button className="home-btn">Home</button>
          {/* Arrow SVG */}
          <svg
            className="breadcrumb-arrow"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="#78716C"
              strokeOpacity="0.4"
              strokeWidth="1.33"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <button className="breadcrumb-btn">New onboarding flow</button>
        </div>

        {/* Right side: Status + Separator + Settings */}
        <div className="navbar-right">
          <button className="status">
            <div className="status-indicator">
              {/* Updated Recording Icon */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM2.24 8C2.24 11.1812 4.81884 13.76 8 13.76C11.1812 13.76 13.76 11.1812 13.76 8C13.76 4.81884 11.1812 2.24 8 2.24C4.81884 2.24 2.24 4.81884 2.24 8Z" fill="#E8E8E3"/>
                <path d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM2.24 8C2.24 11.1812 4.81884 13.76 8 13.76C11.1812 13.76 13.76 11.1812 13.76 8C13.76 4.81884 11.1812 2.24 8 2.24C4.81884 2.24 2.24 4.81884 2.24 8Z" fill="#FF7262"/>
              </svg>
            </div>
            <span className="status-text">100 recordings left</span>
          </button>
          
          {/* Separator with 16px margin on both sides */}
          <div className="nav-separator">
            <svg width="1" height="20" viewBox="0 0 1 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0.5" y1="2.02566e-08" x2="0.499999" y2="20" stroke="#EAE9E8"/>
            </svg>
          </div>
          
          <button className="settings">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'inherit' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="status-text">Settings</span>
          </button>
        </div>
      </nav>

      {/* Main Container */}
      <div className="main-container">
        <div className="main-content">

          {/* Header */}
          <div className="header-section">
            <div className="title-section">
              <h1 className="main-title">New onboarding flow</h1>
              <span className="status-badge">Closed</span>
            </div>

            <div className="header-actions">
              <button className="action-btn link-btn" aria-label="Copy test link">
                {/* Updated Copy Icon - 28x28px */}
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_64_153">
                    <path d="M12.7116 14.6439C12.9883 15.0138 13.3413 15.3199 13.7467 15.5413C14.1521 15.7628 14.6003 15.8945 15.0611 15.9275C15.5219 15.9605 15.9843 15.894 16.4171 15.7326C16.8499 15.5711 17.2429 15.3185 17.5695 14.9918L19.5024 13.059C20.0892 12.4514 20.4139 11.6377 20.4065 10.793C20.3992 9.94838 20.0604 9.14041 19.4631 8.54314C18.8658 7.94586 18.0579 7.60707 17.2132 7.59973C16.3686 7.59239 15.5549 7.91709 14.9473 8.5039L13.8391 9.60562M15.2888 13.3553C15.0121 12.9854 14.6591 12.6794 14.2537 12.4579C13.8483 12.2364 13.4 12.1047 12.9393 12.0717C12.4785 12.0387 12.0161 12.1052 11.5833 12.2666C11.1505 12.4281 10.7575 12.6807 10.4309 13.0074L8.49804 14.9403C7.91123 15.5478 7.58653 16.3616 7.59387 17.2062C7.60121 18.0508 7.94 18.8588 8.53728 19.4561C9.13455 20.0534 9.94252 20.3921 10.7872 20.3995C11.6318 20.4068 12.4455 20.0821 13.0531 19.4953L14.1548 18.3936" stroke="#78716C" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_64_153">
                      <rect width="16" height="16" fill="white" transform="translate(6 6)"/>
                    </clipPath>
                  </defs>
                </svg>
              </button>

              <button className="action-btn trash-btn" aria-label="Delete test">
                {/* Updated Delete Icon - 28x28px */}
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 10H20M18.6667 10V19.3334C18.6667 20 18 20.6667 17.3334 20.6667H10.6667C10 20.6667 9.33337 20 9.33337 19.3334V10M11.3334 10V8.66671C11.3334 8.00004 12 7.33337 12.6667 7.33337H15.3334C16 7.33337 16.6667 8.00004 16.6667 8.66671V10M12.6666 13.3334V17.3334M15.3334 13.3334V17.3334" stroke="#78716C" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <button className="edit-btn">
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span>Edit test</span>
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="tab-nav">
            <nav>
              <button className="tab-btn active">Summary</button>
              <button className="tab-btn">
                <span>Recordings</span>
                <span className="recordings-badge">5</span>
              </button>
              <button className="tab-btn">Settings</button>
            </nav>
          </div>

          {/* Share your test link - Copy button ab neeche hai */}
          <div className="share-section">
            <h2 className="section-title">Share your test link</h2>
            <p className="section-description">
              Copy the link below and share it with your users to start gathering insights.
            </p>

            <div className="share-input">
              <div className="url-input-container">
                <input
                  type="text"
                  value="https://usertest.app/r/wg74gJ"
                  readOnly
                  className="url-input"
                  aria-label="Test sharing URL"
                  onFocus={(e) => e.target.select()}
                />
              </div>
              <button 
                className={`copy-btn ${copied ? 'copied' : ''}`}
                onClick={handleCopyLink}
              >
                {copied ? (
                  // Check symbol when copied
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3334 3.99988L6.00008 11.3332L2.66675 7.99988" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  // Copy icon when not copied
                  <svg width="16" height="16" fill="none" stroke="white" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Task section with 16px gap above */}
          <div className="task-section">
            <h2 className="section-title">Task</h2>
            <p className="task-description">
              You're going to experience the onboarding process for a new educational app. The goal of this app is to help users get acquainted with its features quickly and efficiently so they can start learning right away. As you go through the flow, focus on how easy or difficult it is to understand and complete each step.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;