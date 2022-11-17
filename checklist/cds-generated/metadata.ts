/* eslint-disable*/
import { axa_checklistresultMetadata } from "./entities/axa_ChecklistResult";
import { axa_checklistMetadata } from "./entities/axa_Checklist";
import { axa_requestforexpenditureMetadata } from "./entities/axa_RequestforExpenditure";

export const Entities = {
  axa_ChecklistResult: "axa_checklistresult",
  axa_Checklist: "axa_checklist",
  axa_RequestforExpenditure: "axa_requestforexpenditure",
};

// Setup Metadata
// Usage: setMetadataCache(metadataCache);
export const metadataCache = {
  entities: {
    axa_checklistresult: axa_checklistresultMetadata,
    axa_checklist: axa_checklistMetadata,
    axa_requestforexpenditure: axa_requestforexpenditureMetadata,
  },
  actions: {
  }
};