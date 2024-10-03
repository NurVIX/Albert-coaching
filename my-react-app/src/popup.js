import React, {useState, useEffect} from "react";
import './style.css'; 
import Button from "react-bootstrap/Button";

const TimedPopup = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

//implement 5 seconds timer  (5000ms)

useEffect(() => {
    const timer = setTimeout(() => {
        setIsPopupVisible(true);
    }, 5000); // I can change if needed ***

    return () => clearTimeout(timer);
},[]);

 const closePopup = () => {
    setIsPopupVisible(false);
 };

//implementing the function and writing react
return (
    <div>
        {isPopupVisible && (
            <main className="PopUpContainer">
                <div className="PopUpBackground">
                    <div className="whitecontainerpopUp">
                        <div className="flexCloseButton">
                            <Button className = "closeButton" onClick={closePopup}>X</Button>
                        </div>
                        <div className="contentPopUp">
                            <p>Sign Up for our 
                            <br/>Training Program!</p>
                            <a href="https://4ydc94jlqiw.typeform.com/to/LSUw3cp0" target="_blank" rel="noopener noreferrer">
                            <Button variant="light">SIGN UP NOW</Button></a>
                        </div>
                    </div>
                </div>
            </main>
        )}
    </div>

);
}
export default TimedPopup;