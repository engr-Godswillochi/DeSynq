
import React from "react";
import { Shield, Users, Zap, Globe, Lock, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

function Button({ children, variant = "solid", className = "", ...props }) {
  const baseClass =
    variant === "outline"
      ? "border-purple-500 text-purple-300 hover:bg-purple-500/10 px-8 py-3 text-lg bg-transparent"
      : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white px-8 py-3 text-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-400/40";

  return (
    <button className={`${baseClass} ${className} rounded-lg font-medium`} {...props}>
      {children}
    </button>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-full text-sm font-medium">
      {children}
    </span>
  );
}

function Card({ icon: Icon, title, description }) {
  return (
    <div className="p-6 bg-gradient-to-br from-black via-purple-900/40 to-black border border-purple-400/40 hover:border-pink-400/60 transition-all duration-300 rounded-lg hover:shadow-lg hover:shadow-purple-500/20">
      <div className="w-12 h-12 mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-base">{description}</p>
    </div>
  );
}

function LandingPage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-purple-400/30 bg-black/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">DeSynq</span>
          </div>
          <div className="hidden md:flex space-x-6 text-gray-300">
            <a href="#about" className="hover:text-purple-400">About</a>
            <a href="#features" className="hover:text-purple-400">Features</a>
            <a href="#solutions" className="hover:text-purple-400">Solutions</a>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline">Sign In</Button>
            <Button className="hidden md:inline-flex">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-24 text-center" id="about">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-pink-500/20 to-purple-800/40"></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative max-w-4xl mx-auto px-4 z-10">
          <Badge>Built for DAOs, NFT Guilds & Web3 Teams</Badge>
          <h1 className="mt-6 text-5xl font-bold leading-tight">
            Empower Your{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              DAO
            </span>{" "}
            to Operate Like a Protocol
          </h1>
          <p className="mt-6 text-xl text-gray-300">
            Automate decisions, manage members, and coordinate treasury ops without sacrificing decentralization.
          </p>
          <div className="mt-10 flex justify-center space-x-4 flex-wrap">
            <Button>Try Free</Button>
            <Button variant="outline">Watch Demo</Button>
          </div>
          <div className="mt-16 mx-auto max-w-xl">
            <img
              src="/src/assets/dashboard.jpeg"
              alt="Dashboard Mockup"
              className="rounded-xl border border-purple-500/30 shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Powerful Features for{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Modern DAOs
              </span>
            </h2>
            <p className="mt-4 text-gray-300 text-lg">
              DeSynq makes running decentralized organizations simple and scalable.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card icon={Shield} title="Secure Governance" description="Multi-sig voting with smart contract enforcement for peace of mind." />
            <Card icon={Users} title="Member Management" description="Role-based permissions, seamless onboarding, and blockchain identity." />
            <Card icon={Zap} title="Workflow Automation" description="Automate repetitive tasks with custom on-chain triggers and flows." />
            <Card icon={Globe} title="Global Access" description="Decentralized access for teams worldwide, anytime." />
            <Card icon={Lock} title="Private & Secure" description="End-to-end encryption and zkProofs ensure full confidentiality." />
            <Card icon={TrendingUp} title="Analytics & Insights" description="Real-time dashboards keep your DAO's growth visible and measurable." />
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-20 bg-gradient-to-r from-black via-purple-950/20 to-black">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge>Solutions</Badge>
            <h2 className="mt-4 text-4xl font-bold">
              Ready for{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Any Blockchain Team
              </span>
            </h2>
            <p className="mt-4 text-gray-300 text-lg">
              Whether you're running a DAO, NFT community, or DeFi protocol, DeSynq adapts to your needs.
            </p>
            <ul className="mt-8 space-y-4 text-gray-300">
              {[
                "DAOs and Protocol Treasuries",
                "NFT Communities and Creators",
                "Web3 Startups and Dev Guilds",
                "Decentralized Freelance Teams",
              ].map((solution, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
                  {solution}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src="/src/assets/solutions.jpeg"
              alt="Solutions Screenshot"
              className="rounded-xl shadow-xl border border-purple-500/30"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-purple-400/30 bg-black text-gray-400 text-center text-sm">
        © 2025 DeSynq. All rights reserved.
      </footer>
    </div>
  );
}

export default LandingPage;