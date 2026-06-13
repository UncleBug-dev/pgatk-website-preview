import React, { useState, useEffect } from 'react';

const UncleBug: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isTalking, setIsTalking] = useState(false);
  const [showSpeech, setShowSpeech] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  // Animate mouth when talking
  const [mouthOpen, setMouthOpen] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isTalking) {
      interval = setInterval(() => {
        setMouthOpen((prev) => !prev);
      }, 150); // fast talking animation
    } else {
      setMouthOpen(false);
    }
    return () => clearInterval(interval);
  }, [isTalking]);

  if (!isVisible) return null;

  const handleClick = () => {
    if (isTalking || showSpeech) return; // Prevent multiple clicks
    
    setShowSpeech(true);
    setIsTalking(true);
    
    // Stop talking after 3 seconds, then wait a little and disappear
    setTimeout(() => {
      setIsTalking(false);
      
      // Keep speech bubble for 1.5 more seconds, then disappear
      setTimeout(() => {
        setShowSpeech(false);
        // Wait a tiny bit for the bubble to hide, then trigger funny exit
        setTimeout(() => {
          setIsLeaving(true);
          
          // Actually remove from DOM after the animation completes
          setTimeout(() => {
            setIsVisible(false);
          }, 1000); 
        }, 400);
      }, 1500);
      
    }, 3000);
  };

  return (
    <div 
      className={`fixed bottom-0 left-2 z-50 transition-all ease-in-out flex items-end origin-bottom ${
        isLeaving 
          ? 'duration-1000 translate-x-[500px] -translate-y-[800px] rotate-[1080deg] scale-0 opacity-0' 
          : `duration-500 ${showSpeech ? 'opacity-100' : (isHovered ? 'opacity-100' : 'opacity-70')}`
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Speech Bubble */}
      <div 
        className={`absolute bottom-[90%] left-1/2 mb-2 w-max max-w-[200px] sm:max-w-xs bg-white text-primary-900 px-4 py-2 rounded-2xl shadow-xl transform transition-all duration-300 origin-bottom-left border-2 border-accent-500 ${
          showSpeech ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-4'
        }`}
        style={{ zIndex: 60 }}
      >
        <p className="font-bold text-xs sm:text-sm">Сайт ещё разрабатывается... 🛠️</p>
        {/* Tail */}
        <div className="absolute top-full left-6 w-3 h-3 bg-white border-b-2 border-r-2 border-accent-500 transform rotate-45 -mt-1.5"></div>
      </div>

      {/* Cat character */}
      <div 
        className="relative cursor-pointer hover:scale-105 transition-transform duration-300 drop-shadow-2xl"
        onClick={handleClick}
      >
        <img 
          src={`${import.meta.env.BASE_URL}images/unclebug/${mouthOpen ? '2.png' : '1.png'}`} 
          alt="Uncle Bug" 
          className="w-16 h-auto"
        />
      </div>
    </div>
  );
};

export default UncleBug;
