import { Title } from "../../components/ui";
import Icon from "../../components/Icon";

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="section py-24 text-center flex flex-col items-center">
        <span className="text-[#f04f2f] text-[11px] font-extrabold tracking-widest uppercase mb-6 block">About The Department</span>
        <Title as="h1" className="text-6xl md:text-[7rem] font-black tracking-tighter leading-none mb-6">Samadhaan Hai Kya?</Title>
        <p className="text-[#6d6b65] text-lg max-w-2xl mx-auto">
          Ek serious-looking initiative, students ki real problems ke liye — paperwork thoda extra hai, intention bilkul sahi.
        </p>
      </section>

      {/* Definition Section */}
      <section className="section py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-[#f04f2f] text-[11px] font-extrabold tracking-widest uppercase mb-4 block">Official Definition</span>
          <Title as="h2" className="text-4xl md:text-5xl leading-tight font-extrabold tracking-tight">
            SAMADHAAN ek <span className="text-[#f04f2f]">fictional student-support initiative</span> hai jo school life ki problems ko sunne, samajhne aur unke baare mein support dene ke liye banaya gaya hai.
          </Title>
        </div>
        <div className="bg-[#181816] text-white p-10 rounded-2xl shadow-xl">
          <div className="text-[#f04f2f] mb-6"><Icon name="info" size={24} /></div>
          <p className="text-xl md:text-2xl font-medium leading-snug mb-8">
            “Hum har problem solve nahi kar sakte. Lekin usse ek official case number zaroor de sakte hain.”
          </p>
          <p className="text-gray-500 text-sm">— SAMADHAAN Handbook, Page 1</p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-[#181816] text-white py-24 mt-12">
        <div className="section">
          <span className="text-[#f04f2f] text-[11px] font-extrabold tracking-widest uppercase mb-4 block">Hamari Philosophy</span>
          <Title as="h2" className="text-5xl md:text-7xl font-black tracking-tighter mb-16 max-w-3xl">Principles. Kaafi solid wale.</Title>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "users" as const, title: "Listen First", sub: "Judge Later" },
              { icon: "file" as const, title: "Problem Serious Hai", sub: "Humara UI Serious Hai" },
              { icon: "brain" as const, title: "Student First", sub: "Drama Later" }
            ].map((p, i) => (
              <div key={i} className="border border-white/10 rounded-2xl p-8 hover:bg-white/5 transition">
                <div className="text-[#f04f2f] mb-12"><Icon name={p.icon} size={28} /></div>
                <h3 className="text-2xl font-bold">{p.title}</h3>
                <p className="text-gray-400 text-xl font-medium">{p.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Command Chain Section */}
      <section className="section py-24 text-center flex flex-col items-center">
        <span className="text-[#f04f2f] text-[11px] font-extrabold tracking-widest uppercase mb-4 block">Organizational Structure</span>
        <Title as="h2" className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Command ka chain.</Title>
        <p className="text-[#6d6b65] text-lg mb-16">Har important organization ke paas hierarchy hoti hai. Hamare paas bhi hai.</p>

        <div className="flex flex-col items-center max-w-2xl w-full">
          {[
            { level: "LEVEL 01", title: "SAMADHAAN HQ", dark: false },
            { level: "LEVEL 02", title: "Support Department", dark: false },
            { level: "LEVEL 03", title: "Investigation Department", dark: false },
            { level: "LEVEL 04", title: "Tea Department", sub: "Critical infrastructure", dark: true },
          ].map((node, i) => (
            <div key={i} className="w-full flex flex-col items-center">
              <div className={`w-full p-8 rounded-xl border ${node.dark ? 'bg-[#181816] text-white border-transparent' : 'bg-white border-[#dedbd3] shadow-sm'}`}>
                <p className={`text-[9px] font-bold tracking-widest uppercase mb-2 ${node.dark ? 'text-gray-400' : 'text-gray-400'}`}>{node.level}</p>
                <h4 className="text-xl font-bold">{node.title}</h4>
                {node.sub && <p className="text-sm text-gray-400 mt-1">{node.sub}</p>}
              </div>
              {i < 3 && <div className="text-[#f04f2f] py-4"><Icon name="arrow" size={20} /></div>}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}