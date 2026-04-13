interface NavExternalLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export default function NavExternalLink({ href, icon, label }: NavExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-4 py-2.5 text-sm rounded-md mx-2 text-gray-300 hover:bg-[#1f1f1f] hover:text-white transition-colors duration-150"
    >
      <span className="w-4 h-4 flex-shrink-0">{icon}</span>
      <span className="flex-1">{label}</span>
      {/* External link arrow */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-3 h-3 text-gray-500 flex-shrink-0"
      >
        <path d="M3 13L13 3M13 3H7M13 3v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}
