import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

type Props = {
    name: string;
    social: {github: string; linkedin: string};
}

export default function Header({ name, social }: Props) {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center border-b">
      <div className="text-lg font-semibold">{name}</div>
      <nav className="flex items-center gap-4">
        {social.github && <a href={social.github} target="_blank" rel="noreferrer" aria-label="github"><FaGithub /></a>}
        {social.linkedin && <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label="linkedin"><FaLinkedin /></a>}
        <Link href="#contact"><a className="ml-4 px-3 py-1 border rounded">Contact</a></Link>
      </nav>
    </header>
  )
}



