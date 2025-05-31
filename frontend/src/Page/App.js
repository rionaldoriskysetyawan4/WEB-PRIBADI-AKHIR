import SkillBox from '../Component/SkillBox';
import Nav from '../Fragment/Nav';
import '../Style/main.css';
import TextHome from '../Component/TextHome';
import Layout from '../Component/Title';
import Body from '../Fragment/Body';
import ImgHum from '../Component/Human';
import TextProf from '../Component/TextProf';
import MyButton from 'Component/Button';
import GaleriBox from 'Component/Galery';
import Foot from 'Fragment/Footer';
import Footer from 'Fragment/Footer';

function App() {
  return (
    <div className="app">
      <Body />
      <div className="navWrapper">
              <Nav />
      </div>
      <div className="content">
        <div className="containerImage-Home">
          <TextHome />
          <ImgHum className="ImageHum1" />
        </div>
        <div className="content2">
          <div className="containerImage-Prof">
            <ImgHum className="ImageHum2" />
            <div className="containerText-Prof">
              <TextProf />
              <div className="button-container">
                <MyButton
                  label="Download CV"
                  className="myButton-CV"
                  onClick={() => window.open('/cv.pdf', '_blank')}
                />
                <MyButton
                  label="Blog"
                  className="myButton-Blog"
                  onClick={() => window.location.href = '/blog'}
                />
              </div>
            </div>
          </div>
          <div className="containerTitle">
            <SkillBox
              skill={{
                name: 'Software Engineer',
                icon: '/Code.png', // HANYA ini, tanpa '/frontend/public'
                description:
                  'JavaScript is a versatile programming language used for web development, enabling interactive and dynamic content on websites.',
              }}
            />
            <SkillBox
              skill={{
                name: '3D Designer',
                icon: '/Cube.png', // HANYA ini, tanpa '/frontend/public'
                description:
                  'JavaScript is a versatile programming language used for web development, enabling interactive and dynamic content on websites.',
              }}
            />
            <SkillBox
              skill={{
                name: 'IoT Enthusiast',
                icon: '/Iot.png', // HANYA ini, tanpa '/frontend/public'
                description:
                  'JavaScript is a versatile programming language used for web development, enabling interactive and dynamic content on websites.',
              }}
            />
          </div>
          <div className="containerBox-Galery">
            <div className="container-Galery">
              <GaleriBox
                Galery={{
                  name: 'Galeri',
                  icon: '/favicon.ico', // HANYA ini, tanpa '/frontend/public'
                  description:
                    'JavaScript is a versatile programming language used for web development, enabling interactive and dynamic content on websites.',
                }}
              />
              <GaleriBox
                Galery={{
                  name: 'Galeri',
                  icon: '/favicon.ico', // HANYA ini, tanpa '/frontend/public'
                  description:
                    'JavaScript is a versatile programming language used for web development, enabling interactive and dynamic content on websites.',
                }}
              />
              <GaleriBox
                Galery={{
                  name: 'Galeri',
                  icon: '/favicon.ico', // HANYA ini, tanpa '/frontend/public'
                  description:
                    'JavaScript is a versatile programming language used for web development, enabling interactive and dynamic content on websites.',
                }}
              />
            </div>
            <div className="container-Galery">
              <GaleriBox
                Galery={{
                  name: 'Galeri',
                  icon: '/favicon.ico', // HANYA ini, tanpa '/frontend/public'
                  description:
                    'JavaScript is a versatile programming language used for web development, enabling interactive and dynamic content on websites.',
                }}
              />
              <GaleriBox
                Galery={{
                  name: 'Galeri',
                  icon: '/favicon.ico', // HANYA ini, tanpa '/frontend/public'
                  description:
                    'JavaScript is a versatile programming language used for web development, enabling interactive and dynamic content on websites.',
                }}
              />
              <GaleriBox
                Galery={{
                  name: 'Galeri',
                  icon: '/favicon.ico', // HANYA ini, tanpa '/frontend/public'
                  description:
                    'JavaScript is a versatile programming language used for web development, enabling interactive and dynamic content on websites.',
                }}
              />
            </div>
            <div className="container-Galery">
              <GaleriBox
                Galery={{
                  name: 'Galeri',
                  icon: '/favicon.ico', // HANYA ini, tanpa '/frontend/public'
                  description:
                    'JavaScript is a versatile programming language used for web development, enabling interactive and dynamic content on websites.',
                }}
              />
              <GaleriBox
                Galery={{
                  name: 'Galeri',
                  icon: '/favicon.ico', // HANYA ini, tanpa '/frontend/public'
                  description:
                    'JavaScript is a versatile programming language used for web development, enabling interactive and dynamic content on websites.',
                }}
              />
              <GaleriBox
                Galery={{
                  name: 'Galeri',
                  icon: '/favicon.ico', // HANYA ini, tanpa '/frontend/public'
                  description:
                    'JavaScript is a versatile programming language used for web development, enabling interactive and dynamic content on websites.',
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="containerFooter">
              <Footer />
      </div>

    </div>
  );
}

export default App;
