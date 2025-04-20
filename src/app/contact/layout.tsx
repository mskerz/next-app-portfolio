import { PageLayout } from "@/components/layout";

export default function ContactLayout({
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
  