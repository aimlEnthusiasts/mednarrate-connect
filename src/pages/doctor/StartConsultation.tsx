import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { setPageSEO } from "@/lib/seo";

export default function StartConsultation() {
  const [transcribing, setTranscribing] = useState(false);
  const [text, setText] = useState("");
  const [note, setNote] = useState<null | { s: string; o: string; a: string; p: string }>(null);

  useEffect(() => {
    setPageSEO("Start Consultation | MedNarrative+", "Live transcription and AI SOAP note generation.");
  }, []);

  const toggleTranscribe = () => {
    setTranscribing((t) => !t);
    if (!transcribing) {
      // simulate incoming text
      let i = 0;
      const chunks = [
        "Patient reports cough and sore throat for 3 days.",
        " Denies fever. Appetite normal.",
        " No shortness of breath.",
      ];
      const interval = setInterval(() => {
        setText((prev) => prev + chunks[i]);
        i++;
        if (i >= chunks.length) clearInterval(interval);
      }, 700);
    }
  };

  const generateSOAP = () => {
    setTimeout(() => {
      setNote({
        s: "Cough and sore throat 3 days, no fever.",
        o: "Afebrile, clear lungs, normal vitals.",
        a: "Likely viral URI.",
        p: "Supportive care, hydration, rest, OTC analgesics; return if worse.",
      });
    }, 600);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Start Consultation</h1>
      <Card>
        <CardHeader>
          <CardTitle>Live Transcription</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Button variant={transcribing ? "secondary" : "hero"} onClick={toggleTranscribe}>
              {transcribing ? "Stop" : "Start"} Transcription
            </Button>
            <Button onClick={generateSOAP}>Generate AI SOAP Note</Button>
          </div>
          <Textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Microphone input will appear here..." rows={6} />
        </CardContent>
      </Card>

      {note && (
        <Card>
          <CardHeader>
            <CardTitle>AI SOAP Note</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 md:grid-cols-2">
            <section>
              <h3 className="font-medium">Subjective</h3>
              <p className="text-sm text-muted-foreground">{note.s}</p>
            </section>
            <section>
              <h3 className="font-medium">Objective</h3>
              <p className="text-sm text-muted-foreground">{note.o}</p>
            </section>
            <section>
              <h3 className="font-medium">Assessment</h3>
              <p className="text-sm text-muted-foreground">{note.a}</p>
            </section>
            <section>
              <h3 className="font-medium">Plan</h3>
              <p className="text-sm text-muted-foreground">{note.p}</p>
            </section>
            <div className="md:col-span-2">
              <Button>Approve</Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
