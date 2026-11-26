"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductGalleryProps {
  mainImage: string;
  title: string;
}

export function ProductGallery({ mainImage, title }: ProductGalleryProps) {
  const [selectedImage] = useState(mainImage);

  return (
    <div className="space-y-4">
      <div className="relative aspect-square rounded-lg overflow-hidden">
        <Image
          src={selectedImage}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}