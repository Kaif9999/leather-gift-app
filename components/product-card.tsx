"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/store";
import { useToast } from "@/hooks/use-toast";
import { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCartStore();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Link href={`/products/${product.slug}`}>
      <motion.div
        className="group relative overflow-hidden rounded-lg border bg-background"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <div className="aspect-square overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={500}
            height={500}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium">{product.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {product.category.name}
          </p>
          <div className="mt-2 flex items-center justify-between">
            <p className="font-semibold">${product.price.toFixed(2)}</p>
            <Button
              
              className="opacity-0 transition-opacity group-hover:opacity-100"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add
            </Button>
          </div>
        </div>
        {!product.inStock && (
          <div className="absolute left-0 top-2 bg-destructive px-2 py-1 text-xs font-medium text-destructive-foreground">
            Out of Stock
          </div>
        )}
        {product.featured && (
          <div className="absolute right-0 top-2 bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
            Featured
          </div>
        )}
      </motion.div>
    </Link>
  );
}