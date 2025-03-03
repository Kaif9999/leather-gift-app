import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Create categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'wallets' },
      update: {},
      create: {
        name: 'Wallets',
        slug: 'wallets',
        description: 'Premium leather wallets for everyday use',
        image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'belts' },
      update: {},
      create: {
        name: 'Belts',
        slug: 'belts',
        description: 'Stylish leather belts for any occasion',
        image: 'https://images.unsplash.com/photo-1624222247344-550fb60fe8ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'bags' },
      update: {},
      create: {
        name: 'Bags',
        slug: 'bags',
        description: 'Durable and elegant leather bags',
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'accessories' },
      update: {},
      create: {
        name: 'Accessories',
        slug: 'accessories',
        description: 'Leather accessories to complement your style',
        image: 'https://images.unsplash.com/photo-1601924921557-45e6dea0a157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      },
    }),
  ]);

  // Create products
  const products = [
    // Wallets
    {
      name: 'Classic Bifold Wallet',
      slug: 'classic-bifold-wallet',
      description: 'A timeless bifold wallet crafted from full-grain leather. Features multiple card slots, a bill compartment, and RFID protection.',
      price: 49.99,
      images: [
        'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1606503825008-909a67e63c3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      ],
      categoryId: categories[0].id,
      featured: true,
      inStock: true,
    },
    {
      name: 'Slim Card Holder',
      slug: 'slim-card-holder',
      description: 'A minimalist card holder designed for those who prefer to travel light. Holds up to 6 cards and features a small pocket for folded bills.',
      price: 29.99,
      images: [
        'https://images.unsplash.com/photo-1606503825008-909a67e63c3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      ],
      categoryId: categories[0].id,
      featured: false,
      inStock: true,
    },
    {
      name: 'Vintage Trifold Wallet',
      slug: 'vintage-trifold-wallet',
      description: 'A spacious trifold wallet with a vintage aesthetic. Features 9 card slots, 3 bill compartments, and a coin pocket.',
      price: 59.99,
      images: [
        'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      ],
      categoryId: categories[0].id,
      featured: false,
      inStock: true,
    },
    
    // Belts
    {
      name: 'Classic Leather Belt',
      slug: 'classic-leather-belt',
      description: 'A timeless leather belt with a simple buckle design. Perfect for both casual and formal occasions.',
      price: 39.99,
      images: [
        'https://images.unsplash.com/photo-1624222247344-550fb60fe8ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      ],
      categoryId: categories[1].id,
      featured: true,
      inStock: true,
    },
    {
      name: 'Braided Leather Belt',
      slug: 'braided-leather-belt',
      description: 'A stylish braided leather belt that adds texture to any outfit. Features a solid brass buckle.',
      price: 49.99,
      images: [
        'https://images.unsplash.com/photo-1624222247344-550fb60fe8ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      ],
      categoryId: categories[1].id,
      featured: false,
      inStock: true,
    },
    {
      name: 'Reversible Leather Belt',
      slug: 'reversible-leather-belt',
      description: 'A versatile reversible belt with black and brown sides. Two belts in one for maximum flexibility.',
      price: 59.99,
      images: [
        'https://images.unsplash.com/photo-1624222247344-550fb60fe8ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      ],
      categoryId: categories[1].id,
      featured: false,
      inStock: false,
    },
    
    // Bags
    {
      name: 'Leather Messenger Bag',
      slug: 'leather-messenger-bag',
      description: 'A practical and stylish messenger bag for daily use. Features multiple compartments and an adjustable shoulder strap.',
      price: 149.99,
      images: [
        'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      ],
      categoryId: categories[2].id,
      featured: true,
      inStock: true,
    },
    {
      name: 'Leather Backpack',
      slug: 'leather-backpack',
      description: 'A sophisticated leather backpack perfect for work or travel. Features laptop compartment and multiple pockets.',
      price: 199.99,
      images: [
        'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      ],
      categoryId: categories[2].id,
      featured: false,
      inStock: true,
    },
    {
      name: 'Leather Duffle Bag',
      slug: 'leather-duffle-bag',
      description: 'A spacious duffle bag for weekend getaways. Features sturdy handles and a detachable shoulder strap.',
      price: 249.99,
      images: [
        'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      ],
      categoryId: categories[2].id,
      featured: true,
      inStock: true,
    },
    
    // Accessories
    {
      name: 'Leather Keychain',
      slug: 'leather-keychain',
      description: 'A stylish and durable leather keychain with solid brass hardware.',
      price: 19.99,
      images: [
        'https://images.unsplash.com/photo-1601924921557-45e6dea0a157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      ],
      categoryId: categories[3].id,
      featured: false,
      inStock: true,
    },
    {
      name: 'Leather Watch Strap',
      slug: 'leather-watch-strap',
      description: 'A premium leather watch strap that fits most standard watches. Available in multiple sizes.',
      price: 29.99,
      images: [
        'https://images.unsplash.com/photo-1601924921557-45e6dea0a157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      ],
      categoryId: categories[3].id,
      featured: false,
      inStock: true,
    },
    {
      name: 'Leather Passport Holder',
      slug: 'leather-passport-holder',
      description: 'A sleek passport holder with card slots and a pen holder. Perfect for frequent travelers.',
      price: 39.99,
      images: [
        'https://images.unsplash.com/photo-1601924921557-45e6dea0a157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      ],
      categoryId: categories[3].id,
      featured: true,
      inStock: true,
    },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: product,
      create: product,
    });
  }

  // Create admin user
  const adminPassword = await hash('admin123', 10);
  await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      name: 'Admin User',
      email: 'admin@example.com',
      password: adminPassword,
      role: 'ADMIN',
      cart: {
        create: {},
      },
    },
  });

  // Create regular user
  const userPassword = await hash('user123', 10);
  await prisma.user.upsert({
    where: { email: 'user@example.com' },
    update: {},
    create: {
      name: 'Regular User',
      email: 'user@example.com',
      password: userPassword,
      role: 'USER',
      cart: {
        create: {},
      },
    },
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });