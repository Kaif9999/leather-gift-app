import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "About Us | Artisan Leather",
  description: "Learn about our story, craftsmanship, and commitment to quality leather products",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1531907700752-62799b2a3e84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="Leather workshop"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Our Story
          </h1>
          <p className="max-w-2xl text-lg text-white/90">
            Crafting premium leather goods with passion and precision since 2010
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-center">Our Mission</h2>
          <p className="mb-8 text-lg text-muted-foreground text-center">
            At Artisan Leather, we're dedicated to preserving the timeless craft of leather working while embracing modern design. Our mission is to create exceptional leather products that combine functionality, durability, and aesthetic appeal, all while maintaining sustainable and ethical practices.
          </p>
          <div className="flex justify-center">
            <Button asChild>
              <Link href="/shop">Explore Our Collection</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="flex items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight">The Artisan Leather Story</h2>
                <p className="mb-4 text-muted-foreground">
                  Founded in 2010 by master craftsman James Miller, Artisan Leather began as a small workshop dedicated to creating handcrafted leather goods using traditional techniques.
                </p>
                <p className="mb-4 text-muted-foreground">
                  What started as a passion project quickly gained recognition for exceptional quality and attention to detail. Today, we've grown into a team of skilled artisans who share a commitment to craftsmanship and quality.
                </p>
                <p className="text-muted-foreground">
                  While we've expanded our reach, we remain true to our founding principles: using premium materials, maintaining meticulous attention to detail, and creating products designed to last a lifetime.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1621972660772-6a0427732783?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Leather craftsman at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">Our Crafting Process</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                1
              </div>
              <h3 className="mb-2 text-xl font-semibold">Material Selection</h3>
              <p className="text-muted-foreground">
                We source only the finest full-grain leather from ethical suppliers. Each hide is carefully inspected for quality and character.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                2
              </div>
              <h3 className="mb-2 text-xl font-semibold">Design & Cutting</h3>
              <p className="text-muted-foreground">
                Our designs balance traditional aesthetics with modern functionality. Each piece is precisely cut to ensure perfect assembly.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                3
              </div>
              <h3 className="mb-2 text-xl font-semibold">Crafting & Finishing</h3>
              <p className="text-muted-foreground">
                Using both traditional hand tools and modern techniques, we craft each piece with meticulous attention to detail, followed by careful finishing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">Our Values</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-background p-6">
              <h3 className="mb-4 text-xl font-semibold">Quality</h3>
              <p className="text-muted-foreground">
                We never compromise on materials or craftsmanship. Every product is built to last and improve with age.
              </p>
            </div>
            <div className="rounded-lg bg-background p-6">
              <h3 className="mb-4 text-xl font-semibold">Sustainability</h3>
              <p className="text-muted-foreground">
                We source materials responsibly and minimize waste in our production process to reduce environmental impact.
              </p>
            </div>
            <div className="rounded-lg bg-background p-6">
              <h3 className="mb-4 text-xl font-semibold">Transparency</h3>
              <p className="text-muted-foreground">
                We're open about our materials, processes, and pricing. We believe in building trust through honesty.
              </p>
            </div>
            <div className="rounded-lg bg-background p-6">
              <h3 className="mb-4 text-xl font-semibold">Community</h3>
              <p className="text-muted-foreground">
                We support leather crafting education and partner with local communities to preserve traditional skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">Meet Our Team</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "James Miller",
                role: "Founder & Master Craftsman",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "Sarah Johnson",
                role: "Lead Designer",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "Michael Chen",
                role: "Production Manager",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
              },
            ].map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                <div className="mb-4 h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 text-xl font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">Experience the Artisan Difference</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90">
            Discover our collection of handcrafted leather goods and experience the perfect blend of tradition and innovation.
          </p>
          <Button asChild className="mx-auto">
            <Link href="/shop">Shop Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}