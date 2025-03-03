"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { User, Package, CreditCard, LogOut } from "lucide-react";

export default function AccountPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
  });
  
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
    
    if (session?.user) {
      setProfile({
        name: session.user.name || "",
        email: session.user.email || "",
      });
    }
  }, [session, status, router]);
  
  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Profile updated",
      description: "Your profile information has been updated successfully.",
    });
    
    setIsLoading(false);
  };
  
  if (status === "loading") {
    return (
      <div className="container flex h-[400px] items-center justify-center py-10">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container py-10">
      <h1 className="mb-8 text-3xl font-bold tracking-tight">My Account</h1>
      
      <Tabs defaultValue="profile" className="space-y-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Profile</span>
          </TabsTrigger>
          <TabsTrigger value="orders" className="flex items-center gap-2">
            <Package className="h-4 w-4" />
            <span className="hidden sm:inline">Orders</span>
          </TabsTrigger>
          <TabsTrigger value="payment" className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" />
            <span className="hidden sm:inline">Payment</span>
          </TabsTrigger>
          <TabsTrigger value="logout" className="flex items-center gap-2">
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Logout</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Profile Information</h2>
            <p className="text-sm text-muted-foreground">
              Update your account information and manage your profile.
            </p>
          </div>
          
          <Separator />
          
          <form onSubmit={handleProfileUpdate} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={profile.name}
                  onChange={(e) =>
                    setProfile({ ...profile, name: e.target.value })
                  }
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                  disabled
                />
                <p className="text-xs text-muted-foreground">
                  Email cannot be changed.
                </p>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" />
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </div>
            
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : "Save Changes"}
            </Button>
          </form>
        </TabsContent>
        
        <TabsContent value="orders" className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Order History</h2>
            <p className="text-sm text-muted-foreground">
              View and track your recent orders.
            </p>
          </div>
          
          <Separator />
          
          <div className="rounded-lg border">
            <div className="p-6 text-center">
              <Package className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-medium">No orders yet</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                When you place an order, it will appear here.
              </p>
              <Button asChild className="mt-4">
                <a href="/shop">Start Shopping</a>
              </Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="payment" className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Payment Methods</h2>
            <p className="text-sm text-muted-foreground">
              Manage your payment methods and billing information.
            </p>
          </div>
          
          <Separator />
          
          <div className="rounded-lg border">
            <div className="p-6 text-center">
              <CreditCard className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-medium">No payment methods</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                You haven't added any payment methods yet.
              </p>
              <Button className="mt-4">Add Payment Method</Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="logout" className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Logout</h2>
            <p className="text-sm text-muted-foreground">
              Sign out of your account.
            </p>
          </div>
          
          <Separator />
          
          <div className="rounded-lg border p-6">
            <h3 className="text-lg font-medium">Are you sure you want to logout?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              You will be signed out of your account on this device.
            </p>
            <div className="mt-6 flex space-x-4">
              <Button
                onClick={() => {
                  router.push("/api/auth/signout");
                }}
              >
                Logout
              </Button>
              <Button  onClick={() => router.push("/")}>
                Cancel
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}