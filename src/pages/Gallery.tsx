import G1 from "@/assets/G1.jpg";
import G2 from "@/assets/G2.jpg";
import G3 from "@/assets/G3.jpg";
import G4 from "@/assets/G4.jpg";
import G5 from "@/assets/G5.jpg";
import G6 from "@/assets/G6.jpg";
import G7 from "@/assets/G7.jpg";
import G8 from "@/assets/G8.jpg";
import G9 from "@/assets/G9.jpg";
import G10 from "@/assets/G10.jpg";
import G11 from "@/assets/G11.jpg";
import G12 from "@/assets/G12.jpg";
import G13 from "@/assets/G13.jpg";
import G14 from "@/assets/G14.jpg";
import G15 from "@/assets/G15.jpg";

const Gallery = () => {
  const images = [
    {
      src: G1,
      alt: "Community meeting with diverse stakeholders",
      title: "Strategic Planning Session"
    },
    {
      src: G2,
      alt: "Networking event with county officials",
      title: "Annual Conference Networking"
    },
    {
      src: G3,
      alt: "Community service project volunteers",
      title: "Community Engagement Initiative"
    },
    {
      src: G4,
      alt: "Professional development workshop",
      title: "Leadership Development Workshop"
    },
    {
      src: G5,
      alt: "County officials collaboration",
      title: "Policy Forum Discussion"
    },
    {
      src: G6,
      alt: "Community outreach event",
      title: "Community Outreach Program"
    },
    {
      src: G7,
      alt: "Leadership training session",
      title: "Leadership Excellence Training"
    },
    {
      src: G8,
      alt: "Annual conference main hall",
      title: "Annual County Conference"
    },
    {
      src: G9,
      alt: "Strategic planning meeting",
      title: "Strategic Planning Meeting"
    },
    {
      src: G10,
      alt: "Community engagement gathering",
      title: "Community Gathering"
    },
    {
      src: G11,
      alt: "Professional networking reception",
      title: "Networking Reception"
    },
    {
      src: G12,
      alt: "Educational workshop presentation",
      title: "Educational Workshop"
    },
    {
      src: G13,
      alt: "Volunteer service day",
      title: "County Services Day"
    },
    {
      src: G14,
      alt: "Regional collaboration meeting",
      title: "Regional Collaboration"
    },
    {
      src: G15,
      alt: "Community celebration event",
      title: "Community Celebration"
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Explore moments from our events, initiatives, and the vibrant community we've built together.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow aspect-[4/3]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-primary-foreground font-semibold text-lg">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section Placeholder */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Video Highlights</h2>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground text-center px-4">
                Video content coming soon. Check back for highlights from our recent events and initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Share Your Moments</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have photos from our events? We'd love to feature them in our gallery. 
            Contact us to share your images and stories with our community.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
