import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  const highlights = [
    {
      icon: Users,
      title: "Unity Among Marylanders",
      description: "Establishing a strong social network between and among members of the Association to foster unity."
    },
    {
      icon: Target,
      title: "Development Projects",
      description: "Soliciting funds and resources for humanitarian and development projects in Maryland County, Liberia."
    },
    {
      icon: Award,
      title: "Educational & Social Support",
      description: "Enhancing and promoting the educational, social and economic well-being of Marylanders."
    },
    {
      icon: Calendar,
      title: "Strategic Partnerships",
      description: "Establishing partnerships with non-profit organizations in Minnesota and elsewhere with similar objectives."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-hero-from/90 to-hero-to/80" />
        </div>
        <div className="relative container mx-auto px-4 text-center text-primary-foreground z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Maryland County Association of Minnesota
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-95">
            MCAM
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            A community of Marylanders in Minnesota united to foster educational, social, and economic development for our homeland.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent-hover">
              <Link to="/about">Learn More</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground hover:bg-primary-foreground/20">
              <Link to="/contact">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              We are a group of citizens hailing from Maryland County in Liberia and residing in the State of Minnesota. 
              We have identified the need to foster unity amongst us and to provide educational, social, and economic 
              assistance and to formulate and implement projects/programs for Marylanders.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-semibold">
              Our Motto: THE LIGHT SHALL CONTINUE TO SHINE.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{highlight.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {highlight.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-hover">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Join Our Community
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Connect with fellow Marylanders in Minnesota and contribute to the development of Maryland County, Liberia.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent-hover">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
