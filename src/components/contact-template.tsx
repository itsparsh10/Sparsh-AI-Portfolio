"use client";

import { Mail, Linkedin, Github, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactTemplate() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sparshvishan@gmail.com",
      href: "mailto:sparshvishan@gmail.com",
      color: "text-red-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "sparshs10",
      href: "https://www.linkedin.com/in/sparshs10/",
      color: "text-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "itsparsh10",
      href: "https://github.com/itsparsh10",
      color: "text-gray-900",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8989921458",
      href: "tel:+918989921458",
      color: "text-green-600",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="prose prose-gray max-w-none">
        {/* Header Section */}
        <div className="mb-8 pb-6 border-b border-gray-200">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 tracking-tight">
            Get In Touch
          </h1>
          <p className="text-base text-gray-600">
            Feel free to reach out! I&apos;m always open to discussing new projects, creative ideas, or opportunities.
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <Link
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group relative rounded-xl border border-gray-200 bg-white p-6 hover:border-gray-300 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 p-3 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors ${contact.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                        {contact.label}
                      </p>
                      <p className="text-base font-medium text-gray-900 break-all">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Additional Message */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-base text-gray-700 leading-relaxed">
              Whether you have a question, want to collaborate, or just want to say hello, I&apos;d love to hear from you! 
              Drop me a message and I&apos;ll get back to you as soon as possible. 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

