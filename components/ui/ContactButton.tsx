"use client";

import React from "react";

interface ContactButtonProps {
    to: string;
    subject?: string;
    body?: string;
    className?: string;
    children?: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
    to,
    subject = "Project Inquiry",
    body = "",
    className = "",
    children,
    onClick,
}) => {
    // Construct parameters properly
    const params = new URLSearchParams();
    params.append("view", "cm");
    params.append("fs", "1");
    params.append("to", to);
    if (subject) params.append("su", subject);
    if (body) params.append("body", body);

    // Primary Gmail Web URL
    // https://mail.google.com/mail/?view=cm&fs=1&to=...
    const gmailUrl = `https://mail.google.com/mail/?${params.toString()}`;

    // NOTE: A true "fallback" to mailto is difficult to automate because 
    // we cannot strictly detect if "mail.google.com" is blocked or preferred 
    // without user interaction. 
    // However, this link explicitly targets the Gmail web interface as requested.
    // For a generic mailto: link, the browser handles the default client.

    return (
        <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
            aria-label={`Send email to ${to}`}
            onClick={onClick}
        >
            {children || "Contact Us"}
        </a>
    );
};

export default ContactButton;
