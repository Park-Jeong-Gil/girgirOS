import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { sassMigratorQuasar } from "rollup-plugin-sass-migrator";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    // sassMigratorQuasar(),
  ],
  
})
