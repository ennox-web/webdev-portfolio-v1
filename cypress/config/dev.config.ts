import { defineConfig } from "cypress";

export default defineConfig({
    viewportWidth: 1200,
    e2e: {
        baseUrl: "http://localhost:3000",
    },
    scrollBehavior: "top",

    component: {
        devServer: {
            framework: "next",
            bundler: "webpack",
        },
    },
});
