// import { supabase } from '../lib/supabaseClient';
// Mock toast
import toast from 'react-hot-toast';

const AdminControls = ({ onLogin, isLoggedIn = false }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Site configuration state
  const [liveVideoId, setLiveVideoId] = useState('');
  const [featuredPlaylistId, setFeaturedPlaylistId] = useState('');
  const [homeHeroText, setHomeHeroText] = useState('');
  const [socialLinks, setSocialLinks] = useState({});

  useEffect(() => {
    if (isLoggedIn) {
      loadSiteConfig();
    }
  }, [isLoggedIn]);

  const loadSiteConfig = async () => {
    // Backend not integrated yet - using mock data
    toast('Backend not integrated yet - showing default config');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await onLogin(email, password);
      toast.success('Logged in successfully');
    } catch (error) {
      toast.error(error.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveConfig = async () => {
    // Backend not integrated yet
    toast.error('Backend not integrated yet - cannot save configuration');
  };

  if (!isLoggedIn) {
    return (
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Site Configuration</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Live Video ID
            </label>
            <input
              type="text"
              value={liveVideoId}
              onChange={(e) => setLiveVideoId(e.target.value)}
              placeholder="YouTube video ID for live stream"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Featured Playlist ID
            </label>
            <input
              type="text"
              value={featuredPlaylistId}
              onChange={(e) => setFeaturedPlaylistId(e.target.value)}
              placeholder="YouTube playlist ID for featured videos"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Home Hero Text
            </label>
            <textarea
              value={homeHeroText}
              onChange={(e) => setHomeHeroText(e.target.value)}
              placeholder="Text for home page hero section"
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            onClick={handleSaveConfig}
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Save Configuration
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Management</h3>
        <div className="space-y-2">
          <button className="w-full text-left px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
            Manage Featured Videos
          </button>
          <button className="w-full text-left px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
            Manage News Articles
          </button>
          <button className="w-full text-left px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
            View Analytics
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminControls;
