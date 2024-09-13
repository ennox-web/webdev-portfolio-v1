import { defineConfig } from "cypress";

export default defineConfig({
    viewportWidth: 1200,
    e2e: {
        baseUrl: 'https://wip-it-app.vercel.app/'
    },
    scrollBehavior: "top",

    component: {
        devServer: {
            framework: "next",
            bundler: "webpack",
        },
    },
});