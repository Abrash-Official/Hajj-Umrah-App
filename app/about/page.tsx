'use client';

import { Shield, Award, Users, Globe, Clock, Heart, Plane, MapPin, Star, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function AboutPage() {
  const stats = [
    { number: '15+', label: 'Years Experience', icon: Clock },
    { number: '10,000+', label: 'Happy Customers', icon: Users },
    { number: '50+', label: 'Destinations', icon: Globe },
    { number: '99%', label: 'Customer Satisfaction', icon: Heart }
  ];

  const team = [
    {
      name: 'Muhammad Ahmed',
      role: 'CEO & Founder',
      experience: '20+ years in travel industry',
      specialization: 'International Travel & Hajj Operations',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
    },
    {
      name: 'Fatima Khan',
      role: 'Operations Director',
      experience: '15+ years experience',
      specialization: 'Package Tours & Customer Relations',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg'
    },
    {
      name: 'Ali Hassan',
      role: 'Travel Consultant',
      experience: '12+ years experience',
      specialization: 'Flight Bookings & Visa Services',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg'
    }
  ];

  const certifications = [
    {
      name: 'IATA Certified',
      description: 'International Air Transport Association certified travel agent',
      icon: Plane
    },
    {
      name: 'Government Licensed',
      description: 'Licensed by Pakistan Tourism Development Corporation',
      icon: Shield
    },
    {
      name: 'Hajj & Umrah Authorized',
      description: 'Authorized by Ministry of Religious Affairs for Hajj & Umrah',
      icon: Award
    },
    {
      name: 'ISO Certified',
      description: 'ISO 9001:2015 certified for quality management',
      icon: Star
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-800 to-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About PakTravel</h1>
          <p className="text-xl text-emerald-200 mb-6">
            Your trusted travel partner for over 15 years
          </p>
          <div className="flex items-center justify-center space-x-6 text-emerald-200">
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              <span>IATA Certified</span>
            </div>
            <div className="flex items-center">
              <Award className="h-5 w-5 mr-2" />
              <span>Government Licensed</span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              <span>10,000+ Satisfied Customers</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Our Story */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2009, PakTravel began as a small family business with a simple mission: to make travel accessible, 
                  affordable, and memorable for every Pakistani. What started as a local travel agency in Karachi has grown into 
                  one of Pakistan's most trusted travel partners.
                </p>
                <p>
                  Over the years, we've helped thousands of families embark on their spiritual journeys to Makkah and Madinah, 
                  explore international destinations, and discover the hidden gems within Pakistan. Our commitment to excellence 
                  and customer satisfaction has earned us recognition as a leading travel agency in the region.
                </p>
                <p>
                  Today, we continue to innovate and expand our services while maintaining the personal touch and attention to 
                  detail that our customers have come to expect. Every journey we plan is crafted with care, ensuring that your 
                  travel experience exceeds expectations.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-emerald-100 rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="bg-emerald-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-emerald-800">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-emerald-500">
              <CardHeader>
                <CardTitle className="text-emerald-800">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To provide exceptional travel services that create lasting memories while ensuring the highest standards of 
                  safety, comfort, and customer satisfaction. We strive to make every journey meaningful and accessible to all.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-amber-500">
              <CardHeader>
                <CardTitle className="text-amber-800">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To be Pakistan's leading travel agency, recognized for our innovation, reliability, and commitment to 
                  excellence. We envision a future where travel brings people together and creates understanding across cultures.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Licenses</h2>
            <p className="text-xl text-gray-600">Trusted and certified by leading industry organizations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <cert.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">Experienced professionals dedicated to your travel success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div 
                    className="w-24 h-24 rounded-full mx-auto mb-4 bg-cover bg-center"
                    style={{ backgroundImage: `url(${member.image})` }}
                  ></div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-emerald-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-2">{member.experience}</p>
                  <Badge variant="outline" className="text-xs">
                    {member.specialization}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose PakTravel?</h2>
            <p className="text-xl text-gray-600">What sets us apart from other travel agencies</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trusted & Secure</h3>
              <p className="text-gray-600">IATA certified with secure payment processing and comprehensive travel insurance options.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
              <p className="text-gray-600">Dedicated travel consultants who understand your needs and preferences.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support for all your travel needs and emergencies.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600">Competitive pricing with no hidden fees and flexible payment options.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
              <p className="text-gray-600">Deep knowledge of destinations with insider tips and local connections.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer First</h3>
              <p className="text-gray-600">Your satisfaction is our priority with flexible booking and cancellation policies.</p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-emerald-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-emerald-800 mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-600 mb-6">
            Contact our experienced travel consultants today and let us help you plan your perfect trip.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Phone className="h-5 w-5 mr-2" />
                Contact Us
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
              onClick={() => window.open('https://wa.me/923001234567', '_blank')}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp Us
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}