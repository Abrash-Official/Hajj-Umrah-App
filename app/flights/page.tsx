'use client';

import { useState } from 'react';
import { Search, Filter, ArrowUpDown, Clock, Plane, MapPin, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function FlightsPage() {
  const router = useRouter();
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      airline: 'Pakistan International Airlines',
      logo: 'PIA',
      departure: { time: '14:30', airport: 'KHI', city: 'Karachi' },
      arrival: { time: '18:45', airport: 'DXB', city: 'Dubai' },
      duration: '4h 15m',
      stops: 'Direct',
      price: 65000,
      availableSeats: 12,
      class: 'Economy'
    },
    {
      id: 2,
      airline: 'Emirates',
      logo: 'EK',
      departure: { time: '08:15', airport: 'KHI', city: 'Karachi' },
      arrival: { time: '12:30', airport: 'DXB', city: 'Dubai' },
      duration: '4h 15m',
      stops: 'Direct',
      price: 85000,
      availableSeats: 8,
      class: 'Economy'
    },
    {
      id: 3,
      airline: 'Qatar Airways',
      logo: 'QR',
      departure: { time: '23:45', airport: 'KHI', city: 'Karachi' },
      arrival: { time: '03:30+1', airport: 'DXB', city: 'Dubai' },
      duration: '5h 45m',
      stops: '1 Stop',
      price: 72000,
      availableSeats: 15,
      class: 'Economy'
    }
  ]);

  const [filters, setFilters] = useState({
    priceRange: 'all',
    airline: 'all',
    stops: 'all',
    departure: 'all'
  });

  const handleBookFlight = (flightId: number) => {
    // Handle flight booking
    alert(`Booking flight ${flightId}. Redirecting to booking page...`);
    router.push('/auth/login');
  };

  const handleViewDetails = (flightId: number) => {
    // Handle view flight details
    alert(`Viewing details for flight ${flightId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="text-sm text-gray-600">
                <span className="font-medium">Karachi (KHI)</span> → <span className="font-medium">Dubai (DXB)</span>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              Dec 15, 2024 • 1 Adult • Economy
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
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
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Price Range</label>
                  <Select value={filters.priceRange} onValueChange={(value) => setFilters({...filters, priceRange: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Prices</SelectItem>
                      <SelectItem value="0-50000">PKR 0 - 50,000</SelectItem>
                      <SelectItem value="50000-100000">PKR 50,000 - 100,000</SelectItem>
                      <SelectItem value="100000+">PKR 100,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Airlines</label>
                  <Select value={filters.airline} onValueChange={(value) => setFilters({...filters, airline: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Airlines</SelectItem>
                      <SelectItem value="pia">PIA</SelectItem>
                      <SelectItem value="emirates">Emirates</SelectItem>
                      <SelectItem value="qatar">Qatar Airways</SelectItem>
                      <SelectItem value="etihad">Etihad</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Stops</label>
                  <Select value={filters.stops} onValueChange={(value) => setFilters({...filters, stops: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="direct">Direct Only</SelectItem>
                      <SelectItem value="1-stop">1 Stop</SelectItem>
                      <SelectItem value="2-stops">2+ Stops</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Departure Time</label>
                  <Select value={filters.departure} onValueChange={(value) => setFilters({...filters, departure: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Times</SelectItem>
                      <SelectItem value="morning">Morning (6AM-12PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12PM-6PM)</SelectItem>
                      <SelectItem value="evening">Evening (6PM-12AM)</SelectItem>
                      <SelectItem value="night">Night (12AM-6AM)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setFilters({
                    priceRange: 'all',
                    airline: 'all',
                    stops: 'all',
                    departure: 'all'
                  })}
                >
                  Clear All Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Search Results */}
          <div className="lg:col-span-3">
            {/* Sort Options */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-gray-600">
                {searchResults.length} flights found
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <Select defaultValue="price">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price">Price (Low to High)</SelectItem>
                    <SelectItem value="duration">Duration</SelectItem>
                    <SelectItem value="departure">Departure Time</SelectItem>
                    <SelectItem value="arrival">Arrival Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Flight Results */}
            <div className="space-y-4">
              {searchResults.map((flight) => (
                <Card key={flight.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                      {/* Airline Logo & Name */}
                      <div className="md:col-span-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                            <span className="text-xs font-bold text-emerald-600">{flight.logo}</span>
                          </div>
                          <div>
                            <p className="font-medium text-sm">{flight.airline}</p>
                            <p className="text-xs text-gray-500">{flight.class}</p>
                          </div>
                        </div>
                      </div>

                      {/* Flight Times */}
                      <div className="md:col-span-6">
                        <div className="flex items-center justify-between">
                          <div className="text-center">
                            <p className="text-xl font-bold">{flight.departure.time}</p>
                            <p className="text-sm text-gray-600">{flight.departure.airport}</p>
                            <p className="text-xs text-gray-500">{flight.departure.city}</p>
                          </div>
                          
                          <div className="flex-1 px-4">
                            <div className="flex items-center justify-center space-x-2">
                              <div className="flex-1 border-t border-gray-300"></div>
                              <div className="text-center">
                                <Plane className="h-4 w-4 text-emerald-600 mx-auto mb-1" />
                                <p className="text-xs text-gray-500">{flight.duration}</p>
                                <p className="text-xs text-emerald-600">{flight.stops}</p>
                              </div>
                              <div className="flex-1 border-t border-gray-300"></div>
                            </div>
                          </div>
                          
                          <div className="text-center">
                            <p className="text-xl font-bold">{flight.arrival.time}</p>
                            <p className="text-sm text-gray-600">{flight.arrival.airport}</p>
                            <p className="text-xs text-gray-500">{flight.arrival.city}</p>
                          </div>
                        </div>
                      </div>

                      {/* Price & Booking */}
                      <div className="md:col-span-4 text-right">
                        <div className="space-y-2">
                          <p className="text-2xl font-bold text-emerald-600">
                            PKR {flight.price.toLocaleString()}
                          </p>
                          <p className="text-sm text-gray-500">
                            {flight.availableSeats} seats left
                          </p>
                          <Button 
                            className="w-full bg-emerald-600 hover:bg-emerald-700"
                            onClick={() => handleBookFlight(flight.id)}
                          >
                            Select Flight
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full"
                            onClick={() => handleViewDetails(flight.id)}
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Load More Flights
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}