// eslint-disable-next-line import/no-anonymous-default-export
export default {
  extends: ["git-commit-emoji"],
  rules: {
    "type-empty": [2, "never"],
    "subject-empty": [2, "never"],
    "scope-empty": [1, "never"],
  },
};