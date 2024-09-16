import { AppPlatforms } from "@/lib/constants";
import Image from "next/image";

function MobileApps() {
  return (
    <div className="flex items-center justify-center gap-6">
      {AppPlatforms.map((platform, index) => (
        <Image
          key={index}
          src={platform.image}
          alt={`Image of ${platform.title}`}
          width={160}
          height={160}
          className="max-w-[152px] object-cover object-center"
        />
      ))}
    </div>
  );
}

export default MobileApps;
