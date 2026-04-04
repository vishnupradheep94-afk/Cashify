import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, MapPin, Menu, X, User, ChevronDown, LogOut, Shield, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";

const navItems = [
  { label: "Sell Phone", path: "/sell/phones" },
  { label: "Sell Laptop", path: "/sell/laptops" },
  { label: "Sell Tablet", path: "/sell/tablets" },
  { label: "Sell Watch", path: "/sell/watches" },
  { label: "Sell Console", path: "/sell/consoles" },
  { label: "Buy Refurbished", path: "/refurbished" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { user, signOut, isAdmin } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-background border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-bold text-foreground">Cashify</span>
          </Link>

          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for mobiles, laptops & more"
                className="pl-10 bg-muted border-0"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <MapPin className="h-4 w-4" />
              <span>Delhi</span>
              <ChevronDown className="h-3 w-3" />
            </button>
            {user ? (
              <div className="flex items-center gap-2">
                {isAdmin && (
                  <Link to="/admin">
                    <Button variant="outline" size="sm">
                      <Shield className="h-4 w-4 mr-1" />
                      Admin
                    </Button>
                  </Link>
                )}
                <span className="text-sm text-muted-foreground">{user.email?.split("@")[0]}</span>
                <Button variant="ghost" size="sm" onClick={signOut}>
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Link to="/login">
                <Button variant="default" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <User className="h-4 w-4 mr-1" />
                  Login
                </Button>
              </Link>
            )}
          </div>

          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <nav className="hidden md:flex items-center gap-1 pb-2 -mx-2 overflow-x-auto">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                location.pathname.startsWith(item.path)
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-t p-4 space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search..." className="pl-10 bg-muted border-0" />
          </div>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-muted"
            >
              {item.label}
            </Link>
          ))}
          {user ? (
            <>
              {isAdmin && (
                <Link to="/admin" onClick={() => setMobileOpen(false)} className="block px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-muted">
                  <Shield className="h-4 w-4 inline mr-2" />Admin Dashboard
                </Link>
              )}
              <Button className="w-full" variant="outline" onClick={() => { signOut(); setMobileOpen(false); }}>
                <LogOut className="h-4 w-4 mr-2" />Sign Out
              </Button>
            </>
          ) : (
            <Link to="/login" onClick={() => setMobileOpen(false)}>
              <Button className="w-full bg-primary text-primary-foreground">Login</Button>
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
