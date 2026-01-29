
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        absolute: "35 on the 31st",
    },
    description: "Jesse Dan-Yusuf's 35th Birthday Wishlist",
    openGraph: {
        title: "35 on the 31st",
        description: "Jesse Dan-Yusuf's 35th Birthday Wishlist",
    },
    twitter: {
        title: "35 on the 31st",
        description: "Jesse Dan-Yusuf's 35th Birthday Wishlist",
    }
};

export default function BirthdayWishlistPage() {
    return (
        <div className="min-h-screen bg-black py-12 px-4 md:px-8 flex items-center justify-center">
            {/* Paper Letter Container */}
            <div className="max-w-3xl w-full bg-[#fdfbf7] text-gray-900 font-mono p-8 md:p-16 shadow-2xl relative">

                {/* Paper Texture/Effect (optional subtle border/shadow) */}

                {/* Header Image Frame Removed as per request */}

                {/* Content Container */}
                <div className="space-y-8">

                    <div className="text-center space-y-2">
                        <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-widest border-b-2 border-gray-900 pb-4 inline-block">
                            My 35th Birthday Wishlist
                        </h1>
                    </div>

                    {/* Introduction */}
                    <div className="space-y-6 text-lg leading-relaxed text-gray-800">
                        <p>Dear Family and Friends,</p>

                        <p>
                            If you're reading this, it's probably because you're one of the lovely people who reached out asking what I'd like for my birthday. I'll be turning 35 on January 31st, and I'll be honest—I'm not usually one to share wishlists. It feels a bit awkward putting together a list of things I want! But a few of you insisted, and my wife gave the green light, so here we are.
                        </p>

                        <p>
                            Before I share anything, I want to say this clearly: <strong>please don't break the bank</strong>. Seriously. Your love, your presence in my life, and your friendship mean far more than anything on this list. If you're reading this and thinking about getting me something, please don't stretch yourself financially. I mean that from the bottom of my heart.
                        </p>

                        <p className="text-base font-semibold text-gray-900 bg-gray-100 border-l-4 border-gray-900 p-4 rounded">
                            To claim an item, contact Eva: <a href="tel:+2348077171194" className="text-blue-800 underline">+234 807 717 1194</a>
                        </p>
                    </div>

                    <hr className="border-gray-900 border-dashed opacity-30" />

                    {/* What I Desire Most */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold uppercase underline decoration-gray-400 underline-offset-4">What I Desire Most</h2>
                        <p>
                            More than any item on this list, what I truly desire is your <strong>prayers</strong>. If you want to give me something that costs nothing but means everything, please pray for:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 marker:text-gray-500">
                            <li><strong>Me</strong> — that I would walk faithfully with God and grow in wisdom and grace</li>
                            <li><strong>My wife, Eva</strong> — that she would be strengthened, encouraged, and flourish in all she does</li>
                            <li><strong>Our daughters</strong> — that they would know Jesus and grow up in His love</li>
                            <li><strong>My ministry</strong> — as a pastor and leader, that the work at One City Church would be fruitful and bring glory to God</li>
                            <li><strong>My book, Masterpiece</strong> — I had planned to launch it on my birthday, but I've had to postpone. Please pray for wisdom on the timing and that it blesses many when it's released</li>
                            <li><strong>My business</strong> — that Fyreworks and my other ventures would flourish and serve people well</li>
                        </ul>
                        <p className="italic">Your prayers are the greatest gift you could give me.</p>
                    </div>

                    <hr className="border-gray-900 border-dashed opacity-30" />

                    {/* The Wishlist */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <h2 className="text-xl font-bold uppercase underline decoration-gray-400 underline-offset-4">The Wishlist</h2>
                            <p>
                                For those who still want to bless me with something tangible, here's what I've put together. I've included prices in both Naira (₦) and US Dollars ($) to make it easier.
                            </p>
                        </div>

                        {/* Books & Bibles */}
                        <Section title="Books & Bibles">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Item</TableHead>
                                        <TableHead>Link</TableHead>
                                        <TableHead>Price (₦)</TableHead>
                                        <TableHead>Price ($)</TableHead>
                                        <TableHead>Taken</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Complete Romans Series by D. Martyn Lloyd-Jones (14 volumes)</TableCell>
                                        <TableCell><ExternalLink href="https://a.co/d/jh3Dncc">Amazon</ExternalLink></TableCell>
                                        <TableCell>₦377,000</TableCell>
                                        <TableCell>$260</TableCell>
                                        <TableCell>&nbsp;</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>ESV Study Bible</TableCell>
                                        <TableCell><ExternalLink href="https://a.co/d/b92aoJw">Amazon</ExternalLink></TableCell>
                                        <TableCell>₦21,750–₦50,750</TableCell>
                                        <TableCell>$15–$35</TableCell>
                                        <TableCell>&nbsp;</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>NIV Study Bible</TableCell>
                                        <TableCell><ExternalLink href="https://a.co/d/0bTMUxp">Amazon</ExternalLink></TableCell>
                                        <TableCell>₦21,750–₦50,750</TableCell>
                                        <TableCell>$15–$35</TableCell>
                                        <TableCell>&nbsp;</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>The Lord of the Rings — Complete Set</TableCell>
                                        <TableCell><ExternalLink href="https://a.co/d/iMaSFQM">Amazon</ExternalLink></TableCell>
                                        <TableCell>₦72,500–₦101,500</TableCell>
                                        <TableCell>$50–$70</TableCell>
                                        <TableCell>&nbsp;</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>The Hobbit</TableCell>
                                        <TableCell><ExternalLink href="https://a.co/d/iMaSFQM">Amazon</ExternalLink></TableCell>
                                        <TableCell>₦29,000–₦43,500</TableCell>
                                        <TableCell>$20–$30</TableCell>
                                        <TableCell>&nbsp;</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Section>

                        {/* Tech */}
                        <Section title="Tech">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Item</TableHead>
                                        <TableHead>Price (₦)</TableHead>
                                        <TableHead>Price ($)</TableHead>
                                        <TableHead>Taken</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>MacBook 16-inch M2 (new or refurbished)</TableCell>
                                        <TableCell>—</TableCell>
                                        <TableCell>—</TableCell>
                                        <TableCell>&nbsp;</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>iPad Pro 13-inch M2 (new or refurbished)</TableCell>
                                        <TableCell>—</TableCell>
                                        <TableCell>—</TableCell>
                                        <TableCell>&nbsp;</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Section>

                        {/* Footwear - No Prices */}
                        <Section title="Footwear (Size 45)">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Item</TableHead>
                                        <TableHead>Taken</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Nike Air Max (Black)</TableCell>
                                        <TableCell>&nbsp;</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Air Jordan 1 (Black)</TableCell>
                                        <TableCell>&nbsp;</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Air Jordan 4 (Black)</TableCell>
                                        <TableCell>&nbsp;</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Converse All Stars (Black)</TableCell>
                                        <TableCell>&nbsp;</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Monkstrap Shoes (Black)</TableCell>
                                        <TableCell>&nbsp;</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Section>

                        {/* Clothing */}
                        <Section title="Clothing">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Item</TableHead>
                                        <TableHead>Price (₦)</TableHead>
                                        <TableHead>Price ($)</TableHead>
                                        <TableHead>Taken</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Black T-shirts</TableCell>
                                        <TableCell>—</TableCell>
                                        <TableCell>—</TableCell>
                                        <TableCell>&nbsp;</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Suit(s)</TableCell>
                                        <TableCell>—</TableCell>
                                        <TableCell>—</TableCell>
                                        <TableCell>&nbsp;</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Aso-Oke Cargo Trouser</TableCell>
                                        <TableCell>₦35,000</TableCell>
                                        <TableCell>—</TableCell>
                                        <TableCell>✓</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Kaftan Fabric (very deep, solid black)</TableCell>
                                        <TableCell>₦21,750–₦65,250</TableCell>
                                        <TableCell>$15–$45</TableCell>
                                        <TableCell>&nbsp;</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Section>

                        {/* Fragrance */}
                        <Section title="Fragrance">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Item</TableHead>
                                        <TableHead>Price (₦)</TableHead>
                                        <TableHead>Price ($)</TableHead>
                                        <TableHead>Taken</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Terre d'Hermès Eau de Parfum</TableCell>
                                        <TableCell>—</TableCell>
                                        <TableCell>—</TableCell>
                                        <TableCell>&nbsp;</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Section>
                    </div>

                    <hr className="border-gray-900 border-dashed opacity-30" />

                    {/* Final Word */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold uppercase underline decoration-gray-400 underline-offset-4">A Final Word</h2>
                        <p>
                            Thank you for loving me and my family so well. Whether you pray for us, send a kind word, or choose something from this list, please know that I am deeply grateful for you. You being in my life is already a gift.
                        </p>
                        <p>
                            Here's to 35 years of God's faithfulness—and many more to come.
                        </p>

                        <div className="pt-8 pb-4">
                            <p className="text-lg">With love and gratitude,</p>
                            {/* Handwritten signature effect could go here, using a signature font for now if imported, otherwise just bold Serif */}
                            <p className="font-serif italic text-3xl mt-4">Jesse</p>
                        </div>
                    </div>

                    {/* Quote */}
                    <div className="pt-8 text-center text-gray-500 italic text-sm border-t border-gray-900 border-dashed border-opacity-30">
                        <p>"For we are his workmanship, created in Christ Jesus for good works, which God prepared beforehand, that we should walk in them." — Ephesians 2:10</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

// Helper Components for Table Styling (Adapted for Paper Theme)
function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-l-4 border-gray-900 pl-3 uppercase tracking-wide">{title}</h3>
            <div className="overflow-x-auto">
                {children}
            </div>
        </div>
    );
}

function Table({ children }: { children: React.ReactNode }) {
    return (
        <table className="w-full text-left border-collapse border border-gray-300 text-sm md:text-base bg-white/50">
            {children}
        </table>
    );
}

function TableHeader({ children }: { children: React.ReactNode }) {
    return (
        <thead className="bg-gray-100/80 text-gray-900 font-bold uppercase text-xs tracking-wider">
            {children}
        </thead>
    );
}

function TableRow({ children }: { children: React.ReactNode }) {
    return (
        <tr className="border-b border-gray-300 hover:bg-white transition-colors">
            {children}
        </tr>
    );
}

function TableHead({ children }: { children: React.ReactNode }) {
    return (
        <th className="p-3 border-r border-gray-300 last:border-r-0 whitespace-nowrap">
            {children}
        </th>
    );
}

function TableBody({ children }: { children: React.ReactNode }) {
    return (
        <tbody className="divide-y divide-gray-300">
            {children}
        </tbody>
    );
}

function TableCell({ children }: { children: React.ReactNode }) {
    return (
        <td className="p-3 border-r border-gray-300 last:border-r-0 text-gray-800">
            {children}
        </td>
    );
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:text-blue-600 underline underline-offset-2 decoration-1"
        >
            {children}
        </a>
    );
}
