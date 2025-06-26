'use client';

import { useState } from 'react';
import { BarChart3, Users, Plane, Package, CreditCard, Settings, Menu, X, Search, Plus, Eye, Edit, Trash2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Link from 'next/link';

export default function AdminPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNewBooking = () => {
    alert('Opening new booking form...');
  };

  const handleAddUser = () => {
    alert('Opening add user form...');
  };

  const handleAddFlight = () => {
    alert('Opening add flight form...');
  };

  const handleViewBooking = (bookingId: string) => {
    alert(`Viewing booking ${bookingId}`);
  };

  const handleEditBooking = (bookingId: string) => {
    alert(`Editing booking ${bookingId}`);
  };

  const handleDeleteBooking = (bookingId: string) => {
    if (confirm(`Are you sure you want to delete booking ${bookingId}?`)) {
      alert(`Booking ${bookingId} deleted`);
    }
  };

  const stats = [
    { title: 'Total Bookings', value: '1,234', change: '+12.5%', icon: Package },
    { title: 'Active Users', value: '856', change: '+8.2%', icon: Users },
    { title: 'Revenue', value: 'PKR 2.4M', change: '+15.3%', icon: CreditCard },
    { title: 'Flights Booked', value: '567', change: '+6.7%', icon: Plane }
  ];

  const recentBookings = [
    { id: 'BK001', customer: 'Ahmad Ali', type: 'Hajj Package', amount: 'PKR 450,000', status: 'Confirmed', date: '2024-01-15' },
    { id: 'BK002', customer: 'Fatima Sheikh', type: 'Flight - KHI to DXB', amount: 'PKR 65,000', status: 'Pending', date: '2024-01-15' },
    { id: 'BK003', customer: 'Hassan Khan', type: 'Umrah Package', amount: 'PKR 180,000', status: 'Confirmed', date: '2024-01-14' },
    { id: 'BK004', customer: 'Ayesha Malik', type: 'Flight - LHE to LHR', amount: 'PKR 95,000', status: 'Processing', date: '2024-01-14' },
    { id: 'BK005', customer: 'Ali Raza', type: 'Dubai Package', amount: 'PKR 120,000', status: 'Confirmed', date: '2024-01-13' }
  ];

  const users = [
    { id: 1, name: 'Ahmad Ali', email: 'ahmad@example.com', role: 'Customer', status: 'Active', bookings: 3 },
    { id: 2, name: 'Fatima Sheikh', email: 'fatima@example.com', role: 'Customer', status: 'Active', bookings: 1 },
    { id: 3, name: 'Hassan Khan', email: 'hassan@example.com', role: 'Agent', status: 'Active', bookings: 15 },
    { id: 4, name: 'Ayesha Malik', email: 'ayesha@example.com', role: 'Customer', status: 'Inactive', bookings: 0 },
  ];

  const flights = [
    { id: 'FL001', route: 'KHI → DXB', airline: 'Emirates', price: 65000, seats: 180, available: 12, date: '2024-01-20' },
    { id: 'FL002', route: 'LHE → LHR', airline: 'PIA', price: 95000, seats: 210, available: 25, date: '2024-01-21' },
    { id: 'FL003', route: 'ISB → JED', airline: 'Saudia', price: 85000, seats: 165, available: 8, date: '2024-01-22' },
  ];

  const NavItem = ({ icon: Icon, label, active = false, onClick }: any) => (
    <div 
      className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
        active ? 'bg-emerald-100 text-emerald-700' : 'text-gray-600 hover:bg-gray-100'
      }`}
      onClick={onClick}
    >
      <Icon className="h-5 w-5" />
      <span className="font-medium">{label}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:inset-0 transition-transform duration-200 ease-in-out`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-emerald-700">PakTravel Admin</h1>
          <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <nav className="mt-6 px-3 space-y-2">
          <NavItem icon={BarChart3} label="Dashboard" active />
          <NavItem icon={Package} label="Bookings" />
          <NavItem icon={Users} label="Users" />
          <NavItem icon={Plane} label="Flights" />
          <NavItem icon={Package} label="Packages" />
          <NavItem icon={CreditCard} label="Payments" />
          <NavItem icon={Settings} label="Settings" />
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <Link href="/">
            <Button variant="outline" size="sm" className="w-full">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Website
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(true)} className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
              <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search..."
                  className="pl-10 w-64"
                />
              </div>
              <Button size="sm" onClick={handleNewBooking}>
                <Plus className="h-4 w-4 mr-2" />
                New Booking
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-green-600">{stat.change}</p>
                    </div>
                    <div className="bg-emerald-100 p-3 rounded-full">
                      <stat.icon className="h-6 w-6 text-emerald-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="bookings" className="space-y-6">
            <TabsList>
              <TabsTrigger value="bookings">Recent Bookings</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="flights">Flights</TabsTrigger>
            </TabsList>

            <TabsContent value="bookings">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Recent Bookings</CardTitle>
                      <CardDescription>Latest customer bookings and their status</CardDescription>
                    </div>
                    <Button onClick={handleNewBooking}>
                      <Plus className="h-4 w-4 mr-2" />
                      Add Booking
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Booking ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentBookings.map((booking) => (
                        <TableRow key={booking.id}>
                          <TableCell className="font-medium">{booking.id}</TableCell>
                          <TableCell>{booking.customer}</TableCell>
                          <TableCell>{booking.type}</TableCell>
                          <TableCell>{booking.amount}</TableCell>
                          <TableCell>
                            <Badge variant={
                              booking.status === 'Confirmed' ? 'default' :
                              booking.status === 'Pending' ? 'secondary' : 'outline'
                            }>
                              {booking.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{booking.date}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => handleViewBooking(booking.id)}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => handleEditBooking(booking.id)}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => handleDeleteBooking(booking.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="users">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>User Management</CardTitle>
                      <CardDescription>Manage customers, agents, and admin users</CardDescription>
                    </div>
                    <Button onClick={handleAddUser}>
                      <Plus className="h-4 w-4 mr-2" />
                      Add User
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Bookings</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell className="font-medium">{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>
                            <Badge variant={user.role === 'Agent' ? 'default' : 'secondary'}>
                              {user.role}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant={user.status === 'Active' ? 'default' : 'outline'}>
                              {user.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{user.bookings}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="flights">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Flight Management</CardTitle>
                      <CardDescription>Manage flight schedules and availability</CardDescription>
                    </div>
                    <Button onClick={handleAddFlight}>
                      <Plus className="h-4 w-4 mr-2" />
                      Add Flight
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Flight ID</TableHead>
                        <TableHead>Route</TableHead>
                        <TableHead>Airline</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Total Seats</TableHead>
                        <TableHead>Available</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {flights.map((flight) => (
                        <TableRow key={flight.id}>
                          <TableCell className="font-medium">{flight.id}</TableCell>
                          <TableCell>{flight.route}</TableCell>
                          <TableCell>{flight.airline}</TableCell>
                          <TableCell>PKR {flight.price.toLocaleString()}</TableCell>
                          <TableCell>{flight.seats}</TableCell>
                          <TableCell>
                            <Badge variant={flight.available < 10 ? 'destructive' : 'default'}>
                              {flight.available}
                            </Badge>
                          </TableCell>
                          <TableCell>{flight.date}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}