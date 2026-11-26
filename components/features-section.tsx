"use client";

import { Truck, Shield, Clock, CreditCard } from "lucide-react";

const features = [
  {
    icon: <Truck className="h-6 w-6" />,
    title: "Fast Delivery",
    description: "Swift from Source"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Product Guarantee",
    description: "Quality Assured"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "365 Days",
    description: "Customer Support"
  },
  {
    icon: <CreditCard className="h-6 w-6" />,
    title: "Payment",
    description: "Cash on Delivery"
  }
];

export function FeaturesSection() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-8">
          Connecting Farmers to Customers Directly!
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Quality fresh, organic farm produces delivered to your doorstep within superfast delivery.
        </p>
        <div className="grid grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="bg-primary/5 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}