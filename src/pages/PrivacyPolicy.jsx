import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#0f0f1a] text-[#cfd8dc] font-mono">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-[#00ffe5] mb-6">Privacy Policy</h1>

        <p className="mb-4">
          True_Trace respects your privacy. This policy explains how we collect, use, and protect your data.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-[#ff00ff] mb-2">1. Information We Collect</h2>
          <p className="text-[#cfd8dc]/80">
            We may collect personal information you provide (like name, email) and usage data for analytics purposes.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-[#00aaff] mb-2">2. How We Use Your Data</h2>
          <p className="text-[#cfd8dc]/80">
            Your data is used to improve the service, communicate updates, and ensure security.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-[#ff00ff] mb-2">3. Data Sharing</h2>
          <p className="text-[#cfd8dc]/80">
            We do not sell personal information. Data may be shared with trusted third parties only for service functionality or compliance.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-[#00aaff] mb-2">4. Security</h2>
          <p className="text-[#cfd8dc]/80">
            We implement industry-standard measures to protect your data, but no method is completely secure.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-[#ff00ff] mb-2">5. Your Rights</h2>
          <p className="text-[#cfd8dc]/80">
            You can request access, correction, or deletion of your data at any time by contacting us.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
