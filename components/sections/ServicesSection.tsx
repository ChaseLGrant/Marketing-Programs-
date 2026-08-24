import {
  Camera,
  HeartHandshake,
  MapPinned,
  MessagesSquare,
  Route,
  Waypoints,
} from "lucide-react";

const services = [
  {
    title: "Recruiting strategy",
    body: "A personalized roadmap built around ability, academics, goals, position, location, and timeline.",
    icon: Route,
  },
  {
    title: "School targeting",
    body: "Identify programs where your athlete has a legitimate opportunity to compete and get recruited.",
    icon: MapPinned,
  },
  {
    title: "Coach outreach",
    body: "Communicate with college staffs in a way that starts real conversations instead of getting deleted.",
    icon: MessagesSquare,
  },
  {
    title: "Recruiting network",
    body: "Relationships across college athletics — current and former coaches, and people who work inside the game.",
    icon: Waypoints,
  },
  {
    title: "Film & player evaluation",
    body: "An honest read on how your athlete projects right now, what a coach sees, and what needs to improve.",
    icon: Camera,
  },
  {
    title: "Ongoing guidance",
    body: "Someone to call when a coach emails, an offer comes in — or when nothing happens at all.",
    icon: HeartHandshake,
  },
];

export function ServicesSection() {
  return (
    <section className="bg-[#F3F4F6] px-5 py-[72px] sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#155DFC]">
            What we do
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-[#101828] sm:text-5xl">
            Imagine having a <span className="text-[#155DFC]">100-coach recruiting team</span> behind your athlete.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#4A5565]">
            Not a database login. Not a mass-email blast. People who've sat on the other side of the
            recruiting desk, working the process with you.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map(({ title, body, icon: Icon }) => (
            <div
              key={title}
              className="rounded-[1.4rem] border border-[#E5E7EB] bg-white p-6 shadow-[0_2px_10px_rgba(16,24,40,0.04)] transition hover:-translate-y-1 hover:shadow-[0_20px_36px_-20px_rgba(16,24,40,0.32)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EFF6FF] text-[#155DFC]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-extrabold tracking-[-0.02em] text-[#101828]">{title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-[#4A5565]">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[1.5rem] bg-[#101828] px-6 py-9 text-center sm:px-8">
          <p className="text-2xl font-extrabold tracking-[-0.03em] text-white sm:text-3xl">
            We don't hand you software and tell you to figure it out.
          </p>
          <p className="mt-2 text-xl font-extrabold tracking-[-0.03em] text-[#74A0FD] sm:text-2xl">
            We work through the process with you.
          </p>
        </div>
      </div>
    </section>
  );
}
