import SkillBox from '../Component/SkillBox';
import Nav from '../Fragment/Nav';
import '../Style/main.css';
import TextHome from '../Component/TextHome';
import Layout from '../Component/Title';
import Body from '../Fragment/Body';
import ImgHum from '../Component/Human';
import TextProf from '../Component/TextProf';

function App() {
  return (
    <div className="app">
      <Body />
      <Nav />
      <div className="content">
        <div className="containerImage-Home">
          <TextHome />
          <ImgHum className="ImageHum1" />
        </div>
        <div className="content2">
          <div className="containerImage-Prof">
            <ImgHum className="ImageHum2" />
            <TextProf />  
          </div>
                  <SkillBox
          skill={{
            name: 'JavaScript',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            description:
              'JavaScript is a versatile programming language used for web development, enabling interactive and dynamic content on websites.',
          }}
        />

        </div>





      </div>

    </div>
  );
}

export default App;
