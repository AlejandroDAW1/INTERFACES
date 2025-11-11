// vite.config.js
import { defineConfig } from "vite";
import stylelint from "vite-plugin-stylelint";

export default defineConfig({
  plugins: [
    // ...otros plugins que tengas (tailwind, etc.)
    stylelint({
      // Opcional: activa la corrección automática (fix)
      // fix: true,

      // Opcional: especifica los archivos a incluir
      include: ["src/**/*.{css,scss,sass}, css/**/*.{css,scss,sass}"],
    }),
  ],
});
