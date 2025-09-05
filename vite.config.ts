import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "deploy_test";

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  base: `/${repoName}/`, // ensures assets load correctly
});
