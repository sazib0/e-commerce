import { getProduct } from "@/lib/products";
import { ProductGallery } from "./components/product-gallery";
import { ProductInfo } from "./components/product-info";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [{ id: "1" }];
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductGallery mainImage={product.image} title={product.title} />
        <ProductInfo {...product} />
      </div>
    </div>
  );
}