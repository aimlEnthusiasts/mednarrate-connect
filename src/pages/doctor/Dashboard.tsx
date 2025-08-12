import { useEffect } from "react";
import { setPageSEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DoctorDashboard() {
  useEffect(() => {
    setPageSEO("Doctor Dashboard | MedNarrative+", "Doctor tools for consultations, patient history, and consent.");
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Welcome, Doctor</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Start Consultation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">Begin a live transcription and generate AI SOAP notes.</p>
            <Button variant="hero" asChild><a href="/doctor/consultation">Open</a></Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Patient History</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">Lookup timelines of visits, labs, and prescriptions.</p>
            <Button asChild><a href="/doctor/history">Open</a></Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Consent Status</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">Check and request consent from patients.</p>
            <Button asChild><a href="/doctor/consent">Open</a></Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
