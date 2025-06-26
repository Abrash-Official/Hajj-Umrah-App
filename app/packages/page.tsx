'use client';

import { useState } from 'react';
import { Search, Filter, MapPin, Star, Clock, Users, Calendar, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';

export default function PackagesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const packages = [
    {
      id: 1,
      name: 'Dubai Explorer Package',
      category: 'international',
      destination: 'Dubai, UAE',
      duration: '5 Days / 4 Nights',
      price: 85000,
      originalPrice: 95000,
      rating: 4.8,
      reviews: 156,
      image: 'https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg',
      features: [
        'Round-trip flights from Karachi/Lahore',
        '4-star hotel accommodation',
        'Daily breakfast included',
        'Dubai city tour',
        'Desert safari with BBQ dinner',
        'Burj Khalifa tickets included',
        'Airport transfers'
      ],
      highlights: ['Burj Khalifa', 'Dubai Mall', 'Desert Safari', 'Gold Souk']
    },
    {
      id: 2,
      name: 'Turkey Cultural Journey',
      category: 'international',
      destination: 'Istanbul & Cappadocia',
      duration: '8 Days / 7 Nights',
      price: 145000,
      originalPrice: 165000,
      rating: 4.9,
      reviews: 89,
      image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg',
      features: [
        'Round-trip flights via Turkish Airlines',
        '4-star hotels in Istanbul & Cappadocia',
        'All meals included',
        'Hot air balloon ride',
        'Hagia Sophia & Blue Mosque tours',
        'Cappadocia underground city visit',
        'Professional tour guide'
      ],
      highlights: ['Hot Air Balloon', 'Hagia Sophia', 'Cappadocia', 'Bosphorus Cruise']
    },
    {
      id: 3,
      name: 'Northern Pakistan Adventure',
      category: 'domestic',
      destination: 'Hunza, Skardu & Gilgit',
      duration: '7 Days / 6 Nights',
      price: 65000,
      originalPrice: 75000,
      rating: 4.7,
      reviews: 234,
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
      features: [
        'Domestic flights to Skardu',
        'Comfortable hotel stays',
        'All meals included',
        'Visit to Attabad Lake',
        'Hunza Valley exploration',
        'K2 base camp trek option',
        'Local cultural experiences'
      ],
      highlights: ['Attabad Lake', 'Hunza Valley', 'Skardu Fort', 'Deosai Plains']
    },
    {
      id: 4,
      name: 'Thailand Beach Paradise',
      category: 'international',
      destination: 'Bangkok & Phuket',
      duration: '6 Days / 5 Nights',
      price: 95000,
      originalPrice: 110000,
      rating: 4.6,
      reviews: 178,
      image: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg',
      features: [
        'Round-trip flights',
        'Beach resort accommodation',
        'Daily breakfast',
        'Bangkok city tour',
        'Phi Phi Island day trip',
        'Thai massage session',
        'Airport transfers'
      ],
      highlights: ['Phi Phi Islands', 'Grand Palace', 'Floating Market', 'Thai Beaches']
    },
    {
      id: 5,
      name: 'Karachi to Lahore Heritage',
      category: 'domestic',
      destination: 'Lahore & Islamabad',
      duration: '4 Days / 3 Nights',
      price: 35000,
      originalPrice: 42000,
      rating: 4.5,
      reviews: 312,
      image: 'https://images.pexels.com/photos/3601943/pexels-photo-3601943.jpeg',
      features: [
        'Domestic flights',
        '3-star hotel accommodation',
        'Daily breakfast',
        'Lahore Fort & Shalimar Gardens',
        'Badshahi Mosque visit',
        'Food street tour',
        'Local transport included'
      ],
      highlights: ['Lahore Fort', 'Badshahi Mosque', 'Shalimar Gardens', 'Food Street']
    },
    {
      id: 6,
      name: 'Malaysia Twin Towers Experience',
      category: 'international',
      destination: 'Kuala Lumpur & Langkawi',
      duration: '5 Days / 4 Nights',
      price: 78000,
      originalPrice: 88000,
      rating: 4.7,
      reviews: 145,
      image: 'https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg',
      features: [
        'Round-trip flights',
        '4-star accommodation',
        'Daily breakfast',
        'Petronas Towers visit',
        'Genting Highlands day trip',
        'Langkawi cable car',
        'Shopping tour'
      ],
      highlights: ['Petronas Towers', 'Genting Highlands', 'Langkawi', 'Batu Caves']
    }
  ];

  const filteredPackages = packages.filter(pkg => {
    if (selectedCategory !== 'all' && pkg.category !== selectedCategory) return false;
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      if (max && (pkg.price < min || pkg.price > max)) return false;
      if (!max && pkg.price < min) return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-800 to-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Travel Packages</h1>
          <p className="text-xl text-emerald-200 mb-6">
            Discover amazing destinations with our carefully crafted travel packages
          </p>
          <div className="flex items-center justify-center space-x-6 text-emerald-200">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              <span>50+ Destinations</span>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 mr-2" />
              <span>4.8 Average Rating</span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              <span>5000+ Happy Travelers</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Packages</SelectItem>
                      <SelectItem value="domestic">Domestic</SelectItem>
                      <SelectItem value="international">International</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Price Range</label>
                  <Select value={priceRange} onValueChange={setPriceRange}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Prices</SelectItem>
                      <SelectItem value="0-50000">PKR 0 - 50,000</SelectItem>
                      <SelectItem value="50000-100000">PKR 50,000 - 100,000</SelectItem>
                      <SelectItem value="100000-200000">PKR 100,000 - 200,000</SelectItem>
                      <SelectItem value="200000">PKR 200,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange('all');
                  }}
                >
                  Clear All Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Packages Grid */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-gray-600">
                {filteredPackages.length} packages found
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <Select defaultValue="price">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price">Price (Low to High)</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                    <SelectItem value="duration">Duration</SelectItem>
                    <SelectItem value="popularity">Popularity</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPackages.map((pkg) => (
                <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <div 
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${pkg.image})` }}
                    >
                      <div className="absolute top-4 left-4">
                        <Badge className={pkg.category === 'domestic' ? 'bg-green-500' : 'bg-blue-500'}>
                          {pkg.category === 'domestic' ? 'Domestic' : 'International'}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-white text-black">
                          {Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}% OFF
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{pkg.rating} ({pkg.reviews})</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm mr-4">{pkg.destination}</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{pkg.duration}</span>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Package Highlights:</h4>
                      <div className="flex flex-wrap gap-2">
                        {pkg.highlights.map((highlight, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Includes:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {pkg.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                        {pkg.features.length > 3 && (
                          <li className="text-emerald-600 text-xs">+{pkg.features.length - 3} more features</li>
                        )}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-emerald-600">
                            PKR {pkg.price.toLocaleString()}
                          </span>
                          <span className="text-sm text-gray-500 line-through">
                            PKR {pkg.originalPrice.toLocaleString()}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">per person</p>
                      </div>
                      <div className="space-y-2">
                        <Button className="bg-emerald-600 hover:bg-emerald-700">
                          Book Now
                        </Button>
                        <Button variant="outline" size="sm" className="w-full">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Load More Packages
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-emerald-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-emerald-800 mb-4">Need a Custom Package?</h2>
          <p className="text-gray-600 mb-6">
            Our travel experts can create a personalized package just for you. Contact us for a custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Phone className="h-5 w-5 mr-2" />
                Call +92-21-1234-5678
              </Button>
            </Link>
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