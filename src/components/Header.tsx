import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

type Props = {
  name: string
  social: { github: string; linkedin: string }
}

export default function Header({ name, social }: Props) {
  return (
    <header className="w-full px-8 py-4 flex items-center justify-between border-b border-gray-200 bg-white shadow-sm">
      {/* Left: Logo / Name */}
      <div className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors cursor-pointer">
        {name}
      </div>

      {/* Center: Navigation */}
      <nav className="hidden md:flex gap-8 text-gray-600 font-medium">
        <Link
          href="#about"
          className="hover:text-blue-600 transition-colors"
        >
          About
        </Link>
        <Link
          href="#projects"
          className="hover:text-blue-600 transition-colors"
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className="hover:text-blue-600 transition-colors"
        >
          Contact
        </Link>
      </nav>

      {/* Right: Social Icons */}
      <div className="flex items-center gap-4 text-gray-600">
        {social.github && (
          <a
            href={social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="hover:text-blue-600 transition-colors"
          >
            <FaGithub size={20} />
          </a>
        )}
        {social.linkedin && (
          <a
            href={social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="linkedin"
            className="hover:text-blue-600 transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
        )}
      </div>
    </header>
  )
}
