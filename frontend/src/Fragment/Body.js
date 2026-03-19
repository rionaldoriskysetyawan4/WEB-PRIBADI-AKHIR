import '../Style/main.css';
// import ImgHum from '../Component/Human';
import Vector from '../Component/Vector';

const Body = () => {
    return (
        <div className="body-wrapper">

            <div className="dot-container">

                <div className="dot-pattern dot1 pos1"></div>
                <div className="dot-pattern dot2 pos2"></div>
                <div className="dot-pattern dot3 pos3"></div>
                <div className="dot-pattern dot4 pos4"></div>
                {/* <ImgHum className="ImageHum1" /> */}

                <div className="dot-pattern dot9 pos5"></div>
                <div className="dot-pattern dot5 pos6"></div>
                <div className="dot-pattern dot8 pos7"></div>

                <div className="dot-pattern dot6 pos8"></div>
                <div className="dot-pattern dot5 pos9"></div>
                <div className="dot-pattern dot7 pos10"></div>
                <div className="dot-pattern dot5 pos11"></div>

                <div className="background-layer"></div>

                <Vector />

            </div>

        </div>
    );
};

export default Body;
