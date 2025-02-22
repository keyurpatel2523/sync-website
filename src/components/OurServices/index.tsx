import { useTranslations } from "next-intl";
import { OurServicesData } from "./ourServicesData";

function ServiceSection({ categoryKey, services, t }) {
    return (
        <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
                {t(`${categoryKey}.title`)}
            </h2>
            <p className="text-lg text-gray-600 mb-12">
                {t(`${categoryKey}.description`)}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map(({ key, icon }) => (
                    <div
                        key={key}
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between"
                    >
                        <div className="flex justify-center">{icon}</div>
                        <h3 className="text-xl font-semibold text-gray-700 mt-8">
                            {t(`${categoryKey}.${key}_title`)}
                        </h3>
                        <p className="text-gray-600 mt-3">
                            {t(`${categoryKey}.${key}_description`)}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Services() {
    const tOurServices = useTranslations("our_services");

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 text-center">
                {OurServicesData.map(({ categoryKey, services }) => (
                    <ServiceSection
                        key={categoryKey}
                        categoryKey={categoryKey}
                        services={services}
                        t={tOurServices}
                    />
                ))}
            </div>
        </section>
    );
}
