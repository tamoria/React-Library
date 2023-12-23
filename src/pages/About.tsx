import backgroundImage from '../assets/images/pages.avif';

function About() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',  
        justifyContent: 'flex-start',
      }}
    >
      <div style={{ width: '75%', backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '10px', marginTop: '30px' }}>
        <h1 style={{ fontWeight: 'bold', fontSize: '4em', textAlign: 'center' }}>About</h1>
        <p style={{ fontWeight: 'normal', fontSize: '1.5em', textAlign: 'center' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam repellendus debitis, 
          corrupti alias quo tenetur at hic commodi officia odit dicta ut eius, iure ipsam labore! 
          Lum, fugiat fuga impedit velit exercitationem adipisci aliquid cupiditate modi iusto 
          dolor perferendis nostrum id facere aperiam natus obcaecati iste voluptate ullam, eos 
          reiciendis ea eligendi expedita. Illo facere nostrum quod similique facilis animi 
          blanditiis, culpa laboriosam cupiditate aliquid cumque optio sapiente expedita explicabo, 
          quia, ullam libero a deleniti placeat? Necessitatibus accusantium totam veritatis! 
          Dolores tempore repudiandae nobis ducimus placeat incidunt possimus accusantium 
          consequuntur labore sunt eum obcaecati, ullam libero, officiis totam tempora unde et. 
          Ipsum ipsam amet, delectus nobis libero commodi et veritatis officiis alias atque sit 
          hic, aperiam expedita, quidem ut! Esse, laborum harum expedita doloribus quae fuga? 
          Doloremque sint, eum sit iure repellat modi eius, illo alias amet sed a magni repellendus 
          facere autem optio quam, excepturi sunt fuga laboriosam quos omnis commodi accusamus iusto. Maiores voluptatem laboriosam vel eaque ea similique repellat non itaque possimus saepe, quas ducimus tempore maxime cum, qui pariatur praesentium voluptates consequuntur soluta? At explicabo dolores praesentium dolore nostrum iste, dignissimos minus vitae in tenetur temporibus laboriosam? Est libero iste commodi dolore tenetur eum. Molestias, voluptate.
        </p>
      </div>
    </div>
  );
}

export default About;
