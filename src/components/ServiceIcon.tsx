import type { IconName } from "@/content/types";

const paths: Record<IconName, React.ReactNode> = {
  video: (
    <>
      <rect x="2" y="5" width="15" height="14" rx="2" />
      <path d="m17 10 5-3v10l-5-3" />
    </>
  ),
  school: (
    <>
      <path d="M12 3 2 8l10 5 10-5-10-5Z" />
      <path d="M6 10.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-5.5" />
    </>
  ),
  browser: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </>
  ),
  book: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5Z" />
      <path d="M4 5.5v15" />
    </>
  ),
  gradCap: (
    <>
      <path d="M2 9 12 4l10 5-10 5L2 9Z" />
      <path d="M6 11v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5" />
    </>
  ),
  tie: (
    <>
      <circle cx="12" cy="6" r="3" />
      <path d="M9 9h6l2 3-3 9-2-4-2 4-3-9 2-3Z" />
    </>
  ),
  board: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="1" />
      <path d="M9 20h6M12 16v4" />
    </>
  ),
  tablet: (
    <>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M2 20c0-3.3 3-5.5 7-5.5s7 2.2 7 5.5" />
      <circle cx="17" cy="8" r="2.5" />
      <path d="M17 14.5c2.8.3 5 2.4 5 5.5" />
    </>
  ),
  userFriends: (
    <>
      <circle cx="8" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M2 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
      <path d="M15.5 15c2.6.3 4.5 2.2 4.5 5" />
    </>
  ),
  laptopHouse: (
    <>
      <path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6" />
      <path d="M2 18h20l-1.5-3.5a1 1 0 0 0-.9-.5H4.4a1 1 0 0 0-.9.5L2 18Z" />
      <path d="m9 9 3-2.5L15 9" />
    </>
  ),
  photoVideo: (
    <>
      <rect x="2" y="6" width="14" height="12" rx="2" />
      <circle cx="9" cy="12" r="2.5" />
      <path d="m16 10 6-3v10l-6-3" />
    </>
  ),
  pencilRuler: (
    <>
      <path d="m14 3 7 7-9 9-7 1 1-7 8-8Z" />
      <path d="m14 3 3 3M16 8l2-2M18 10l2-2" />
    </>
  ),
};

export default function ServiceIcon({
  icon,
  className,
}: {
  icon: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
      aria-hidden
    >
      {paths[icon]}
    </svg>
  );
}
