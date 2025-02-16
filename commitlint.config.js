module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-max-line-length": [2, "always", 200],
    "header-max-length": [2, "always", 100],
    "subject-case": [2, "never", ["upper-case", "pascal-case", "camel-case"]],
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
        "wip",
      ],
    ],
    "scope-enum": [0, "always", []], // Disabled to allow flexible scoping in monorepo
    "scope-empty": [0, "never"], // Optional scopes
  },
};
