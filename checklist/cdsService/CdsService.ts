import { axa_checklistMetadata } from "../cds-generated/entities/axa_Checklist";
import {
  axa_ChecklistResult,
  axa_ChecklistResultAttributes,
  axa_checklistresultMetadata,
} from "../cds-generated/entities/axa_ChecklistResult";
import { axa_checklisttype } from "../cds-generated/enums/axa_checklisttype";
import { IInputs } from "../generated/ManifestTypes";
import { CheckListResult } from "../types/CheckListResult";
import { Modify } from "../types/Modify";

export default class CdsService {
  context: ComponentFramework.Context<IInputs>;
  constructor(context: ComponentFramework.Context<IInputs>) {
    this.context = context;
  }
  public async retrieveChecklistResultsByRFE(
    rfeId: string
  ): Promise<ComponentFramework.WebApi.Entity[] | Error> {
    var fetchXml = [
      "?fetchXml=",
      "<fetch>",
      "  <entity name='axa_checklistresult'>",
      "    <attribute name='axa_rfe'/>",
      "    <attribute name='axa_result'/>",
      "    <attribute name='axa_checklist'/>",
      "    <attribute name='axa_checklistresultid'/>",
      "    <attribute name='axa_name'/>",
      "    <filter>",
      "      <condition attribute='axa_rfe' operator='eq' value='",
      rfeId,
      "'/>",
      "    </filter>",
      "  </entity>",
      "</fetch>",
    ].join("");
    try {
      const result = await this.context.webAPI.retrieveMultipleRecords(
        axa_checklistresultMetadata.logicalName,
        fetchXml
      );
      return result.entities;
    } catch (error: any) {
      console.dir(error);
      return error as Error;
    }
  }

  public async retrieveChecklistsByType(
    checklistType: axa_checklisttype
  ): Promise<ComponentFramework.WebApi.Entity[] | Error> {
    const fetchXml = [
      "?fetchXml=",
      "<fetch>",
      "  <entity name='axa_checklist'>",
      "    <attribute name='axa_type'/>",
      "    <attribute name='axa_section'/>",
      "    <attribute name='axa_name'/>",
      "    <attribute name='axa_sortcode'/>",
      "    <attribute name='axa_checklistid'/>",

      "    <filter>",
      "      <condition attribute='axa_type' operator='eq' value='",
      checklistType,
      "'/>",
      "    </filter>",
      "  </entity>",
      "</fetch>",
    ].join("");
    try {
      const result = await this.context.webAPI.retrieveMultipleRecords(
        axa_checklistMetadata.logicalName,
        fetchXml
      );
      return result.entities;
    } catch (error: any) {
      console.dir(error);
      return error as Error;
    }
  }

  public async createChecklistResult(
    checklistResult: CheckListResult
  ): Promise<ComponentFramework.WebApi.Entity | Error> {
    try {
      const data = {
        axa_name: checklistResult.name,
        axa_result: checklistResult.result,
        "axa_Checklist@odata.bind":
          "/axa_checklists(" + checklistResult.checklistId + ")",
        "axa_RFE@odata.bind":
          "/axa_requestforexpenditures(" + checklistResult.rfeId + ")", //* to make a relationship in the dataverse, use the following format: "<Schema Name>@odata.bind": "/<Plural Logical Name>(<GUID>)"
      };

      const response = await this.context.webAPI.createRecord(
        axa_checklistresultMetadata.logicalName,
        data
      );
      return response;
    } catch (error: any) {
      console.dir(error);
      return error as Error;
    }
  }

  public async updateChecklistResult(
    checklistResult: CheckListResult
  ): Promise<ComponentFramework.WebApi.Entity | Error> {
    try {
      const response = await this.context.webAPI.updateRecord(
        axa_checklistresultMetadata.logicalName,
        checklistResult.checklistResultId,
        {
          axa_result: checklistResult.result,
        }
      );
      return response;
    } catch (error: any) {
      console.dir(error);
      return error as Error;
    }
  }
}

export const cdsServiceName = "CdsService";
