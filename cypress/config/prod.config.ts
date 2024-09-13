import { defineConfig } from "cypress";

export default defineConfig({
    viewportWidth: 1200,
    e2e: {
        baseUrl: 'https://dev.en-nox.com/'
    },
    scrollBehavior: "top",

    component: {
        devServer: {
            framework: "next",
            bundler: "webpack",
        },
    },
});