/* eslint-disable*/
import { IEntity } from "cdsify";
// Entity axa_RequestforExpenditure
export const axa_requestforexpenditureMetadata = {
  typeName: "mscrm.axa_requestforexpenditure",
  logicalName: "axa_requestforexpenditure",
  collectionName: "axa_requestforexpenditures",
  primaryIdAttribute: "axa_requestforexpenditureid",
  attributeTypes: {
    // Numeric Types
    axa_budgetamountk: "Money",
    axa_budgetamountk_base: "Money",
    axa_revised: "Money",
    exchangerate: "Decimal",
    axa_irr: "Integer",
    axa_fundsrequestedk_base: "Money",
    versionnumber: "BigInt",
    utcconversiontimezonecode: "Integer",
    timezoneruleversionnumber: "Integer",
    importsequencenumber: "Integer",
    axa_initial_base: "Money",
    axa_initial: "Money",
    axa_fundsrequestedk: "Money",
    axa_roi: "Integer",
    axa_revised_base: "Money",
    // Optionsets
    statecode: "Optionset",
    axa_location: "Optionset",
    axa_rfestatus: "Optionset",
    axa_rfetype: "Optionset",
    statuscode: "Optionset",
    axa_purchasingstatus: "Optionset",
    // Date Formats
    createdon: "DateAndTime:UserLocal",
    axa_date: "DateOnly:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    axa_enddate: "DateOnly:UserLocal",
    axa_startdate: "DateOnly:UserLocal",
  },
  navigation: {
    transactioncurrencyid: ["mscrm.transactioncurrency"],
    owninguser: ["mscrm.systemuser"],
    owningteam: ["mscrm.team"],
    owningbusinessunit: ["mscrm.businessunit"],
    ownerid: ["mscrm.principal"],
    modifiedonbehalfby: ["mscrm.systemuser"],
    modifiedby: ["mscrm.systemuser"],
    createdonbehalfby: ["mscrm.systemuser"],
    createdby: ["mscrm.systemuser"],
    axa_ProjectResponsible: ["mscrm.systemuser"],
    axa_ProjectManager: ["mscrm.systemuser"],
    axa_Preparer: ["mscrm.systemuser"],
    axa_AOPProject: ["mscrm.axa_aopproject"],
  },
};

