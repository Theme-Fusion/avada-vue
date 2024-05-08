import { defineConfig, splitVendorChunkPlugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import { v4wp } from '@kucrut/vite-for-wp';

// https://vitejs.dev/config/
export default defineConfig( {
  plugins: [
    vue( {
      template: {
        compilerOptions: {
          isCustomElement: ( tag ) => 'AwbElement' === tag
        }
      }
    } ),
    splitVendorChunkPlugin(),
     v4wp( {
			input: './src/main.js',
			outDir: './dist'
		} )
  ],
  build: {
    rollupOptions: {
      input: '/src/main.js',
      output: {
        entryFileNames: 'assets/app.js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
} );
