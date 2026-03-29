import React from 'react';
import type { Metadata } from 'next';
import CanvasContent from './CanvasContent';

export const metadata: Metadata = {
    title: {
        absolute: "CANVAS — Creative Discipleship for Creative Disciples",
    },
    description: "A room where the separation between creativity and faith finally ends. March 29, 2025. Big H Studio, Utako, Abuja.",
    openGraph: {
        title: "CANVAS — Creative Discipleship for Creative Disciples",
        description: "A room where the separation between creativity and faith finally ends. March 29, 2025. Big H Studio, Utako, Abuja.",
        images: [
            {
                url: "/images/Header.jpg",
                width: 1200,
                height: 630,
                alt: "CANVAS"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "CANVAS — Creative Discipleship for Creative Disciples",
        description: "A room where the separation between creativity and faith finally ends. March 29, 2025. Big H Studio, Utako, Abuja.",
        images: ["/images/Header.jpg"]
    }
};

export default function CanvasPage() {
    return <CanvasContent />;
}
