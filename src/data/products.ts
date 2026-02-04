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
}

export const products: Product[] = [
  {
    id: "seahorse",
    name: "Seahorse",
    tagline: "Elegant material collection and management tool for macOS.",
    description: "Seahorse is an all-in-one material collection tool that makes saving inspiration simple and natural. Whether it's web links, images, or text snippets, Seahorse helps you easily save and organize them.",
    icon: "🌊",
    features: [
      "Double-click copy to auto-save",
      "Smart recognition of URLs, text, and images",
      "Categorization with colors and icons",
      "Powerful real-time search",
      "Grid and list views"
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
    icon: "🦀",
    features: [
      "Headless operation in menu bar",
      "Multiple refinement cards with custom prompts",
      "Global keyboard shortcut support",
      "OpenAI-compatible API integration",
      "Cursor-following loading indicator"
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
    icon: "🦈",
    features: [
      "Create and import .code-workspace files",
      "Drag-and-drop folder management",
      "Double-click to open in Cursor",
      "Native macOS interface",
      "Automatic saving of workspace changes"
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
    icon: "💰",
    features: [
      "Multi-provider support (Cursor, BLT, ZenMux)",
      "Real-time cost tracking in menu bar",
      "Detailed usage charts and history",
      "Modern translucent UI",
      "Configurable auto-refresh intervals"
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
