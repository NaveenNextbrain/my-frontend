'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [health, setHealth] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace with YOUR Elastic Beanstalk URL
  const API_URL = 'My-backend-api-env.eba-3qdbwu2n.us-east-1.elasticbeanstalk.com';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const healthRes = await fetch(`${API_URL}/api/health`);
        const healthData = await healthRes.json();
        setHealth(healthData);

        const dataRes = await fetch(`${API_URL}/api/data`);
        const responseData = await dataRes.json();
        setData(responseData);

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      padding: '0',
      margin: '0'
    }}>
      {/* Navigation Bar */}
      <nav style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        padding: '1rem 2rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            margin: 0
          }}>
            🚀 My Full Stack App
          </h1>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <span style={{
              color: 'rgba(255, 255, 255, 0.9)',
              background: 'rgba(255, 255, 255, 0.2)',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.9rem'
            }}>
              Next.js
            </span>
            <span style={{
              color: 'rgba(255, 255, 255, 0.9)',
              background: 'rgba(255, 255, 255, 0.2)',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.9rem'
            }}>
              Node.js
            </span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 2rem'
      }}>
        {/* Hero Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h2 style={{
            color: 'white',
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
          }}>
            Welcome to Your CI/CD Project
          </h2>
          <p style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '1.2rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            A modern full-stack application with automated deployment pipeline
          </p>
        </div>

        {/* Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {/* Feature Card 1 */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease'
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '1rem'
            }}>☁️</div>
            <h3 style={{
              color: '#667eea',
              fontSize: '1.5rem',
              marginBottom: '0.5rem'
            }}>CloudFront CDN</h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6'
            }}>
              Global content delivery with S3 static hosting for lightning-fast performance
            </p>
          </div>

          {/* Feature Card 2 */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '1rem'
            }}>⚡</div>
            <h3 style={{
              color: '#667eea',
              fontSize: '1.5rem',
              marginBottom: '0.5rem'
            }}>Elastic Beanstalk</h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6'
            }}>
              Auto-scaling Node.js backend with load balancing and health monitoring
            </p>
          </div>

          {/* Feature Card 3 */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '1rem'
            }}>🔄</div>
            <h3 style={{
              color: '#667eea',
              fontSize: '1.5rem',
              marginBottom: '0.5rem'
            }}>CI/CD Pipeline</h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6'
            }}>
              Automated deployment with CodePipeline and CodeBuild on every push
            </p>
          </div>
        </div>

        {/* Backend Status Card */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '16px',
          padding: '2rem',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          marginBottom: '2rem'
        }}>
          <h3 style={{
            color: '#667eea',
            fontSize: '1.8rem',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span>🔌</span>
            Backend API Status
          </h3>

          {loading && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem',
              background: '#f0f4ff',
              borderRadius: '8px'
            }}>
              <div style={{
                width: '20px',
                height: '20px',
                border: '3px solid #667eea',
                borderTopColor: 'transparent',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }}></div>
              <p style={{ color: '#667eea', margin: 0 }}>Connecting to backend...</p>
            </div>
          )}

          {error && (
            <div style={{
              padding: '1.5rem',
              background: '#fee',
              borderLeft: '4px solid #e53e3e',
              borderRadius: '8px',
              color: '#c53030'
            }}>
              <strong>❌ Connection Error</strong>
              <p style={{ margin: '0.5rem 0 0 0' }}>{error}</p>
              <p style={{ 
                fontSize: '0.9rem', 
                marginTop: '0.5rem',
                color: '#744210'
              }}>
                Make sure to update the API_URL in the code with your Elastic Beanstalk URL
              </p>
            </div>
          )}

          {!loading && !error && health && (
            <div style={{
              display: 'grid',
              gap: '1rem'
            }}>
              {/* Health Check */}
              <div style={{
                padding: '1.5rem',
                background: 'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(150, 230, 161, 0.3)'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <h4 style={{
                      color: '#22543d',
                      fontSize: '1.1rem',
                      margin: '0 0 0.5rem 0'
                    }}>✅ Health Check</h4>
                    <p style={{
                      color: '#276749',
                      margin: 0,
                      fontSize: '1.1rem',
                      fontWeight: '600'
                    }}>
                      Status: {health.status}
                    </p>
                  </div>
                  <div style={{
                    fontSize: '3rem'
                  }}>💚</div>
                </div>
                <p style={{
                  color: '#2f855a',
                  margin: '0.5rem 0 0 0',
                  fontSize: '0.95rem'
                }}>
                  {health.message}
                </p>
              </div>

              {/* API Data */}
              {data && (
                <div style={{
                  padding: '1.5rem',
                  background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(168, 237, 234, 0.3)'
                }}>
                  <h4 style={{
                    color: '#1a365d',
                    fontSize: '1.1rem',
                    margin: '0 0 1rem 0'
                  }}>📊 Live API Data</h4>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.6)',
                    padding: '1rem',
                    borderRadius: '8px'
                  }}>
                    <p style={{
                      color: '#2d3748',
                      margin: '0.5rem 0',
                      fontSize: '0.95rem'
                    }}>
                      <strong>Message:</strong> {data.message}
                    </p>
                    <p style={{
                      color: '#2d3748',
                      margin: '0.5rem 0',
                      fontSize: '0.95rem'
                    }}>
                      <strong>Timestamp:</strong> {new Date(data.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Architecture Info */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '16px',
          padding: '2rem',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{
            color: '#667eea',
            fontSize: '1.5rem',
            marginBottom: '1rem'
          }}>🏗️ Architecture</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginTop: '1.5rem'
          }}>
            <div style={{
              padding: '1rem',
              background: '#f7fafc',
              borderRadius: '8px',
              borderLeft: '4px solid #667eea'
            }}>
              <strong style={{ color: '#667eea' }}>Frontend</strong>
              <p style={{ margin: '0.5rem 0 0 0', color: '#666', fontSize: '0.9rem' }}>
                Next.js → S3 → CloudFront
              </p>
            </div>
            <div style={{
              padding: '1rem',
              background: '#f7fafc',
              borderRadius: '8px',
              borderLeft: '4px solid #764ba2'
            }}>
              <strong style={{ color: '#764ba2' }}>Backend</strong>
              <p style={{ margin: '0.5rem 0 0 0', color: '#666', fontSize: '0.9rem' }}>
                Node.js → Elastic Beanstalk → EC2
              </p>
            </div>
            <div style={{
              padding: '1rem',
              background: '#f7fafc',
              borderRadius: '8px',
              borderLeft: '4px solid #48bb78'
            }}>
              <strong style={{ color: '#48bb78' }}>CI/CD</strong>
              <p style={{ margin: '0.5rem 0 0 0', color: '#666', fontSize: '0.9rem' }}>
                GitHub → CodePipeline → CodeBuild
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        background: 'rgba(0, 0, 0, 0.2)',
        color: 'white',
        textAlign: 'center',
        padding: '2rem',
        marginTop: '3rem'
      }}>
        <p style={{ margin: 0 }}>
          Built with ❤️ using AWS Services | Next.js + Node.js + CI/CD Pipeline
        </p>
      </footer>

      {/* Add keyframes for loading animation */}
      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
