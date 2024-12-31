// config-overrides.js
module.exports = function override(config, env) {
    // Exemple : Modification du nom des fichiers d'assets
    config.output.assetModuleFilename = 'assets/[name][ext]';
  
    // Retourne la config modifiée
    return config;
  };
  