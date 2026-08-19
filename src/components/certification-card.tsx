"use client";

import Image from "next/image";
import { certifications } from "@/lib/profile";

interface CertificationCardProps {
  certName: string;
  className?: string;
}

export default function CertificationCard({ certName, className = "" }: CertificationCardProps) {
  const certification = certifications.find(
    cert => cert.name.toLowerCase().includes(certName.toLowerCase()) ||
      certName.toLowerCase().includes(cert.name.toLowerCase())
  );

  if (!certification) {
    return null;
  }

  return (
    <div className={`group relative rounded-xl border border-gray-200 bg-white overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all duration-200 p-6 ${className}`}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden relative">
          <Image
            src={certification.logo}
            alt={certification.issuer}
            fill
            className="object-contain p-1"
            unoptimized
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="mb-2">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Certification
            </span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">
            {certification.name}
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            {certification.issuer}
          </p>
          <div className="space-y-1">
            <p className="text-xs text-gray-500">
              <span className="font-medium">Issued:</span> {certification.issued}
              {certification.expires && ` · Expires: ${certification.expires}`}
            </p>
            <p className="text-xs text-gray-500">
              <span className="font-medium">Credential ID:</span> {certification.credentialId}
            </p>
            <p className="text-xs text-gray-500">
              <span className="font-medium">Skills:</span> {certification.skills}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

