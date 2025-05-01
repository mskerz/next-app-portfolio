import { PageLayout } from "@/components/layout";


export default function ProjectLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <PageLayout >
       <div className="mb-10">
       {children}
       </div>
      </PageLayout>
    );
  }
  