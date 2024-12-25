import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  const t = useTranslations("contact_us");

  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description={t("contact_us_description")}
      />

      <Contact />
    </>
  );
};

export default ContactPage;
