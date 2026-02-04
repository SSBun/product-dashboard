export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  features: string[];
  link: string;
  category: string;
  type?: 'app' | 'framework';
  longDescription?: string;
  systemRequirements?: string[];
  useCases?: string[];
  gallery?: {
    type: 'image' | 'video';
    url: string;
    caption?: string;
  }[];
}

export const products: Product[] = [
  {
    id: "seahorse",
    name: "Seahorse",
    tagline: "Elegant material collection and management tool for macOS.",
    description: "Seahorse is an all-in-one material collection tool that makes saving inspiration simple and natural. Whether it's web links, images, or text snippets, Seahorse helps you easily save and organize them.",
    longDescription: "Seahorse is more than just a bookmark manager; it's a versatile material collection tool designed for the modern creative workflow. It supports multiple content types including web links (with automatic title, icon, and preview fetching), images (both local and web-based), and text snippets like code fragments, notes, and ideas. With its intelligent organization system, you can create custom categories with distinct colors and icons, use a flexible tagging system, and mark important items as favorites for quick access.",
    icon: "🌊",
    features: [
      "Double-click copy to auto-save: quickly copy the same content twice to save automatically",
      "Paste-to-save: directly paste (⌘V) in the app window to save content",
      "Smart recognition of URLs, text, and images with automatic metadata fetching",
      "Categorization with custom colors and icons for visual organization",
      "Powerful real-time search by title, URL, or text content",
      "Grid and list views to suit different browsing preferences",
      "Import browser bookmarks and export data to JSON format"
    ],
    systemRequirements: ["macOS 13.0 or later"],
    useCases: [
      "Designers: collect design inspiration, reference images, and color schemes",
      "Developers: save technical documentation, code snippets, and tool links",
      "Researchers: organize research papers, notes, and data sources",
      "Content Creators: gather references and inspiration for new projects"
    ],
    gallery: [
      {
        type: 'image',
        url: 'https://raw.githubusercontent.com/SSBun/Seahorse/main/snapshot.png',
        caption: 'Seahorse Main Interface'
      }
    ],
    link: "https://github.com/SSBun/Seahorse",
    category: "Productivity",
    type: 'app'
  },
  {
    id: "seacrab",
    name: "SeaCrab",
    tagline: "Headless macOS AI application for text refinement.",
    description: "SeaCrab refines selected text using OpenAI-compatible LLM services via customizable global keyboard shortcuts. It runs silently in the menu bar and provides visual feedback near your cursor.",
    longDescription: "SeaCrab is a headless macOS application designed to integrate AI-powered text refinement directly into your OS-level workflow. By running silently in the menu bar, it stays out of your way until you need it. You can create multiple 'refinement cards', each with its own specific system prompt and global keyboard shortcut. Whether you need to fix grammar, make text more professional, or summarize a paragraph, SeaCrab handles it instantly by capturing your selected text, processing it through your chosen LLM, and replacing it in-place.",
    icon: "🦀",
    features: [
      "Headless operation in menu bar with a custom, unobtrusive icon",
      "Multiple refinement cards: create presets with custom prompts and unique shortcuts",
      "Global keyboard shortcut support for instant access from any application",
      "OpenAI-compatible API integration: works with OpenAI, Anthropic, or local LLMs like Ollama",
      "Cursor-following loading indicator: visual feedback that stays with your focus",
      "Built-in connection testing to verify your API and model configuration"
    ],
    systemRequirements: ["macOS 15.2 or later", "Valid API key for an OpenAI-compatible service"],
    useCases: [
      "Quick Fix: Grammar and spelling correction via Control + R",
      "Professional Tone: Transform informal notes into business-ready text",
      "Concise: Automatically remove fluff and unnecessary words from your writing",
      "Local AI: Use with LM Studio or Ollama for private, offline text refinement"
    ],
    gallery: [
      {
        type: 'image',
        url: 'https://raw.githubusercontent.com/SSBun/SeaCrab/main/SeaCrab/Assets.xcassets/appIcon.png',
        caption: 'SeaCrab Icon'
      }
    ],
    link: "https://github.com/SSBun/SeaCrab",
    category: "AI Tool",
    type: 'app'
  },
  {
    id: "shark",
    name: "Shark",
    tagline: "Manage Cursor IDE workspace files with ease.",
    description: "Shark is a beautiful macOS application for managing Cursor IDE workspace files. Streamline your development workflow by organizing and managing multiple Cursor workspaces with ease.",
    longDescription: "Shark is a dedicated workspace manager for developers using the Cursor IDE. It provides a clean, native macOS interface to create, import, and organize .code-workspace files. Instead of hunting through your file system, Shark gives you a central hub to manage all your projects. You can add folders to workspaces with simple drag-and-drop, rename workspaces for better organization, and open any project in Cursor with a single double-click. All your workspace data is stored locally, ensuring privacy and speed.",
    icon: "🦈",
    features: [
      "Create and import .code-workspace files with a single click",
      "Drag-and-drop folder management for rapid workspace configuration",
      "Double-click to open workspaces directly in Cursor IDE",
      "Native macOS interface built with SwiftUI for a seamless experience",
      "Automatic saving: all changes to your workspaces are saved instantly",
      "Context menu actions: quickly rename, remove, or reveal workspaces in Finder"
    ],
    systemRequirements: ["macOS 14.0 or later", "Cursor IDE installed"],
    useCases: [
      "Multi-project management: switch between different development environments effortlessly",
      "Project organization: group related folders into logical workspaces",
      "Quick access: maintain a list of your most-used workspaces for instant launching"
    ],
    gallery: [
      {
        type: 'image',
        url: 'https://raw.githubusercontent.com/SSBun/Shark/main/resources/screen.png',
        caption: 'Shark Workspace Management'
      }
    ],
    link: "https://github.com/SSBun/Shark",
    category: "Developer Tool",
    type: 'app'
  },
  {
    id: "aicash",
    name: "AiCash",
    tagline: "Track AI service costs and usage on macOS.",
    description: "A beautiful macOS menu bar app to track AI service costs and usage across multiple providers like Cursor, BLT, and ZenMux. Monitor daily usage and spending in real-time.",
    longDescription: "AiCash is a specialized utility for power users of AI services who want to keep a close eye on their spending and usage patterns. It integrates directly into the macOS menu bar, providing a real-time overview of your daily costs. The app supports multiple providers including Cursor, BLT, and ZenMux, fetching data directly from their APIs. Beyond simple tracking, AiCash offers detailed usage charts and a comprehensive history of events, all wrapped in a modern, translucent UI that feels right at home on macOS.",
    icon: "💰",
    features: [
      "Multi-provider support: track costs for Cursor, BLT, and ZenMux in one place",
      "Real-time cost tracking: see your daily spending directly in the menu bar",
      "Detailed usage charts: visualize your AI consumption over time",
      "Modern translucent UI with native macOS blur effects",
      "Configurable auto-refresh intervals and history range (7-90 days)",
      "Privacy-focused: all data is stored locally on your Mac"
    ],
    systemRequirements: ["macOS 15.0 or later", "Active accounts with supported AI providers"],
    useCases: [
      "Cost Monitoring: prevent unexpected bills by tracking AI usage in real-time",
      "Usage Analysis: understand which AI providers you use most frequently",
      "Budgeting: set limits and monitor spending across different AI services"
    ],
    gallery: [
      {
        type: 'image',
        url: 'https://github.com/user-attachments/assets/8d95140b-b559-4f08-aee0-6a8245cf52b5',
        caption: 'AiCash Dashboard'
      }
    ],
    link: "https://github.com/SSBun/AiCash",
    category: "Finance/AI",
    type: 'app'
  },
  {
    id: "flycoding",
    name: "FlyCoding",
    tagline: "Xcode extension like Emmet for Swift/Objective-C.",
    description: "A powerful Xcode extension that allows you to generate Swift and Objective-C code quickly using an Emmet-like syntax. Boost your iOS/macOS development speed significantly.",
    icon: "🚀",
    features: [
      "Emmet-like syntax for Swift/ObjC",
      "Fast UI code generation",
      "Customizable abbreviations",
      "Native Xcode integration"
    ],
    link: "https://github.com/SSBun/FlyCoding",
    category: "Developer Tool",
    type: 'app'
  },
  {
    id: "snaptimer",
    name: "SnapTimer",
    tagline: "Picture-in-Picture timer for iOS.",
    description: "An iOS application providing a convenient Picture-in-Picture timer, perfect for tracking time while using other apps or snapping up limited-time offers.",
    icon: "⏱️",
    features: [
      "Picture-in-Picture support",
      "High precision timing",
      "Clean iOS interface",
      "Lightweight and fast"
    ],
    link: "https://github.com/SSBun/SnapTimer",
    category: "Utility",
    type: 'app'
  },
  {
    id: "dynamiclistkit",
    name: "DynamicListKit",
    tagline: "Dynamic list management for Swift.",
    description: "A powerful Swift framework for managing dynamic lists with ease. It provides a clean API for handling complex list structures and updates.",
    icon: "📦",
    features: [
      "Type-safe list management",
      "Declarative API",
      "High performance updates",
      "Swift-native implementation"
    ],
    link: "https://github.com/SSBun/DynamicListKit",
    category: "iOS/macOS Framework",
    type: 'framework'
  },
  {
    id: "octopustool",
    name: "OctopusTool",
    tagline: "TypeScript utility for multi-tasking.",
    description: "A versatile TypeScript utility designed to handle multiple tasks efficiently. Perfect for complex workflows and automation.",
    icon: "🐙",
    features: [
      "Concurrent task execution",
      "Type-safe configuration",
      "Extensible architecture",
      "Lightweight footprint"
    ],
    link: "https://ssbun.github.io/OctopusTool/",
    category: "TS Utility",
    type: 'framework'
  }
];
