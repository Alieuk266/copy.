import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { History, Target, Heart, Users } from "lucide-react";
import presidentImage from "@/assets/p.jpg";
import vicePresidentImage from "@/assets/v.jpg";

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About MCAM</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            THE LIGHT SHALL CONTINUE TO SHINE
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <History className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Preamble</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                We, a group of citizens hailing from Maryland County in Liberia and residing in the State of Minnesota, 
                have identified the need to foster unity amongst us and to provide educational, social, and economic 
                assistance and to also formulate and implement projects/programs for Marylanders.
                <br /><br />
                Therefore, we do hereby constitute ourselves into a non-profit, non-political and non-governmental 
                organization, under the laws of the State of Minnesota and subscribing to the constitution and by-laws 
                of the National Maryland Association of Liberia, USA (NAMCAL), and declare this constitution as the 
                organic laws of this Association.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Aims and Objectives</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                  <CardDescription className="text-base">
                    To enhance and promote the educational, social and economic well-being of Marylanders.
                  </CardDescription>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                  <CardDescription className="text-base">
                    To establish a strong social network between and among members of the Association.
                  </CardDescription>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                  <CardDescription className="text-base">
                    To solicit funds and other items for the purpose of embarking on various humanitarian 
                    and development projects in Maryland County.
                  </CardDescription>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                  <CardDescription className="text-base">
                    To establish partnerships with other non-profit organizations in the State of Minnesota 
                    and elsewhere that have similar objectives.
                  </CardDescription>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Organization Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Organization</h2>
          <div className="max-w-2xl mx-auto text-center">
            <CardDescription className="text-base leading-relaxed">
              MCAM is a non-profit, non-political and non-governmental organization operating under the laws 
              of the State of Minnesota. We subscribe to the constitution and by-laws of the National Maryland 
              Association of Liberia, USA (NAMCAL). Our association is dedicated to serving the needs of 
              Marylanders in Minnesota while supporting development initiatives in Maryland County, Liberia.
            </CardDescription>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* President */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-primary/20">
                  <img 
                    src={presidentImage} 
                    alt="President Lydia Wuo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-2xl">President</CardTitle>
                <CardDescription className="text-lg font-semibold text-foreground">
                  Lydia Wuo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-center">
                  Leading MCAM with dedication to unite Marylanders in Minnesota and support development initiatives in Maryland County, Liberia.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Vice President */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-primary/20">
                  <img 
                    src={vicePresidentImage} 
                    alt="Vice President Ernest Kwia" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-2xl">Vice President</CardTitle>
                <CardDescription className="text-lg font-semibold text-foreground">
                  Ernest Kwia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-center">
                  Supporting the mission to foster educational, social, and economic well-being of Marylanders in Minnesota.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
