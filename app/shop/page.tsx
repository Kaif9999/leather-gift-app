import { Suspense } from "react";
import { getProducts } from "@/lib/products";
import ProductGrid from "@/components/product-grid";
import ProductsFilter from "@/components/products-filter";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata = {
  title: "Shop | Artisan Leather",
  description: "Browse our collection of premium leather products",
};

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <div className="container py-10">
      <h1 className="mb-8 text-3xl font-bold tracking-tight">Shop All Products</h1>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="md:col-span-1">
          <ProductsFilter />
        </div>
        
        <div className="md:col-span-3">
          <Suspense fallback={<ProductGridSkeleton />}>
            <ProductGrid products={products} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="rounded-lg border bg-background p-4">
          <Skeleton className="aspect-square w-full rounded-md" />
          <Skeleton className="mt-4 h-6 w-2/3" />
          <Skeleton className="mt-2 h-4 w-1/3" />
          <div className="mt-4 flex items-center justify-between">
            <Skeleton className="h-5 w-1/4" />
            <Skeleton className="h-9 w-1/4" />
          </div>
        </div>
      ))}
    </div>
  );
}