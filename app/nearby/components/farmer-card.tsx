"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin } from "lucide-react";
import Image from "next/image";
import type { Farmer } from "../types";

export function FarmerCard({ name, image, rating, distance, specialties, available }: Farmer) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
        <Badge 
          className="absolute top-2 right-2"
          variant={available ? "secondary" : "destructive"}
        >
          {available ? "Available" : "Unavailable"}
        </Badge>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{name}</h3>
        <div className="flex items-center space-x-2 mb-2">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm">{rating}</span>
          <span className="text-muted-foreground">•</span>
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{distance} km</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {specialties.map((specialty) => (
            <Badge key={specialty} variant="outline">
              {specialty}
            </Badge>
          ))}
        </div>
        <Button className="w-full" disabled={!available}>
          Visit Farm
        </Button>
      </div>
    </Card>
  );
}