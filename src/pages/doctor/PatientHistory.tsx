import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { api } from "@/lib/api";
import { setPageSEO } from "@/lib/seo";

export default function PatientHistory() {
  const [q, setQ] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [timeline, setTimeline] = useState<any[]>([]);

  useEffect(() => {
    setPageSEO("Patient History | MedNarrative+", "Search and review patient timelines.");
  }, []);

  const onSearch = async () => {
    const r = await api.searchPatients(q);
    setResults(r);
  };

  const loadTimeline = async (id: string) => {
    const t = await api.getPatientTimeline(id);
    setTimeline(t);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Patient History</h1>

      <div className="flex gap-2">
        <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by patient ID or name" />
        <Button onClick={onSearch}>Search</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader><CardTitle>Results</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            {results.map((p) => (
              <div key={p.id} className="flex items-center justify-between border rounded-md p-2">
                <div>
                  <div className="font-medium">{p.name}</div>
                  <div className="text-xs text-muted-foreground">{p.id} • DOB {p.dob}</div>
                </div>
                <Button variant="outline" onClick={() => loadTimeline(p.id)}>Open</Button>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Timeline</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {timeline.map((e) => (
              <div key={e.id} className="border-l-2 border-primary pl-3">
                <div className="text-sm font-medium">{e.date} — {e.type}</div>
                <div className="text-sm text-muted-foreground">{e.info}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
