import BookInfo from '../components/BookInfo';
import Image from '../assets/images/holdingbooks.jpeg';

function MyBooks() {
  return (
    <div style={{ backgroundColor: 'lightgray', display: 'flex', flexDirection: 'row' }}>
      <div style={{ flex: 5, marginTop: '50px'}}>
        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}>
          <BookInfo />
        </div>
      </div>
      <div style={{ flex: 2, display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
        <img
          src={Image}
          alt="Stacked Books"
          style={{ padding: '20px', marginTop: '30px', width: '100%', height: '100%', borderRadius: '10px' }}
        />
      </div>
    </div>
  );
}

export default MyBooks;
