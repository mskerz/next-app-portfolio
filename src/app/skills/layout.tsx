export default function SkillsLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="max-w-screen-lg mx-auto px-5 py-10">
        {children}
      </section>
    );
  }
  