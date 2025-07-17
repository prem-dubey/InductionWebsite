
export default function Clubs() {
  return (
    <section id="clubs" className="py-16 bg-white text-center px-4" >
      <h2 className="text-3xl font-bold mb-10">Clubs & Societies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="rounded-lg shadow-lg p-6 bg-gray-100 hover:bg-gray-200 transition duration-300" >
            <div className="text-4xl mb-4 object-cover">
              <img src="/club6.jpeg" alt="" className="bg-cover bg-center object-cover w-full rounded-lg" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">Aerial Robotics Kharagpur</h3>
              <p className="text-gray-700">Aerial Robotics Kharagpur (ARK) is a student team at IIT Kharagpur that builds intelligent autonomous drones for research and competitions.</p>
            </div>
          </div>

          <div className="rounded-lg shadow-lg p-6 bg-gray-100 hover:bg-gray-200 transition duration-300" >
            <div className="text-4xl mb-4 object-cover">
              <img src="/club5.jpeg" alt="" className="bg-cover bg-center object-cover w-full rounded-lg" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">Gujarat Cultural Association</h3>
              <p className="text-gray-700">Gujarat Cultural Association (GCA) at IIT Kharagpur is a vibrant student-run group dedicated to celebrating and promoting the rich cultural traditions of Gujarat through events, festivals, and community activities.</p>
            </div>
          </div>

          <div className="rounded-lg shadow-lg p-6 bg-gray-100 hover:bg-gray-200 transition duration-300" >
            <div className="text-4xl mb-4 object-cover">
              <img src="/techclub1.jpeg" alt="" className="bg-cover bg-center object-cover w-full rounded-lg" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">Kharagpur OpenSource Society</h3>
              <p className="text-gray-700">Promotes open-source development and conducts regular workshops and hackathons.</p>
            </div>
          </div>

          <div className="rounded-lg shadow-lg p-6 bg-gray-100 hover:bg-gray-200 transition duration-300" >
            <div className="text-4xl mb-4 object-cover ">
              <img src="/techclub2.png" alt="" className="bg-cover bg-center object-cover w-full h-full rounded-lg" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">TeamKart</h3>
              <p className="text-gray-700">TeamKART (Kharagpur Automobile Racing Team) is IIT Kharagpur's official Formula Student team, designing, building, and racing formula-style prototype cars in international and national competitions since 2008.</p>
            </div>
          </div>

          <div className="rounded-lg shadow-lg p-6 bg-gray-100 hover:bg-gray-200 transition duration-300" >
            <div className="text-4xl mb-4 object-cover">
              <img src="/club4.jpeg" alt="" className="bg-cover bg-center  w-full h-full rounded-lg overflow-hidden" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">Encore</h3>
              <p className="text-gray-700">Encore, the English Technology Dramatics Society at IIT Kharagpur, is a vibrant student-run dramatics group specializing in stage plays, street performances, musicals, MIME.</p>
            </div>
          </div>

          
      </div>
    </section>
  );
}


