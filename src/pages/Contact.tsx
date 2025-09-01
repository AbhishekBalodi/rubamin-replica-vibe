import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/ui/footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-rubamin-dark mb-8 text-center">
            Contact Us
          </h1>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-rubamin-dark">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Enter your company name" />
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Enter subject" />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your requirements..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full bg-rubamin-green hover:bg-rubamin-green/90 text-white">
                  Send Message
                </Button>
              </CardContent>
            </Card>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-rubamin-dark">Office Locations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-bold text-rubamin-dark mb-2">Head Office - Mumbai</h4>
                    <p className="text-gray-700">
                      Office 1105, 11th Floor, Lodha Supremus<br />
                      Road No. 22, Wagle Estate<br />
                      Thane (West) - 400 604<br />
                      Maharashtra, India
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-rubamin-dark mb-2">Manufacturing Plant - Gujarat</h4>
                    <p className="text-gray-700">
                      75 Acres Green Recycling Complex<br />
                      Bharuch, Gujarat<br />
                      India
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-rubamin-dark">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-rubamin-green">📧</span>
                    <span>info@rubamin.com</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className="text-rubamin-green">📞</span>
                    <span>+91 22 6184 9300</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className="text-rubamin-green">🌐</span>
                    <span>www.rubamin.com</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-rubamin-dark">Business Inquiries</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    For partnerships, waste processing solutions, or strategic metal supply requirements, 
                    reach out to our business development team.
                  </p>
                  <Button variant="outline" className="border-rubamin-green text-rubamin-dark hover:bg-rubamin-green hover:text-white">
                    Schedule a Consultation
                  </Button>
                </CardContent>
              </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default Contact;