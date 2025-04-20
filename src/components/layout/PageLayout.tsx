
'use client'


export default function PageLayout({children}: {children: React.ReactNode}) {
  return (
    <section className="max-w-screen-lg mx-auto px-10 py-8">
      {children}
    </section>
  )
}