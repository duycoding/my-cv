import React from 'react';
import Image from 'next/image';

type Props = {
    name: string;
    title: string;
    bio: string;
    avatar: string;
};

export default function Hero({ name, title, bio, avatar }: Props) {
  return (
    <section className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1">
        <h1 className="text-4xl font-bold">{name}</h1>
        <p className="text-xl text-gray-600 mt-2">{title}</p>
        <p className="mt-4 text-gray-700">{bio}</p>
        <div className="mt-6 flex gap-3">
          <a href="/resume.pdf" className="px-4 py-2 bg-black text-white rounded">Download CV</a>
          <a href="#projects" className="px-4 py-2 border rounded">View Projects</a>
        </div>
      </div>

      <div className="w-44 h-44 relative rounded-full overflow-hidden shadow-lg">
        <Image src={avatar} alt={`${name} avatar`} fill style={{ objectFit: 'cover' }} />
      </div>
    </section>
  )
}