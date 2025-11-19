"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NewsletterRedirect() {
    const router = useRouter();

    useEffect(() => {
        router.push("https://readmasterpiece.substack.com/");
        window.location.href = "https://readmasterpiece.substack.com/";
    }, [router]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-black text-white">
            <p>Redirecting to newsletter...</p>
        </div>
    );
}