// Attribute constants
export enum axa_RequestforExpenditureAttributes {
  axa_PreparerYomiName = "axa_prepareryominame",
  axa_ProjectResponsibleName = "axa_projectresponsiblename",
  axa_CompliancewithGovernmentRegulations = "axa_compliancewithgovernmentregulations",
  CreatedOn = "createdon",
  axa_ProjectManagerYomiName = "axa_projectmanageryominame",
  OwningUser = "owninguser",
  axa_DispositionofFixedAssetsDFA = "axa_dispositionoffixedassetsdfa",
  axa_ImproveProductionandYield = "axa_improveproductionandyield",
  axa_KeyAssumptions = "axa_keyassumptions",
  axa_Date = "axa_date",
  axa_ProjectManager = "axa_projectmanager",
  axa_AIReport_Name = "axa_aireport_name",
  axa_AOPProject = "axa_aopproject",
  ModifiedByYomiName = "modifiedbyyominame",
  axa_ProjectDescription = "axa_projectdescription",
  axa_ScopeManagementChecklist = "axa_scopemanagementchecklist",
  OwnerIdType = "owneridtype",
  axa_BudgetAmountK = "axa_budgetamountk",
  axa_OptionallyattachadocumentwithProjectDescript = "axa_optionallyattachadocumentwithprojectdescript",
  axa_NewProductProcessDevelopment = "axa_newproductprocessdevelopment",
  axa_budgetamountk_Base = "axa_budgetamountk_base",
  axa_ImproveManufacturingReliability = "axa_improvemanufacturingreliability",
  ModifiedByName = "modifiedbyname",
  axa_Revised = "axa_revised",
  OwnerIdName = "owneridname",
  OverriddenCreatedOn = "overriddencreatedon",
  axa_ScopeManagementChecklist_Name = "axa_scopemanagementchecklist_name",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  axa_OptionallyattachadocumentwithProjectJustific = "axa_optionallyattachadocumentwithprojectjustific",
  axa_Other = "axa_other",
  ExchangeRate = "exchangerate",
  axa_SignaturePage = "axa_signaturepage",
  axa_RequestforLeaseAuthorizationRFLA = "axa_requestforleaseauthorizationrfla",
  OwningTeam = "owningteam",
  axa_ProjectYear = "axa_projectyear",
  axa_SignaturePage_Name = "axa_signaturepage_name",
  axa_IRR = "axa_irr",
  statecode = "statecode",
  axa_OptionallyattachadocumentwithProjectJustific_Name = "axa_optionallyattachadocumentwithprojectjustific_name",
  axa_fundsrequestedk_Base = "axa_fundsrequestedk_base",
  axa_RequestforRDExpenditure = "axa_requestforrdexpenditure",
  axa_RevisionWorksheet = "axa_revisionworksheet",
  OwningBusinessUnitName = "owningbusinessunitname",
  axa_AlternativesConsidered = "axa_alternativesconsidered",
  VersionNumber = "versionnumber",
  axa_Pleasedescribethepreventivefugitiveemissionc = "axa_pleasedescribethepreventivefugitiveemissionc",
  axa_ScopeStatement = "axa_scopestatement",
  axa_ProjectResponsible = "axa_projectresponsible",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  axa_RolesandResponsibilities = "axa_rolesandresponsibilities",
  axa_RevisionWorksheet_Name = "axa_revisionworksheet_name",
  axa_EnergyEfficiencyandSavings = "axa_energyefficiencyandsavings",
  axa_ProjectResponsibleYomiName = "axa_projectresponsibleyominame",
  CreatedBy = "createdby",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  axa_Location = "axa_location",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  axa_Notes = "axa_notes",
  axa_RFEStatus = "axa_rfestatus",
  axa_Preparer = "axa_preparer",
  OwnerId = "ownerid",
  ModifiedOn = "modifiedon",
  ImportSequenceNumber = "importsequencenumber",
  OwnerIdYomiName = "owneridyominame",
  axa_OptionallyattachadocumentwithProjectDescript_Name = "axa_optionallyattachadocumentwithprojectdescript_name",
  axa_initial_Base = "axa_initial_base",
  axa_EndDate = "axa_enddate",
  CreatedByName = "createdbyname",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  axa_StartDate = "axa_startdate",
  axa_ProjectManagerName = "axa_projectmanagername",
  axa_NotinScope = "axa_notinscope",
  axa_ImproveProductQuality = "axa_improveproductquality",
  axa_Initial = "axa_initial",
  axa_AOPProjectName = "axa_aopprojectname",
  axa_RFEType = "axa_rfetype",
  axa_PreparerName = "axa_preparername",
  axa_ProjectJustification = "axa_projectjustification",
  axa_Title = "axa_title",
  TransactionCurrencyId = "transactioncurrencyid",
  axa_AIReport = "axa_aireport",
  axa_ListtheSafeguardsthatwillbeusedtoensureth = "axa_listthesafeguardsthatwillbeusedtoensureth",
  axa_FundsRequestedK = "axa_fundsrequestedk",
  ModifiedBy = "modifiedby",
  axa_ProjectID = "axa_projectid",
  axa_ROI = "axa_roi",
  axa_SafteyChecklistOptionallyprovideadditionalex = "axa_safteychecklistoptionallyprovideadditionalex",
  CreatedByYomiName = "createdbyyominame",
  axa_revised_Base = "axa_revised_base",
  TransactionCurrencyIdName = "transactioncurrencyidname",
  axa_RequestforExpenditureId = "axa_requestforexpenditureid",
  axa_StayinBusiness = "axa_stayinbusiness",
  axa_MajorDeliverables = "axa_majordeliverables",
  axa_MyCompanyMyPride = "axa_mycompanymypride",
  axa_ConsultantAgreements = "axa_consultantagreements",
  CreatedOnBehalfBy = "createdonbehalfby",
  axa_Milestones = "axa_milestones",
  statuscode = "statuscode",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  axa_RequestforComputersSoftware = "axa_requestforcomputerssoftware",
  axa_EnableSupplement = "axa_enablesupplement",
  axa_EnvironmentalChecklistOptionallyprovideadditio = "axa_environmentalchecklistoptionallyprovideadditio",
  axa_PurchasingStatus = "axa_purchasingstatus",
  axa_ResettoDraftMode = "axa_resettodraftmode",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  OwningBusinessUnit = "owningbusinessunit",
}

