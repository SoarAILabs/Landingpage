"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "@/components/footer";
import {
  ArrowRight,
  Code,
  Zap,
  Shield,
  Globe,
  Users,
  Sparkles,
  Play,
  Database,
  MessageSquare,
  BarChart3,
  FileSpreadsheet,
  Brain,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen gradient-bg relative -mt-20 md:-mt-24 pt-20 md:pt-24">
      {/* Checkered Pattern Background */}
      <div className="fixed inset-0 checkered-pattern opacity-30" />
      {/* Hero Section */}
      <section className="relative z-10 px-6 pt-32 md:pt-40 lg:pt-48 pb-12 text-center min-h-[85vh] md:min-h-[95vh] lg:min-h-[100vh] flex items-start">
        {/* Background Image - extends to top of viewport, shows behind navbar */}
        <div className="absolute -top-20 md:-top-24 left-0 right-0 h-[calc(85vh+5rem)] md:h-[calc(95vh+6rem)] lg:h-[calc(100vh+6rem)] z-0">
          <Image
            src="/generated_upscaled.png"
            alt="Hero background"
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Badge
            variant="secondary"
            className="mb-6 shadow-md clean-border rounded-md"
          >
            Not Backed by
            <img
              src="https://www.vectorlogo.zone/logos/ycombinator/ycombinator-icon.svg"
              alt="YC"
              className="w-4 h-4 ml-1 mr-1"
            />{" "}
            (yet)
          </Badge>

          <p className="text-6xl md:text-7xl font-bold mb-6 text-balance text-foreground whitespace-nowrap">
            Beyond the Conflicts
          </p>
          <h2 className="text-xl md:text-2xl text-black mb-8 max-w-2xl mx-auto text-pretty">
            The first step towards an invisible version control.
          </h2>
          <div className="flex flex-col gap-4 justify-center items-center">
            <Button
              size="lg"
              className="rounded-md px-12 py-6 text-lg hover:cursor-pointer hard-shadow hard-shadow-hover"
            >
              <Link
                href="/docs/getting-started"
                className="hover:cursor-pointer text-white"
              >
                Start Now!
              </Link>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <div className="flex flex-row justify-center items-center gap-2">
              <Badge
                variant="outline"
                className="rounded-md px-4 py-1 hard-shadow"
              >
                Alpha
              </Badge>
              <span className="text-sm">
                merge conflict resolution now available!
              </span>
            </div>
          </div>
        </div>
      </section>{" "}
      {/*Big screen section*/}
      <section className="relative z-10 px-6 -mt-32 md:-mt-64 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <Card className="p-10 md:p-12 bg-card rounded-md clean-border hard-shadow hard-shadow-hover transition-all duration-300 group w-full max-w-7xl">
              <div className="aspect-video rounded-none mb-8 flex items-center justify-center transition-colors">
                <video
                  src="/merge-conflict-demo.mp4"
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>
      {/* Video Demo Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Best privacy by default, not as a hidden option
              </h2>
              <p className="text-lg text-muted-foreground">
                Helium blocks ads, trackers, phishing websites, and other
                nonsense by default, thanks to community filters and uBlock
                Origin. Helium blocks all third-party requests that aren't
                essential for the page to function.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="rounded-md hard-shadow hard-shadow-hover"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-md clean-border bg-transparent"
                >
                  View Features
                </Button>
              </div>
            </div>
            {/* Right Column - Visual Content */}
            <div className="relative">
              <Card className="p-6 bg-card rounded-md clean-border hard-shadow hard-shadow-hover transition-all duration-300">
                <div className="aspect-video rounded-none flex items-center justify-center">
                  <Image
                    src="/merge-conflict-demo.png"
                    alt="Merge conflict"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="relative">
              <Card className="p-6 bg-card rounded-md clean-border hard-shadow hard-shadow-hover transition-all duration-300">
                <div className="aspect-video rounded-none flex items-center justify-center">
                  <Image
                    src="/merge-conflict-demo.png"
                    alt="Merge conflict"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </Card>
            </div>
            {/* Right Column - Visual Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Fast, lightweight, and incredibly easy to use
              </h2>
              <p className="text-lg text-muted-foreground">
                Glide MCP is lightning-fast, lightweight, and designed for
                effortless use. Get started in seconds with zero configuration
                required—it's truly plug-and-play. Just install and you're ready
                to go.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="rounded-md hard-shadow hard-shadow-hover"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-md clean-border bg-transparent"
                >
                  View Features
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Simple Branching, Seamless Collaboration
              </h2>
              <p className="text-lg text-muted-foreground">
                Never worry about losing your place. Effortlessly branch, merge,
                and review code together &mdash; right in your workflow.
              </p>
            </div>
            {/* Right Column */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Conflict-Free by Design
              </h2>
              <p className="text-lg text-muted-foreground">
                Our tech ensures invisible version control with automated
                conflict resolution, so you spend less time fighting with git
                and more time shipping.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative z-10 px-6 py-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Ready to build the future?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of developers who trust our platform to deliver
            exceptional web experiences at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-md hard-shadow hard-shadow-hover"
            >
              Start Building Today
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}
