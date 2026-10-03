import Link from "next/link";
import { Title, Badge, Button } from "../../components/ui";
import Icon from "../../components/Icon";

const departments = [
  { num: "01", icon: "users" as const, title: "Student Support", status: "DESK OPEN", desc: "School life ka koi bhi confusing matter. Sunenge, samjhenge, aur sensible next step dhoondhenge." },
  { num: "02", icon: "home" as const, title: "Hostel Life Support", status: "24/7-ISH", desc: "Room, routine, roommate ya mess-related civilization crisis ke liye." },
  { num: "03", icon: "users" as const, title: "Friendship Issues", status: "NO GOSSIP ZONE", desc: "Misunderstanding aur group dynamics. Gossip nahi, practical support milega." },
  { num: "04", icon: "brain" as const, title: "Study Pressure", status: "HIGH PRIORITY", desc: "Deadlines, exams aur 'kitna syllabus hua?' ke pressure ko manage karne mein help." },
  { num: "05", icon: "file" as const, title: "General School Problems", status: "BROAD JURISDICTION", desc: "Jo category list mein fit na ho, woh yahan safely fit ho jayega.", darkBadge: true },
  { num: "06", icon: "search" as const, title: "Jooda Related Situations", status: "MYSTERIOUS", desc: "Is category ka exact meaning case dekhne ke baad hi department decide karega." }
];

export default function ServicesPage() {
  return (
    <main>
      <section className="section py-24 text-center flex flex-col items-center">
        <span className="text-[#f04f2f] text-[11px] font-extrabold tracking-widest uppercase mb-6 block">Support Directory</span>
        <Title as="h1" className="text-5xl md:text-[6.5rem] font-black tracking-tighter leading-[1.05] mb-6 max-w-4xl mx-auto">
          Har situation ke liye ek department.
        </Title>
        <p className="text-[#6d6b65] text-lg max-w-2xl mx-auto">
          Problem choose karo. Perfect category na mile toh tension nahi — 'General' department kaafi adaptable hai.
        </p>
      </section>

      <section className="section pb-24">
        <div className="grid md:grid-cols-2 gap-6">
          {departments.map((dept) => (
            <Link href="/submit" key={dept.num} className="block group">
              <article className="bg-white border border-[#dedbd3] rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#fff0eb] text-[#f04f2f] flex items-center justify-center">
                    <Icon name={dept.icon} size={22} />
                  </div>
                  <span className="text-gray-300 font-bold text-lg">{dept.num}</span>
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold tracking-tight">{dept.title}</h3>
                  <Badge tone={dept.darkBadge ? "dark" : "neutral"}>{dept.status}</Badge>
                </div>
                
                <p className="text-[#6d6b65] leading-relaxed mb-10 flex-grow">
                  {dept.desc}
                </p>
                
                <div className="flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:text-[#f04f2f] transition-colors mt-auto">
                  Is Problem Ke Liye Form Bharein <Icon name="arrow" size={16} />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="section pb-24">
        <div className="bg-[#181816] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-white">
            <div className="text-[#f04f2f]"><Icon name="info" size={28} /></div>
            <div>
              <h4 className="text-xl font-bold">Category samajh nahi aa rahi?</h4>
              <p className="text-gray-400 text-sm mt-1">Koi baat nahi. "Other" choose karo. Department ko thoda detective work pasand hai.</p>
            </div>
          </div>
          <Link href="/submit" className="shrink-0">
            <button className="bg-black border border-black !text-white rounded-xl px-6 py-3 font-bold hover:bg-white hover:!text-black transition">
              Form Open Karo
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}