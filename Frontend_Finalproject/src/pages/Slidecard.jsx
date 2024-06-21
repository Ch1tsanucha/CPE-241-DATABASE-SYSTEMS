import { Slide,Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'; // Import the styles for the carousel
import IMG1 from "../assets/Slide1.png";
import IMG2 from "../assets/Slide2.png";

export default function Slidecard() {
    const slides = [
        {
            url:{IMG1},
        },
        {
            url: {IMG2},
        },
        
    ];

    return (
        <div className='slide-container h-screen'>
            <Fade duration={1000}
            arrows={false}> {/* Set the duration to 2000 milliseconds (2 seconds) */}
                {slides.map((image, index) => (
                    <div key={index} className='each-slide'>
                        <div
                            className='flex items-center justify-center bg-cover h-screen'
                            style={{ backgroundImage: image }}
                        />
                    </div>
                ))}
            </Fade>
        </div>
    );
}
