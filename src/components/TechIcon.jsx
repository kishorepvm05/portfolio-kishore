import React from 'react';

/**
 * Authentic Brand Icons for the Core Analytics Stack:
 * - Microsoft Excel (Emerald green with grid book icon)
 * - Power BI (Signature yellow/amber layered bar visual)
 * - MySQL (Classic dolphin / database cyan mark)
 * - Python (Blue & yellow interwoven serpents)
 */
export const TechIcon = ({ name, size = 24, className = "" }) => {
  const iconKey = (name || "").toLowerCase();

  if (iconKey.includes('excel')) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={className} fill="none" aria-label="Microsoft Excel">
        <rect width="32" height="32" rx="6" fill="#107C41" />
        <path d="M19 6L9 9V23L19 26V6Z" fill="#185C37" />
        <path d="M19 6H25C26.1046 6 27 6.89543 27 8V24C27 25.1046 26.1046 26 25 26H19V6Z" fill="#107C41" />
        <path d="M21 10H25M21 13H25M21 16H25M21 19H25M21 22H25" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" opacity="0.75" />
        <path d="M6 10H16V22H6V10Z" fill="#107C41" />
        <text x="8.5" y="19" fill="#FFFFFF" fontFamily="sans-serif" fontSize="11" fontWeight="bold">X</text>
      </svg>
    );
  }

  if (iconKey.includes('powerbi') || iconKey.includes('power bi')) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={className} fill="none" aria-label="Power BI">
        <rect width="32" height="32" rx="6" fill="#F2C811" />
        <path d="M9 18C9 16.8954 9.89543 16 11 16H13C14.1046 16 15 16.8954 15 18V24C15 25.1046 14.1046 26 13 26H11C9.89543 26 9 25.1046 9 24V18Z" fill="#E6AD00" />
        <path d="M14 12C14 10.8954 14.8954 10 16 10H18C19.1046 10 20 10.8954 20 12V24C20 25.1046 19.1046 26 18 26H16C14.8954 26 14 25.1046 14 24V12Z" fill="#D19900" />
        <path d="M19 8C19 6.89543 19.8954 6 21 6H23C24.1046 6 25 6.89543 25 8V24C25 25.1046 24.1046 26 23 26H21C19.8954 26 19 25.1046 19 24V8Z" fill="#242424" />
      </svg>
    );
  }

  if (iconKey.includes('mysql') || iconKey.includes('sql')) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={className} fill="none" aria-label="MySQL">
        <rect width="32" height="32" rx="6" fill="#00758F" />
        {/* Database cylinders icon with dolphin curve */}
        <ellipse cx="16" cy="10" rx="9" ry="3.5" fill="#F29111" />
        <path d="M7 10V16C7 17.933 11.0294 19.5 16 19.5C20.9706 19.5 25 17.933 25 16V10" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7 16V22C7 23.933 11.0294 25.5 16 25.5C20.9706 25.5 25 23.933 25 22V16" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="21" cy="9" r="1.5" fill="#FFFFFF" />
      </svg>
    );
  }

  if (iconKey.includes('python')) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={className} fill="none" aria-label="Python">
        <rect width="32" height="32" rx="6" fill="#1E293B" />
        <path d="M15.8 7C11.5 7 11.8 8.8 11.8 8.8L11.8 10.7H16V11.3H9.8C7.5 11.3 7 13.5 7 13.5C7 13.5 6.6 15.6 7 17.2C7.4 18.8 8.4 18.8 8.4 18.8H9.7V17.3C9.7 15.6 11.1 15.6 11.1 15.6H15.8C17.3 15.6 17.5 14.3 17.5 14.3V8.5C17.5 8.5 17.6 7 15.8 7ZM13.8 8.3C14.4 8.3 14.8 8.7 14.8 9.2C14.8 9.7 14.4 10.1 13.8 10.1C13.3 10.1 12.8 9.7 12.8 9.2C12.8 8.7 13.3 8.3 13.8 8.3Z" fill="#38BDF8" />
        <path d="M16.2 25C20.5 25 20.2 23.2 20.2 23.2L20.2 21.3H16V20.7H22.2C24.5 20.7 25 18.5 25 18.5C25 18.5 25.4 16.4 25 14.8C24.6 13.2 23.6 13.2 23.6 13.2H22.3V14.7C22.3 16.4 20.9 16.4 20.9 16.4H16.2C14.7 16.4 14.5 17.7 14.5 17.7V23.5C14.5 23.5 14.4 25 16.2 25ZM18.2 23.7C17.6 23.7 17.2 23.3 17.2 22.8C17.2 22.3 17.6 21.9 18.2 21.9C18.7 21.9 19.2 22.3 19.2 22.8C19.2 23.3 18.7 23.7 18.2 23.7Z" fill="#FACC15" />
      </svg>
    );
  }

  // Fallback generic analytics icon
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  );
};
