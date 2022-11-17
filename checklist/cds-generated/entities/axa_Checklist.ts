/* eslint-disable*/
import { IEntity } from "cdsify";
// Entity axa_Checklist
export const axa_checklistMetadata = {
  typeName: "mscrm.axa_checklist",
  logicalName: "axa_checklist",
  collectionName: "axa_checklists",
  primaryIdAttribute: "axa_checklistid",
  attributeTypes: {
    // Numeric Types
    importsequencenumber: "Integer",
    utcconversiontimezonecode: "Integer",
    versionnumber: "BigInt",
    timezoneruleversionnumber: "Integer",
    axa_sortcode: "Integer",
    // Optionsets
    statecode: "Optionset",
    axa_type: "Optionset",
    statuscode: "Optionset",
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
  },
};

// Attribute constants
export enum axa_ChecklistAttributes {
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  OwningTeam = "owningteam",
  statecode = "statecode",
  OwnerIdName = "owneridname",
  axa_Section = "axa_section",
  CreatedOnBehalfBy = "createdonbehalfby",
  axa_Type = "axa_type",
  OwningUser = "owninguser",
  ImportSequenceNumber = "importsequencenumber",
  ModifiedByYomiName = "modifiedbyyominame",
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
  axa_ChecklistId = "axa_checklistid",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  statuscode = "statuscode",
  CreatedByName = "createdbyname",
  CreatedOn = "createdon",
  OwningBusinessUnitName = "owningbusinessunitname",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  axa_SortCode = "axa_sortcode",
  OwnerId = "ownerid",
  OverriddenCreatedOn = "overriddencreatedon",
  axa_Name = "axa_name",
}

// Early Bound Interface
export interface axa_Checklist extends IEntity {
  //  StringType
  createdonbehalfbyyominame?: string | null;
  // Modified By (Delegate) LookupType Unique identifier of the delegate user who modified the record.
  modifiedonbehalfby?: import("cdsify").EntityReference | null;
  // Owning Team LookupType Unique identifier for the team that owns the record.
  owningteam?: import("cdsify").EntityReference | null;
  // Status axa_checklist_axa_checklist_statecode Status of the Checklist
  statecode?: import("../enums/axa_checklist_axa_checklist_statecode").axa_checklist_axa_checklist_statecode | null;
  //  StringType Name of the owner
  owneridname?: string | null;
  // Section StringType
  axa_section?: string | null;
  // Created By (Delegate) LookupType Unique identifier of the delegate user who created the record.
  createdonbehalfby?: import("cdsify").EntityReference | null;
  // Type axa_checklisttype
  axa_type?: import("../enums/axa_checklisttype").axa_checklisttype | null;
  // Owning User LookupType Unique identifier for the user that owns the record.
  owninguser?: import("cdsify").EntityReference | null;
  // Import Sequence Number IntegerType Sequence number of the import that created this record.
  importsequencenumber?: number | null;
  //  StringType
  modifiedbyyominame?: string | null;
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
  // Checklist UniqueidentifierType Unique identifier for entity instances
  axa_checklistid?: import("cdsify").Guid | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  // Status Reason axa_checklist_axa_checklist_statuscode Reason for the status of the Checklist
  statuscode?: import("../enums/axa_checklist_axa_checklist_statuscode").axa_checklist_axa_checklist_statuscode | null;
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
  // Sort Code IntegerType
  axa_sortcode?: number | null;
  // Owner OwnerType Owner Id
  ownerid?: import("cdsify").EntityReference | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date | null;
  // Question [Required] StringType
  axa_name?: string;
}
