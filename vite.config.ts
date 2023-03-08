import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
console.log(process.cwd());

// https://vitejs.dev/config/
// export default defineConfig({
// resolve: {
// 	// 配置别名
//   alias: {
//     "@": path.resolve(__dirname, "src"),
//   },
// },
// plugins: [vue()],
// server: {
//   port: 8080,
//   hmr: {
//     host: "127.0.0.1",
//     port: 8080,
//   },
//   proxy: {
//     "/api": {
//       target: "www.baidu.com",
//       changeOrigin: true,
//       secure: true,
//       rewrite: (path: string) => path.replace(/\/api/, ""),
//     },
//   },
// },
// });
export default defineConfig(({ command, mode, ssrBuild }) => {
    console.log('command, mode, ssrBuild', command, mode, ssrBuild);
    return {
        resolve: {
            // 配置别名
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },
        plugins: [vue()],
        server: {
            port: 8080,
            hmr: {
                host: '127.0.0.1',
                port: 8080,
            },
            proxy: {
                '/api': {
                    target: 'www.baidu.com',
                    changeOrigin: true,
                    secure: true,
                    rewrite: (path: string) => path.replace(/\/api/, ''),
                },
            },
        },
    };
});
