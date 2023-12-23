import BookList from '../components/BookList';
import backgroundImage from '../assets/images/openedbooks.jpg';

function Dashboard() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        minHeight: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start', 
      }}
    >
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
        <BookList />
      </div>
    </div>
  );
}

export default Dashboard;


