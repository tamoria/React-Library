import Background from '../assets/images/swirls.jpg';

function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'contain', // Adjust this property based on your needs
        backgroundPosition: 'center', // Center the background image
      }}
      className='flex flex-row justify-center mx-auto h-screen'
    >
    </div>
  );
}

export default Home;
