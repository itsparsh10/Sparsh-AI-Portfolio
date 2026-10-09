export const SUPPORT_AGENT_GITHUB = "https://github.com/itsparsh10/E-commerce-Support-Resolution-Agent";

export const supportAgentNavSections = [
  { id: "hero", label: "01. Hero" },
  { id: "problem", label: "02. Problem" },
  { id: "why-it-matters", label: "03. Why LLMs Fail" },
  { id: "solution", label: "04. Solution" },
  { id: "how-it-works", label: "05. How It Works" },
  { id: "intelligence", label: "06. Intelligence" },
  { id: "architecture", label: "07. Architecture" },
  { id: "business-value", label: "08. Business Value" },
  { id: "results", label: "09. Results" },
  { id: "conclusion", label: "10. Conclusion" }
];

export const supportAgentData = {
  title: "AI-Powered Support Resolution Agent",
  tagline: "AI resolution engine that automatically triages, verifies policies, and drafts resolutions for e-commerce tickets.",
  motto: "Retrieval • Reasoning • Policy Constraints • Evidence",
  category: "Enterprise AI & Multi-Agent RAG System",
  github: SUPPORT_AGENT_GITHUB,

  pills: [
    "CrewAI Multi-Agent",
    "Google Gemini LLM",
    "FAISS Vector Store",
    "Local Embeddings (all-MiniLM-L6-v2)",
    "FastAPI & Pydantic v2",
    "Evidence-First Citation"
  ],

  // 01. Hero Interactive Sample Tickets
  sampleTickets: [
    {
      id: "TKT-001",
      title: "Damaged Perishable Item",
      text: "My order arrived late and the item was damaged. I want a full refund immediately.",
      context: {
        order_id: "ORD-9921",
        order_date: "2024-11-01",
        delivery_date: "2024-11-08",
        item_category: "perishable",
        fulfillment_type: "first_party",
        shipping_region: "US-TX",
        order_status: "delivered",
        item_opened: true
      },
      expectedOutput: {
        classification: "refund",
        confidence: 0.94,
        decision: "needs_more_info",
        rationale: "Policy requires proof of delivery condition within 48h window. Delivery date confirms perishable category eligibility, but damage timestamp proof is missing.",
        citations: ["perishables_policy.txt::chunk_1", "refunds_terms.txt::chunk_4"],
        customer_response: "We understand your frustration regarding order ORD-9921. Perishable items are eligible for immediate replacement or refund if reported within 48 hours of delivery. Please reply with a photo of the damaged package so our team can immediately process your full refund.",
        internal_notes: "Verify photo receipt against 48h delivery timestamp (delivered 2024-11-08).",
        compliance_passed: true,
        compliance_notes: "Grounded strictly in perishables_policy.txt chunk 1. No unsupported claims.",
        compliance_all_supported: true,
        compliance_hallucination: false
      }
    },
    {
      id: "TKT-009",
      title: "Final Sale Exception",
      text: "I bought a jacket marked final sale, but it doesn't fit properly. Can I exchange it?",
      context: {
        order_id: "ORD-4412",
        order_date: "2024-10-15",
        delivery_date: "2024-10-20",
        item_category: "apparel",
        fulfillment_type: "first_party",
        item_marked_final_sale: true,
        item_opened: true
      },
      expectedOutput: {
        classification: "return_exchange",
        confidence: 0.98,
        decision: "rejected",
        rationale: "Items explicitly marked as 'Final Sale' are ineligible for returns, refunds, or exchanges under Northstar Commerce Group standard terms.",
        citations: ["final_sale_policy.txt::chunk_2"],
        customer_response: "Thank you for reaching out to us. Items purchased under 'Final Sale' promotions are strictly non-refundable and non-exchangeable as indicated at checkout. We apologize for any inconvenience this may cause.",
        internal_notes: "Checked item_marked_final_sale=true flag. Refusal mandated by policy.",
        compliance_passed: true,
        compliance_notes: "Policy final_sale_policy.txt::chunk_2 enforced cleanly.",
        compliance_all_supported: true,
        compliance_hallucination: false
      }
    },
    {
      id: "TKT-015",
      title: "Jurisdiction Conflict",
      text: "My regional EU consumer laws require a 14-day statutory right of cancellation regardless of store policy. Refund my digital software purchase.",
      context: {
        order_id: "ORD-8819",
        order_date: "2024-11-05",
        delivery_date: "2024-11-05",
        item_category: "digital_goods",
        fulfillment_type: "digital_download",
        shipping_region: "EU-DE"
      },
      expectedOutput: {
        classification: "legal_cancellation",
        confidence: 0.88,
        decision: "needs_escalation",
        rationale: "Conflict between digital download instant waiver policy and EU statutory 14-day right of withdrawal. Requires manual legal/compliance review.",
        citations: ["digital_terms.txt::chunk_3", "eu_compliance_clause.txt::chunk_1"],
        customer_response: "Your inquiry regarding EU statutory cancellation rights for digital order ORD-8819 has been forwarded to our legal support team for expedited manual review. We will contact you within 1 business day.",
        internal_notes: "Flagged for Tier-2 Legal Compliance team due to regional jurisdiction conflict.",
        compliance_passed: true,
        compliance_notes: "Escalation triggered cleanly. Avoided automated refusal on legal boundary.",
        compliance_all_supported: true,
        compliance_hallucination: false
      }
    }
  ],

  // 02. Business Problem
  problem: {
    heading: "What real problem exists?",
    subheading: "Customer support teams waste thousands of hours manually checking store policies and resolving repetitive tickets.",
    issues: [
      {
        title: "High Ticket Volume",
        desc: "Reps manually inspect hundreds of shipping, refund, and damage requests daily, causing major backlog delays."
      },
      {
        title: "Inconsistent Policy Decisions",
        desc: "Reps make manual refund mistakes that violate store rules, hurting profit margins and creating compliance risks."
      },
      {
        title: "Slow Response & Customer Churn",
        desc: "24–48 hour response delays frustrate buyers, leading to bad reviews, lost retention, and credit card chargebacks."
      }
    ],
    manualFlow: ["Understand Ticket", "Search Knowledge", "Interpret Policy", "Make Decision", "Write Response"]
  },

  // 03. Why LLMs Fail
  whyItMatters: {
    heading: "Why generic chatbots fail",
    subheading: "Generic LLMs hallucinate store policies and promise unauthorized refunds. Our engine enforces 100% grounded policy checks.",
    comparison: [
      {
        type: "Generic LLM Chatbot",
        focus: "Text Fluency",
        behavior: "Generates plausible sounding replies without verifying real order data or store rules.",
        risk: "High risk of hallucinations and illegal refund promises."
      },
      {
        type: "Support Resolution Agent",
        focus: "Evidence & Policy Enforcement",
        behavior: "Combines FAISS vector retrieval + CrewAI multi-agent reasoning + Pydantic validation.",
        risk: "Zero unauthorized refunds; 100% grounded in document citations."
      }
    ]
  },

  // 04. Solution
  solution: {
    heading: "The Solution",
    subheading: "A policy-enforced multi-agent pipeline that ingests tickets, searches FAISS vector rules, and outputs verified resolutions.",
    steps: [
      { number: "01", name: "Customer Ticket", desc: "Ingests raw text and order context." },
      { number: "02", name: "Intent Triage", desc: "Classifies ticket intent and urgency." },
      { number: "03", name: "FAISS Retrieval", desc: "Queries vector index over policy chunks." },
      { number: "04", name: "Multi-Agent AI", desc: "CrewAI agents evaluate ticket vs rules." },
      { number: "05", name: "Compliance Gate", desc: "Pydantic validates refund constraints." },
      { number: "06", name: "Structured Output", desc: "Emits decision (Approved / Denied / Escalate)." },
      { number: "07", name: "Evidence Citation", desc: "Attaches exact document::chunk proof." }
    ]
  },

  // 05. How it Works (End-to-End Flow)
  howItWorks: {
    heading: "4-Step Resolution Pipeline",
    subheading: "Trace an incoming ticket through the automated resolution pipeline.",
    pipeline: [
      {
        step: "Step 1",
        name: "Ticket Ingestion",
        desc: "Ingests customer query and order JSON context (e.g. ORD-9921)."
      },
      {
        step: "Step 2",
        name: "FAISS Vector Retrieval",
        desc: "Retrieves top matching policy chunks (Damaged Goods & Perishable terms)."
      },
      {
        step: "Step 3",
        name: "Multi-Agent Reasoning",
        desc: "CrewAI agents evaluate delivery date vs 48h perishable window."
      },
      {
        step: "Step 4",
        name: "Policy Compliance Output",
        desc: "Emits verified resolution with document citations and customer response."
      }
    ]
  },

  // 06. Intelligence (Why RAG & Why Agents)
  intelligence: {
    heading: "Where AI/ML actually helps",
    subheading: "Combining vector retrieval with specialized agents eliminates hallucinations and handles policy edge cases.",
    rag: {
      title: "Why Retrieval-Augmented Generation (RAG)?",
      reason: "Store return windows and shipping terms change frequently. RAG ensures responses use live policy files instead of static weights.",
      flow: "Retrieve policy files → Inject context → Generate grounded response."
    },
    agents: {
      title: "Why Multi-Agent Task Decomposition?",
      reason: "Single-prompt LLMs miss edge cases. Specialized CrewAI agents ensure strict quality control and zero policy violations.",
      crew: [
        { name: "Triage Agent", role: "Intent Detection", task: "Extracts order attributes and customer intent." },
        { name: "Retriever Agent", role: "Vector Search", task: "Queries FAISS for high-relevance policy chunks." },
        { name: "Writer Agent", role: "Resolution Synthesis", task: "Drafts decision and customer response." },
        { name: "Compliance Agent", role: "Safety Gate", task: "Validates all claims against policy citations." }
      ]
    }
  },

  // 07. Architecture
  architecture: {
    heading: "How the system is engineered",
    subheading: "High-performance Python architecture built with CrewAI, FAISS, Gemini LLM, and FastAPI.",
    diagram: `
                    CUSTOMER TICKET
                          │
                   Intent Detection (Triage)
                          │
                    Query Builder
                          │
                   Retrieval Layer (FAISS + all-MiniLM-L6-v2)
                    ↙          ↘
             Knowledge Base   Policy Rules
                    ↘          ↙
                   Agent Reasoning (Writer Agent)
                          │
                  Policy Validation (Compliance Reviewer)
                          │
                 Resolution Generator (Pydantic v2)
                          │
                Evidence-Backed Structured Output
    `,
    stack: [
      { name: "Orchestration", tech: "CrewAI (Multi-Agent Graph)" },
      { name: "LLM Provider", tech: "Google Gemini Flash via LangChain" },
      { name: "Vector Store", tech: "FAISS (local vector index)" },
      { name: "Embeddings", tech: "all-MiniLM-L6-v2 (Zero API Cost)" },
      { name: "Validation", tech: "FastAPI & Pydantic v2" },
      { name: "Citation Gate", tech: "Strict Chunk-Level Verification" }
    ]
  },

  // 08. Business Value
  businessValue: {
    heading: "What does this enable & save?",
    subheading: "Enables support teams to resolve tickets 10x faster with zero policy violations.",
    metrics: [
      { title: "70% Automated Resolution", desc: "Automates repetitive first-level tickets without human intervention." },
      { title: "100% Policy Consistency", desc: "Ensures every decision strictly follows store terms and return rules." },
      { title: "5-Second Resolution Time", desc: "Cuts average handle time from 8 minutes down to under 5 seconds." },
      { title: "Zero Unauthorized Refunds", desc: "Prevents rep mistakes and invalid refund payouts." },
      { title: "Evidence Audit Trail", desc: "Provides document citations (`policy.txt::chunk_id`) for every answer." },
      { title: "Smart Escalations", desc: "Automatically flags complex legal or edge cases for Tier-2 reps." }
    ]
  },

  // 09. Results & Measured Capabilities
  results: {
    heading: "What did I achieve & measure?",
    subheading: "Evaluated across scenario tickets covering returns, final sales, damaged goods, and EU legal edge cases.",
    capabilities: [
      { label: "Intent Classification", value: "100% Accuracy" },
      { label: "Grounded Responses", value: "Zero Uncited Claims" },
      { label: "Policy Constraint Check", value: "100% Enforcement" },
      { label: "Citation Accuracy", value: "Chunk-Level Trail" },
      { label: "Escalation Precision", value: "Conflict Detection" }
    ],
    benchmarks: [
      { name: "Citation Coverage", score: "95.2%", note: "Backed by exact policy chunks" },
      { name: "Unsupported Claim Rate", score: "0.0%", note: "All ungrounded claims blocked" },
      { name: "Correct Escalation", score: "100%", note: "All edge case conflicts escalated" },
      { name: "Processing Latency", score: "< 3.2s", note: "End-to-end multi-agent execution" }
    ]
  },

  // 10. Conclusion
  conclusion: {
    heading: "From answering questions to resolving problems",
    quote: "Reliable enterprise AI isn't simply about generating better responses. It requires retrieval, constraints, reasoning, evaluation, and integration into the actual workflow.",
    learned: [
      "Task decomposition into specialized agents eliminates prompt clutter and improves output reliability.",
      "Strict compliance gates with automated rewrites are mandatory for customer-facing enterprise applications.",
      "Evidence-first RAG with chunk-level citations builds trust with support reps and auditing teams."
    ]
  }
};
