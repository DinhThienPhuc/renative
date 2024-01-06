module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          $core: "./src/_core",
          $api: "./src/api/index",
          $assets: "./src/assets/index",
          $components: "./src/components/index",
          $hooks: "./src/hooks/index",
          $modules: "./src/modules/index",
          $navigations: "./src/navigations/index",
          $screens: "./src/screens/index",
          $services: "./src/services/index",
          $stacks: "./src/stacks/index",
          $store: "./src/store/index",
          $utils: "./src/utils/index",
        },
      },
    ],
  ],
};
