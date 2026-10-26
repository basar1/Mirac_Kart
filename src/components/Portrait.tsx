import Image from "next/image";
import { lawyerConfig } from "@/data/lawyerConfig";

export function RoundPortrait({
  size = 144,
  priority = false,
  className = "",
}: {
  size?: number;
  priority?: boolean;
  className?: string;
}) {
  const { photoUrl, photoAlt, fullName } = lawyerConfig.personalInfo;

  return (
    <Image
      src={photoUrl}
      alt={photoAlt || fullName}
      width={size}
      height={size}
      priority={priority}
      className={`object-cover object-[center_18%] ${className}`}
    />
  );
}
