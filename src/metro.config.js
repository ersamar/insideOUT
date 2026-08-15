const { getDefaultConfig } = require('metro-config');

module.exports = async () => {
  const defaultConfig = await getDefaultConfig(__dirname);

  // You can customize the defaultConfig here as needed
  return defaultConfig;
};
