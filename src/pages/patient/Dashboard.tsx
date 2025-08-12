import { useEffect } from "react";
import { setPageSEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PatientDashboard() {
  useEffect(() => {
    setPageSEO("Patient Dashboard | MedNarrative+", "Your health summaries, records, and consent in one place.");
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Welcome</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>My Health Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">Latest plain-language visit summary and audio.</p>
            <Button asChild><a href="/patient/summary">Open</a></Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Medical Records</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">Review detailed notes and attachments.</p>
            <Button asChild><a href="/patient/records">Open</a></Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Consent Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">Control which doctors can access your data.</p>
            <Button asChild><a href="/patient/consent">Open</a></Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
