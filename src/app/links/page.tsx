"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Youtube, Twitter, Linkedin, Facebook, ExternalLink, Mail, MessageSquare, Headphones, FileText } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

export default function Links() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = [
    "Faith",
    "Business",
    "Creativity",
    "Leadership",
  ];

  const socialLinks = [
    { name: "Instagram", url: "https://instagram.com/jessedanyusuf", icon: Instagram },
    { name: "YouTube", url: "https://youtube.com/@jessedanyusuf", icon: Youtube },
    { name: "Twitter", url: "https://twitter.com/jessedanyusuf", icon: Twitter },
    { name: "LinkedIn", url: "https://linkedin.com/in/jessedanyusuf", icon: Linkedin },
    { name: "Facebook", url: "https://facebook.com/jessedanyusuf", icon: Facebook },
    { name: "TikTok", url: "https://tiktok.com/@jessedanyusuf", icon: FaTiktok },
  ];

  const contactLinks = [
    { 
      title: "Business Inquiries",
      email: "business@jessedanyusuf.com",
      icon: Mail 
    },
    { 
      title: "Speaking Engagements",
      email: "speaking@jessedanyusuf.com",
      icon: MessageSquare 
    },
  ];

  const movementLinks = [
    {
      title: "The Cave",
      description: "Find your purpose, fulfill your potential",
      actions: [
        { text: "Watch", url: "https://www.youtube.com/@jessedanyusuf", icon: Youtube },
        { text: "Listen to Podcast", url: "https://pod.link/1727199920", icon: Headphones },
        { text: "Read Newsletter", url: "https://thecavenews.substack.com/", icon: FileText },
      ],
    },
    {
      title: "Campfyre",
      description: "Helping creators make a living doing what they love",
      actions: [
        { text: "Watch", url: "https://www.youtube.com/@campfyreco", icon: Youtube },
        { text: "Listen to Podcast", url: "https://pod.link/1448913888", icon: Headphones },
        { text: "Read Newsletter", url: "https://campfyre.substack.com/", icon: FileText },
      ],
    },
    {
      title: "One City",
      description: "A gospel movement for everyone, everywhere",
      actions: [
        { text: "Watch", url: "https://www.youtube.com/@onecityabuja", icon: Youtube },
        { text: "Listen to Podcast", url: "https://pod.link/1683790739", icon: Headphones },
        { text: "Read Newsletter", url: "https://onecityabuja.substack.com/", icon: FileText },
      ],
    },
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        {/* Profile Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-2 ring-white/10">
            <Image
              src="/images/hero-portrait.jpg"
              alt="Jesse Dan-Yusuf"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-3xl font-bold mb-2">Jesse Dan-Yusuf</h1>
          <p className="text-gray-400 mb-4">Creator • Educator • Entrepreneur • Pastor</p>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {categories.map((category) => (
              <span
                key={category}
                className="px-3 py-1 text-sm bg-white/5 rounded-full text-gray-300 border border-white/10"
              >
                {category}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="https://thecavenews.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 mb-8 bg-white text-black rounded-lg font-semibold hover:bg-white/90 transition-colors"
          >
            Join The Cave Newsletter
          </a>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Movement Links */}
        <div className="space-y-8 animate-fade-in">
          {movementLinks.map((movement) => (
            <div key={movement.title} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors">
              <h2 className="text-xl font-semibold mb-2">{movement.title}</h2>
              <p className="text-gray-300 mb-4">{movement.description}</p>
              <div className="space-y-3">
                {movement.actions.map((action) => (
                  <a
                    key={action.text}
                    href={action.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <span>{action.text}</span>
                    <ExternalLink size={16} className="text-gray-400" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 space-y-4 animate-fade-in">
          {contactLinks.map((contact) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.title}
                href={`mailto:${contact.email}`}
                className="flex items-center justify-between w-full px-6 py-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Icon size={18} className="text-gray-400" />
                  <div>
                    <div className="font-medium">{contact.title}</div>
                    <div className="text-sm text-gray-400">{contact.email}</div>
                  </div>
                </div>
                <ExternalLink size={16} className="text-gray-400" />
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-400 text-sm animate-fade-in">
          © {new Date().getFullYear()} Jesse Dan-Yusuf. All rights reserved.
        </footer>
      </div>
    </div>
  );
} 