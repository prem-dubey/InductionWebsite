import React from 'react'

const HeroSection = () => {
  return (
    <>
    <div className="relative w-[100vw] h-150 bg-cover bg-[center_bottom_35%]" style={{ backgroundImage: `url('/hero.jpg')` }}>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white bg-opacity-50 p-8 rounded">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">Welcome to IIT KGP Induction - 2025</h1>
          <p className='text-lg md:text-2xl font-semibold mb-4'>“You don’t just study at IIT KGP – you live, grow, and thrive here.” – A proud KGPian</p>
          <a href="#about" className="bg-blue-600 px-6 py-2 text-white rounded-full hover:bg-blue-700 transition opacity-90">
            Explore Further
          </a>
        </div>
      </div>
    </div>
    </>
  );
}

export default HeroSection
