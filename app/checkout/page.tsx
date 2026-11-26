"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useStore } from "@/lib/store";
import { CheckCircle2 } from "lucide-react";

export default function CheckoutPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const { cartItems, getCartTotal, clearCart } = useStore();
  
  const subtotal = getCartTotal();
  const shipping = 100;
  const total = subtotal + shipping;
  const [confirmedTotal, setConfirmedTotal] = useState(0);
  const [orderNumber] = useState(() => 
    `#ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setConfirmedTotal(total); // Store the total before clearing cart
    
    // Simulate order processing
    setTimeout(() => {
      setLoading(false);
      setIsConfirmed(true);
      clearCart();
    }, 2000);
  };

  if (isConfirmed) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <CheckCircle2 className="h-16 w-16 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
          <p className="text-muted-foreground mb-8">
            Thank you for your order. We'll send you a confirmation email shortly.
          </p>
          <div className="bg-muted/30 rounded-lg p-6 mb-8">
            <h2 className="font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Order Number</span>
                <span className="font-medium">{orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium">৳{confirmedTotal - shipping}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-medium">৳{shipping}</span>
              </div>
              <div className="flex justify-between pt-2 border-t font-medium">
                <span>Total Amount</span>
                <span className="text-green-600">৳{confirmedTotal}</span>
              </div>
              <div className="flex justify-between mt-4">
                <span>Estimated Delivery</span>
                <span className="font-medium">2-3 Business Days</span>
              </div>
            </div>
          </div>
          <div className="space-x-4">
            <Button onClick={() => router.push("/")}>
              Continue Shopping
            </Button>
            <Button variant="outline" onClick={() => window.print()}>
              Print Receipt
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Street Address</Label>
                  <Input id="address" required />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input id="postalCode" required />
                  </div>
                </div>
              </form>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 p-4 border rounded-lg bg-muted/30">
                  <Input type="radio" id="cod" name="payment" value="cod" defaultChecked />
                  <Label htmlFor="cod">Cash on Delivery</Label>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <Card className="p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <div className="relative w-16 h-16">
                      <img src={item.image} alt={item.title} className="rounded object-cover w-full h-full" />
                      <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground w-5 h-5 rounded-full flex items-center justify-center text-xs">
                        {item.quantity}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">৳{item.price} × {item.quantity}</p>
                    </div>
                    <p className="font-medium">৳{item.price * item.quantity}</p>
                  </div>
                ))}
              </div>
              
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>৳{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>৳{shipping}</span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-4">
                  <span>Total</span>
                  <span>৳{total}</span>
                </div>
              </div>
              
              <Button 
                className="w-full" 
                size="lg" 
                onClick={handleSubmit}
                disabled={loading || cartItems.length === 0}
              >
                {loading ? "Processing..." : "Place Order"}
              </Button>
              
              <p className="text-sm text-muted-foreground text-center mt-4">
                By placing this order, you agree to our Terms of Service and Privacy Policy
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}