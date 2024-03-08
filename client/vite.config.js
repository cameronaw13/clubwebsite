import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const repoName = `COC-ACM-Website`;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`
})
