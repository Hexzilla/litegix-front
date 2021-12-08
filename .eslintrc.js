module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "on" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "on" : "off",
    "no-unused-vars": process.env.NODE_ENV === "production" ? "on" : "off",
    "max-len": ["error", { code: 360 }]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
