import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import DoctorLayout from "./components/layout/DoctorLayout";
import PatientLayout from "./components/layout/PatientLayout";
import { ProtectedRoute } from "./components/routing/ProtectedRoute";
import DoctorDashboard from "./pages/doctor/Dashboard";
import StartConsultation from "./pages/doctor/StartConsultation";
import PatientHistory from "./pages/doctor/PatientHistory";
import ConsentStatus from "./pages/doctor/ConsentStatus";
import PatientDashboard from "./pages/patient/Dashboard";
import MyHealthSummary from "./pages/patient/MyHealthSummary";
import MedicalRecords from "./pages/patient/MedicalRecords";
import ConsentManagement from "./pages/patient/ConsentManagement";
import { AuthProvider } from "./context/AuthContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />

            {/* Doctor */}
            <Route element={<ProtectedRoute role="doctor" />}> 
              <Route path="/doctor" element={<DoctorLayout />}>
                <Route index element={<DoctorDashboard />} />
                <Route path="consultation" element={<StartConsultation />} />
                <Route path="history" element={<PatientHistory />} />
                <Route path="consent" element={<ConsentStatus />} />
              </Route>
            </Route>

            {/* Patient */}
            <Route element={<ProtectedRoute role="patient" />}> 
              <Route path="/patient" element={<PatientLayout />}>
                <Route index element={<PatientDashboard />} />
                <Route path="summary" element={<MyHealthSummary />} />
                <Route path="records" element={<MedicalRecords />} />
                <Route path="consent" element={<ConsentManagement />} />
              </Route>
            </Route>

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
