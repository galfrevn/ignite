module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-ignite`
  extends: ["ignite"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
