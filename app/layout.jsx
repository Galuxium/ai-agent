import Navbar from './Navbar';
import Footer from './Footer';

export default function RootLayout({ children }) {
  return (
    <>
      <head>
        <title>AI Agent</title>
        <meta name="description" content="I want a website to sell ai agents" />
        <style>{`
          @media (max-width: 600px) {
            body {
              padding: 0 10px;
            }
          }
        `}</style>
      </head>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f0f4f8 0%, #e0e7ef 100%)',
        position: 'relative'
      }}>
        <Navbar />
        <main style={{
          flex: '1',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: 'url(https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=1400&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
        }}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}