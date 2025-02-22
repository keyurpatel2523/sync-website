import Breadcrumb from "@/components/Common/Breadcrumb";
import OurServices from "@/components/OurServices";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Explore Our Services"
        description="At SYNC, we specialize in crafting innovative mobile and web applications that meet the unique needs of your business. Our team of expert developers leverages the latest technologies to design, develop, and deploy scalable, secure, and user-friendly apps that drive engagement and revenue."
      />
      <OurServices />
    </>
  );
};

export default AboutPage;
