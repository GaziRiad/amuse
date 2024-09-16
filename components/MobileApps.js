import { AppPlatforms } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

function MobileApps() {
  return (
    <div className="flex items-center justify-center gap-6">
      {AppPlatforms.map((platform, index) => (
        <Link key={index} href={platform.href}>
          <Image
            src={platform.image}
            alt={`Image of ${platform.title}`}
            width={160}
            height={160}
            className="max-w-[152px] object-cover object-center"
          />
        </Link>
      ))}
    </div>
  );
}

export default MobileApps;
