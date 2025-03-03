import prisma from "@/lib/prisma";
import { Product } from "@/lib/types";

export async function getProducts(): Promise<Product[]> {
  try {
    const products = await prisma.product.findMany({
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function getFeaturedProducts(): Promise<Product[]> {
  try {
    const products = await prisma.product.findMany({
      where: {
        featured: true,
        inStock: true,
      },
      include: {
        category: true,
      },
      take: 4,
    });
    
    return products;
  } catch (error) {
    console.error("Error fetching featured products:", error);
    return [];
  }
}

export async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  try {
    const products = await prisma.product.findMany({
      where: {
        category: {
          slug: categorySlug,
        },
      },
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    
    return products;
  } catch (error) {
    console.error(`Error fetching products for category ${categorySlug}:`, error);
    return [];
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const product = await prisma.product.findUnique({
      where: {
        slug,
      },
      include: {
        category: true,
      },
    });
    
    return product;
  } catch (error) {
    console.error(`Error fetching product with slug ${slug}:`, error);
    return null;
  }
}

export async function getRelatedProducts(productId: string, categoryId: string): Promise<Product[]> {
  try {
    const products = await prisma.product.findMany({
      where: {
        categoryId,
        id: {
          not: productId,
        },
        inStock: true,
      },
      include: {
        category: true,
      },
      take: 4,
    });
    
    return products;
  } catch (error) {
    console.error(`Error fetching related products for product ${productId}:`, error);
    return [];
  }
}