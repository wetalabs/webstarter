import Head from 'next/head'
import Image from 'next/image'

const Title = "Head Title"

export default function Home() {

  return (
    <>
      <Head>
        <meta
          key="twitter:title"
          name="twitter:title"
          content="Tailwind CSS - Rapidly build modern websites without ever leaving your HTML."
        />
        <meta
          key="og:title"
          property="og:title"
          content="Tailwind CSS - Rapidly build modern websites without ever leaving your HTML."
        />
        <title>{Title}</title>
      </Head>
      <div className="text-5xl font-bold underline font-sans">
        Hello World
      </div>
    </>
  )
}
