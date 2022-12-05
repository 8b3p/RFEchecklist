import { axa_checklistMetadata } from "../cds-generated/entities/axa_Checklist";
import {
  axa_ChecklistResult,
  axa_ChecklistResultAttributes,
  axa_checklistresultMetadata,
} from "../cds-generated/entities/axa_ChecklistResult";
import { axa_requestforexpenditureMetadata } from "../cds-generated/entities/axa_RequestforExpenditure";
import { axa_checklisttype } from "../cds-generated/enums/axa_checklisttype";
import { axa_rfestatus } from "../cds-generated/enums/axa_rfestatus";
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

  private EncodeFile(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = _f => resolve((<string>reader.result).split(",")[1]);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  }
  private CollectionNameFromLogicalName(entityLogicalName: string): string {
    if (entityLogicalName[entityLogicalName.length - 1] != "s") {
      return `${entityLogicalName}s`;
    } else {
      return `${entityLogicalName}es`;
    }
  }

  public async retrieveRfeStatus(
    rfeId: string
  ): Promise<axa_rfestatus | Error> {
    try {
      const response = await this.context.webAPI.retrieveRecord(
        axa_requestforexpenditureMetadata.logicalName,
        rfeId,
        "?$select=axa_rfestatus"
      );
      if (response) {
        return response.axa_rfestatus as axa_rfestatus;
      } else {
        return new Error("No response from CDS");
      }
    } catch (e: any) {
      console.error(e.message);
      return new Error(e.message);
    }
  }

  public async saveFile(
    file: File,
    entityID: string,
    entityLogicalName: string
  ): Promise<Error | ComponentFramework.LookupValue> {
    try {
      const fileContent = await this.EncodeFile(file);
      const data = {
        subject: `Attachment: ${file.name}`,
        filename: file.name,
        filesize: file.size,
        mimetype: file.type,
        objecttypecode: entityLogicalName,
        documentbody: fileContent,
        [`objectid_${entityLogicalName}@odata.bind`]: `/${this.CollectionNameFromLogicalName(
          entityLogicalName
        )}(${entityID})`,
      };

      const response = await this.context.webAPI.createRecord(
        "annotation",
        data
      );
      return response;
    } catch (error: any) {
      console.dir(error);
      return error as Error;
    }
  }
}

export const cdsServiceName = "CdsService";
