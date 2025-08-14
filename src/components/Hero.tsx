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
    <section className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 max-w-xl">
        <h1 className="text-5xl font-bold">{name}</h1>
        <p className="text-2xl text-gray-500 mt-3">{title}</p>
        <p className="mt-6 text-lg leading-relaxed text-gray-700">{bio}</p>
        <div className="mt-8 flex gap-4">
          <a href="/resume.pdf" className="px-6 py-3 bg-black text-white rounded-lg shadow hover:bg-gray-800 transition">Download CV</a>
          <a href="#projects" className="px-6 py-3 border border-black rounded-lg hover:bg-gray-100 transition">View Projects</a>
        </div>
      </div>

      <div className="flex-shrink-0 w-64 h-64 relative rounded-full overflow-hidden shadow-xl border-4 border-gray-200">
        <Image src={avatar} alt={`${name} avatar`} fill style={{ objectFit: 'cover' }} />
      </div>
    </section>

  )
}