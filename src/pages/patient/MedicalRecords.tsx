import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { api, type Visit } from "@/lib/api";
import { setPageSEO } from "@/lib/seo";

export default function MedicalRecords() {
  const [records, setRecords] = useState<Visit[]>([]);

  useEffect(() => {
    setPageSEO("Medical Records | MedNarrative+", "View your past visits and details.");
    api.listPatientRecords().then(setRecords);
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Medical Records</h1>
      <Card>
        <CardHeader><CardTitle>Past Visits</CardTitle></CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            {records.map((r) => (
              <AccordionItem key={r.id} value={r.id}>
                <AccordionTrigger>
                  {r.date} — {r.doctor}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground mb-2">{r.summary}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
