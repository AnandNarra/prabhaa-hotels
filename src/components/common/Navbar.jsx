import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Sparkles, MapPin, ArrowRight } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hotelsDropdownOpen, setHotelsDropdownOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      // Trigger scroll appearance after scrolling down 100px
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial position
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setHotelsDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Our Hotels', 
      path: '/hotels',
      hasDropdown: true,
      subItems: [
        { name: 'Prabhaa Grand Inn', path: '/hotels/grand-inn', desc: 'Flagship Hotel, Executive Rooms & Amaravathi' },
        { name: 'Prabaa Royal Park', path: '/hotels/royal-park', desc: 'Business Class Hotel & 100% Pure Veg Cuisine' }
      ]
    },
    { name: 'About', path: '/#about' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    if (path.startsWith('/#')) return false;
    return location.pathname.startsWith(path);
  };

  const handleNavigation = (path) => {
    if (path.startsWith('/#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(path.substring(2));
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.getElementById(path.substring(2));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
  };

  // On Home page at the very top: transparent floating overlay.
  // When scrolled or on internal pages: solid white sticky luxury bar.
  const isTransparentAtTop = isHomePage && !isScrolled;

  return (
    <>
      {/* Top Notification Bar - Only visible on subpages or when scrolled */}
      {(!isHomePage || isScrolled) && (
        <div className="hidden lg:block bg-ivory-100 border-b border-gold-200 py-1.5 text-xs text-slate-700 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-gold-700 font-medium">
                <MapPin className="w-3.5 h-3.5 text-gold-600" />
                Chittoor, Andhra Pradesh, India
              </span>
              <span className="text-slate-300">•</span>
              <span>
                Grand Inn: <a href="tel:+918572233133" className="font-semibold text-slate-900 hover:text-gold-600">+91 8572 233133</a>
              </span>
              <span className="text-slate-300">•</span>
              <span>
                Royal Park: <a href="tel:+918572233111" className="font-semibold text-slate-900 hover:text-gold-600">+91 8572 233111</a>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gold-700 font-semibold tracking-wider uppercase text-[11px] flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-gold-500" /> Two Destinations. One Standard.
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Main Sticky Navbar */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          isTransparentAtTop
            ? 'bg-transparent py-5 border-b border-white/10'
            : 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gold-200/80 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 relative flex items-center justify-center rounded-lg p-0.5 border transition-all ${
                isTransparentAtTop 
                  ? 'bg-slate-900/60 border-gold-400/50 backdrop-blur-md' 
                  : 'bg-white border-gold-400/40 shadow-sm'
              }`}>
                <img
                  src="/logo.png"
                  alt="Prabhaa Hotels Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(212,175,55,0.3)]"
                />
              </div>
              <div className="flex flex-col">
                <span className={`font-serif tracking-[0.2em] text-lg sm:text-xl font-bold uppercase transition-colors ${
                  isTransparentAtTop ? 'text-white' : 'text-slate-900 group-hover:text-gold-600'
                }`}>
                  PRABHAA
                </span>
                <span className={`text-[10px] tracking-[0.32em] uppercase font-semibold -mt-0.5 ${
                  isTransparentAtTop ? 'text-gold-300' : 'text-gold-600'
                }`}>
                  HOTELS GROUP
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative group py-2"
                  onMouseEnter={() => link.hasDropdown && setHotelsDropdownOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setHotelsDropdownOpen(false)}
                >
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className={`flex items-center gap-1.5 text-xs uppercase font-bold tracking-wider transition-all duration-200 cursor-pointer ${
                      isTransparentAtTop
                        ? isActive(link.path)
                          ? 'text-gold-300 font-extrabold'
                          : 'text-white/90 hover:text-gold-300'
                        : isActive(link.path)
                          ? 'text-gold-600 font-extrabold'
                          : 'text-slate-700 hover:text-gold-600'
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && (
                      <ChevronDown className={`w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300 ${
                        isTransparentAtTop ? 'text-gold-300' : 'text-gold-500'
                      }`} />
                    )}
                  </button>

                  {/* Underline indicator */}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-500 rounded-full"></span>
                  )}

                  {/* Dropdown Menu */}
                  {link.hasDropdown && hotelsDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-80 rounded-xl bg-white border border-gold-200 shadow-2xl p-2 z-50 animate-fadeIn text-slate-900">
                      {link.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="block p-3 rounded-lg hover:bg-gold-50/70 border-b border-slate-100 last:border-0 transition-colors group/sub"
                        >
                          <div className="font-serif text-sm font-bold text-slate-900 group-hover/sub:text-gold-700 flex items-center justify-between">
                            {sub.name}
                            <span className="text-gold-500 opacity-0 group-hover/sub:opacity-100 transition-opacity">→</span>
                          </div>
                          <div className="text-xs text-slate-500 mt-1 leading-snug">
                            {sub.desc}
                          </div>
                        </Link>
                      ))}
                      <div className="p-2.5 border-t border-slate-100 text-center bg-stone-50 rounded-b-lg">
                        <Link
                          to="/hotels"
                          className="text-xs text-gold-700 hover:text-gold-900 tracking-wider uppercase font-bold flex items-center justify-center gap-1"
                        >
                          <span>Compare Both Hotels</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Actions: Direct Enquire Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/contact"
                className="btn-gold text-xs px-6 py-2.5 flex items-center gap-2 rounded-lg font-bold shadow-md"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Contact & Enquire</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-3 lg:hidden">
              <Link
                to="/contact"
                className="btn-gold text-xs px-3.5 py-2 flex items-center gap-1.5 rounded-lg shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Enquire</span>
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg border ${
                  isTransparentAtTop 
                    ? 'text-white bg-slate-900/60 border-white/20' 
                    : 'text-slate-800 bg-stone-100 border-stone-200'
                }`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-gold-200 max-h-[85vh] overflow-y-auto px-6 py-6 animate-fadeIn shadow-2xl text-slate-900">
            <div className="flex flex-col space-y-4">
              <div className="text-xs uppercase tracking-widest text-gold-700 font-bold pb-2 border-b border-slate-100">
                Navigation Menu
              </div>

              <button
                onClick={() => handleNavigation('/')}
                className="text-left text-lg font-serif font-bold text-slate-900 hover:text-gold-600 py-1"
              >
                Home
              </button>

              {/* Property Links in Mobile Drawer */}
              <div className="bg-stone-50 p-4 rounded-xl border border-gold-200 space-y-3">
                <div className="text-xs uppercase tracking-wider text-gold-700 font-bold">
                  Our Two Properties
                </div>
                <Link
                  to="/hotels/grand-inn"
                  className="block p-3 rounded-lg bg-white hover:bg-gold-50 border border-slate-200 hover:border-gold-300 shadow-sm"
                >
                  <div className="font-serif text-slate-900 font-bold text-base">Prabhaa Grand Inn</div>
                  <div className="text-xs text-slate-500 mt-0.5">30 A/C Rooms, Amaravathi Non-Veg & Darbar Hall</div>
                </Link>
                <Link
                  to="/hotels/royal-park"
                  className="block p-3 rounded-lg bg-white hover:bg-gold-50 border border-slate-200 hover:border-gold-300 shadow-sm"
                >
                  <div className="font-serif text-slate-900 font-bold text-base">Prabaa Royal Park</div>
                  <div className="text-xs text-slate-500 mt-0.5">30 Rooms, 100% Pure Veg Dining & The Royal Hall</div>
                </Link>
              </div>

              <button
                onClick={() => handleNavigation('/#about')}
                className="text-left text-lg font-serif font-bold text-slate-900 hover:text-gold-600 py-1"
              >
                About Prabhaa
              </button>

              <Link
                to="/experiences"
                className="text-left text-lg font-serif font-bold text-slate-900 hover:text-gold-600 py-1"
              >
                Experiences & Dining
              </Link>

              <Link
                to="/gallery"
                className="text-left text-lg font-serif font-bold text-slate-900 hover:text-gold-600 py-1"
              >
                Photo Gallery
              </Link>

              <Link
                to="/contact"
                className="text-left text-lg font-serif font-bold text-slate-900 hover:text-gold-600 py-1"
              >
                Contact & Location
              </Link>

              <div className="pt-4 border-t border-slate-200 space-y-3">
                <Link
                  to="/contact"
                  className="w-full btn-gold py-3.5 text-center block text-sm rounded-lg font-bold"
                >
                  Contact Reception Desks
                </Link>

                <div className="text-xs text-slate-600 text-center space-y-1 bg-stone-100 p-3 rounded-lg">
                  <div className="font-bold text-slate-900">Direct Phone Calls:</div>
                  <div className="text-gold-700 font-semibold">
                    <a href="tel:+918572233133">+91 8572 233133</a> | <a href="tel:+918572233111">+91 8572 233111</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
