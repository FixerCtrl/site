// ============================================================
// FixerCtrl site configuration
// ============================================================
// Keep site identity, content categories, and shared service settings here.
// The current single-page site still has some of these values inline in
// index.html; this file is the source of truth for features that are moved
// into modules later.
// ============================================================

const SITE_CONFIG = {
  name: "FixerCtrl",
  handle: "@fixerctrl",
  email: "fixerctrl@gmail.com",
  github: "https://github.com/fixerctrl",
  linkedin: "",
  supabaseUrl: "",
  supabaseAnonKey: "",
};

// The site's content is grouped by the subjects the portfolio and study notes
// are actually about, rather than by the old competitive-intelligence model.
const CONTENT_CATEGORIES = [
  {
    id: "cybersecurity",
    label: "Cybersecurity",
    description: "Security principles, attacks, defences, and practical hardening.",
    topics: ["Security fundamentals", "Web security", "Access control", "Incident response"],
  },
  {
    id: "networking",
    label: "Networking",
    description: "Network architecture, protocols, troubleshooting, and Network+ study.",
    topics: ["OSI model", "TCP/IP", "Network defence", "Troubleshooting"],
  },
  {
    id: "linux",
    label: "Linux and systems",
    description: "Linux administration, processes, services, permissions, and tooling.",
    topics: ["Command line", "Processes", "Permissions", "System administration"],
  },
  {
    id: "development",
    label: "Development",
    description: "Web development, software projects, and the decisions behind them.",
    topics: ["JavaScript", "Frontend development", "Supabase", "Secure coding"],
  },
];

// Source types for study notes and project research.
const SOURCE_TYPES = [
  "Official documentation",
  "Technical book",
  "Research paper",
  "Security advisory",
  "Incident report",
  "Standards document",
  "Tutorial or course",
  "Project repository",
  "Other",
];

// Used to build suggested file names and project references.
const PROJECT_TAG = "FIXERCTRL";

// Accounts allowed to use the site's editor features.
const ADMIN_EMAILS = ["fixerctrl@gmail.com", "mlungisimash27@gmail.com"];
