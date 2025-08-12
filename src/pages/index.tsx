// pages/index.tsx
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import profile from '../data/profile.json'

export default function Home() {
  const data = profile
  return (
    <>
      <Head>
        <title>{data.name} — Portfolio</title>
        <meta name="description" content={data.bio} />
      </Head>

      <Header name={data.name} social={data.social} />
      <main>
        <Hero name={data.name} title={data.title} bio={data.bio} avatar={data.avatar} />
        <Skills skills={data.skills} />
        {/* TODO: Projects, Experience, Contact sections */}
      </main>
    </>
  )
}
