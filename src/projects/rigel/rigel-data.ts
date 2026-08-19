export const RIGEL_GITHUB = "https://github.com/itsparsh10/RIGEL";

export const rigel = {
  name: "RIGEL",
  mark: "// MK-I",
  category: "Local-First AI Platform",
  headline: ["The Intelligence Layer", "for Personal Computing."],
  motto: "Build. Remember. Reason. Anywhere.",
  pills: ["Portable", "Private", "Context-Aware", "Offline-First"],
  oneLiner: "RIGEL is an experimental intelligence layer for personal computing, combining local models, memory, retrieval, context, and developer workflows into one portable environment.",

  why: {
    problem: "AI can answer.\nIt doesn't always remember the work.\n\nEvery conversation can lose the context around your projects, files, decisions, and workflow.\n\nCloud AI depends on external services. Local AI gives you control, but often leaves models, memory, retrieval, and tools disconnected.\n\nRIGEL brings those layers together into one portable intelligence environment.",
    cloud: ["CLOUD AI", "External\nDisconnected from local workflow"],
    local: ["LOCAL AI", "Private\nBut often fragmented"],
    rigel: ["RIGEL", "Local-first\nConnected intelligence layer"],
  },

  idea: {
    intro: "One workspace.\nEverything your AI needs to understand your work.",
    desc: "RIGEL connects five core layers:",
    layers: [
      { name: "Model", desc: "Runs local language models." },
      { name: "Memory", desc: "Preserves useful information across sessions." },
      { name: "Retrieval", desc: "Finds relevant information from your files and knowledge." },
      { name: "Context", desc: "Builds the information needed for each interaction." },
      { name: "Tools", desc: "Connects intelligence to your development workflow." }
    ],
    outro: "Together, these layers turn a local model into a persistent workspace rather than just another chatbot."
  },

  memory: {
    intro: "Instead of starting every conversation from zero, RIGEL can extract useful information from interactions and make it available when relevant.",
    pipeline: [
      { step: "01", name: "Conversation", desc: "RIGEL receives the current interaction." },
      { step: "02", name: "Extract", desc: "Useful information is identified from the conversation." },
      { step: "03", name: "Store", desc: "Relevant memories are persisted locally." },
      { step: "04", name: "Retrieve", desc: "Past context is retrieved when it becomes relevant." },
      { step: "05", name: "Context", desc: "Retrieved information is combined with the current task." },
      { step: "06", name: "Response", desc: "The model responds with more relevant context." }
    ],
    example: [
      { label: "Current Project", val: "RIGEL UI Redesign" },
      { label: "User Preferences", val: "TypeScript · Strict Mode · Tailwind" },
      { label: "Relevant Files", val: "src/projects/rigel/*" },
      { label: "Previous Decisions", val: "Use local SQLite for persistent memory and retrieval." }
    ]
  },

  engineering: {
    tagline: "From hardware to intelligence.",
    desc: "RIGEL is designed as a local runtime that adapts to the environment it is running on.",
    workflow: [
      { step: "01", name: "Plug In", desc: "Connect the RIGEL environment from local storage or portable storage." },
      { step: "02", name: "Detect Hardware", desc: "Identify the available system resources." },
      { step: "03", name: "Select Runtime", desc: "Choose the appropriate local runtime configuration." },
      { step: "04", name: "Load Model", desc: "Initialize the selected local model." },
      { step: "05", name: "Build Context", desc: "Combine conversation, memory, retrieval, and relevant project information." },
      { step: "06", name: "Start Intelligence", desc: "Launch the unified RIGEL workspace." }
    ],
    techLine: "Hardware Detection · Runtime Management · Local Inference · Memory · Retrieval · Context · Developer Tools"
  },

  portability: {
    tagline: "Your AI workspace shouldn't belong to one computer.",
    desc: "RIGEL is designed to run from portable storage, allowing the runtime, models, memory, and workspace to move with you.\n\nPlug in. Start RIGEL. Continue working.",
    flow: "USB / SSD → RIGEL → Local Model → Memory → Workspace"
  },

  models: {
    intro: "The intelligence layer stays the same.\nThe model can change.",
    desc: "RIGEL separates the surrounding intelligence system from the underlying local model, allowing different compatible models to be used without rebuilding the workspace around each one.",
    note: "Model availability depends on hardware, runtime compatibility, and model format.",
    local: [
      { name: "Llama", company: "Meta" },
      { name: "Qwen", company: "Alibaba" },
      { name: "Mistral", company: "Mistral AI" },
      { name: "Gemma", company: "Google" },
      { name: "DeepSeek", company: "DeepSeek" },
      { name: "SmolLM", company: "Hugging Face" }
    ]
  },

  features: {
    tagline: "Intelligence that stays with your workflow.",
    list: [
      { name: "Persistent Memory", desc: "Useful context can persist across sessions." },
      { name: "Local Models", desc: "Run compatible AI models on your own hardware." },
      { name: "Context & Retrieval", desc: "Bring relevant project information into the interaction." },
      { name: "Portable Runtime", desc: "Carry the environment between supported machines." },
      { name: "Developer Workspace", desc: "Keep models, projects, documents, memory, and conversations together." },
      { name: "Offline-First", desc: "Designed around local execution rather than mandatory cloud connectivity." }
    ]
  },

  architecture: {
    tagline: "Intelligence isn't one model.",
    desc: "RIGEL is built as a collection of connected layers:",
    layers: [
      "Hardware Detection",
      "Runtime Management",
      "Model Runtime",
      "Memory & Storage",
      "Retrieval",
      "Context Builder",
      "AI Interaction",
      "Developer Workspace"
    ],
    outro: "The architecture separates the model from the systems around it, allowing the intelligence layer to evolve independently."
  },

  download: {
    tagline: "Plug in. Start working.",
    desc: "Choose the release that fits your setup.",
    versions: [
      {
        name: "RIGEL MK-I — Full",
        subtitle: "Plug & Play",
        desc: "A pre-packaged release with the RIGEL runtime and a lightweight local model.",
        bestFor: "First-time users · Portable setups · Quick evaluation"
      },
      {
        name: "RIGEL MK-I — Lite",
        subtitle: "Bring your own model",
        desc: "A lightweight release without a bundled model. Choose and install a compatible model from inside RIGEL.",
        bestFor: "Developers · Custom model setups · Lower download size"
      }
    ],
    quickStart: [
      { step: "01", name: "Download", desc: "Choose Full or Lite." },
      { step: "02", name: "Extract", desc: "Unzip RIGEL to your computer, USB drive, or portable SSD." },
      { step: "03", name: "Launch", desc: "Run the provided launcher for your operating system." },
      { step: "04", name: "Start", desc: "RIGEL initializes the local environment and opens the workspace." },
      { step: "05", name: "Choose a Model", desc: "Lite users can install a compatible local model from the Models section." },
      { step: "06", name: "Build", desc: "Start working with local AI, memory, retrieval, and context." }
    ],
    note: {
      title: "Before you start",
      desc: "RIGEL runs local AI models, so performance depends on your hardware and the model you choose.\n\nRecommended: Use a fast local SSD or portable SSD for the best experience with models and project data.\n\nRIGEL is currently an MK-I release. Hardware compatibility and model performance may vary between systems."
    }
  },

  finalCta: {
    title: "RIGEL -- MK-I",
    subtitle: "Build. Remember. Reason. Anywhere.",
    desc: "A portable, offline-first intelligence layer for personal computing."
  },

  whatIBuilt: {
    intro: "RIGEL is more than a local model runner. The system connects the infrastructure required to turn local inference into a persistent development environment.",
    items: [
      { name: "Local Runtime", desc: "Portable runtime management for executing RIGEL independently from the host environment." },
      { name: "Hardware Detection", desc: "Detect available hardware and adapt runtime and model configuration accordingly." },
      { name: "Model Management", desc: "Download, configure, load, and switch between compatible local models." },
      { name: "Memory System", desc: "Persist useful context across conversations using local storage and retrieval." },
      { name: "Context & Retrieval", desc: "Index project information and surface relevant context for each interaction." },
      { name: "Developer Integration", desc: "Connect local intelligence with projects, files, tools, and development workflows." }
    ]
  },

  engineeringChallenges: {
    items: [
      { name: "01 — Portable Execution", desc: "Running the application from removable storage requires runtime paths, data directories, models, and application state to remain independent of the host machine." },
      { name: "02 — Hardware-Aware Runtime", desc: "Model execution needs to account for available CPU, memory, storage, and runtime capabilities across different machines." },
      { name: "03 — Persistent Local Memory", desc: "Conversations and useful context need to remain available across sessions without depending on a cloud service." },
      { name: "04 — Model Abstraction", desc: "The intelligence layer is separated from the underlying model so compatible models can be changed without rebuilding the surrounding workspace." }
    ]
  },

  techStack: {
    items: [
      { name: "Runtime", desc: "Python · Rust · Portable Runtime" },
      { name: "Inference", desc: "llama.cpp · GGUF" },
      { name: "Intelligence", desc: "Local LLMs · Embeddings · Retrieval · Context Pipeline" },
      { name: "Storage", desc: "SQLite · Vector Storage" },
      { name: "Frontend", desc: "Next.js · React · TypeScript" },
      { name: "Developer Integration", desc: "VS Code · REST APIs · File Indexing" }
    ]
  },

  demonstrates: {
    items: [
      { name: "01 — Systems Engineering", desc: "Designing a multi-layer local runtime rather than a single application interface." },
      { name: "02 — AI Infrastructure", desc: "Connecting model inference, memory, retrieval, context construction, and tools." },
      { name: "03 — Software Architecture", desc: "Separating runtime, model, memory, workspace, and integration responsibilities." },
      { name: "04 — Developer Experience", desc: "Building an environment designed around real development workflows." },
      { name: "05 — Cross-Machine Execution", desc: "Designing around portable storage, hardware variability, and local execution." }
    ]
  }
};

export const rigelNavSections = [
  { id: "overview", label: "Overview" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "engineering", label: "Architecture" },
  { id: "value", label: "Value" },
];
