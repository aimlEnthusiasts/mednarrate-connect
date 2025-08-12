import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { api } from "@/lib/api";
import { setPageSEO } from "@/lib/seo";

export default function ConsentStatus() {
  const [list, setList] = useState<{ id: string; name: string; consent: boolean }[]>([]);

  useEffect(() => {
    setPageSEO("Consent Status | MedNarrative+", "View and request patient consent statuses.");
    api.listConsentStatuses().then(setList);
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Consent Status</h1>
      <Card>
        <CardHeader><CardTitle>Patients</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          {list.map((p) => (
            <div key={p.id} className="flex items-center justify-between border rounded-md p-3">
              <div>
                <div className="font-medium">{p.name}</div>
                <div className="text-xs text-muted-foreground">{p.id}</div>
              </div>
              <div className="flex items-center gap-3">
                <Switch checked={p.consent} onCheckedChange={(v) => setList((prev) => prev.map((x) => (x.id === p.id ? { ...x, consent: v } : x)))} />
                <Button variant="outline">Request Consent</Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
