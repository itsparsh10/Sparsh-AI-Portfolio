"use client";

import Image from "next/image";

interface CertificationCardProps {
  certName: string;
  className?: string;
}

const certifications = [
  {
    name: "Databricks - Generative AI Fundamentals",
    issuer: "Databricks",
    issued: "Feb 2025",
    expires: "Feb 2027",
    credentialId: "133241213",
    skills: "Artificial Intelligence (AI)",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQFPIRKiPVETuw/company-logo_100_100/company-logo_100_100/0/1697215766274?e=1764806400&v=beta&t=W00Mu3IAAhTHT_u2u2IYzxTlSckFCg9qvsN8JYnsmu8"
  },
  {
    name: "Goldman Sachs - Software Engineering",
    issuer: "Goldman Sachs",
    issued: "Sep 2024",
    expires: null,
    credentialId: "KfXsu5XxM5tQZuvcL",
    skills: "Software Engineering",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQG9L7InIQVZrQ/company-logo_100_100/company-logo_100_100/0/1722506756452/goldman_sachs_logo?e=1764806400&v=beta&t=Kw9Jr9oG8IUTCLWfy0fTelblVAZhHE5slqoi_QmrLnk"
  }
];

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
            className="object-cover"
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

