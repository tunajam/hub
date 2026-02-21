import {
  Golf,
  ChartLineUp,
  Certificate,
  Basketball,
  TrendUp,
  Package,
  CookingPot,
  CodeBlock,
  Recycle,
  HouseLine,
  Truck,
  TrashSimple,
  Airplane,
  Bird,
  ArrowSquareOut,
  FishSimple,
} from "@phosphor-icons/react/dist/ssr";
import type { ReactNode } from "react";

type Category = "Apps" | "Tools" | "Directories" | "Infrastructure";

interface Product {
  name: string;
  slug: string;
  description: string;
  category: Category;
  icon: ReactNode;
}

const categoryColors: Record<Category, string> = {
  Apps: "bg-amber-500/15 text-amber-400 border-amber-500/20",
  Tools: "bg-sky-500/15 text-sky-400 border-sky-500/20",
  Directories: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  Infrastructure: "bg-purple-500/15 text-purple-400 border-purple-500/20",
};

const products: Product[] = [
  { name: "GainGolf", slug: "gaingolf", description: "Post-round strokes gained for amateur golfers", category: "Apps", icon: <Golf size={24} weight="duotone" /> },
  { name: "SentimentBot", slug: "sentimentbot", description: "AI paper trading with sentiment analysis", category: "Apps", icon: <ChartLineUp size={24} weight="duotone" /> },
  { name: "Part 107 Study", slug: "part107", description: "FAA drone pilot exam prep", category: "Apps", icon: <Certificate size={24} weight="duotone" /> },
  { name: "Go Blue", slug: "go-blue", description: "Michigan Wolverines basketball dashboard", category: "Apps", icon: <Basketball size={24} weight="duotone" /> },
  { name: "Founder Index", slug: "founder-index", description: "Founder-specific stock index tracker", category: "Apps", icon: <TrendUp size={24} weight="duotone" /> },
  { name: "JTR", slug: "jtr", description: "Recipe extraction app", category: "Apps", icon: <CookingPot size={24} weight="duotone" /> },
  { name: "gh-packs", slug: "gh-packs", description: "Package manager for AI agent configs", category: "Tools", icon: <Package size={24} weight="duotone" /> },
  { name: "Fast Review", slug: "fast-review", description: "AI code review for GitHub PRs", category: "Tools", icon: <CodeBlock size={24} weight="duotone" /> },
  { name: "Dumpster Directory", slug: "dumpster-directory", description: "Local dumpster rental finder", category: "Directories", icon: <Recycle size={24} weight="duotone" /> },
  { name: "Roofing Directory", slug: "roofing-directory", description: "Local roofing company finder", category: "Directories", icon: <HouseLine size={24} weight="duotone" /> },
  { name: "Moving Directory", slug: "moving-directory", description: "Local moving company finder", category: "Directories", icon: <Truck size={24} weight="duotone" /> },
  { name: "Junk Removal Directory", slug: "junk-removal-directory", description: "Local junk removal finder", category: "Directories", icon: <TrashSimple size={24} weight="duotone" /> },
  { name: "Hangar", slug: "hangar", description: "Git-backed project management", category: "Infrastructure", icon: <Airplane size={24} weight="duotone" /> },
  { name: "Roost", slug: "roost", description: "Agent workspace dashboard", category: "Infrastructure", icon: <Bird size={24} weight="duotone" /> },
];

const categories: Category[] = ["Apps", "Tools", "Directories", "Infrastructure"];

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-12 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <header className="mb-16 text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <FishSimple size={32} weight="fill" className="text-amber-400" />
          <span className="text-sm font-medium tracking-widest uppercase text-stone-500">
            Tunajam
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
          Product Hub
        </h1>
        <p className="text-stone-400 text-lg">
          {products.length} projects built &amp; shipping
        </p>
      </header>

      {/* Category sections */}
      {categories.map((category) => {
        const items = products.filter((p) => p.category === category);
        if (items.length === 0) return null;
        return (
          <section key={category} className="mb-12">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-stone-500 mb-4 pl-1">
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((product) => (
                <a
                  key={product.slug}
                  href={`https://github.com/tunajam/${product.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col gap-3 rounded-2xl border border-stone-800 bg-stone-900/50 p-5 transition-all hover:border-stone-700 hover:bg-stone-900"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-stone-400 group-hover:text-amber-400 transition-colors">
                        {product.icon}
                      </div>
                      <h3 className="font-semibold text-stone-100">
                        {product.name}
                      </h3>
                    </div>
                    <ArrowSquareOut
                      size={16}
                      weight="bold"
                      className="text-stone-600 group-hover:text-stone-400 transition-colors shrink-0 mt-1"
                    />
                  </div>
                  <p className="text-sm text-stone-400 leading-relaxed">
                    {product.description}
                  </p>
                  <span
                    className={`self-start text-xs font-medium px-2.5 py-1 rounded-full border ${categoryColors[product.category]}`}
                  >
                    {product.category}
                  </span>
                </a>
              ))}
            </div>
          </section>
        );
      })}

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-stone-800 text-center">
        <p className="text-sm text-stone-500">
          Built by Tunajam · {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  );
}
