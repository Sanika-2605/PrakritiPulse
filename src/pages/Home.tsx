import { Link } from "react-router-dom";
import heroBackground from "@/assets/ayurvedic-hero-bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
            Discover Your
            <span className="text-accent block mt-2">Ayurvedic Balance</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 slide-up opacity-90">
            Personalized wellness recommendations based on ancient Ayurvedic wisdom
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/register"
              className="btn-primary text-lg px-8 py-4 scale-in"
            >
              Start Your Journey
            </Link>
            <Link
              to="/quiz"
              className="btn-secondary text-lg px-8 py-4 scale-in bg-white/20 hover:bg-white/30 text-white border-white/30"
            >
              Take Prakriti Quiz
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Your Path to Wellness
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-ayurvedic text-center hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4">🧘</div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Prakriti Assessment</h3>
              <p className="text-muted-foreground">
                Discover your unique constitution through our comprehensive Dosha analysis
              </p>
            </div>
            <div className="card-ayurvedic text-center hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Herbal Recommendations</h3>
              <p className="text-muted-foreground">
                Get personalized herb suggestions based on your symptoms and constitution
              </p>
            </div>
            <div className="card-ayurvedic text-center hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4">💚</div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Symptom Analysis</h3>
              <p className="text-muted-foreground">
                Analyze your symptoms with our intelligent assessment system
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl mb-8 text-muted-foreground">
            Join thousands who have discovered their path to natural wellness
          </p>
          <Link
            to="/register"
            className="btn-primary text-lg px-8 py-4 pulse-glow"
          >
            Begin Your Assessment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;