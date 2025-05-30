import '../Style/main.css';

const Body = () => {
    return (
        <div className="body-wrapper">
            <div className="dot-container">
                {/* Dot pattern atas */}
                <div className="dot-pattern dot1" style={{ top: '-10px', left: '-50px' }}></div>
                <div className="dot-pattern dot2" style={{ top: '150px', right: '500px' }}></div>
                <div className="dot-pattern dot3" style={{ top: '450px', left: '100px' }}></div>
                <div className="dot-pattern dot5" style={{ top: '700px', left: '0px' }}></div>
                <div className="dot-pattern dot4" style={{ top: '250px', right: '3%' }}></div>
                <div className="dot-pattern dot2" style={{ top: '550px', left: '500px' }}></div>

                {/* Dot pattern 2 */}
                <div className="dot-pattern dot6" style={{ top: '900px', left: '8%' }}></div>
                <div className="dot-pattern dot7" style={{ top: '1100px', right: '-5%' }}></div>
                <div className="dot-pattern dot1" style={{ top: '1550px', left: '0%' }}></div>
            </div>
        </div>
    );
};

export default Body;
