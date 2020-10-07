module.exports = {
  someSidebar: {
    Introduction: ["prerequisites", "usage"],
    "PyTorch Integration": ["collaborative-filtering", "setup", "training"],
    "MongoDB Integration": [
      "endpoint-summary",
      "mongodb-setup",
      {
        type: "category",
        label: "Endpoints",
        items: [
          "create-user",
          "get-user",
          "get-recommend",
          "add-game",
          "delete-game",
          "rate-game",
        ],
      },
    ],
  },
};
