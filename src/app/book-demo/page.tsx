"use client";

import { Book3D } from "@/components/ui/3d-book";

export default function BookDemoPage() {
    return (
        <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center p-8">
            <div className="mb-12 text-center">
                <h1 className="text-3xl font-bold text-white mb-4">Stripe-style 3D Book Demo</h1>
                <p className="text-gray-400">Hover over the book to see the interaction.</p>
            </div>

            <div className="flex gap-20 flex-wrap justify-center items-center">
                <Book3D
                    src="/images/Masterpiece Book Instagram Post.png"
                    title="Masterpiece Book"
                    width={350}
                    height={400} // Instagram post is likely square or 4:5, adjusting height to match roughly, or we might need to object-fit: cover
                />
            </div>
        </div>
    );
}
