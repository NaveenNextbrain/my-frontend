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
        // Fetch health check
        const healthRes = await fetch(`${API_URL}/api/health`);
        const healthData = await healthRes.json();
        setHealth(healthData);

        // Fetch data
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
    <main style={{ 
      padding: '2rem', 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1 style={{ color: '#0070f3' }}>🚀 My Full Stack Application - CI/CD Works!</h1>
      
      <div style={{ 
        marginTop: '1rem', 
        padding: '1rem', 
        background: '#f0f0f0', 
        borderRadius: '8px' 
      }}>
        <p><strong>Frontend:</strong> Next.js on CloudFront + S3</p>
        <p><strong>Backend:</strong> Node.js on Elastic Beanstalk</p>
        <p><strong>CI/CD:</strong> AWS CodePipeline + CodeBuild</p>
      </div>

      <div style={{ 
        marginTop: '2rem', 
        padding: '1.5rem', 
        border: '2px solid #0070f3', 
        borderRadius: '8px' 
      }}>
        <h2>🔌 Backend Connection Status</h2>
        
        {loading && (
          <p style={{ color: '#666' }}>⏳ Connecting to backend...</p>
        )}
        
        {error && (
          <div style={{ 
            padding: '1rem', 
            background: '#ffe6e6', 
            borderRadius: '4px',
            color: '#d00' 
          }}>
            <strong>❌ Error:</strong> {error}
            <p style={{ fontSize: '0.9em', marginTop: '0.5rem' }}>
              Make sure to replace API_URL with your actual Elastic Beanstalk URL!
            </p>
          </div>
        )}
        
        {health && !error && (
          <div style={{ 
            marginTop: '1rem', 
            padding: '1rem', 
            background: '#e8f5e9', 
            borderRadius: '4px' 
          }}>
            <h3>✅ Health Check</h3>
            <p><strong>Status:</strong> {health.status}</p>
            <p><strong>Message:</strong> {health.message}</p>
          </div>
        )}

        {data && !error && (
          <div style={{ 
            marginTop: '1rem', 
            padding: '1rem', 
            background: '#e3f2fd', 
            borderRadius: '4px' 
          }}>
            <h3>📊 API Data</h3>
            <p><strong>Message:</strong> {data.message}</p>
            <p><strong>Timestamp:</strong> {data.timestamp}</p>
          </div>
        )}
      </div>

      <div style={{ 
        marginTop: '2rem', 
        padding: '1rem', 
        background: '#fff3cd', 
        borderRadius: '8px',
        fontSize: '0.9em'
      }}>
        <strong>💡 Testing CI/CD:</strong>
        <ol style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li>Make a change to this page</li>
          <li>Push to GitHub: <code>git push origin main</code></li>
          <li>Watch CodePipeline auto-deploy your changes!</li>
        </ol>
      </div>
    </main>
  );
}
