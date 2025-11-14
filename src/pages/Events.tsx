import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import event1Image from "@/assets/event-1.jpg";
import event2Image from "@/assets/event-2.jpg";
import pastEvent1Image from "@/assets/past-event-1.jpg";
import pastEvent2Image from "@/assets/past-event-2.jpg";
import pastEvent3Image from "@/assets/past-event-3.jpg";

const Events = () => {
  const events = [
    {
      title: "Annual Community Fundraising Gala",
      date: "March 15, 2024",
      location: "Minneapolis Convention Center",
      category: "Fundraiser",
      description: "Join us for an elegant evening of dining, networking, and fundraising to support educational and development projects in Maryland County, Liberia. This annual gala brings together Marylanders in Minnesota for a night of unity and purpose.",
      image: event1Image
    },
    {
      title: "Maryland County Cultural Celebration",
      date: "June 22, 2024",
      location: "Lake Harriet Park, Minneapolis",
      category: "Cultural Event",
      description: "Celebrate Maryland County heritage with traditional music, dance, food, and cultural displays. This outdoor festival showcases the rich traditions of our homeland and strengthens bonds within our community here in Minnesota.",
      image: event2Image
    }
  ];

  const pastEvents = [
    {
      title: "MCAM General Assembly Meeting",
      date: "November 18, 2023",
      location: "Brooklyn Park Community Center",
      category: "Meeting",
      description: "Our quarterly general assembly brought together MCAM members to discuss organizational priorities, review financial reports, and plan upcoming projects for Maryland County. Strong attendance demonstrated our community's commitment.",
      image: pastEvent1Image
    },
    {
      title: "Youth Mentorship Workshop",
      date: "September 30, 2023",
      location: "St. Paul Public Library",
      category: "Workshop",
      description: "An educational workshop focused on empowering Marylander youth in Minnesota through mentorship, career guidance, and cultural identity development. Over 40 young people participated in this inspiring session.",
      image: pastEvent2Image
    },
    {
      title: "Summer Family Picnic",
      date: "July 15, 2023",
      location: "Como Park, St. Paul",
      category: "Social Event",
      description: "A wonderful day of fellowship as Marylander families gathered for food, games, and celebration. Children enjoyed activities while adults networked and strengthened community bonds in the beautiful outdoor setting.",
      image: pastEvent3Image
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join us for upcoming MCAM events bringing together Marylanders in Minnesota.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary">{event.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {event.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline">{event.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {event.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
