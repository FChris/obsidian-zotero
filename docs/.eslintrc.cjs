/**
 * Specific eslint rules for this app/package, extends the base rules
 * @see https://github.com/belgattitude/nextjs-monorepo-example/blob/main/docs/about-linters.md
 */

// Workaround for https://github.com/eslint/eslint/issues/3458 (re-export of @rushstack/eslint-patch)
require("@aidenlx/eslint-config/patch/modern-module-resolution");

const { getDefaultIgnorePatterns } = require("@aidenlx/eslint-config/helpers");

const typescriptOptions = {
  tsconfigRootDir: __dirname,
  project: "tsconfig.json",
};

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,
  parserOptions: {
    ...typescriptOptions,
  },
  ignorePatterns: [...getDefaultIgnorePatterns()],
  plugins: ["@docusaurus"],
  overrides: [
    {
      files: ["*.mdx", "*.md"],
      extends: ["plugin:mdx/recommended"],
      rules: {
        "prettier/prettier": "off",
      },
    },
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx", "*.cjs"],
      extends: [
        "@aidenlx/eslint-config/typescript",
        "@aidenlx/eslint-config/regexp",
        // Apply prettier and disable incompatible rules
        "@aidenlx/eslint-config/prettier",
        "@aidenlx/eslint-config/react",
        "plugin:@docusaurus/recommended",
      ],
      rules: {
        "import/no-unresolved": "off",
      },
      settings: {
        "import/resolver": {
          typescript: typescriptOptions,
        },
      },
    },
  ],
};
