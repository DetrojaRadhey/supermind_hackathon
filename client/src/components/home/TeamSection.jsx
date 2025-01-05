import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, GraduationCap } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Detroja Radhey",
      role: "Fullstack Developer",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQGZQ0wR6eLPqA/profile-displayphoto-shrink_200_200/B56ZPO0G5aGsAc-/0/1734341588421?e=2147483647&v=beta&t=247Fg9c820DwhcGDuBzOal8a7X9N25KAP5ZU3m25Xo8",
      graduationYear: "2026",
      college: "Charusat University",
      linkedin: "https://in.linkedin.com/in/radhey-detroja-4308a8255/",
      github: "https://github.com/DetrojaRadhey",
    },
    {
      name: "Kaneriya Jaimin",
      role: "Fullstack Developer",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQFQQd1upY55kg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1694179221043?e=2147483647&v=beta&t=Ol9sLT6cQL8mhXBuVoxBVSHDhrlXb2iDSn-Fke-xbdw",
      graduationYear: "2026",
      college: "Charusat University",
      linkedin: "https://www.linkedin.com/in/jaimin-kaneriya-492928253/",
      github: "https://github.com/JAIMIN05",
    },
    {
      name: "Vasu Amrutiya",
      role: "ML Developer",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQE4t6DXMbCDzA/profile-displayphoto-shrink_400_400/B4DZP0BizLG0Ak-/0/1734965867335?e=1741824000&v=beta&t=KdBqY1IdqLCA4x--1gXMZfijsUIZk0sYAj0f3PoW8KU",
      graduationYear: "2026",
      college: "Nirma University",
      linkedin: "https://www.linkedin.com/in/vasu-amrutia-1397aa29a/",
      github: "https://github.com/vasuamrutiya12",
    },
    {
      name: "Manthan Kansagra",
      role: "ML Developer",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQHiktOYEQTPjg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1690868798328?e=2147483647&v=beta&t=MeLnAciUoqpX0NFiVjNm9mHSx5v-u7sbXU9O71NKPOU",
      graduationYear: "2026",
      college: "Nirma University",
      linkedin: "https://in.linkedin.com/in/manthan-kansagara-99a422252/",
      github: "https://github.com/Manthan-Kansagara",
    },
  ];

  return (
    <section
      id="team"
      className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group">
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 rounded-full mx-auto object-cover ring-4 ring-primary-100 group-hover:ring-primary-200 transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-medium mb-3">
                {member.role}
              </p>
              <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
                <GraduationCap size={18} className="text-primary-500" />
                <span className="text-sm">
                  {member.college} ({member.graduationYear})
                </span>
              </div>
              <div className="flex justify-center gap-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-full transition-colors duration-300">
                  <Linkedin size={20} />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-full transition-colors duration-300">
                  <Github size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
