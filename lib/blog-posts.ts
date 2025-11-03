export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  author?: string;
}

// Helper function to create slug from title
function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Sample blog posts - replace with your actual blog content
export const blogPosts: BlogPost[] = [
  {
    title: `"MCPs are packages?"`,
    slug: createSlug("mcps-can-be-packages?"),
    excerpt: "Learn how amaan learnt how to make it easier for users to use our Glide MCP.",
    content: `
## Serendipitous Discovery
This was an interesting find because I discovered it while working on this website! I was trying to add a navbar and buttons from shadcn (like we all do), and I didn't want to go to their website and manually install them. So I did what any Gen-Z engineer would do: I started looking to see if they had an MCP.
Living in the age we're living in, of course they had an MCP. So I installed it, added it to my project, and I relaized right before i was about to close the page. that this uses npx. 
## Discovering the Tools
then i went to Cursor — the code editor i use daily and opened the Output pane. I saw that there were 7 tools that were found. I opened the MCP settings page and saw that shadcn MCP had 7 tools. A little backstory before we move forward. 
## Our Previous Approach
because im new to knowing the ways of the MCP, the way our Glide MCP worked was the user has to clone the source, and when installing the MCP, they would have to add the source path in the mcp.json config file. that's two extra steps the user had to take. i dont like that in terms of design and developer experience. or in general. (yes im very picky about things like this)
## The Realization
And when i realized that for the shadcn MCP, i never had to clone the source code, it hit me. their using stdio transport protocol without having to clone the source code. how? i see that my mcp.json config file has npx as the command to run the script. so its a package? 
# filler text
now my next question was "how do i make my MCP a package?" and because we're using python and specifically uv as our package mananger (all hail rust), i knew there was "uvx" thats basically the same as "npx". 

    

    `.trim(),
    publishedAt: "11/3/2025",
    author: "Amaan",
  }
];

// Function to get all blog posts
export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

// Function to get a blog post by slug
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

