/**
 * Vault Page
 * A personal knowledge vault for notes, thoughts, and ideas
 * Future: Connect to MCP for dynamic content management
 */

export default function Vault() {
  return (
    <div className="container-brutalist">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-8">Vault</h1>

        <div className="card mb-8">
          <p className="text-xl mb-6">
            Your personal knowledge vault — a place for notes, ideas, and explorations.
          </p>
          <p className="mb-6">
            This space is designed to evolve into a dynamic markdown-based knowledge base,
            powered by MCP (Model Context Protocol) for intelligent content organization
            and retrieval.
          </p>
          <p className="opacity-70">
            To populate this vault, add markdown files to <code>/content/vault</code>.
          </p>
        </div>

        {/* [AI_INTEGRATION_POINT] MCP integration for vault management */}
        {/* Future features:
            - Semantic search across vault content
            - AI-powered tagging and categorization
            - Automatic linking between related notes
            - Content suggestions based on reading history
        */}

        <div className="card bg-white">
          <h2 className="mb-4">Coming Soon</h2>
          <ul className="space-y-3 list-disc list-inside">
            <li>Dynamic markdown rendering from /content/vault</li>
            <li>Search and filter functionality</li>
            <li>Tag-based organization</li>
            <li>MCP integration for intelligent content management</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
