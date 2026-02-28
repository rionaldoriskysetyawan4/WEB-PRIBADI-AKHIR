import '../Style/main.css';
import Vector from '../Component/Vector';

const Body = () => {
    return (
        <div className="body-wrapper">
            <div className="dot-container1">
                <div className="dot-pattern1 dot1" style={{top: '0%', left: '-1.2%', transform: 'translate( -22%, -22%)'}}></div>
                <div className="dot-pattern1 dot2" style={{top: '13%', right: '5%',}}></div>
                <div className="dot-pattern1 dot3" style={{top: '27.5%'}}></div>
                <div className="dot-pattern1 dot4" style={{top: '34.5%', left: '9%'}}></div>
                {/*  */}
                <div className="dot-pattern1 dot9" style={{top: '8%', right: '35%'}}></div>
                <div className="dot-pattern1 dot5" style={{top: '15%', left: '8%'}}></div>
                <div className="dot-pattern1 dot8" style={{top: '18%', left: '35%'}}></div>
                {/*  */}
                <div className="dot-pattern1 dot6" style={{top: '40%', right: '-8%'}}></div>
                <div className="dot-pattern1 dot5" style={{bottom: '34%'}}></div>
                <div className="dot-pattern1 dot7" style={{bottom: '3%', left: '-8%'}}></div>
                <div className="dot-pattern1 dot5" style={{bottom: '25%', right: '-8%'}}></div>
                {/* Untuk test */}
                {/* <div className="dot-pattern dot5" style={{bottom: '0%', right: '0%'}}></div> */}

                <div className="background-layer1" style={{ top: '29%', width: '100%', height: '35%' }}></div>

                <Vector />
            </div>

            <div className="dot-container2">
                <div className="dot-pattern2 dot1" style={{top: '5%', left: '-1.2%', transform: 'translate( -22%, -22%)'}}></div>
                <div className="dot-pattern2 dot2" style={{top: '13%', right: '5%',}}></div>
                <div className="dot-pattern2 dot3" style={{top: '27.5%'}}></div>
                <div className="dot-pattern2 dot4" style={{top: '34.5%', left: '9%'}}></div>
                {/*  */}
                <div className="dot-pattern2 dot9" style={{top: '8%', right: '35%'}}></div>
                <div className="dot-pattern2 dot5" style={{top: '15%', left: '8%'}}></div>
                <div className="dot-pattern2 dot8" style={{top: '18%', left: '35%'}}></div>
                {/*  */}
                <div className="dot-pattern2 dot6" style={{top: '40%', right: '-8%'}}></div>
                <div className="dot-pattern2 dot5" style={{bottom: '34%'}}></div>
                <div className="dot-pattern2 dot7" style={{bottom: '3%', left: '-8%'}}></div>
                <div className="dot-pattern2 dot5" style={{bottom: '25%', right: '-8%'}}></div>

                <div className="background-layer2" style={{ top: '5%', width: '100%', height: '10%' }}></div>

                <Vector />
                </div>
        </div>
    );
};

export default Body;
