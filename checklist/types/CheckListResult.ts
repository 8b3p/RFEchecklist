import { axa_checklistresult_axa_checklistresult_axa_result } from "../cds-generated/enums/axa_checklistresult_axa_checklistresult_axa_result";

export type CheckListResults = {
  [key: string]: CheckListResult;
};

export type CheckListResult = {
  result: axa_checklistresult_axa_checklistresult_axa_result;
  checklistId: string;
  checklistResultId: string;
  name: string;
  rfeId: string;
};
