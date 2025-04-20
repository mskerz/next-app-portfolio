import { PageLayout } from "@/components/layout";


export default function ProjectLayout({
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
  