import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-[#0f0f1a] text-[#cfd8dc] font-mono">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-[#00ffe5] mb-6">Terms of Service</h1>

        <p className="mb-4">
          Welcome to True_Trace. By accessing or using our services, you agree to be bound by these Terms of Service.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-[#ff00ff] mb-2">1. Acceptance of Terms</h2>
          <p className="text-[#cfd8dc]/80">
            By using our platform, you acknowledge that you have read, understood, and agree to these terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-[#00aaff] mb-2">2. Account Responsibilities</h2>
          <p className="text-[#cfd8dc]/80">
            You are responsible for maintaining the confidentiality of your account and any activities under it.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-[#ff00ff] mb-2">3. Use of Service</h2>
          <p className="text-[#cfd8dc]/80">
            You agree to use True_Trace only for lawful purposes and not to misuse our services or attempt to harm the platform.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-[#00aaff] mb-2">4. Limitation of Liability</h2>
          <p className="text-[#cfd8dc]/80">
            True_Trace is provided "as-is." We are not liable for any damages resulting from your use of the service.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-[#ff00ff] mb-2">5. Modifications</h2>
          <p className="text-[#cfd8dc]/80">
            We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of the new terms.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
