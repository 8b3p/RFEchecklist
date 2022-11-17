import { axa_checklisttype } from "../cds-generated/enums/axa_checklisttype";

export type CheckLists = {
  [key: string]: CheckList;
};

export type CheckList = {
  id: string;
  type: axa_checklisttype;
  section: string;
  name: string;
  sortcode: number;
  number: number;
};
