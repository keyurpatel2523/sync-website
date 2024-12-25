import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SYNC",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About SYNC"
        description="At SYNC, we are passionate about leveraging technology to solve complex business challenges. With a team of skilled professionals and years of industry experience, we deliver cutting-edge IT solutions tailored to meet the unique needs of our clients."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
