import { FaPhoneAlt, FaEnvelope, FaShieldAlt, FaHospital, FaUserFriends } from "react-icons/fa";

const contacts = [
    {
        icon: <FaUserFriends />,
        title: "Student Council",
        detail: "ugacad@iitkgp.ac.in",
    },
    {
        icon: <FaUserFriends />,
        title: "Vice President",
        detail: "",
    },
    {
        icon: <FaUserFriends />,
        title: "GSEC Student's Welfare:",
        detail: "",
    },
    {
        icon: <FaPhoneAlt />,
        title: "Emergency Helpline",
        detail: "+91 3222 282 000",
    },
    {
        icon: <FaHospital />,
        title: "BC Roy Hospital",
        detail: "+91 3222 282 278",
    },
    {
        icon: <FaShieldAlt />,
        title: "Campus Security",
        detail: "+91 3222 281 017",
    },
    {
        icon: <FaEnvelope />,
        title: "TSG Office",
        detail: "tsg@iitkgp.ac.in",
    },
];

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
                <p className="text-gray-600 mb-10">
                    Here are some important contacts to help you settle in and stay safe at IIT Kharagpur.
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {contacts.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                    >
                        <div className="text-3xl text-blue-700 mb-3">{item.icon}</div>
                        <h3 className="text-lg font-semibold text-gray-800 ">{item.title}</h3>
                        <p className="text-gray-600 mt-1">{item.detail}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contact;
