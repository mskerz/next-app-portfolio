import { PageLayout } from "@/components/layout";


export default function ExperiencesLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <PageLayout>
        {children}
      </PageLayout>
    );
  }
  