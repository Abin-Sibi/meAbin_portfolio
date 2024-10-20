'use client';

import VanillaTilt from 'vanilla-tilt';
import { useEffect, useRef } from 'react';

const skills = [
  { name: 'JavaScript', icon: 'https://img.icons8.com/?size=100&id=108784&format=png&color=000000' },
  { name: 'ReactJs', icon: 'https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000' },
  { name: 'GitHub', icon: 'https://img.icons8.com/?size=100&id=12599&format=png&color=000000' },
  { name: 'Docker', icon: 'https://img.icons8.com/?size=100&id=22813&format=png&color=000000' },
  { name: 'NodeJs', icon: 'https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000' },
  { name: 'Flutter', icon: 'https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=000000' },
  { name: 'React Native', icon: 'https://img.icons8.com/?size=100&id=35989&format=png&color=000000' },
  { name: 'Python', icon: 'https://img.icons8.com/?size=100&id=l75OEUJkPAk4&format=png&color=000000' },
  { name: 'Git', icon: 'https://img.icons8.com/?size=100&id=20906&format=png&color=000000' },
  { name: 'NextJs', icon: 'https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000' },
  { name: 'Express', icon: 'https://img.icons8.com/?size=100&id=SDVmtZ6VBGXt&format=png&color=000000' },
  { name: 'MongoDB', icon: 'https://img.icons8.com/?size=100&id=74402&format=png&color=000000' },
  { name: 'SQL', icon: 'https://img.icons8.com/?size=100&id=qGUfLiYi1bRN&format=png&color=000000' },
];

export default function Skills() {
  const whiteDivRef = useRef(null);

  useEffect(() => {
    if (whiteDivRef.current) {
      VanillaTilt.init(whiteDivRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        'max-glare': 0.5,
      });
    }
  }, []);

  return (
    <section className="p-5">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white">SKILLS</h2>
        <p className="text-white mt-2">I love to learn new technologies.</p>
      </div>
      <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-40 h-auto bg-gradient-to-r from-purple-950 to-purple-600 shadow-xl shadow-purple-950 rounded-[35px] flex flex-col items-center justify-center p-6 transition-transform duration-300 transform hover:scale-105"
          >
            <img src={skill.icon} alt={skill.name} className="w-13 h-13 mb-4 border border-white rounded-[30px] px-1 py-3" />
            <p className="text-lg font-medium text-white">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
