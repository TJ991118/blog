/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    '@daltontan/postcss-import-json': {
      prefix: '--abbes-sys-'
    }
  },
};

export default config;
