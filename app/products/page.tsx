import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    category: "Our Family of Models",
    items: [
      {
        title: "Breeze",
        description: "Lightweight and fast AI model for everyday tasks",
      },
      {
        title: "Gust",
        description: "Powerful AI model for complex workloads",
      },
    ],
  },
  {
    category: "MCP",
    items: [
      {
        title: "Glide",
        description: "Seamless integration and collaboration",
      },
    ],
  },
  {
    category: "Our biggest project yet",
    items: [
      {
        title: "Kite",
        description: "The first ever autocomplete for your version control",
      },
    ],
  },
];

const ProductsPage = () => {
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

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
            Our Products
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Explore our family of AI-powered solutions and tools
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="space-y-16">
          {products.map((category, categoryIndex) => {
            return (
              <div key={categoryIndex} className="space-y-8">
                {/* Category Header */}
                <div className="flex items-center justify-center gap-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {category.category}
                  </h2>
                </div>

                {/* Product Cards Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                  {category.items.map((item, itemIndex) => (
                    <Card
                      key={itemIndex}
                      className="w-full max-w-sm rounded-none border-border/60 hover:border-foreground/20 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <CardHeader>
                        <CardTitle className="text-2xl font-bold text-foreground">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base text-muted-foreground leading-relaxed">
                          {item.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Enter a new age of knowledge work
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            An AI-first workspace that enables fast, accurate research in
            spreadsheets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="min-w-[140px]">
              Try it now
            </Button>
            <Button size="lg" variant="outline" className="min-w-[140px]">
              Request a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
