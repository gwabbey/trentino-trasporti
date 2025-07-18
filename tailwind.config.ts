import { heroui } from "@heroui/react";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {},
    },
    darkMode: "selector",
    plugins: [
        heroui(),
        typography,
    ]
};

export default config;
