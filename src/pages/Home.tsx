import Background from '../assets/images/swirls.jpg';

function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'contain', 
        backgroundPosition: 'center', 
      }}
      className='flex flex-row justify-center mx-auto h-screen'
    >
    </div>
  );
}

export default Home;
