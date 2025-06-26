'use client';

import { useState } from 'react';
import { Search, Plane, MapPin, Users, Star, Phone, MessageCircle, Globe, Calendar, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [language, setLanguage] = useState('en');
  const router = useRouter();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ur' : 'en');
  };

  const handleFlightSearch = () => {
    router.push('/flights');
  };

  const handleHajjPackageClick = (packageType: string) => {
    router.push(`/hajj?package=${packageType}`);
  };

  const content = {
    en: {
      nav: {
        home: 'Home',
        flights: 'Flights',
        hajj: 'Hajj & Umrah',
        packages: 'Packages',
        about: 'About',
        contact: 'Contact'
      },
      hero: {
        title: 'Discover Pakistan & Beyond',
        subtitle: 'Your trusted travel partner for flights, Hajj, Umrah, and unforgettable journeys',
        cta: 'Start Your Journey'
      },
      search: {
        flights: 'Flights',
        hajj: 'Hajj & Umrah',
        from: 'From',
        to: 'To',
        departure: 'Departure',
        return: 'Return',
        passengers: 'Passengers',
        search: 'Search Flights'
      }
    },
    ur: {
      nav: {
        home: 'ہوم',
        flights: 'پروازیں',
        hajj: 'حج اور عمرہ',
        packages: 'پیکجز',
        about: 'ہمارے بارے میں',
        contact: 'رابطہ'
      },
      hero: {
        title: 'پاکستان اور اس سے آگے دریافت کریں',
        subtitle: 'پروازوں، حج، عمرہ، اور یادگار سفر کے لیے آپ کا قابل اعتماد سفری ساتھی',
        cta: 'اپنا سفر شروع کریں'
      },
      search: {
        flights: 'پروازیں',
        hajj: 'حج اور عمرہ',
        from: 'سے',
        to: 'تک',
        departure: 'روانگی',
        return: 'واپسی',
        passengers: 'مسافر',
        search: 'پروازیں تلاش کریں'
      }
    }
  };

  const currentContent = content[language as keyof typeof content];

  return (
    <div className={`min-h-screen bg-gradient-to-b from-emerald-50 to-white ${language === 'ur' ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Plane className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-emerald-800">PakTravel</span>
            </Link>
            
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-emerald-600 transition-colors">{currentContent.nav.home}</Link>
              <Link href="/flights" className="text-gray-700 hover:text-emerald-600 transition-colors">{currentContent.nav.flights}</Link>
              <Link href="/hajj" className="text-gray-700 hover:text-emerald-600 transition-colors">{currentContent.nav.hajj}</Link>
              <Link href="/packages" className="text-gray-700 hover:text-emerald-600 transition-colors">{currentContent.nav.packages}</Link>
              <Link href="/about" className="text-gray-700 hover:text-emerald-600 transition-colors">{currentContent.nav.about}</Link>
              <Link href="/contact" className="text-gray-700 hover:text-emerald-600 transition-colors">{currentContent.nav.contact}</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="flex items-center space-x-2"
              >
                <Globe className="h-4 w-4" />
                <span>{language === 'en' ? 'اردو' : 'English'}</span>
              </Button>
              <Link href="/auth/login">
                <Button>Sign In</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-800 to-emerald-600 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[url('https://images.pexels.com/photos/3601943/pexels-photo-3601943.jpeg')] bg-cover bg-center"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {currentContent.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            {currentContent.hero.subtitle}
          </p>
          <Button 
            size="lg" 
            className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-3 text-lg"
            onClick={() => router.push('/flights')}
          >
            {currentContent.hero.cta}
          </Button>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white shadow-lg relative -mt-16 mx-4 sm:mx-8 lg:mx-16 rounded-xl z-10">
        <div className="max-w-6xl mx-auto px-6">
          <Tabs defaultValue="flights" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="flights" className="flex items-center space-x-2">
                <Plane className="h-4 w-4" />
                <span>{currentContent.search.flights}</span>
              </TabsTrigger>
              <TabsTrigger value="hajj" className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>{currentContent.search.hajj}</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="flights">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{currentContent.search.from}</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Karachi (KHI)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="khi">Karachi (KHI)</SelectItem>
                      <SelectItem value="lhe">Lahore (LHE)</SelectItem>
                      <SelectItem value="isb">Islamabad (ISB)</SelectItem>
                      <SelectItem value="rwp">Rawalpindi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{currentContent.search.to}</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Dubai (DXB)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dxb">Dubai (DXB)</SelectItem>
                      <SelectItem value="lhr">London (LHR)</SelectItem>
                      <SelectItem value="jed">Jeddah (JED)</SelectItem>
                      <SelectItem value="nyc">New York (NYC)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{currentContent.search.departure}</label>
                  <Input type="date" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{currentContent.search.return}</label>
                  <Input type="date" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{currentContent.search.passengers}</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="1 Adult" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Adult</SelectItem>
                      <SelectItem value="2">2 Adults</SelectItem>
                      <SelectItem value="3">3 Adults</SelectItem>
                      <SelectItem value="4">4 Adults</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white py-3" onClick={handleFlightSearch}>
                <Search className="h-4 w-4 mr-2" />
                {currentContent.search.search}
              </Button>
            </TabsContent>
            
            <TabsContent value="hajj">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card 
                  className="border-2 border-emerald-200 hover:border-emerald-400 transition-colors cursor-pointer"
                  onClick={() => handleHajjPackageClick('hajj')}
                >
                  <CardHeader>
                    <CardTitle className="text-emerald-800">Hajj Packages</CardTitle>
                    <CardDescription>Complete Hajj pilgrimage packages</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-emerald-600 mb-2">From PKR 450,000</p>
                    <ul className="text-sm space-y-1">
                      <li>• Visa processing</li>
                      <li>• 5-star accommodation</li>
                      <li>• All meals included</li>
                      <li>• Expert guidance</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card 
                  className="border-2 border-amber-200 hover:border-amber-400 transition-colors cursor-pointer"
                  onClick={() => handleHajjPackageClick('umrah')}
                >
                  <CardHeader>
                    <CardTitle className="text-amber-800">Umrah Packages</CardTitle>
                    <CardDescription>Spiritual journey to Makkah</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-amber-600 mb-2">From PKR 120,000</p>
                    <ul className="text-sm space-y-1">
                      <li>• Visa processing</li>
                      <li>• Hotel near Haram</li>
                      <li>• Transport included</li>
                      <li>• Religious guidance</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card 
                  className="border-2 border-purple-200 hover:border-purple-400 transition-colors cursor-pointer"
                  onClick={() => handleHajjPackageClick('vip')}
                >
                  <CardHeader>
                    <CardTitle className="text-purple-800">VIP Packages</CardTitle>
                    <CardDescription>Premium pilgrimage experience</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-purple-600 mb-2">From PKR 750,000</p>
                    <ul className="text-sm space-y-1">
                      <li>• Luxury accommodation</li>
                      <li>• Private transport</li>
                      <li>• Personal guide</li>
                      <li>• Exclusive services</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose PakTravel?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Your trusted partner for all travel needs with 15+ years of experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Booking</h3>
              <p className="text-gray-600">SSL encrypted payments and secure transactions</p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Licensed Agency</h3>
              <p className="text-gray-600">IATA certified and government approved</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer assistance</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Experienced travel consultants</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
            <p className="text-xl text-gray-600">Discover amazing places around the world</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card 
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => router.push('/hajj')}
            >
              <div className="h-48 bg-gradient-to-r from-emerald-400 to-emerald-600 flex items-center justify-center">
                <MapPin className="h-12 w-12 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Makkah & Madinah</h3>
                <p className="text-gray-600 mb-4">Sacred pilgrimage destinations</p>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">From PKR 120,000</Badge>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">4.9</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card 
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => router.push('/packages?destination=dubai')}
            >
              <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                <MapPin className="h-12 w-12 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Dubai & UAE</h3>
                <p className="text-gray-600 mb-4">Modern luxury and culture</p>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">From PKR 45,000</Badge>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">4.8</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card 
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => router.push('/packages?destination=london')}
            >
              <div className="h-48 bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center">
                <MapPin className="h-12 w-12 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">London & UK</h3>
                <p className="text-gray-600 mb-4">Historic cities and culture</p>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">From PKR 95,000</Badge>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">4.7</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real experiences from satisfied travelers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">"Excellent service for our Hajj pilgrimage. Everything was perfectly organized and the guidance was invaluable."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold">Ahmad Ali</p>
                  <p className="text-sm text-gray-500">Karachi</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">"Best prices for international flights and amazing customer support. Highly recommended!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold">Fatima Sheikh</p>
                  <p className="text-sm text-gray-500">Lahore</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">"Professional and reliable. Made our family vacation to Dubai absolutely perfect!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold">Hassan Khan</p>
                  <p className="text-sm text-gray-500">Islamabad</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="bg-emerald-600 p-2 rounded-lg">
                  <Plane className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">PakTravel</span>
              </Link>
              <p className="text-emerald-200 mb-4">Your trusted travel partner for flights, Hajj, Umrah, and unforgettable journeys across Pakistan and beyond.</p>
              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="bg-transparent border-emerald-400 text-emerald-200 hover:bg-emerald-700"
                  onClick={() => window.open('https://wa.me/923001234567', '_blank')}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-emerald-200">
                <li><Link href="/flights" className="hover:text-white transition-colors">Book Flights</Link></li>
                <li><Link href="/hajj" className="hover:text-white transition-colors">Hajj Packages</Link></li>
                <li><Link href="/hajj" className="hover:text-white transition-colors">Umrah Packages</Link></li>
                <li><Link href="/packages" className="hover:text-white transition-colors">Visa Services</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-emerald-200">
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-emerald-200">
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +92-21-1234-5678
                </p>
                <p className="flex items-center">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  +92-300-1234567
                </p>
                <p>info@paktravel.com</p>
                <p>123 Main Street, Karachi, Pakistan</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-emerald-700 mt-8 pt-8 text-center text-emerald-200">
            <p>&copy; 2024 PakTravel. All rights reserved. | IATA Licensed Travel Agency</p>
          </div>
        </div>
      </footer>
    </div>
  );
}