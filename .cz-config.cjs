module.exports = {
  types: [
    {
      value: "✨ feat",
      name: "✨ feat:     New Function",
    },
    {
      value: "🐞 fix",
      name: "🐞 fix:      Fix Bug",
    },
    {
      value: "📝 docs",
      name: "📝 docs:     Update Document",
    },
    {
      value: "🌈 style",
      name: "🌈 style:    Style the code",
    },
    {
      value: "🦄 refactor",
      name: "🦄 refactor: Refactor the code",
    },
    {
      value: "🎈 pref",
      name: "🎈 pref:     Performance Optimization",
    },
    {
      value: "🧪 test",
      name: "🧪 test:     Related of test",
    },
    {
      value: "🐎 ci",
      name: "🐎 ci:       Related of CI/CD config",
    },
    {
      value: "🐳 chore",
      name: "🐳 chore:    Other function unrelated of main function",
    },
    {
      value: "↩  revert",
      name: "↩  revert:   Revert old version",
    },
  ],
  scops: ["component", "ui", "config", "test", "chore", "function", "page", "layout"],
  messages: {
    type: "选择提交类型（必填）",
    scope: "输入影响范围（可选）",
    subject: "简短描述变更（必填）",
    body: "详细描述（可选）",
    confirmCommit: "确认提交？",
  },
  skipQuestions: ["body", "footer"],
  subjectLimit: 100,
};
