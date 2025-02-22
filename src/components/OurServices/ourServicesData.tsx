import {
  Code,
  Cloud,
  Briefcase,
  Smartphone,
  Search,
  Gauge,
  Monitor,
  LayoutGrid,
  Lock,
  Palette,
} from "lucide-react";

export const OurServicesData = [
    {
        categoryKey: "our_services",
        services: [
        {
            key: "software_development",
            icon: <Code className="text-blue-500 w-10 h-10" />,
        },
        {
            key: "cloud_services",
            icon: <Cloud className="text-green-500 w-10 h-10" />,
        },
        {
            key: "it_consultancy",
            icon: <Briefcase className="text-purple-500 w-10 h-10" />,
        },
        ],
    },
    {
        categoryKey: "web_services",
        services: [
        {
            key: "custom_web_applications",
            icon: <LayoutGrid className="text-blue-400 w-10 h-10" />,
        },
        {
            key: "responsive_design",
            icon: <Monitor className="text-green-400 w-10 h-10" />,
        },
        {
            key: "performance_optimization",
            icon: <Gauge className="text-orange-400 w-10 h-10" />,
        },
        {
            key: "secure_development",
            icon: <Lock className="text-red-400 w-10 h-10" />,
        },
        {
            key: "seo_optimization",
            icon: <Search className="text-purple-400 w-10 h-10" />,
        },
        {
            key: "user_experience_design",
            icon: <Palette className="text-yellow-400 w-10 h-10" />,
        },
        ],
    },
    {
        categoryKey: "app_development",
        services: [
        {
            key: "custom_app_design",
            icon: <LayoutGrid className="text-blue-400 w-10 h-10" />,
        },
        {
            key: "native_app_development",
            icon: <Smartphone className="text-green-400 w-10 h-10" />,
        },
        {
            key: "cross_platform_app_development",
            icon: <Gauge className="text-orange-400 w-10 h-10" />,
        },
        {
            key: "user_experience_design",
            icon: <Palette className="text-yellow-400 w-10 h-10" />,
        },
        {
            key: "testing_and_quality_assurance",
            icon: <Lock className="text-red-400 w-10 h-10" />,
        },
        {
            key: "deployment_and_maintenance",
            icon: <Search className="text-purple-400 w-10 h-10" />,
        },
        ],
    },
    {
        categoryKey: "logo_banner_design",
        services: [
        {
            key: "custom_logo_design",
            icon: <LayoutGrid className="text-blue-400 w-10 h-10" />,
        },
        {
            key: "banner_design",
            icon: <Monitor className="text-green-400 w-10 h-10" />,
        },
        {
            key: "brand_guidelines_development",
            icon: <Gauge className="text-orange-400 w-10 h-10" />,
        },
        {
            key: "icon_design",
            icon: <Palette className="text-yellow-400 w-10 h-10" />,
        },
        {
            key: "typography_and_color_palette_selection",
            icon: <Lock className="text-red-400 w-10 h-10" />,
        },
        {
            key: "deployment_and_maintenance",
            icon: <Search className="text-purple-400 w-10 h-10" />,
        },
        ],
    },
];