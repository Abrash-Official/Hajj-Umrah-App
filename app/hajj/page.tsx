'use client';

import { useState } from 'react';
import { Calendar, Users, MapPin, Star, Clock, Shield, Phone, MessageCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function HajjPage() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const router = useRouter();

  const handleBookPackage = (packageId: number) => {
    alert(`Booking package ${packageId}. Redirecting to booking page...`);
    router.push('/auth/login');
  };

  const handleViewDetails = (packageId: number) => {
    alert(`Viewing details for package ${packageId}`);
  };

  const hajjPackages = [
    {
      id: 1,
      name: 'Standard Hajj Package',
      price: 450000,
      duration: '15 Days',
      category: 'hajj',
      rating: 4.8,
      reviews: 124,
      features: [
        'Visa processing included',
        '4-star hotel accommodation',
        'All meals included',
        'Air-conditioned transport',
        'Expert religious guidance',
        'Group leader support'
      ],
      itinerary: [
        'Day 1-3: Arrival in Jeddah, transfer to Makkah',
        'Day 4-8: Tawaf, Sa\'i, and spiritual preparation',
        'Day 9: Journey to Mina',
        'Day 10: Arafat and Muzdalifah',
        'Day 11-13: Ramy al-Jamarat in Mina',
        'Day 14-15: Final Tawaf and departure'
      ],
      hotels: {
        makkah: 'Al Shohada Hotel (4-star) - 800m from Haram',
        madinah: 'Madinah Hilton (4-star) - 300m from Prophet\'s Mosque'
      }
    },
    {
      id: 2,
      name: 'Premium Hajj Package',
      price: 650000,
      duration: '18 Days',
      category: 'hajj',
      rating: 4.9,
      reviews: 89,
      features: [
        'Expedited visa processing',
        '5-star hotel accommodation',
        'Premium meals included',
        'Private transport available',
        'Personal religious guide',
        'VIP Haram access',
        'Extended Madinah stay'
      ],
      itinerary: [
        'Day 1-3: VIP arrival and premium accommodation',
        'Day 4-9: Extended spiritual preparation',
        'Day 10: Arafat with premium services',
        'Day 11-14: Comfortable Mina experience',
        'Day 15-18: Extended Madinah visit'
      ],
      hotels: {
        makkah: 'Raffles Makkah Palace (5-star) - Adjacent to Haram',
        madinah: 'Oberoi Madinah (5-star) - Facing Prophet\'s Mosque'
      }
    },
    {
      id: 3,
      name: 'Luxury Hajj Package',
      price: 950000,
      duration: '21 Days',
      category: 'hajj',
      rating: 5.0,
      reviews: 45,
      features: [
        'Premium visa processing',
        'Luxury 5-star accommodation',
        'Gourmet dining experiences',
        'Private limousine transfers',
        'Personal scholar guidance',
        'Exclusive Haram access',
        'Spa and wellness services',
        'Cultural tours included'
      ],
      itinerary: [
        'Day 1-4: Luxury arrival and acclimatization',
        'Day 5-10: Comprehensive spiritual preparation',
        'Day 11: VIP Arafat experience',
        'Day 12-16: Premium Mina accommodation',
        'Day 17-21: Extended luxury Madinah stay'
      ],
      hotels: {
        makkah: 'Abraj Al-Bait Clock Tower (5-star) - Haram view rooms',
        madinah: 'Al Madinah Concorde (5-star) - Premium suites'
      }
    }
  ];

  const umrahPackages = [
    {
      id: 4,
      name: 'Economy Umrah Package',
      price: 120000,
      duration: '7 Days',
      category: 'umrah',
      rating: 4.6,
      reviews: 203,
      features: [
        'Visa processing included',
        '3-star hotel accommodation',
        'Breakfast included',
        'Group transport',
        'Basic religious guidance',
        'Airport transfers'
      ],
      itinerary: [
        'Day 1: Arrival in Jeddah, transfer to Makkah',
        'Day 2-5: Umrah rituals and worship',
        'Day 6: Madinah visit',
        'Day 7: Departure'
      ],
      hotels: {
        makkah: 'Makkah Hotel (3-star) - 1.2km from Haram',
        madinah: 'Madinah Palace (3-star) - 800m from Prophet\'s Mosque'
      }
    },
    {
      id: 5,
      name: 'Premium Umrah Package',
      price: 180000,
      duration: '10 Days',
      category: 'umrah',
      rating: 4.8,
      reviews: 156,
      features: [
        'Fast visa processing',
        '4-star hotel accommodation',
        'All meals included',
        'Private transport',
        'Expert religious guidance',
        'Extended Madinah stay',
        'Ziyarat tours included'
      ],
      itinerary: [
        'Day 1-2: Arrival and settling in Makkah',
        'Day 3-6: Comprehensive Umrah experience',
        'Day 7-9: Extended Madinah spiritual journey',
        'Day 10: Departure'
      ],
      hotels: {
        makkah: 'Pullman ZamZam Makkah (4-star) - 500m from Haram',
        madinah: 'Crowne Plaza Madinah (4-star) - 400m from Prophet\'s Mosque'
      }
    }
  ];

  const allPackages = [...hajjPackages, ...umrahPackages];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Header */}
      <div className="bg-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-white hover:bg-emerald-700 mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hajj & Umrah Packages</h1>
            <p className="text-xl text-emerald-200 mb-6">
              Embark on your spiritual journey with our carefully crafted pilgrimage packages
            </p>
            <div className="flex items-center justify-center space-x-6 text-emerald-200">
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                <span>IATA Certified</span>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 mr-2" />
                <span>15+ Years Experience</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>10,000+ Satisfied Pilgrims</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="hajj" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="hajj" className="text-lg">Hajj Packages</TabsTrigger>
            <TabsTrigger value="umrah" className="text-lg">Umrah Packages</TabsTrigger>
          </TabsList>

          <TabsContent value="hajj">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {hajjPackages.map((pkg) => (
                <Card key={pkg.id} className="relative overflow-hidden hover:shadow-xl transition-shadow">
                  {pkg.name.includes('Premium') && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-amber-500 text-black">Most Popular</Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="text-xl text-emerald-800">{pkg.name}</CardTitle>
                    <CardDescription className="flex items-center justify-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                        <span>{pkg.rating} ({pkg.reviews} reviews)</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-emerald-600">
                        PKR {pkg.price.toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-500">per person</p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800">Package Includes:</h4>
                      <ul className="text-sm space-y-1">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800">Accommodation:</h4>
                      <div className="text-sm space-y-1">
                        <p><strong>Makkah:</strong> {pkg.hotels.makkah}</p>
                        <p><strong>Madinah:</strong> {pkg.hotels.madinah}</p>
                      </div>
                    </div>

                    <div className="space-y-3 pt-4">
                      <Button 
                        className="w-full bg-emerald-600 hover:bg-emerald-700"
                        onClick={() => handleBookPackage(pkg.id)}
                      >
                        Book Now
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => handleViewDetails(pkg.id)}
                      >
                        View Details
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="w-full"
                        onClick={() => window.open('tel:+922112345678', '_self')}
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Call for Consultation
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="umrah">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {umrahPackages.map((pkg) => (
                <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="text-xl text-amber-800">{pkg.name}</CardTitle>
                    <CardDescription className="flex items-center justify-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                        <span>{pkg.rating} ({pkg.reviews} reviews)</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-amber-600">
                        PKR {pkg.price.toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-500">per person</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-800">Package Includes:</h4>
                        <ul className="text-sm space-y-1">
                          {pkg.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-800">Accommodation:</h4>
                        <div className="text-sm space-y-1">
                          <p><strong>Makkah:</strong> {pkg.hotels.makkah}</p>
                          <p><strong>Madinah:</strong> {pkg.hotels.madinah}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 pt-4">
                      <Button 
                        className="w-full bg-amber-600 hover:bg-amber-700"
                        onClick={() => handleBookPackage(pkg.id)}
                      >
                        Book Now
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => handleViewDetails(pkg.id)}
                      >
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Contact Section */}
        <div className="mt-16 bg-emerald-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-emerald-800 mb-4">Need Help Choosing?</h2>
          <p className="text-gray-600 mb-6">
            Our experienced pilgrimage consultants are here to help you select the perfect package for your spiritual journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700"
              onClick={() => window.open('tel:+922112345678', '_self')}
            >
              <Phone className="h-5 w-5 mr-2" />
              Call +92-21-1234-5678
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
              onClick={() => window.open('https://wa.me/923001234567', '_blank')}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}