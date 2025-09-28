import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/ui/footer";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Building } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    countryCode: "+91",
    contactNo: "",
    email: "",
    companyName: "",
    businessGroup: "",
    category: "",
    message: "",
    captcha: ""
  });

  const [wordCount, setWordCount] = useState(0);
  const maxWords = 250;

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const words = e.target.value.trim().split(/\s+/).filter(word => word.length > 0);
    if (words.length <= maxWords) {
      setWordCount(words.length);
      setFormData({ ...formData, message: e.target.value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be handled by your Express.js backend
    console.log("Form data:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-techcorp-dark mb-6 sm:mb-8 text-center">
            Contact Us
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-techcorp-dark">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input 
                        id="firstName" 
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="countryCode">Country Code *</Label>
                      <Select value={formData.countryCode} onValueChange={(value) => setFormData({ ...formData, countryCode: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select country code" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="+91">India (+91)</SelectItem>
                          <SelectItem value="+1">USA (+1)</SelectItem>
                          <SelectItem value="+44">UK (+44)</SelectItem>
                          <SelectItem value="+49">Germany (+49)</SelectItem>
                          <SelectItem value="+86">China (+86)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="contactNo">Contact No. *</Label>
                      <Input 
                        id="contactNo" 
                        required
                        type="tel"
                        value={formData.contactNo}
                        onChange={(e) => setFormData({ ...formData, contactNo: e.target.value })}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input 
                      id="companyName" 
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="businessGroup">Business Group *</Label>
                      <Select value={formData.businessGroup} onValueChange={(value) => setFormData({ ...formData, businessGroup: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Business" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="zinc-recycling">Zinc Recycling</SelectItem>
                          <SelectItem value="battery-recycling">Battery Recycling</SelectItem>
                          <SelectItem value="catalyst-recycling">Catalyst Recycling</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="category">Category *</Label>
                      <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="waste-processing">Waste Processing</SelectItem>
                          <SelectItem value="metal-supply">Metal Supply</SelectItem>
                          <SelectItem value="consultation">Consultation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Message *"
                      className="min-h-[120px]"
                      required
                      value={formData.message}
                      onChange={handleMessageChange}
                    />
                    <div className="text-sm text-gray-500 mt-1">
                      [Total Words Remaining: {maxWords - wordCount}]
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="captcha">Enter Captcha *</Label>
                    <div className="flex gap-4 items-center">
                      <Input 
                        id="captcha" 
                        placeholder="Enter Captcha *"
                        required
                        value={formData.captcha}
                        onChange={(e) => setFormData({ ...formData, captcha: e.target.value })}
                        className="flex-1"
                      />
                      <div className="bg-gray-100 px-4 py-2 rounded border text-lg font-mono">
                        eight - 8 = ?
                      </div>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="text-techcorp-green mt-1 h-5 w-5" />
                      <div>
                        <h4 className="font-bold text-techcorp-dark mb-2">Address</h4>
                        <p className="text-gray-700">
                          TECHCORP Industries Ltd., Dummy Plaza, 10th Floor,<br />
                          Lorem Street, Building 42,<br />
                          Sample Business District,<br />
                          Demo City, DC - 12345, USA
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Phone className="text-techcorp-green mt-1 h-5 w-5" />
                      <div>
                        <h4 className="font-bold text-techcorp-dark mb-2">Phone Number</h4>
                        <p className="text-gray-700">+1 555 123 4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Mail className="text-techcorp-green mt-1 h-5 w-5" />
                      <div>
                        <h4 className="font-bold text-techcorp-dark mb-2">Email Address</h4>
                        <p className="text-gray-700">info@dummycompany.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Building className="text-techcorp-green mt-1 h-5 w-5" />
                      <div>
                        <h4 className="font-bold text-techcorp-dark mb-2">Corporate Identity No</h4>
                        <p className="text-gray-700">TC12345DM2020PTC987654</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;