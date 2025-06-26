'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, User, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    serviceType: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      serviceType: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+92-21-1234-5678', '+92-300-1234567 (WhatsApp)'],
      color: 'emerald'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: ['info@paktravel.com', 'bookings@paktravel.com'],
      color: 'blue'
    },
    {
      icon: MapPin,
      title: 'Office Address',
      details: ['123 Main Street, Block A', 'Gulshan-e-Iqbal, Karachi, Pakistan'],
      color: 'purple'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Sat: 9:00 AM - 8:00 PM', 'Sunday: 10:00 AM - 6:00 PM'],
      color: 'amber'
    }
  ];

  const offices = [
    {
      city: 'Karachi',
      address: '123 Main Street, Gulshan-e-Iqbal',
      phone: '+92-21-1234-5678',
      email: 'karachi@paktravel.com',
      isMain: true
    },
    {
      city: 'Lahore',
      address: '456 Mall Road, Gulberg III',
      phone: '+92-42-9876-5432',
      email: 'lahore@paktravel.com',
      isMain: false
    },
    {
      city: 'Islamabad',
      address: '789 Blue Area, F-6 Sector',
      phone: '+92-51-1111-2222',
      email: 'islamabad@paktravel.com',
      isMain: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-800 to-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-emerald-200 mb-6">
            Get in touch with our travel experts for personalized assistance
          </p>
          <div className="flex items-center justify-center space-x-6 text-emerald-200">
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center">
              <MessageCircle className="h-5 w-5 mr-2" />
              <span>WhatsApp Available</span>
            </div>
            <div className="flex items-center">
              <Globe className="h-5 w-5 mr-2" />
              <span>Multiple Languages</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-emerald-800">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          type="text"
                          placeholder="Enter your full name"
                          className="pl-10"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          className="pl-10"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          type="tel"
                          placeholder="+92 300 1234567"
                          className="pl-10"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                      <Select value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="flights">Flight Booking</SelectItem>
                          <SelectItem value="hajj">Hajj Packages</SelectItem>
                          <SelectItem value="umrah">Umrah Packages</SelectItem>
                          <SelectItem value="packages">Travel Packages</SelectItem>
                          <SelectItem value="visa">Visa Services</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <Input
                      type="text"
                      placeholder="Enter message subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <Textarea
                      placeholder="Tell us about your travel requirements..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-emerald-800">Quick Contact</CardTitle>
                <CardDescription>Get immediate assistance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => window.open('https://wa.me/923001234567', '_blank')}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp Chat
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('tel:+922112345678', '_self')}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <Card key={idx}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className={`bg-${info.color}-100 p-2 rounded-lg`}>
                        <info.icon className={`h-5 w-5 text-${info.color}-600`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                        {info.details.map((detail, detailIdx) => (
                          <p key={detailIdx} className="text-sm text-gray-600">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Office Locations</h2>
            <p className="text-xl text-gray-600">Visit us at any of our convenient locations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, idx) => (
              <Card key={idx} className={`relative ${office.isMain ? 'border-emerald-500 border-2' : ''}`}>
                {office.isMain && (
                  <div className="absolute -top-3 left-4">
                    <Badge className="bg-emerald-500">Main Office</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-emerald-800">{office.city}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-gray-400 mt-1" />
                    <p className="text-sm text-gray-600">{office.address}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <p className="text-sm text-gray-600">{office.phone}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <p className="text-sm text-gray-600">{office.email}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16 bg-emerald-50 rounded-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-emerald-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What are your payment options?</h3>
              <p className="text-sm text-gray-600 mb-4">We accept cash, bank transfers, credit/debit cards, and installment plans for Hajj & Umrah packages.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Do you provide visa assistance?</h3>
              <p className="text-sm text-gray-600 mb-4">Yes, we provide complete visa assistance for all destinations including documentation and application processing.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Can I modify my booking?</h3>
              <p className="text-sm text-gray-600 mb-4">Yes, bookings can be modified subject to airline/hotel policies and applicable charges.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Do you offer travel insurance?</h3>
              <p className="text-sm text-gray-600 mb-4">Yes, we offer comprehensive travel insurance options to protect your trip investment.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}