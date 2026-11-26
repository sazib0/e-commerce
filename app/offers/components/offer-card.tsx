"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import type { Offer } from "../types";

export function OfferCard({ title, description, discount, validUntil, image, category }: Offer) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <Badge 
          className="absolute top-2 right-2"
          variant={category === 'flash' ? 'destructive' : 'secondary'}
        >
          {discount}% OFF
        </Badge>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            Valid until {new Date(validUntil).toLocaleDateString()}
          </span>
          <Button size="sm">Claim Offer</Button>
        </div>
      </div>
    </Card>
  );
}