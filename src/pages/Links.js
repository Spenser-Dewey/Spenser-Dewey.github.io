import Icon from '../images/TilingPattern.png'
import GithubLogo from '../images/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png'
import LinkedInLogo from '../images/icons8-linkedin-48.png'


function Links() {
  return (
    <>
      <h1><span>
        <img className="pb-2" alt="Fun Icon" width="45px" src={Icon} />
        Platform Links
        <img className="pb-2" alt="Fun Icon" width="45px" src={Icon} />
        </span></h1>
      <div style={{textAlign:'center'}}>
        <a className='m-5' href="https://github.com/Spenser-Dewey"><img src={GithubLogo} alt="Github icon" /></a>
        <a className='m-5' href="https://www.linkedin.com/in/spenser-dewey-2b051a1a3/"><img src={LinkedInLogo} alt="LinkedIn Icon" /></a>
      </div>
    </>
  );
}

export default Links;