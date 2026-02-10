import Link from "next/link";
import Image from "next/image";

const categories = [
  { title: "Self-Help Novels", slug: "self-help", image: "/book1.png" },
  { title: "Fiction Novels", slug: "fiction", image: "/book2.png" },
  { title: "Bestsellers Novels", slug: "bestsellers", image: "/book3.png" },
  { title: "Under 149 Novels", slug: "under-149", image: "/book4.png" },
  { title: "Hindi Novels", slug: "hindi", image: "/book5.png" },
  { title: "Combo Sets", slug: "combo", image: "/book1.png" },
];

export default function CategorySection() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-10">SHOP BOOKS BY CATEGORIES</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-6">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href="/books"
            className="relative h-[200px] flex items-center justify-center overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            <Image
              src={cat.image}
              alt={cat.title}
              fill
              className="object-cover z-0"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
