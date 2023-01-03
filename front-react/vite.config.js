import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({  
  plugins: [react()],  
  server: {  
    watch: {  
      usePolling: true,  
    },
    host: true, // C'est ici qu'on donne l'accès à l'application  
    strictPort: true,  
    port: 5173, // On peut spécifer le port ici  
  }
});