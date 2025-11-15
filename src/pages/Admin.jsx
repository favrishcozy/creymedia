import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AdminControls from '../components/AdminControls';
import toast from 'react-hot-toast';
// import { supabase } from '../lib/supabaseClient';

const Admin = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false); // No backend loading needed
  const [isAdmin, setIsAdmin] = useState(false); // Never admin without backend

  // No useEffect for auth since no backend

  const handleLogin = async (email, password) => {
    // Backend not integrated
    toast.error('Backend not integrated yet - cannot login');
    throw new Error('Backend not integrated');
  };

  const handleLogout = async () => {
    setUser(null);
    setIsAdmin(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-24 pb-12">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
            <h1 className="text-2xl font-bold text-center mb-6">Admin Login</h1>
            <AdminControls onLogin={handleLogin} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <AdminControls isLoggedIn={true} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
