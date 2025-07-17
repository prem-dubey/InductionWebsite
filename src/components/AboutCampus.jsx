const sections = [
    { title: 'IIT Kharagpur', desc: 'The oldest IIT, known for its sprawling campus.', icon: '🏛️' },
    { title: 'Campus Life', desc: 'A vibrant campus with a strong student community.', icon: '🎓' },
    { title: 'Halls of Residence', desc: 'Comfortable accommodation with many facilities.', icon: '🏠' },
    { title: 'Student Societies', desc: 'Numerous clubs for various interests.', icon: '🤝' },
];

export default function AboutCampus() {
    return (
        <section id="about" className="py-16 bg-gray-100 text-center px-4">
            <h2 className=" text-xl md:text-3xl font-bold mb-10">About the Campus</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {sections.map((s, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
                        <div className="text-4xl">{s.icon}</div>
                        <h3 className="text-xl font-semibold mt-4">{s.title}</h3>
                        <p className="text-sm mt-2 text-gray-600">{s.desc}</p>
                    </div>
                ))}
            </div>
            {/* Making the left and right type about section */}
            <div className="mt-12 max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">

                <img src="/kgp-slider1.png" alt="" className="w-100 rounded-lg shadow-2xl" />

                <div className="text-center mt-6 bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold">A Glimpse of IIT Kharagpur</h3>
                    <p className="text-sm text-gray-800 mt-2">Welcome to IIT Kharagpur – the oldest and one of the most prestigious IITs in India. Nestled in a lush 2100-acre campus, IIT KGP is not just an academic institute, but a vibrant mini-city where tradition meets innovation. </p>
                    <p className="text-sm text-gray-800 mt-2">From world-class academic departments and research centers to buzzing halls of residence, sports grounds, food joints, and cultural clubs life here is full of experiences that shape you both professionally and personally.</p>
                </div>
            </div>
            <div className="mt-12 max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 ">
                
                <img src="/kgp-slider2.jpeg" alt="" className="w-100 rounded-lg" />

                <div className="text-center mt-6 bg-white p-6 rounded-lg shadow-lg mx-auto">
                    <h3 className="text-2xl font-semibold">Gymkhana</h3>
                    <p className="text-sm text-gray-800 mt-2 mx-auto text-center">Technology Students’ Gymkhana is the hub of the numerous extra-curricular and co-curricular activities at IIT Kharagpur ranging from sports to socio-cultural. Gymkhana is managed by the students, for the students, under the guidance and active participation of the faculty and staff members. </p>
                    <p className="text-sm text-gray-800 mt-2 mx-auto text-center">The motto of Technology Students'​ Gymkhana is योग: कर्मसु कौशलम् which in English means "Excellence in action is Yog"​. Our goal is to bring overall development in IITians through cultivating and nurturing their extra-curricular talents.</p>
                </div>
            </div>
            <div className="mt-12 max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 ">

                <img src="/kgp-slider3.png" alt="" className="w-100 rounded-lg" />

                <div className="text-center mt-6 bg-white p-6 rounded-lg shadow-lg mx-auto">
                    <h3 className="text-2xl font-semibold">Hall of Residence</h3>
                    <p className="text-sm text-gray-800 mt-2 mx-auto text-center">The Halls of Residence at IIT Kharagpur are more than just hostels they’re the heart of student life on campus. Each hall has its own unique culture, traditions, and community, fostering a strong sense of belonging among students. Equipped with essential facilities like mess, canteens, common rooms, and Wi-Fi, the halls provide a comfortable living space while also encouraging collaboration, friendships, and personal growth. From late night discussions to hall events and Inter-Hall competitions, the hall experience plays a defining role in every student’s journey at IIT KGP. </p>
                </div>
            </div>
        </section>
    );
}
