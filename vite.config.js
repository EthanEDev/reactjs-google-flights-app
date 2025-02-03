import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    define: {
      RAPIDAPI_KEY: JSON.stringify(env.REACT_APP_RAPIDAPI_KEY),
      RAPIDAPI_HOST: JSON.stringify(env.REACT_APP_RAPIDAPI_HOST),
    },
    plugins: [react()],
  }
})