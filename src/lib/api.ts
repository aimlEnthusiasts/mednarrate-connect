export const fakeFetch = async <T,>(data: T, delay = 700): Promise<T> => {
  return new Promise((resolve) => setTimeout(() => resolve(data), delay));
};

export type Visit = {
  id: string;
  date: string;
  doctor: string;
  summary: string;
};

export type RecordDetail = Visit & {
  notes: string;
  attachments?: string[];
};

export const api = {
  searchPatients: (query: string) =>
    fakeFetch(
      [
        { id: "p-1001", name: "Alex Patient", dob: "1990-03-12" },
        { id: "p-1002", name: "Sam Lee", dob: "1985-11-02" },
      ].filter((p) => p.name.toLowerCase().includes(query.toLowerCase()) || p.id.includes(query))
    ),
  getPatientTimeline: (patientId: string) =>
    fakeFetch([
      { id: "v1", date: "2025-03-05", type: "Visit", info: "Annual checkup" },
      { id: "l1", date: "2025-03-06", type: "Lab", info: "CBC normal" },
      { id: "rx1", date: "2025-03-06", type: "Rx", info: "Vitamin D" },
    ]),
  listConsentStatuses: () =>
    fakeFetch([
      { id: "p-1001", name: "Alex Patient", consent: true },
      { id: "p-1002", name: "Sam Lee", consent: false },
    ]),
  listPatientRecords: () =>
    fakeFetch<Visit[]>([
      { id: "r1", date: "2025-04-10", doctor: "Dr. Taylor", summary: "URI, supportive care" },
      { id: "r2", date: "2025-02-22", doctor: "Dr. Chen", summary: "Routine physical" },
    ]),
  getRecordDetails: (id: string) =>
    fakeFetch<RecordDetail>({
      id,
      date: "2025-04-10",
      doctor: "Dr. Taylor",
      summary: "URI, supportive care",
      notes: "Subjective: cough, sore throat... Objective: afebrile...",
      attachments: ["lab-cbc.pdf"],
    }),
  getLatestPatientSummary: () =>
    fakeFetch(
      "Your recent visit indicates a mild upper respiratory infection. Rest, hydration, and OTC analgesics were recommended. Return if symptoms worsen."
    ),
};
