import { Link } from "react-router-dom";
import { AppHeader } from "@/components/layout/AppHeader";

const Unauthorized = () => (
  <div className="min-h-screen">
    <AppHeader />
    <div className="container mx-auto py-20 text-center space-y-4">
      <h1 className="text-2xl font-semibold">Unauthorized</h1>
      <p className="text-muted-foreground">You do not have access to this area.</p>
      <Link className="text-primary underline" to="/">Go home</Link>
    </div>
  </div>
);

export default Unauthorized;
