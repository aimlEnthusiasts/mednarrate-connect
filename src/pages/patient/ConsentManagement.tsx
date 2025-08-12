import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { setPageSEO } from "@/lib/seo";

export default function ConsentManagement() {
  const [doctors, setDoctors] = useState([
    { id: "d-1001", name: "Dr. Taylor", access: true },
    { id: "d-1002", name: "Dr. Chen", access: false },
  ]);

  useEffect(() => {
    setPageSEO("Consent Management | MedNarrative+", "Grant or revoke doctor access to your records.");
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Consent Management</h1>
      <Card>
        <CardHeader><CardTitle>Doctors</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          {doctors.map((d) => (
            <div key={d.id} className="flex items-center justify-between border rounded-md p-3">
              <div>
                <div className="font-medium">{d.name}</div>
                <div className="text-xs text-muted-foreground">{d.id}</div>
              </div>
              <div className="flex items-center gap-3">
                <Switch checked={d.access} onCheckedChange={(v) => setDoctors((prev) => prev.map((x) => (x.id === d.id ? { ...x, access: v } : x)))} />
                <Button variant="outline">Simulate Tx</Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
