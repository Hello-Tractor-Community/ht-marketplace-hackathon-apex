import { useState, useEffect } from 'react';

const heroData = [
    {
        image: '/cdn/images/track.jpg', 
        headline: 'Welcome to Our Platform', 
        message: 'Empowering farmers with modern technology.',
        gradient: 'from-transparent via-transparent to-[#d90000]', 
        buttonText: 'Learn More',
    },
    {
        image: '/cdn/images/track.png', 
        headline: 'Join the Revolution in Agriculture',
        message: 'Connecting buyers and sellers of agricultural equipment.',
        gradient: 'from-[#660066]  via-transparent to-transparent ',
        buttonText: 'Start Selling', 
    },
    {
        image: '/cdn/images/track1.jpg', 
        headline: 'Innovating for a Sustainable Future', 
        message: 'Driving sustainability and innovation in agriculture.',
        gradient: 'from-transparent via-transparent to-[#6a0d82]', 
        buttonText: 'Shop Now', 
    },
];

function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to change the hero every 20 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.length);
        }, 15000); // Change every 15 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    const { image, headline, message, gradient, buttonText } = heroData[currentIndex];

    return (
        <div className="relative">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 mb-2 relative overflow-hidden h-[22rem] md:h-[26rem] rounded-2xl">
                
                <img
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                    src={image}
                    alt={`Hero background ${currentIndex + 1}`}
                />

                <div
                    className={`absolute inset-0 bg-gradient-to-r ${gradient} bg-opacity-10 rounded-2xl transition-opacity duration-1000 ease-in-out`}
                    style={{ backgroundSize: '100% 100%', backgroundPosition: 'right' }}
                ></div>

               
                <div className="absolute top-0 left-0 flex flex-col w-full h-full justify-center text-white p-4 md:p-8 lg:p-16 xl:p-20">
                    <div className="max-w-md sm:max-w-lg lg:max-w-xl">
                        <h1 className="text-4xl font-bold mb-4">{headline}</h1> 
                        <p className="text-lg mb-6">{message}</p>
                        <button className="px-6 py-3 bg-[#e63946] rounded-full text-white font-semibold hover:bg-[#d62828]">
                            {buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
