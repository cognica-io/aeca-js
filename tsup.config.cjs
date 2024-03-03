/** @type {import("tsup").defineConfig} */
module.exports = {
  entry: ["src/index.ts"],
  clean: true,
  format: ["cjs", "esm"],
  dts: true,
  target: ["ES2020"],
}
