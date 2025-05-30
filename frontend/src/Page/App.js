import SkillBox from '../Component/SkillBox';
import Nav from '../Fragment/Nav';
import '../Style/main.css';
import TextHome from '../Component/TextHome';
import Layout from '../Component/Title';
import Body from '../Fragment/Body';
function App() {
  return (
    <div className="app">
      <Body /> 
      <Nav />

      
      <div className="content">
        <TextHome />
        
        {/* <SkillBox
          skill={{
            name: 'JavaScript',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            description:
              'JavaScript is a versatile programming language used for web development, enabling interactive and dynamic content on websites.',
          }}
        /> */}
      </div>

    </div>
  );
}

export default App;