// Early Bound Interface
export interface axa_RequestforExpenditure extends IEntity {
  //  StringType
  axa_prepareryominame?: string | null;
  //  StringType
  axa_projectresponsiblename?: string | null;
  // Compliance with Government Regulations BooleanType
  axa_compliancewithgovernmentregulations?: boolean | null;
  // Created On DateTimeType Date and time when the record was created. DateAndTime:UserLocal
  createdon?: Date | null;
  //  StringType
  axa_projectmanageryominame?: string | null;
  // Owning User LookupType Unique identifier for the user that owns the record.
  owninguser?: import("cdsify").EntityReference | null;
  // Disposition of Fixed Assets (DFA) BooleanType Disposition of Fixed Assets (DFA)-Must complete DFA form
  axa_dispositionoffixedassetsdfa?: boolean | null;
  // Improve Production and Yield BooleanType
  axa_improveproductionandyield?: boolean | null;
  // Key Assumptions StringType
  axa_keyassumptions?: string | null;
  // Date DateTimeType DateOnly:UserLocal
  axa_date?: Date | null;
  // Project Manager LookupType
  axa_projectmanager?: import("cdsify").EntityReference | null;
  //  StringType
  axa_aireport_name?: string | null;
  // AOP Project LookupType
  axa_aopproject?: import("cdsify").EntityReference | null;
  //  StringType
  modifiedbyyominame?: string | null;
  // Project Description StringType
  axa_projectdescription?: string | null;
  // Scope Management Checklist FileType
  axa_scopemanagementchecklist?: FileType | null;
  //  EntityNameType Owner Id Type
  owneridtype?: string | null;
  // Budget Amount ($K) MoneyType
  axa_budgetamountk?: number | null;
  // Optionally attach a document with Project Descript FileType
  axa_optionallyattachadocumentwithprojectdescript?: FileType | null;
  // New Product / Process Development BooleanType
  axa_newproductprocessdevelopment?: boolean | null;
  // Budget Amount ($K) (Base) MoneyType Value of the Budget Amount ($K) in base currency.
  axa_budgetamountk_base?: number | null;
  // Improve Manufacturing Reliability BooleanType
  axa_improvemanufacturingreliability?: boolean | null;
  //  StringType
  modifiedbyname?: string | null;
  // Revised MoneyType
  axa_revised?: number | null;
  //  StringType Name of the owner
  owneridname?: string | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date | null;
  //  StringType
  axa_scopemanagementchecklist_name?: string | null;
  //  StringType
  createdonbehalfbyyominame?: string | null;
  // Optionally attach a document with Project Justific FileType
  axa_optionallyattachadocumentwithprojectjustific?: FileType | null;
  // Other BooleanType
  axa_other?: boolean | null;
  // Exchange Rate DecimalType Exchange rate for the currency associated with the entity with respect to the base currency.
  exchangerate?: number | null;
  // Signature Page FileType
  axa_signaturepage?: FileType | null;
  // Request for Lease Authorization (RFLA) BooleanType
  axa_requestforleaseauthorizationrfla?: boolean | null;
  // Owning Team LookupType Unique identifier for the team that owns the record.
  owningteam?: import("cdsify").EntityReference | null;
  // Project Year StringType
  axa_projectyear?: string | null;
  //  StringType
  axa_signaturepage_name?: string | null;
  // IRR % IntegerType
  axa_irr?: number | null;
  // Status axa_requestforexpenditure_axa_requestforexpenditure_statecode Status of the Request for Expenditure
  statecode?: import("../enums/axa_requestforexpenditure_axa_requestforexpenditure_statecode").axa_requestforexpenditure_axa_requestforexpenditure_statecode | null;
  //  StringType
  axa_optionallyattachadocumentwithprojectjustific_name?: string | null;
  // Funds Requested ($K) (Base) MoneyType Value of the Funds Requested ($K) in base currency.
  axa_fundsrequestedk_base?: number | null;
  // Request for R&D Expenditure BooleanType
  axa_requestforrdexpenditure?: boolean | null;
  // Revision Worksheet FileType
  axa_revisionworksheet?: FileType | null;
  //  StringType
  owningbusinessunitname?: string | null;
  // Alternatives Considered StringType
  axa_alternativesconsidered?: string | null;
  // Version Number BigIntType Version Number
  versionnumber?: number | null;
  // Please describe the preventive fugitive emission c StringType
  axa_pleasedescribethepreventivefugitiveemissionc?: string | null;
  // Scope Statement StringType
  axa_scopestatement?: string | null;
  // Project Responsible LookupType
  axa_projectresponsible?: import("cdsify").EntityReference | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  // Roles and Responsibilities StringType
  axa_rolesandresponsibilities?: string | null;
  //  StringType
  axa_revisionworksheet_name?: string | null;
  // Energy Efficiency and Savings BooleanType
  axa_energyefficiencyandsavings?: boolean | null;
  //  StringType
  axa_projectresponsibleyominame?: string | null;
  // Created By LookupType Unique identifier of the user who created the record.
  createdby?: import("cdsify").EntityReference | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  // Location [Required] axa_location
  axa_location?: import("../enums/axa_location").axa_location;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  // Notes StringType
  axa_notes?: string | null;
  // RFE Status axa_rfestatus
  axa_rfestatus?: import("../enums/axa_rfestatus").axa_rfestatus | null;
  // Preparer LookupType
  axa_preparer?: import("cdsify").EntityReference | null;
  // Owner OwnerType Owner Id
  ownerid?: import("cdsify").EntityReference | null;
  // Modified On DateTimeType Date and time when the record was modified. DateAndTime:UserLocal
  modifiedon?: Date | null;
  // Import Sequence Number IntegerType Sequence number of the import that created this record.
  importsequencenumber?: number | null;
  //  StringType Yomi name of the owner
  owneridyominame?: string | null;
  //  StringType
  axa_optionallyattachadocumentwithprojectdescript_name?: string | null;
  //  Initial (Base) MoneyType Value of the  Initial in base currency.
  axa_initial_base?: number | null;
  // End Date DateTimeType DateOnly:UserLocal
  axa_enddate?: Date | null;
  //  StringType
  createdbyname?: string | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  // Start Date DateTimeType DateOnly:UserLocal
  axa_startdate?: Date | null;
  //  StringType
  axa_projectmanagername?: string | null;
  // Not in Scope StringType
  axa_notinscope?: string | null;
  // Improve Product Quality BooleanType
  axa_improveproductquality?: boolean | null;
  //  Initial MoneyType
  axa_initial?: number | null;
  //  StringType
  axa_aopprojectname?: string | null;
  // RFE Type axa_rfetype
  axa_rfetype?: import("../enums/axa_rfetype").axa_rfetype | null;
  //  StringType
  axa_preparername?: string | null;
  // Project Justification StringType
  axa_projectjustification?: string | null;
  // Title [Required] StringType
  axa_title?: string;
  // Currency LookupType Unique identifier of the currency associated with the entity.
  transactioncurrencyid?: import("cdsify").EntityReference | null;
  // A&I Report. FileType
  axa_aireport?: FileType | null;
  // List the Safeguards that will be used to ensure th StringType
  axa_listthesafeguardsthatwillbeusedtoensureth?: string | null;
  // Funds Requested ($K) MoneyType
  axa_fundsrequestedk?: number | null;
  // Modified By LookupType Unique identifier of the user who modified the record.
  modifiedby?: import("cdsify").EntityReference | null;
  // Project ID StringType
  axa_projectid?: string | null;
  // ROI % IntegerType
  axa_roi?: number | null;
  // Optionally provide additional explanations, clarif StringType
  axa_safteychecklistoptionallyprovideadditionalex?: string | null;
  //  StringType
  createdbyyominame?: string | null;
  // Revised (Base) MoneyType Value of the Revised in base currency.
  axa_revised_base?: number | null;
  //  StringType
  transactioncurrencyidname?: string | null;
  // Request for Expenditure UniqueidentifierType Unique identifier for entity instances
  axa_requestforexpenditureid?: import("cdsify").Guid | null;
  // Stay in Business BooleanType
  axa_stayinbusiness?: boolean | null;
  // Major Deliverables StringType
  axa_majordeliverables?: string | null;
  // My Company, My Pride BooleanType
  axa_mycompanymypride?: boolean | null;
  // Consultant Agreements BooleanType
  axa_consultantagreements?: boolean | null;
  // Created By (Delegate) LookupType Unique identifier of the delegate user who created the record.
  createdonbehalfby?: import("cdsify").EntityReference | null;
  // Milestones StringType
  axa_milestones?: string | null;
  // Status Reason axa_requestforexpenditure_axa_requestforexpenditure_statuscode Reason for the status of the Request for Expenditure
  statuscode?: import("../enums/axa_requestforexpenditure_axa_requestforexpenditure_statuscode").axa_requestforexpenditure_axa_requestforexpenditure_statuscode | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  // Request for Computers / Software BooleanType
  axa_requestforcomputerssoftware?: boolean | null;
  // Enable Supplement BooleanType
  axa_enablesupplement?: boolean | null;
  // Optionally provide additional explanations, clarif StringType
  axa_environmentalchecklistoptionallyprovideadditio?: string | null;
  // Purchasing Status msdyn_purchaserequisitionstatus
  axa_purchasingstatus?: import("../enums/msdyn_purchaserequisitionstatus").msdyn_purchaserequisitionstatus | null;
  // Reset to Draft Mode BooleanType
  axa_resettodraftmode?: boolean | null;
  // Modified By (Delegate) LookupType Unique identifier of the delegate user who modified the record.
  modifiedonbehalfby?: import("cdsify").EntityReference | null;
  // Owning Business Unit LookupType Unique identifier for the business unit that owns the record
  owningbusinessunit?: import("cdsify").EntityReference | null;
}
