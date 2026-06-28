import React from 'react';

const teamMembers = [
  { id: 1, name: "Source of Energy", designation: "President", image: "/images/s1.jpg" },
  { id: 2, name: "Lord Hanuman ji", designation: "Vice president", image: "/images/s2.jpg" },
  { id: 3, name: "Shri Ram Chandra ji", designation: "", image: "/images/12.jpg" },
  { id: 4, name: "Yogiraj Shri Krishna ji", designation: "", image: "/images/13.jpg" },
  { id: 5, name: "Mahatma Buddha and Vedas", designation: "", image: "/images/14.jpg" },
  { id: 6, name: "Adi Shankaracharya ji and Vedas", designation: "", image: "/images/15.jpg" },
  { id: 7, name: "Sant Kabir Dass ji and Vedas", designation: "", image: "/images/16.jpg" },
  { id: 8, name: "Guru Nanak Dev ji and Vedas", designation: "", image: "/images/17.jpg" },
  { id: 9, name: "Maharishi Dayananda Saraswati ji and Vedas", designation: "", image: "/images/18.jpg" },
  { id: 10, name: "Sri Aurobindo ji and Vedas", designation: "", image: "/images/19.jpg" },
  { id: 11, name: "Maharishi Mahesh Yogi ji and Vedas", designation: "", image: "/images/20.jpg" },
  { id: 12, name: "Maharishi Ramana’s life and Vedas", designation: "", image: "/images/21.jpg" },
];

const leaders = [
  { id: 1, name: "Pujya Swami Chidanand Saraswati Ji", designation: "", image: "/images/s5.jpg" },
  { id: 2, name: "Pujya Swami Atmanand Saraswati", designation: "", image: "/images/s4.jpg" },
];

const TeamsSection = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Meet the dedicated people behind Vedic Pedia.</p>
        </div>

        {/* First Section: 12 Members */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-20">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-xl shadow border border-gray-100 hover:shadow-md transition-shadow overflow-hidden flex flex-col">
              <div className="w-full aspect-[4/5] bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 pt-2 flex flex-col flex-grow text-center">
                <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-2">{member.name}</h3>
                <div className="border-t border-gray-200 mt-auto pt-3">
                  <p className="text-xs sm:text-sm text-orange-600 font-medium">{member.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Section: 2 Leaders */}
        <div className="grid grid-cols-2 gap-8 max-w-3xl mx-auto">
          {leaders.map((leader) => (
            <div key={leader.id} className="bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
              <div className="w-full aspect-[4/3] bg-gray-100">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 pt-2 flex flex-col flex-grow text-center">
                <h3 className="text-base sm:text-xl font-bold text-gray-800 mb-4">{leader.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;
