import { defineConfig } from "cypress";

export default defineConfig({
    viewportWidth: 1200,
    e2e: {
        baseUrl: 'https://webdev-portfolio-v1-ennox.vercel.app'
    },
    scrollBehavior: "top",

    component: {
        devServer: {
            framework: "next",
            bundler: "webpack",
        },
    },
});