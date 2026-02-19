module.exports = {
  ci: {
    collect: {
      url: [
        "http://localhost:8788/",
        "http://localhost:8788/blog/",
        "http://localhost:8788/faq.html",
      ],
      numberOfRuns: 3,
      startServerCommand: "npm run dev:website",
      startServerReadyPattern: "Ready on",
      startServerReadyTimeout: 30000,
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.9 }],
        "categories:accessibility": ["error", { minScore: 0.95 }],
        "categories:best-practices": ["error", { minScore: 0.9 }],
        "categories:seo": ["error", { minScore: 0.9 }],
      },
    },
    upload: {
      target: "filesystem",
      outputDir: ".lighthouseci",
    },
  },
};
