import { Play, Users } from "lucide-react";
import Title from "../Utility/Title";
import ReadmoreBtn from "../Utility/ReadmoreBtn";
import { Link } from "react-router-dom";

export default function AboutHeading() {
  return (
    <div className="bg-[url(/Images/bg2.jpg)] bg-cover bg-center py-16 px-4 sm:px-6 lg:px-8">
      {/* About Astrology Section */}
      {/* About Section */}
      <Title
        heading="About Us"
        description=" Numerologist | Vastu Consultant | Kundli Reader . With over 15+ years of deep-rooted experience, I've guided 10,000+ individuals towards clarity, harmony, and success in their personal and professional lives."
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image and Video */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="./Images/owner.jpg"
                alt="Professional woman working at desk"
                className="w-full h-96 lg:h-160 object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                MEET MANOHAR RATHORE
              </h2>
              <div>
                Manohar Rathore is a highly experienced astrologer with over 15
                years of expertise in helping individuals gain clarity,
                confidence, and peace of mind through astrology. With profound
                knowledge of the subject and a genuine passion for guiding
                others, he has earned a strong reputation for accurate
                predictions and practical, actionable advice. Whether you're
                facing personal challenges, feeling uncertain about your career,
                or simply curious about what the stars reveal—Manohar is here to
                help you better understand your life’s path and navigate it with
                confidence.
              </div>
              {/* <div className="space-y-4 text-black text-[19px] text-justify leading-relaxed">
                <p className="leading-relaxed">
                  Led by Priyanka Agarwal —{" "}
                  <em>
                    Tarot Reader, Numerologist, Vastu Consultant, Face Reader,
                    and Architect (B.Arch 2003)
                  </em>{" "}
                  <span className="text-amber-600">our mission is to bring clarity, healing, and transformation
                  to your life through the powerful blend of ancient wisdom and
                  modern interpretation.
                  </span>
                </p>

                <p className="leading-relaxed">
                  With 9+ years of experience and having guided
                  over 10,000+ individuals, Priyanka offers
                  deep insights through{" "}
                  
                    Advanced Tarot Readings, Master-Level Numerology
                  {" "}
                  (covering car, mobile, house numbers),{" "}
                  Scientific Vastu Consultations for modern
                  homes, Face Reading to decode personality
                  energies, and unique Neuro-Energy Analysis —
                  bridging neuroscience and spiritual awareness.
                </p>

                <p className="leading-relaxed">
                  Though her journey began as an architect, a life-changing
                  prediction in 2009 opened the doors to the world of{" "}
                  <em>Occult Sciences</em>. Since then, she has been dedicated
                  to helping others align their energies, environments, and
                  numbers with their true path — combining logic, intuition, and
                  cosmic energy to illuminate every step.
                </p>
              </div> */}
            </div>

            {/* Experience Badge */}
            <div className="flex items-center space-x-4">
              <div className="bg-orange-100 rounded-full p-4">
                <img src="./Images/about.svg" alt="Experience Icon" />
              </div>
              <div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-5xl font-bold text-orange-500">
                    15+
                  </span>
                  <span className="text-gray-600">years of</span>
                </div>
                <p className="text-2xl font-semibold text-gray-900">
                  Experience
                </p>
              </div>
            </div>

            {/* Read More Button */}
            <Link to="/service">
              <ReadmoreBtn />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
