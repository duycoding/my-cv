// components/Skills.tsx
import React from 'react'

type Skill = { name: string; level: number }

export default function Skills({ skills }: { skills: Skill[] }) {
  return (
    <section className="container mx-auto px-6 py-10">
      {/* Tiêu đề */}
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 tracking-wide">
        Skills
      </h2>

      {/* Danh sách kỹ năng */}
      <div className="grid gap-6">
        {skills.map(s => (
          <div key={s.name} className="flex flex-col gap-2">
            {/* Tên + % */}
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg text-gray-700">{s.name}</span>
              <span className="text-sm font-medium text-gray-500">{s.level}%</span>
            </div>

            {/* Thanh kỹ năng */}
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className="h-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-700 ease-out"
                style={{ width: `${s.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
