import { defineConfig } from 'tsup'

export default defineConfig(options => ({
  entry: ['src/index.js'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  shims: true,
  minify: false,
  ...options
}))
