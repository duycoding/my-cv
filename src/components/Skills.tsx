// components/Skills.tsx
import React from 'react'

type Skill = { name: string; level: number }

export default function Skills({ skills }: { skills: Skill[] }) {
  return (
    <section className="container mx-auto px-6 py-8">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="grid gap-4">
        {skills.map(s => (
          <div key={s.name} className="flex flex-col gap-1">
            <div className="flex justify-between">
              <span className="font-medium">{s.name}</span>
              <span className="text-sm text-gray-600">{s.level}%</span>
            </div>
            <div className="w-full bg-gray-200 h-3 rounded">
              <div className="h-3 rounded bg-black" style={{ width: `${s.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
