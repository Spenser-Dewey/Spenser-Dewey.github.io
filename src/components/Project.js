import LazyLoad from 'react-lazy-load';

import Card from 'react-bootstrap/Card'
import GithubLogo from '../images/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png'

function Project({ name, description, link, imgNames = [] }) {
  const icon = (link.toLowerCase().includes('github')) ? <img src={GithubLogo} alt="Github Logo" /> : "Code Link";
  return (
    <Card className=" mb-4 project" border="light">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        {(imgNames.length > 0) &&
          imgNames.map(img =>
            <LazyLoad key={img}>
                <Card.Img variant="top" alt="A running screenshot of the project" src={require("../images/ProjectPhotos/" + img)} />
            </LazyLoad>
          )}
        <Card.Text>
          {description}
        </Card.Text>
        {link.length > 0 && (<Card.Link href={link}>{icon}</Card.Link>)}
      </Card.Body>
    </Card>
  );
}

export default Project;