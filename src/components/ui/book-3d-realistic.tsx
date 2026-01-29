"use client";

import React, { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Environment, Float, PresentationControls, ContactShadows, useTexture } from "@react-three/drei";
import * as THREE from "three";

interface Book3DRealProps {
    src: string;
    width?: number;
    height?: number;
}

function BookModel({ src }: { src: string }) {
    // Load cover texture
    const texture = useLoader(THREE.TextureLoader, src);
    texture.colorSpace = THREE.SRGBColorSpace;

    // Materials
    // Cover: Matte, non-reflective
    const coverMaterial = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.8,
        metalness: 0,
        side: THREE.DoubleSide,
    });

    // Back Cover: Matte Dark color
    const backCoverMaterial = new THREE.MeshStandardMaterial({
        color: "#081b2f",
        roughness: 0.8,
        metalness: 0,
        side: THREE.DoubleSide,
    });

    // Spine: Matte Dark Navy
    const spineMaterial = new THREE.MeshStandardMaterial({
        color: "#0A2540",
        roughness: 0.8,
        metalness: 0,
        side: THREE.DoubleSide,
    });

    // Pages: White paper, matte
    const paperMaterial = new THREE.MeshStandardMaterial({
        color: "#fdfdfd",
        roughness: 0.8,
        metalness: 0,
        side: THREE.DoubleSide,
    });

    // Dimensions (Normalized to Height = 3 or similar)
    // Aspect 2:3 -> 2 width, 3 height
    const bookWidth = 2;
    const bookHeight = 3;
    const coverThickness = 0.05;
    const pageThickness = 0.35;
    const spineWidth = pageThickness + (coverThickness * 2);

    return (
        <group rotation={[0, -Math.PI / 6, 0]}>
            {/* Front Cover */}
            <mesh
                position={[0, 0, (pageThickness + coverThickness) / 2]}
                castShadow
                receiveShadow
                material={coverMaterial}
            >
                <boxGeometry args={[bookWidth, bookHeight, coverThickness]} />
            </mesh>

            {/* Back Cover */}
            <mesh
                position={[0, 0, -(pageThickness + coverThickness) / 2]}
                castShadow
                receiveShadow
                material={backCoverMaterial}
            >
                <boxGeometry args={[bookWidth, bookHeight, coverThickness]} />
            </mesh>

            {/* Spine */}
            <mesh
                position={[-(bookWidth / 2) + (coverThickness / 2), 0, 0]}
                castShadow
                receiveShadow
                material={spineMaterial}
            >
                {/* Spine box slightly smaller in height to avoid z-fighting with cover edges? No, height matches.
            Width (depth) matches `spineWidth`. 
            Thickness (x-axis) matches `coverThickness`. 
        */}
                <boxGeometry args={[coverThickness, bookHeight, spineWidth]} />
            </mesh>

            {/* Page Block */}
            <mesh
                position={[0.1, 0, 0]} // Shifted further right to clear spine
                castShadow
                receiveShadow
                material={paperMaterial}
            >
                {/* Width reduced to avoid touching spine */}
                <boxGeometry args={[bookWidth - 0.2, bookHeight - 0.1, pageThickness]} />
            </mesh>
        </group>
    );
}

export function Book3DReal({ src, width = 300, height = 450 }: Book3DRealProps) {
    return (
        <div
            className="relative"
            style={{ width: `${width}px`, height: `${height}px` }}
        >
            <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
                {/* Lights */}
                <ambientLight intensity={0.6} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

                {/* Rim Light 1 (Top Left Back) */}
                <spotLight position={[-10, 10, -10]} intensity={3} color="#4a9eff" />
                {/* Rim Light 2 (Bottom Left Back) to ensure full coverage */}
                <spotLight position={[-10, -10, -10]} intensity={2} color="#4a9eff" />

                {/* Environment Reflection */}
                <Environment preset="studio" />

                {/* Floating Animation & Interaction */}
                <Float
                    speed={2} // Animation speed
                    rotationIntensity={0.5} // xyz rotation intensity
                    floatIntensity={0.5} // Up/down float intensity
                >
                    <PresentationControls
                        global={false}
                        cursor={true}
                        snap={false} // Don't snap back
                        speed={1.5}
                        zoom={1}
                        rotation={[0, 0, 0]}
                    // No rotation limits
                    >
                        <BookModel src={src} />
                    </PresentationControls>
                </Float>

                {/* Soft shadow on the "floor" */}
                <ContactShadows
                    position={[0, -2, 0]}
                    opacity={0.4}
                    scale={10}
                    blur={2.5}
                    far={4}
                />
            </Canvas>
        </div>
    );
}
