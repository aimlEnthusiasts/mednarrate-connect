import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { api } from "@/lib/api";
import { setPageSEO } from "@/lib/seo";

export default function MyHealthSummary() {
  const [text, setText] = useState("");

  useEffect(() => {
    setPageSEO("My Health Summary | MedNarrative+", "Readable AI summaries of your latest visit.");
    api.getLatestPatientSummary().then(setText);
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">My Health Summary</h1>
      <Card>
        <CardHeader><CardTitle>Latest Summary</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">{text}</p>
          <div className="flex gap-2">
            <Button variant="outline">Download PDF</Button>
            <Button>Play Audio</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
