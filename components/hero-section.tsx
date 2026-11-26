"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Main Hero Banner */}
        <div className="md:col-span-8 relative rounded-lg overflow-hidden">
          <div className="relative h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1516211697506-8360dbcfe9a4"
              alt="Fresh Farm Products"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
              <h1 className="text-5xl font-bold mb-4">Farm Fresh<br />Delivered Daily</h1>
              <p className="text-lg mb-6 max-w-md">
                Quality organic produce from local farmers, delivered straight to your doorstep
              </p>
              <Button className="w-fit" size="lg">
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Side Banners */}
        <div className="md:col-span-4 grid grid-rows-2 gap-6">
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1573246123716-6b1782bfc499"
              alt="Organic Vegetables"
              width={400}
              height={190}
              className="w-full h-[190px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 p-4 flex flex-col justify-center text-white">
              <h3 className="text-xl font-bold mb-2">Organic Vegetables</h3>
              <p className="text-sm mb-2">Up to 25% off</p>
              <Button variant="outline" className="w-fit bg-transprant" size="sm">
                Shop Now
              </Button>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1550583724-b2692b85b150"
              alt="Fresh Dairy"
              width={400}
              height={190}
              className="w-full h-[190px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 p-4 flex flex-col justify-center text-white">
              <h3 className="text-xl font-bold mb-2">Fresh Dairy</h3>
              <p className="text-sm mb-2">Starting at ৳120</p>
              <Button variant="outline" className="w-fit  bg-transprant" size="sm">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}