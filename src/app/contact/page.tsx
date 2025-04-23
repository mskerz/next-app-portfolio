import { ContactFormCard, InfomationCard } from "@/components/contact";
 

function page() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-start justify-center space-y-6 md:space-x-6">
        <InfomationCard />
        <ContactFormCard />
      </div>
    </>
  );
}
export default page;
