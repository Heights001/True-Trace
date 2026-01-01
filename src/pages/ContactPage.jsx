import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const ContactPage = () => {
  return (
     <div className="min-h-screen bg-[#0f0f1a] text-[#cfd8dc] font-mono relative overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 px-6 gap-6">
        <h1 className="text-5xl md:text-5xl font-semi-bold text-[#00ffe5]">
          Get in <span className="text-[#ff00ff]">Touch</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-[#cfd8dc]/80">
          Whether you have questions, feedback, partnership ideas, or support requests —  
          we're here to help. Reach out and we’ll get back to you shortly.
        </p>
      </section>

      {/* Contact Cards */}
      <section className="px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        {/* Email */}
        <div className="bg-[#111122]/70 border border-[#00ffe5]/40 p-6 rounded-lg text-center backdrop-blur-md">
          <h3 className="text-xl font-semibold text-[#00ffe5] mb-2">Email Us</h3>
          <p className="text-[#cfd8dc]/80 mb-3">
            General inquiries & support
          </p>
          <a
            href="mailto:support@truthanalyzer.com"
            className="text-[#ff00ff] underline hover:text-[#ff00ff]/80 transition"
          >
            support@truetrace.com
          </a>
        </div>

        {/* Business */}
        <div className="bg-[#111122]/70 border border-[#ff00ff]/40 p-6 rounded-lg text-center backdrop-blur-md">
          <h3 className="text-xl font-semibold text-[#ff00ff] mb-2">Partnerships</h3>
          <p className="text-[#cfd8dc]/80 mb-3">
            Business, licensing, and enterprise integration
          </p>
          <a
            href="mailto:business@truthanalyzer.com"
            className="text-[#00ffe5] underline hover:text-[#00ffe5]/80 transition"
          >
            business@truetrace.com
          </a>
        </div>

        {/* Support */}
        <div className="bg-[#111122]/70 border border-[#00aaff]/40 p-6 rounded-lg text-center backdrop-blur-md">
          <h3 className="text-xl font-semibold text-[#00aaff] mb-2">Tech Support</h3>
          <p className="text-[#cfd8dc]/80 mb-3">
            Issues, bugs, and troubleshooting
          </p>
          <a
            href="mailto:help@truthanalyzer.com"
            className="text-[#00ffe5] underline hover:text-[#00ffe5]/80 transition"
          >
            help@truetrace.com
          </a>
        </div>

      </section>

      {/* Contact Form */}
      <section className="px-6 py-16 max-w-3xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-[#ff00ff] mb-8">
          Send Us a Message
        </h2>

        <form className="bg-[#111122]/70 border border-[#00ffe5]/30 p-8 rounded-lg backdrop-blur-md space-y-6">

          <div>
            <label className="block text-[#cfd8dc]/70 mb-2">Your Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded bg-[#0f0f1a] border border-[#00ffe5]/30 text-[#cfd8dc] focus:border-[#00ffe5] focus:outline-none"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-[#cfd8dc]/70 mb-2">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded bg-[#0f0f1a] border border-[#ff00ff]/30 text-[#cfd8dc] focus:border-[#ff00ff] focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-[#cfd8dc]/70 mb-2">Message</label>
            <textarea
              rows="5"
              className="w-full px-4 py-3 rounded bg-[#0f0f1a] border border-[#00aaff]/30 text-[#cfd8dc] focus:border-[#00aaff] focus:outline-none"
              placeholder="Tell us how we can help you"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#ff00ff] hover:bg-[#ff00ff]/80 text-white font-semibold rounded transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default ContactPage