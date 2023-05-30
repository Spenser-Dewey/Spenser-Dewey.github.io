import Container from 'react-bootstrap/Container'
import Selfie from '../images/Selfie.jpg'
import Icon from '../images/TilingPattern.png'

function Home() {
  return (
    <>
      <h1 className="p-3"> <span>
        <img className="pb-2" alt="Fun Icon" width="45px" src={Icon} />
        About Me
        <img className="pb-2" alt="Fun Icon" width="45px" src={Icon} />
      </span> </h1>
      <Container className='text-center'>
          <img className="selfie" alt="Spenser Dewey" width='200px' src={Selfie} />
          <img alt="Fun Icon" width="80px" src={Icon} />
          <h2> Spenser Dewey </h2>
          <h4> <em>(they/them)</em> </h4>
          <h4> Software Engineer </h4>
          <img alt="Fun Icon" width="80px" src={Icon} />
      </Container>
      <p className="text-center mt-1 fs-5">
        Hello! I'm a recent graduate from Northeastern University, where I studied Computer Engineering
        and Computer Science, and minored in Robotics.
      </p>

      <p className="text-center fs-5">
        I've messed around with lots of different types of technology, from database design and web development to
        FPGA programming. I'm primarily interested in firmware, embedded programming, and robotics, but
        I do enjoy working in other areas as well.
      </p>

      <p className="text-center fs-5">
        I'm currently employed as a computer science curriculum coordinator at Zinkerz!
      </p>

      <p className="text-center fs-5">
        Non-professionally, I enjoy playing board games, hiking, and reading sci-fi or fantasy novels.
      </p>
    </>
  );
}

export default Home;