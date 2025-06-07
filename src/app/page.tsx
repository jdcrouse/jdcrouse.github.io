import Image from "next/image";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#e8e4d9]">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse gap-24 items-center">
          {/* Profile Image - Larger and rectangular */}
          <div className="w-full md:w-2/5">
            <div className="relative w-full aspect-[3/4]">
              <Image
                src="/profile.jpg"
                alt="Profile Picture"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-3/5">
            <h1 className="text-4xl font-bold text-[#2c3e2d] mb-4">
              Jason Crouse
            </h1>
            <p className="text-xl text-[#4a5d4c] mb-8">
              Software Engineer
            </p>

            {/* Bio */}
            <div className="prose max-w-none mb-12">
              <p className="text-[#4a5d4c] leading-relaxed">
                I'm a backend engineer from North Carolina, currently based in Cambridge, MA. Since graduating from Northeastern University in 2020, 
                I have spent my career working in AI and observability.
              </p>
              <p className="text-[#4a5d4c] leading-relaxed mt-4">
                When I'm not at the computer, you can find me outside playing tennis or in the mountains skiing, backpacking, and camping. 
                One day I hope to hike the entire Appalachian Trail.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="https://github.com/jdcrouse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4a5d4c] hover:text-[#2c3e2d] transition-colors"
              >
                <FaGithub className="w-8 h-8" />
              </a>
              <a
                href="https://linkedin.com/in/jdcrouse21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4a5d4c] hover:text-[#2c3e2d] transition-colors"
              >
                <FaLinkedin className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
