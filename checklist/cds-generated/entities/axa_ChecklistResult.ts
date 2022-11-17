/* eslint-disable*/
import { IEntity } from "cdsify";
// Entity axa_ChecklistResult
export const axa_checklistresultMetadata = {
  typeName: "mscrm.axa_checklistresult",
  logicalName: "axa_checklistresult",
  collectionName: "axa_checklistresults",
  primaryIdAttribute: "axa_checklistresultid",
  attributeTypes: {
    // Numeric Types
    importsequencenumber: "Integer",
    utcconversiontimezonecode: "Integer",
    versionnumber: "BigInt",
    timezoneruleversionnumber: "Integer",
    // Optionsets
    statecode: "Optionset",
    statuscode: "Optionset",
    axa_result: "Optionset",
    // Date Formats
    modifiedon: "DateAndTime:UserLocal",
    createdon: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
  },
  navigation: {
    owninguser: ["mscrm.systemuser"],
    owningteam: ["mscrm.team"],
    owningbusinessunit: ["mscrm.businessunit"],
    ownerid: ["mscrm.principal"],
    modifiedonbehalfby: ["mscrm.systemuser"],
    modifiedby: ["mscrm.systemuser"],
    createdonbehalfby: ["mscrm.systemuser"],
    createdby: ["mscrm.systemuser"],
    axa_RFE: ["mscrm.axa_requestforexpenditure"],
    axa_Checklist: ["mscrm.axa_checklist"],
  },
};

// Attribute constants
export enum axa_ChecklistResultAttributes {
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  OwningTeam = "owningteam",
  statecode = "statecode",
  OwnerIdName = "owneridname",
  statuscode = "statuscode",
  OwningUser = "owninguser",
  CreatedOnBehalfBy = "createdonbehalfby",
  ImportSequenceNumber = "importsequencenumber",
  ModifiedByYomiName = "modifiedbyyominame",
  axa_RFE = "axa_rfe",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  CreatedByYomiName = "createdbyyominame",
  OwningBusinessUnit = "owningbusinessunit",
  ModifiedByName = "modifiedbyname",
  VersionNumber = "versionnumber",
  ModifiedBy = "modifiedby",
  CreatedBy = "createdby",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  OwnerIdType = "owneridtype",
  OwnerIdYomiName = "owneridyominame",
  ModifiedOn = "modifiedon",
  axa_ChecklistName = "axa_checklistname",
  axa_Result = "axa_result",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  OwnerId = "ownerid",
  CreatedByName = "createdbyname",
  CreatedOn = "createdon",
  OwningBusinessUnitName = "owningbusinessunitname",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  axa_Checklist = "axa_checklist",
  axa_RFEName = "axa_rfename",
  axa_ChecklistResultId = "axa_checklistresultid",
  OverriddenCreatedOn = "overriddencreatedon",
  axa_Name = "axa_name",
}

// Early Bound Interface
export interface axa_ChecklistResult extends IEntity {
  //  StringType
  createdonbehalfbyyominame?: string | null;
  // Modified By (Delegate) LookupType Unique identifier of the delegate user who modified the record.
  modifiedonbehalfby?: import("cdsify").EntityReference | null;
  // Owning Team LookupType Unique identifier for the team that owns the record.
  owningteam?: import("cdsify").EntityReference | null;
  // Status axa_checklistresult_axa_checklistresult_statecode Status of the Checklist Result
  statecode?: import("../enums/axa_checklistresult_axa_checklistresult_statecode").axa_checklistresult_axa_checklistresult_statecode | null;
  //  StringType Name of the owner
  owneridname?: string | null;
  // Status Reason axa_checklistresult_axa_checklistresult_statuscode Reason for the status of the Checklist Result
  statuscode?: import("../enums/axa_checklistresult_axa_checklistresult_statuscode").axa_checklistresult_axa_checklistresult_statuscode | null;
  // Owning User LookupType Unique identifier for the user that owns the record.
  owninguser?: import("cdsify").EntityReference | null;
  // Created By (Delegate) LookupType Unique identifier of the delegate user who created the record.
  createdonbehalfby?: import("cdsify").EntityReference | null;
  // Import Sequence Number IntegerType Sequence number of the import that created this record.
  importsequencenumber?: number | null;
  //  StringType
  modifiedbyyominame?: string | null;
  // RFE LookupType
  axa_rfe?: import("cdsify").EntityReference | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  //  StringType
  createdbyyominame?: string | null;
  // Owning Business Unit LookupType Unique identifier for the business unit that owns the record
  owningbusinessunit?: import("cdsify").EntityReference | null;
  //  StringType
  modifiedbyname?: string | null;
  // Version Number BigIntType Version Number
  versionnumber?: number | null;
  // Modified By LookupType Unique identifier of the user who modified the record.
  modifiedby?: import("cdsify").EntityReference | null;
  // Created By LookupType Unique identifier of the user who created the record.
  createdby?: import("cdsify").EntityReference | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  //  EntityNameType Owner Id Type
  owneridtype?: string | null;
  //  StringType Yomi name of the owner
  owneridyominame?: string | null;
  // Modified On DateTimeType Date and time when the record was modified. DateAndTime:UserLocal
  modifiedon?: Date | null;
  //  StringType
  axa_checklistname?: string | null;
  // Result axa_checklistresult_axa_checklistresult_axa_result
  axa_result?: import("../enums/axa_checklistresult_axa_checklistresult_axa_result").axa_checklistresult_axa_checklistresult_axa_result | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  // Owner OwnerType Owner Id
  ownerid?: import("cdsify").EntityReference | null;
  //  StringType
  createdbyname?: string | null;
  // Created On DateTimeType Date and time when the record was created. DateAndTime:UserLocal
  createdon?: Date | null;
  //  StringType
  owningbusinessunitname?: string | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  // Checklist LookupType
  axa_checklist?: import("cdsify").EntityReference | null;
  //  StringType
  axa_rfename?: string | null;
  // Checklist Result UniqueidentifierType Unique identifier for entity instances
  axa_checklistresultid?: import("cdsify").Guid | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date | null;
  // Name [Required] StringType
  axa_name?: string;
}
