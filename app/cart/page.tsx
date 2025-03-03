"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/lib/store";
import { useToast } from "@/hooks/use-toast";

export default function CartPage() {
  const router = useRouter();
  const { items, removeItem, updateQuantity, clearCart } = useCartStore();
  const { toast } = useToast();
  const [promoCode, setPromoCode] = useState("");
  
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  
  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal + shipping;
  
  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(productId, newQuantity);
  };
  
  const handleRemoveItem = (productId: string) => {
    removeItem(productId);
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    });
  };
  
  const handleApplyPromoCode = () => {
    toast({
      title: "Promo code applied",
      description: "Your promo code has been applied to your order.",
    });
    setPromoCode("");
  };
  
  const handleCheckout = () => {
    if (items.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Add some items to your cart before checking out.",
        variant: "destructive",
      });
      return;
    }
    
    router.push("/checkout");
  };

  return (
    <div className="container py-10">
      <h1 className="mb-8 text-3xl font-bold tracking-tight">Your Cart</h1>
      
      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border bg-muted/40 py-12">
          <ShoppingBag className="h-12 w-12 text-muted-foreground" />
          <h2 className="text-xl font-semibold">Your cart is empty</h2>
          <p className="text-muted-foreground">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Button asChild className="mt-4">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-lg border bg-card">
              <div className="p-6">
                <div className="hidden border-b pb-4 md:grid md:grid-cols-6">
                  <div className="col-span-3 font-medium">Product</div>
                  <div className="col-span-1 text-center font-medium">Price</div>
                  <div className="col-span-1 text-center font-medium">Quantity</div>
                  <div className="col-span-1 text-right font-medium">Total</div>
                </div>
                
                <div className="divide-y">
                  {items.map((item) => (
                    <div key={item.id} className="py-6">
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-6">
                        <div className="col-span-3 flex items-center space-x-4">
                          <div className="h-20 w-20 overflow-hidden rounded-md border">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={80}
                              height={80}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium">{item.name}</h3>
                            <Button
                             
                              className="mt-1 h-auto p-0 text-sm text-muted-foreground hover:text-destructive"
                              onClick={() => handleRemoveItem(item.productId)}
                            >
                              <Trash2 className="mr-1 h-3 w-3" />
                              Remove
                            </Button>
                          </div>
                        </div>
                        
                        <div className="col-span-1 flex items-center justify-center md:block">
                          <div className="text-center md:mt-4">
                            <span className="md:hidden">Price: </span>
                            <span>${item.price.toFixed(2)}</span>
                          </div>
                        </div>
                        
                        <div className="col-span-1 flex items-center justify-center">
                          <div className="flex items-center">
                            <Button
                              
                              className="h-8 w-8 rounded-r-none"
                              onClick={() =>
                                handleQuantityChange(item.productId, item.quantity - 1)
                              }
                              disabled={item.quantity <= 1}
                            >
                              -
                            </Button>
                            <Input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) =>
                                handleQuantityChange(
                                  item.productId,
                                  parseInt(e.target.value) || 1
                                )
                              }
                              className="h-8 w-12 rounded-none border-x-0 text-center"
                            />
                            <Button
                              
                              className="h-8 w-8 rounded-l-none"
                              onClick={() =>
                                handleQuantityChange(item.productId, item.quantity + 1)
                              }
                            >
                              +
                            </Button>
                          </div>
                        </div>
                        
                        <div className="col-span-1 flex items-center justify-end md:block">
                          <div className="text-right md:mt-4">
                            <span className="md:hidden">Total: </span>
                            <span className="font-medium">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between border-t pt-6">
                  <Button
                    
                    onClick={() => clearCart()}
                  >
                    Clear Cart
                  </Button>
                  <Button asChild>
                    <Link href="/shop">Continue Shopping</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="rounded-lg border bg-card">
              <div className="p-6">
                <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>
                      {shipping === 0 ? (
                        "Free"
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  
                  <div className="pt-4">
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                      />
                      <Button
                        
                        onClick={handleApplyPromoCode}
                        disabled={!promoCode}
                      >
                        Apply
                      </Button>
                    </div>
                  </div>
                  
                  <Button
                    className="w-full"
                    
                    onClick={handleCheckout}
                    disabled={items.length === 0}
                  >
                    Checkout
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}