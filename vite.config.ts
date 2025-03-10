import react from "@vitejs/plugin-react";
import {defineConfig, loadEnv} from "vite";

export default ({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    //const API_URL = `${env.VITE_APP_HOST}:${env.VITE_APP_PORT}`;
    //console.log(`VITE CONFIG API URL : ${API_URL}`);

    return defineConfig({
        plugins: [
            react()
        ],
        resolve: {
            alias: {
                "@": "/src",
            },
        },
        build: {
            outDir : "../dist",
            sourcemap : false,
        },
        server: {
            port : 3030,
            open : true,
        },
        preview: {
            port: 3030
        }
    })
};