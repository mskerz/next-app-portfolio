import BioHeader from "@/components/about/HeaderText";
import ImageProfile from "@/components/about/ImageProfile";
import { PageLayout } from "@/components/layout";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <PageLayout>
      <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
        <div className="flex-1 min-w-0">
          <div className="mb-4">
            <BioHeader />
          </div>
          <div className="break-words text-justify ">{children}</div>
        </div>
        <div className="flex-shrink-0">
          <ImageProfile />
        </div>
      </div>
    </PageLayout>
  );
}
