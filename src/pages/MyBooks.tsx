import BookInfo from '../components/BookInfo';
import backgroundImage from '../assets/images/openedbooks.jpg';

function MyBooks() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        minHeight: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}>
        <BookInfo />
      </div>
    </div>
  );
}

export default MyBooks;