import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog-posts";
import { Calendar } from "lucide-react";
import Image from "next/image";

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] relative">
      {/* Top Fade Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: "20px 30px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 35% at 50% 0%, #000 30%, transparent 70%)",
          maskImage:
            "radial-gradient(ellipse 80% 35% at 50% 0%, #000 30%, transparent 70%)",
        }}
      />

      {/* Bottom Fade Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: "20px 30px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 35% at 50% 100%, #000 30%, transparent 70%)",
          maskImage:
            "radial-gradient(ellipse 80% 35% at 50% 100%, #000 30%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground">
            Latest articles and updates from our team
          </p>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <div className="flex items-center gap-6 bg-foreground/90 dark:bg-foreground/80 hover:bg-foreground transition-all duration-300 rounded-none p-4 border border-border/30">
                {/* Image Thumbnail */}
                <div className="relative w-48 h-32 flex-shrink-0 bg-muted rounded-none overflow-hidden">
                  <Image
                    src="/placeholder.jpg"
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl md:text-2xl font-bold text-background dark:text-background mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <div className="flex items-center gap-2 text-sm text-background/70 dark:text-background/80">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
