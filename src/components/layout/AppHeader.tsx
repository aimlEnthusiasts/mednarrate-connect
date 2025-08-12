import { Link } from "react-router-dom";
import logo from "@/assets/mednarrative-logo.png";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";

export const AppHeader = () => {
  const { user, signOut } = useAuth();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between">
        <Link to={user ? (user.role === "doctor" ? "/doctor" : "/patient") : "/"} className="flex items-center gap-2">
          <img src={logo} alt="MedNarrative+ logo" className="h-7 w-7" loading="lazy" />
          <span className="font-semibold tracking-tight">MedNarrative+</span>
        </Link>

        <nav className="flex items-center gap-2">
          {user ? (
            <>
              <span className="text-sm text-muted-foreground hidden sm:block">Signed in as {user.name}</span>
              <Button variant="outline" asChild>
                <Link to={user.role === "doctor" ? "/doctor" : "/patient"}>Dashboard</Link>
              </Button>
              <Button variant="ghost" onClick={signOut}>Logout</Button>
            </>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link to="/signin">Sign In</Link>
              </Button>
              <Button variant="hero" asChild>
                <Link to="/signup">Create Account</Link>
              </Button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
