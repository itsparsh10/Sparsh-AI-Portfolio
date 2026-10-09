export const KOBY_AI_GITHUB = "https://github.com/itsparsh10/Koby-s-Ai-Vector-DB";

export const kobyNavSections = [
  { id: "hero", label: "01. Hero" },
  { id: "problem", label: "02. Problem" },
  { id: "solution", label: "03. Solution" },
  { id: "flow", label: "04. User Flow" },
  { id: "ai-layer", label: "05. AI Layer" },
  { id: "multimodal", label: "06. Multimodal" },
  { id: "architecture", label: "07. Architecture" },
  { id: "business-value", label: "08. Value" },
  { id: "results", label: "09. Results" },
  { id: "conclusion", label: "10. Conclusion" }
];

export const kobyData = {
  title: "Koby's AI",
  tagline: "A Django AI assistant for searching Koby's Cafe PDFs, menus, recipes, and operating guidance.",
  coreMotto: "Turning unstructured information into an intelligent knowledge layer.",
  github: KOBY_AI_GITHUB,

  // 01. Hero Multimodal Interactive Terminal Scenarios
  sampleQueries: [
    {
      id: "Q-PDF",
      type: "Operations PDF",
      badge: "CAFE CULTURE & SOP",
      file: "Culture Book.docx.pdf",
      query: "Where can a new cafe manager find Koby's opening, closing, and POS procedures?",
      scanLabel: "Searching the Koby's culture and operations handbook across indexed PDF chunks.",
      contextChunk: "Chapter 3 — Cafe Operations: 3.1 Opening Procedures, 3.2 Closing Procedures, 3.3 SOS, 3.4 POS System Operations, and 3.5 Complaint Handling.",
      response: "The Culture Book groups these instructions in Chapter 3, Cafe Operations. Opening and closing guidance is in sections 3.1–3.2, while POS operations are covered in section 3.4.",
      citation: "Culture Book.docx.pdf::chapter_03",
      confidence: 0.94,
      latency: "1.2s"
    },
    {
      id: "Q-IMG",
      type: "Menu Table",
      badge: "VEGETARIAN MENU",
      file: "VEG SANDWICHS.pdf",
      query: "Which vegetarian sandwich uses sourdough bread with mushroom and onion?",
      scanLabel: "Matching the question against extracted rows from the vegetarian sandwich menu.",
      contextChunk: "Menu row: Mushroom & Onion — Sourdough Bread — Lettuce — Cheddar Cheese Slice — caramelized onion preparation.",
      response: "Choose the Mushroom & Onion sandwich. The menu lists it on sourdough bread with lettuce and a cheddar cheese slice, finished with the mushroom-and-caramelized-onion filling.",
      citation: "VEG SANDWICHS.pdf::row_02",
      confidence: 0.97,
      latency: "0.9s"
    },
    {
      id: "Q-AUDIO",
      type: "Multi-PDF Search",
      badge: "DRINKS COLLECTION",
      file: "ICED COFFEES.pdf",
      query: "Which Koby's documents should I search for cold coffee and shake options?",
      scanLabel: "Searching the indexed cafe menu collection and ranking drink-related documents.",
      contextChunk: "Relevant documents: ICED COFFEES.pdf, ICEDPRESSO COFFEE.pdf, MILKSHAKES.pdf, and COOLERS.pdf.",
      response: "Start with ICED COFFEES.pdf and ICEDPRESSO COFFEE.pdf for cold coffee drinks. MILKSHAKES.pdf and COOLERS.pdf cover the broader blended and chilled drink range.",
      citation: "pdfs/menu_collection::top_04",
      confidence: 0.92,
      latency: "1.1s"
    }
  ],

  // 02. Business Problem
  problem: {
    heading: "What real problem exists?",
    subheading: "Koby's Cafe stores menu recipes, service standards, and operating procedures across separate PDFs that are slow to search during daily work.",
    trappedFormats: [
      { name: "Cafe Handbook", count: "Culture & Operations" },
      { name: "Coffee Menus", count: "Hot, Iced & Icedpresso" },
      { name: "Food Menus", count: "Bagels & Sandwiches" },
      { name: "Cold Drinks", count: "Coolers & Milkshakes" },
      { name: "Bakery Menu", count: "Bakery Recipes" }
    ],
    keywordParadox: {
      userKnows: "What I need to understand",
      userDoesNotKnow: "Which document contains it?"
    },
    frictionPoints: [
      "Traditional search relies heavily on exact keyword matching, failing when vocabulary differs.",
      "Cafe teams must open multiple menu and operations PDFs to find a single preparation or service detail.",
      "Recipe rows, role responsibilities, and SOP guidance remain difficult to retrieve during live operations."
    ]
  },

  // 03. Solution
  solution: {
    heading: "The Solution",
    subheading: "Koby transforms cafe PDFs and approved contributions into a searchable, citation-backed knowledge base.",
    transformationSteps: [
      { step: "01", title: "Unstructured Information", desc: "PDFs, Documents, Reports, Images, Audio Notes" },
      { step: "02", title: "Structured Knowledge Representation", desc: "Text Chunking, Vision OCR, Neural Embeddings" },
      { step: "03", title: "Semantic Retrieval", desc: "FAISS Vector Search & Cosine Similarity Lookup" },
      { step: "04", title: "AI-Generated Answer", desc: "Grounded LLM Output with Exact Document Citations" }
    ]
  },

  // 04. User Flow
  userFlow: {
    heading: "End-to-End User Flow",
    subheading: "Trace the 10-stage execution pipeline from raw document upload to grounded AI answer.",
    pipeline: [
      { number: "01", title: "Upload Document", desc: "User submits PDF, Text, Image, or Audio File." },
      { number: "02", title: "Extract Content", desc: "Parses text, runs OCR on images, transcribes audio." },
      { number: "03", title: "Chunk Information", desc: "Splits extracted text into 1,000-character chunks with 200-character overlap." },
      { number: "04", title: "Generate Embeddings", desc: "Converts chunks into 384-dim neural vectors." },
      { number: "05", title: "Store Vectors", desc: "Indexes vectors into local FAISS similarity database." },
      { number: "06", title: "User Query", desc: "User asks natural language or voice question." },
      { number: "07", title: "Semantic Search", desc: "Queries FAISS vector index using cosine distance." },
      { number: "08", title: "Retrieve Context", desc: "Fetches Top-K highest relevance document chunks." },
      { number: "09", title: "LLM Processing", desc: "Google Gemini receives user query + retrieved evidence." },
      { number: "10", title: "Grounded Response", desc: "Emits precise answer with chunk-level citations." }
    ]
  },

  // 05. AI Layer
  aiLayer: {
    heading: "The AI Layer Explained",
    subheading: "Understanding the core technical mechanisms powering intelligent document intelligence.",
    components: [
      {
        name: "Embeddings",
        tag: "Vectorization",
        desc: "Converts unstructured text and media into high-dimensional numerical vectors that capture deep semantic meaning."
      },
      {
        name: "Vector Database",
        tag: "FAISS Storage",
        desc: "Stores document embeddings in a local FAISS index and ranks the most relevant chunks for each cafe question."
      },
      {
        name: "Semantic Search",
        tag: "Concept Matching",
        desc: "Finds conceptually relevant information even when user query keywords don't match exact document text."
      },
      {
        name: "RAG Pipeline",
        tag: "Context Injection",
        desc: "Supplies the LLM with verified, real-time retrieved context to ground answer generation."
      },
      {
        name: "Grounded Generation",
        tag: "Gemini Synthesis",
        desc: "Generates a natural-language answer from retrieved document context and returns the source reference for review."
      }
    ]
  },

  // 06. Multimodal Capability
  multimodal: {
    heading: "Multimodal Knowledge Input",
    subheading: "One unified AI knowledge interface for all organizational data modalities.",
    inputs: [
      { type: "Text & Notes", icon: "FileText", desc: "Markdown, TXT, Word documents & meeting notes." },
      { type: "PDF Reports", icon: "FilePdf", desc: "Multi-page PDF reports, research papers & policy manuals." },
      { type: "Images & Diagrams", icon: "Image", desc: "Architectural charts, infographics, flowcharts & PNGs." },
      { type: "Voice & Audio", icon: "Mic", desc: "Executive audio syncs, phone calls & meeting MP3s." }
    ],
    unifiedOutput: "Unified AI Knowledge Interface — Query any format, anytime."
  },

  // 07. Architecture
  architecture: {
    heading: "System Architecture",
    subheading: "Engineered with Django, Django REST Framework, FAISS, sentence-transformers, Gemini 2.0 Flash, SQLite, and optional Supabase retrieval.",
    stack: [
      { name: "Vector Search", tech: "FAISS (Facebook AI Similarity Search local CPU index)" },
      { name: "Embeddings", tech: "sentence-transformers (all-MiniLM-L6-v2 — zero API cost)" },
      { name: "LLM Answering", tech: "Google Gemini 2.0 Flash grounded with retrieved PDF context" },
      { name: "Application Layer", tech: "Django 4.2+ and Django REST Framework" },
      { name: "Data Layer", tech: "SQLite application state plus optional Supabase Postgres + pgvector" },
      { name: "Frontend", tech: "HTML5, CSS3, and vanilla JavaScript" }
    ]
  },

  // 08. Business Value
  businessValue: {
    heading: "What does this enable & save?",
    subheading: "The business problem isn't 'People need a chatbot.' It's: People spend significant time searching, reading and interpreting information.",
    outcomes: [
      { title: "Search One Cafe Library", desc: "Queries recipes, menus, SOPs, and role guidance through one interface." },
      { title: "Preserve Source Context", desc: "Returns answers with the matching document and chunk reference." },
      { title: "Support Cafe Teams", desc: "Combines authenticated access, user roles, session tracking, and contributions." },
      { title: "Moderate Knowledge", desc: "Gives administrators tools to review uploads, users, and contributed answers." }
    ]
  },

  // 09. Results & Capabilities Delivered
  results: {
    heading: "Capabilities Delivered & Results",
    subheading: "Configuration and implementation facts from the production repository—not invented benchmark claims.",
    capabilities: [
      "Semantic Document Search (Vector Cosine Similarity)",
      "RAG-Based Answers with Source Context",
      "FAISS Vector Retrieval with Configurable Similarity",
      "Multimodal Interaction (Text, PDF, Image, Voice)",
      "Document Intelligence & Audit Citations"
    ],
    benchmarks: [
      { name: "Indexed Cafe PDFs", score: "11", note: "Menus plus the Koby's culture and operations handbook" },
      { name: "Chunk Size", score: "1,000", note: "Characters per configured PDF text chunk" },
      { name: "Chunk Overlap", score: "200", note: "Characters retained between adjacent chunks" },
      { name: "Max Search Results", score: "5", note: "Configured top matches returned per query" }
    ]
  },

  // 10. Conclusion
  conclusion: {
    heading: "A Searchable Operating Layer for Koby's Cafe",
    quote: "Koby's AI turns cafe menus, recipes, and operating documents into an authenticated assistant that can retrieve evidence before answering.",
    zsConnection: "Built as a production-oriented Django application with authenticated PDF search, admin controls, contribution moderation, local FAISS retrieval, and an optional Supabase ingestion path."
  }
};
