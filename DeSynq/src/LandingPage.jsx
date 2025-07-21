import './landingpage.css'
function LandingPage () {


    function NavBar ()
    {
        return (<>
        <nav className="navbar">
            <div className="navbar-brand">
                {/* <img src={logo} alt="logo" /> */}
                <h1>DeSynq</h1>
            </div>
            <div className="navbar-links">
                <div className="navbar-links-centre">
                    <a href="#">About</a>
                    <a href="#">Features</a>
                    <a href="#">Solutions</a>
                </div>
                <div className="navbar-links-right">
                    <button><a href="#">SignIn</a></button>
                    <button><a href="#">Get Started</a></button>
                </div>
            </div>
        </nav>
        </>);
    }
    function About () {
        return (
        <div className="about">
            <p>Built for DAOs • NFT Guilds • Onchain Teams</p>
            <h1 className="">
              Power Your{" "}
              <span className="">
                Organization
              </span>{" "}
              Like a Protocol.
            </h1>
            <p>From member management to treasury automation, DeSynq gives DAOs the tools to run like scalable,
              global companies—without losing decentralization.</p>
            <button>Get Started</button>
    
        </div>
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
    
    return(<>
    <NavBar />
    <About />
    
    </>);
}


export default LandingPage;