import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#0f0f1a] text-[#cfd8dc] font-mono relative overflow-hidden">
        <Navbar />

       {/* Hero / Intro */}
      <section className="flex flex-col items-center text-center py-20 px-6 gap-6">
        <h1 className="text-5xl md:text-4xl font-semi-bold text-[#00ffe5]">
          About <span className="text-[#ff00ff]">True_Trace</span>
        </h1>

        <p className="text-lg md:text-xl max-w-3xl text-[#cfd8dc]/80">
          True_Trace is a next-generation forensic tool built to expose AI-generated media  
          and empower investigators, journalists, creators, and everyday users.  
          Our mission:  
          <span className="text-[#00ffe5] font-semibold"> help the world distinguish real from artificial.</span>
        </p>
      </section>

      {/* Mission Section */}
      <section className="px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#111122]/70 border border-[#00ffe5]/40 p-6 rounded-lg backdrop-blur-md">
          <h2 className="text-2xl font-semibold text-[#00ffe5] mb-3">Our Mission</h2>
          <p className="text-[#cfd8dc]/80 leading-relaxed">
            AI-generated content is evolving faster than detection methods.  
            True_Trace bridges that gap by providing accurate, transparent,
            and developer-friendly detection tools that work across multiple media types.
          </p>
        </div>

        <div className="bg-[#111122]/70 border border-[#ff00ff]/40 p-6 rounded-lg backdrop-blur-md">
          <h2 className="text-2xl font-semibold text-[#ff00ff] mb-3">Why It Matters</h2>
          <p className="text-[#cfd8dc]/80 leading-relaxed">
            As deepfakes and AI-generated misinformation grow, individuals and 
            organizations need reliable ways to verify authenticity.  
            Our platform supports journalists, legal experts, and content creators
            who depend on factual, trustworthy digital evidence.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-12">
        <h2 className="text-center text-3xl font-bold text-[#00ffe5] mb-10">
          Our Core Principles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#111122]/70 border border-[#00ffe5]/40 rounded-lg p-6 text-center backdrop-blur-md">
            <h3 className="text-xl font-semibold text-[#00ffe5] mb-2">Accuracy</h3>
            <p className="text-[#cfd8dc]/80">
              We prioritize precision in every detection, ensuring reliable and 
              transparent results.
            </p>
          </div>

          <div className="bg-[#111122]/70 border border-[#ff00ff]/40 rounded-lg p-6 text-center backdrop-blur-md">
            <h3 className="text-xl font-semibold text-[#ff00ff] mb-2">Privacy First</h3>
            <p className="text-[#cfd8dc]/80">
              Your uploaded media stays secure. We never sell or misuse user data.
            </p>
          </div>

          <div className="bg-[#111122]/70 border border-[#00aaff]/40 rounded-lg p-6 text-center backdrop-blur-md">
            <h3 className="text-xl font-semibold text-[#00aaff] mb-2">Transparency</h3>
            <p className="text-[#cfd8dc]/80">
              No black-box algorithms.  
              We provide insight into how detection decisions are made.
            </p>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="px-6 py-16 bg-[#111122]/40 backdrop-blur-md border-t border-[#00ffe5]/30">
        <h2 className="text-center text-3xl font-bold text-[#ff00ff] mb-10">
          Powered by Advanced Detection
        </h2>

        <p className="max-w-3xl mx-auto text-center text-[#cfd8dc]/80 text-lg leading-relaxed">
          True_Trace combines signal-based image analysis, metadata inspection,  
          forensic noise mapping, color distribution models, and neural comparison methods  
          to determine whether content is AI-generated or authentic.  
          Our goal is to stay ahead of rapidly evolving generative models.
        </p>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default AboutPage