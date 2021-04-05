import styled from 'styled-components/macro';
import Illustration from './assets/illustration.png'
import Github from './assets/github.png'

function App() {
  return (
      <>
          <Header>
              <Logo>MARKUS MURAKARU</Logo>
              <Button href="mailto: mmurakaru@gmail.com">Contact me</Button>
          </Header>
          <Hero>
              <div>
                  <h1 style={{ fontWeight: '500' }}>Full Stack Developer</h1>
                  <p>Hola. I'm a web developer based in Barcelona, Spain. I love to create digital products. 👨🏾‍💻 With experience as a digital designer and full-stack developer, I can design and build websites/ mobile applications from scratch. 👋 If you have any project where you think I can help please get in touch.</p>
        </div>
              <IMG src={Illustration} alt="" />
          </Hero>
          <Footer>
              <a href="https://github.com/mmurakaru">
                  <img style={{ width: '30px' }} src={Github} alt="" />
              </a>
              <Button href="mailto: mmurakaru@gmail.com">Contact me</Button>
          </Footer>
      </>
  );
}

export default App;


const Header = styled.header`
padding: 40px 5vw;
display: flex;
justify-content: space-between;
`

const Button = styled.a`
padding: 10px;
background: #D0CDE1;
border-radius: 6px;
color: white;
text-decoration: none;
height: 40px;
display: grid;
place-items: center;
`
const Hero = styled.section`
display: grid;
grid-template-columns: 1fr 1fr;
place-items: center;
column-gap: 50px;
padding: 100px 10vw;
@media (max-width: 768px) {
  display: block;
  padding: 0 5vw;
  text-align: center;
  }
`

const IMG = styled.img`
width: 60%;
@media (max-width: 768px) {
  margin: 50px auto 100px;
  width: 100%;
  }
`

const Footer = styled.footer`
background: black;
height: 100px;
position: fixed;
left: 0;
bottom: 0;
width: 100%;
padding: 20px 5vw;
display: flex;
justify-content: space-between;
@media (max-width: 768px) {
  position: static;
  }
`
const Logo = styled.span`
font-weight: 500;
`
