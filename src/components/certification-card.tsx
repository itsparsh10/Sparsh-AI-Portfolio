"use client";

import Image from "next/image";

interface CertificationCardProps {
  certName: string;
  className?: string;
}

const certifications = [
  {
    name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    issued: "Feb 2026",
    expires: null,
    credentialId: "B8680F3A059610553A4A51B19AEBDD8188E32881DFE99B82DBC11461C214863B",
    skills: "Artificial Intelligence (AI), Cloud Infrastructure",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQHYCgYovUuPtQ/company-logo_100_100/company-logo_100_100/0/1665755678957/oracle_logo?e=1781740800&v=beta&t=E9AldVa7Ki1tiTQTJYHl6jdgiNCimaRyCF8QvAaXuSg"
  },
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
    logo: "data:image/png;base64,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"
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

