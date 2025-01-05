import { createRequire } from 'module';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const require = createRequire(import.meta.url);
const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        '@emotion/react': 'emotionReact',
        'framer-motion': 'framerMotion'
      }
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        '@emotion/react': 'emotionReact',
        'framer-motion': 'framerMotion'
      }
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      browser: true,
      preferBuiltins: false
    }),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      exclude: ["**/__tests__", "**/*.test.ts", "**/*.test.tsx"]
    })
  ],
  external: Object.keys(packageJson.peerDependencies)
};