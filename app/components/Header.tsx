"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const pathname = usePathname();
  const companyDropdownRef = useRef<HTMLDivElement>(null);
  
  // Track hash changes
  useEffect(() => {
    const updateHash = () => {
      setCurrentHash(window.location.hash);
    };
    
    // Set initial hash
    updateHash();
    
    // Listen for hash changes
    window.addEventListener("hashchange", updateHash);
    
    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  // Handle click outside for Company dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        companyDropdownRef.current &&
        !companyDropdownRef.current.contains(event.target as Node)
      ) {
        setCompanyDropdownOpen(false);
      }
    };

    if (companyDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [companyDropdownOpen]);
  
  // Helper function to check if a link is active
  const isActiveLink = (href: string) => {
    if (href === "/") {
      // Home is active only if we're on "/" with no hash
      return pathname === "/" && !currentHash;
    }
    if (href.startsWith("/#")) {
      // For hash links, check if we're on the homepage AND the hash matches
      const hash = href.substring(1); // Remove the "/" to get "#features" or "#contact"
      return pathname === "/" && currentHash === hash;
    }
    return pathname?.startsWith(href);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/cribeasy-logo.jpg"
              alt="CribEasy Logo"
              width={180}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation - Centered (Large screens only) */}
          <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link 
              href="/" 
              className="px-3 py-2 rounded transition-colors"
              style={{ 
                backgroundColor: isActiveLink("/") ? '#00419c' : 'transparent',
                color: isActiveLink("/") ? '#ffffff' : '#374151'
              }}
              onMouseEnter={(e) => {
                if (!isActiveLink("/")) {
                  e.currentTarget.style.backgroundColor = '#00419c';
                  e.currentTarget.style.color = '#ffffff';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActiveLink("/")) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#374151';
                }
              }}
            >
              Home
            </Link>
            <Link 
              href="/features" 
              className="px-3 py-2 rounded transition-colors"
              style={{ 
                backgroundColor: isActiveLink("/features") ? '#00419c' : 'transparent',
                color: isActiveLink("/features") ? '#ffffff' : '#374151'
              }}
              onMouseEnter={(e) => {
                if (!isActiveLink("/features")) {
                  e.currentTarget.style.backgroundColor = '#00419c';
                  e.currentTarget.style.color = '#ffffff';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActiveLink("/features")) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#374151';
                }
              }}
            >
              Features
            </Link>
            <Link 
              href="/pricing" 
              className="px-3 py-2 rounded transition-colors"
              style={{ 
                backgroundColor: isActiveLink("/pricing") ? '#00419c' : 'transparent',
                color: isActiveLink("/pricing") ? '#ffffff' : '#374151'
              }}
              onMouseEnter={(e) => {
                if (!isActiveLink("/pricing")) {
                  e.currentTarget.style.backgroundColor = '#00419c';
                  e.currentTarget.style.color = '#ffffff';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActiveLink("/pricing")) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#374151';
                }
              }}
            >
              Pricing
            </Link>
            
            {/* Company Dropdown */}
            <div 
              className="relative"
              ref={companyDropdownRef}
            >
              <button 
                className="px-3 py-2 rounded transition-colors flex items-center"
                style={{ 
                  backgroundColor: companyDropdownOpen ? '#00419c' : 'transparent',
                  color: companyDropdownOpen ? '#ffffff' : '#374151'
                }}
                onMouseEnter={(e) => {
                  if (!companyDropdownOpen) {
                    e.currentTarget.style.backgroundColor = '#00419c';
                    e.currentTarget.style.color = '#ffffff';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!companyDropdownOpen) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#374151';
                  }
                }}
                onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
              >
                Company
                <svg 
                  className={`w-4 h-4 ml-1 transition-transform ${companyDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {companyDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  <Link 
                    href="/about" 
                    className="block px-4 py-2 text-gray-700 transition-colors rounded mx-2"
                    style={{ color: '#374151' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#00419c';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#374151';
                    }}
                    onClick={() => setCompanyDropdownOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link 
                    href="/faq" 
                    className="block px-4 py-2 text-gray-700 transition-colors rounded mx-2"
                    style={{ 
                      backgroundColor: isActiveLink("/faq") ? '#00419c' : 'transparent',
                      color: isActiveLink("/faq") ? '#ffffff' : '#374151'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActiveLink("/faq")) {
                        e.currentTarget.style.backgroundColor = '#00419c';
                        e.currentTarget.style.color = '#ffffff';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActiveLink("/faq")) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#374151';
                      }
                    }}
                    onClick={() => setCompanyDropdownOpen(false)}
                  >
                    FAQ
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              href="/contact" 
              className="px-3 py-2 rounded transition-colors"
              style={{ 
                backgroundColor: isActiveLink("/contact") ? '#00419c' : 'transparent',
                color: isActiveLink("/contact") ? '#ffffff' : '#374151'
              }}
              onMouseEnter={(e) => {
                if (!isActiveLink("/contact")) {
                  e.currentTarget.style.backgroundColor = '#00419c';
                  e.currentTarget.style.color = '#ffffff';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActiveLink("/contact")) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#374151';
                }
              }}
            >
              Contact Us
            </Link>
          </div>

          {/* Desktop Buttons - Right (Large screens only) */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <button className="text-white px-6 py-3 rounded-full transition-colors font-medium text-base" style={{ backgroundColor: '#00419c' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#003080'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00419c'}>
              Join CribEasy
            </button>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile/Tablet Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2 pt-4">
              <Link
                href="/"
                className="px-4 py-2 rounded transition-colors"
                style={{ 
                  backgroundColor: isActiveLink("/") ? '#00419c' : 'transparent',
                  color: isActiveLink("/") ? '#ffffff' : '#374151'
                }}
                onMouseEnter={(e) => {
                  if (!isActiveLink("/")) {
                    e.currentTarget.style.backgroundColor = '#00419c';
                    e.currentTarget.style.color = '#ffffff';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActiveLink("/")) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#374151';
                  }
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/features"
                className="px-4 py-2 rounded transition-colors"
                style={{ 
                  backgroundColor: isActiveLink("/features") ? '#00419c' : 'transparent',
                  color: isActiveLink("/features") ? '#ffffff' : '#374151'
                }}
                onMouseEnter={(e) => {
                  if (!isActiveLink("/features")) {
                    e.currentTarget.style.backgroundColor = '#00419c';
                    e.currentTarget.style.color = '#ffffff';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActiveLink("/features")) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#374151';
                  }
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="px-4 py-2 rounded transition-colors"
                style={{ 
                  backgroundColor: isActiveLink("/pricing") ? '#00419c' : 'transparent',
                  color: isActiveLink("/pricing") ? '#ffffff' : '#374151'
                }}
                onMouseEnter={(e) => {
                  if (!isActiveLink("/pricing")) {
                    e.currentTarget.style.backgroundColor = '#00419c';
                    e.currentTarget.style.color = '#ffffff';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActiveLink("/pricing")) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#374151';
                  }
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              
              {/* Company Dropdown - Mobile */}
              <div>
                <button
                  className="text-gray-700 px-4 py-2 rounded transition-colors flex items-center justify-between w-full"
                  style={{ color: '#374151' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#00419c';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#374151';
                  }}
                  onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                >
                  <span>Company</span>
                  <svg 
                    className={`w-4 h-4 transition-transform ${mobileCompanyOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileCompanyOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link
                      href="/about"
                      className="block text-gray-600 px-4 py-2 rounded transition-colors"
                      style={{ color: '#4B5563' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#00419c';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#4B5563';
                      }}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileCompanyOpen(false);
                      }}
                    >
                      About Us
                    </Link>
                    <Link
                      href="/faq"
                      className="block text-gray-600 px-4 py-2 rounded transition-colors"
                      style={{ 
                        backgroundColor: isActiveLink("/faq") ? '#00419c' : 'transparent',
                        color: isActiveLink("/faq") ? '#ffffff' : '#4B5563'
                      }}
                      onMouseEnter={(e) => {
                        if (!isActiveLink("/faq")) {
                          e.currentTarget.style.backgroundColor = '#00419c';
                          e.currentTarget.style.color = '#ffffff';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActiveLink("/faq")) {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = '#4B5563';
                        }
                      }}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileCompanyOpen(false);
                      }}
                    >
                      FAQ
                    </Link>
                  </div>
                )}
              </div>
              
              <Link
                href="/contact"
                className="px-4 py-2 rounded transition-colors"
                style={{ 
                  backgroundColor: isActiveLink("/contact") ? '#00419c' : 'transparent',
                  color: isActiveLink("/contact") ? '#ffffff' : '#374151'
                }}
                onMouseEnter={(e) => {
                  if (!isActiveLink("/contact")) {
                    e.currentTarget.style.backgroundColor = '#00419c';
                    e.currentTarget.style.color = '#ffffff';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActiveLink("/contact")) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#374151';
                  }
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <div className="pt-2">
                <button className="text-white px-6 py-4 rounded-full transition-colors font-medium text-base w-full" style={{ backgroundColor: '#00419c' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#003080'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00419c'}>
                  Join CribEasy
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

