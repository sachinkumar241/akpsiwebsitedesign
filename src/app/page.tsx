import PolaroidPhoto from "@/components/PolaroidPhoto";

const currentActivities = [
  { text: "Co-Founder", org: "Alligator" },
  { text: "GTM Engineer Intern", org: "Autopilot" },
  { text: "Enrolled in GTM Engineer School (Cohort 3)" },
  { text: "Co-Founder", org: "LibraryCreate", note: "(building 3rd library in Brazil)" },
  { text: "Mentor", org: "Alpha Kappa Psi Professional Business Fraternity" },
  { text: "Member", org: "GTMCafe.com & RevGenius" },
  {
    text: "In my free time: building robots, sketching animals, obsessing over Chicago Bears football, and doing my best Kyrie Irving impression at my local basketball courts",
  },
];

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-start gap-10">
        {/* ── Left: Text content ── */}
        <div className="flex-1 min-w-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to my corner of the web!
          </h1>

          <p className="text-gray-700 leading-relaxed mb-4">
            I&apos;m Sachin Kumar, a 21 yr/old senior at{" "}
            <a
              href="https://illinois.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              UIUC
            </a>{" "}
            studying Industrial Systems Engineering + CS minor.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            I&apos;ve had 7 internships during college and bring 2+ years of experience in Product
            Management, 1.5 years in technical engineering roles, and 1 year in sales/GTM.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            I&apos;ve found a nice sweet spot in growth/product roles, where I&apos;m able to
            combine my technical &amp; communication skills with building systems that solve
            meaningful problems, drive revenue and save time.
          </p>

          <p className="text-gray-700 font-medium mb-3">Here&apos;s what I&apos;m currently up to :</p>

          <ul className="space-y-2">
            {currentActivities.map((item, i) => (
              <li key={i} className="text-gray-700 flex gap-2">
                <span className="text-gray-400 flex-shrink-0 mt-0.5">&gt;</span>
                <span>
                  {"org" in item ? (
                    <>
                      {item.text} @{" "}
                      <span className="font-medium text-gray-800">{item.org}</span>
                      {"note" in item && (
                        <span className="text-gray-500"> {item.note}</span>
                      )}
                    </>
                  ) : (
                    item.text
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Right: Polaroid photo ── */}
        <div className="flex-shrink-0 md:mt-6 flex justify-center">
          <PolaroidPhoto src="/polaroid.jpg" alt="Sachin Kumar" rotationDeg={3} />
        </div>
      </div>
    </div>
  );
}
