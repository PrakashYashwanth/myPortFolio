module.exports = {
  presets: [
    //  This is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms
    // (and optionally, browser polyfills) are needed by your target environment(s).
    // This both makes your life easier and JavaScript bundles smaller!
    '@babel/preset-env',
    // With Preset react, Babel will transpile the code when to react
    '@babel/preset-react'
  ]
}
