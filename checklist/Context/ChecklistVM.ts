import { makeAutoObservable } from "mobx";
import { ServiceProvider } from "pcf-react";
import { axa_checklistresult_axa_checklistresult_axa_result } from "../cds-generated/enums/axa_checklistresult_axa_checklistresult_axa_result";
import { axa_checklisttype } from "../cds-generated/enums/axa_checklisttype";
import { axa_rfestatus } from "../cds-generated/enums/axa_rfestatus";
import CdsService, { cdsServiceName } from "../cdsService/CdsService";
import { IInputs } from "../generated/ManifestTypes";
import { CheckLists } from "../types/CheckList";
import { CheckListResult, CheckListResults } from "../types/CheckListResult";

export default class ChecklistVM {
  public Checklist: CheckLists = {};
  public serviceProvider: ServiceProvider;
  public context: ComponentFramework.Context<IInputs>;
  private cdsService: CdsService;
  public checklistType: axa_checklisttype = axa_checklisttype.Safety;
  public checklistResults: CheckListResults = {}; //*this is mapped by the checklistId and not the checklistResultId
  public rfeGuid: string;
  public isControlDisabled: boolean;

  constructor(
    serviceProvider: ServiceProvider,
    checklistType?: axa_checklisttype
  ) {
    if (checklistType) {
      this.checklistType = checklistType;
    }
    makeAutoObservable(this);
    this.serviceProvider = serviceProvider;
    this.cdsService = serviceProvider.get<CdsService>(cdsServiceName);
    this.context = serviceProvider.get("context");
    this.rfeGuid = Xrm.Page.data.entity.getId();
    this.rfeGuid = this.rfeGuid.substring(1, this.rfeGuid.length - 1); // remove the curly braces, as the RFE ID is stored in the format {guid}
    //
    this.fetchChecklist();
  }

  public async fetchRfeStatus() {
    const result = await this.cdsService.retrieveRfeStatus(this.rfeGuid);
    if (result instanceof Error) {
      console.error(result.message);
      return;
    }
    this.isControlDisabled = result !== axa_rfestatus.Draft;
  }

  /**
   * @returns an array of the sections
   */
  public get Sections() {
    return Object.keys(this.ChecklistBySection);
  }

  /**
   * @retunrs the checklist grouped by sections
   */
  public get ChecklistBySection() {
    const checklistBySection: { [key: string]: CheckLists } = {};
    Object.values(this.Checklist).forEach(item => {
      if (!checklistBySection[item.section]) {
        checklistBySection[item.section] = {};
      }
      checklistBySection[item.section][item.id] = item;
    });
    return checklistBySection;
  }

  /**
   * calling this function updates the data in the VM.
   * you would call it when the PCF first mounts, or whenever a full refresh of the data is needed
   */
  //! I AM EXPECTING THE DATA TO BE SORTED, i can surely sort it here easy but i got it sorted the first time so i didn't wonna waste time making the sorting function.
  public async fetchChecklist(): Promise<void> {
    this.Checklist = {};
    this.checklistResults = {};

    await this.fetchRfeStatus();

    const response1 = await this.cdsService.retrieveChecklistsByType(
      this.checklistType
    ); // gets the checklist
    const response2 = await this.cdsService.retrieveChecklistResultsByRFE(
      this.rfeGuid
    ); // gets the checklist results for the RFE

    if (response1 instanceof Error || response2 instanceof Error) {
      console.error(response1, response2);
      return;
    } // makes sure the responses weren't errors before continuing //TODO i need to handle this error, right now it just logs the error and returns the function.

    response2.forEach((item: ComponentFramework.WebApi.Entity) => {
      this.checklistResults[item._axa_checklist_value] = {
        checklistResultId: item.axa_checklistresultid,
        checklistId: item._axa_checklist_value,
        result: item.axa_result,
        rfeId: item._axa_rfe_value,
        name: "",
      } as CheckListResult;
    }); // populates the data to the VM

    response1.forEach((item: ComponentFramework.WebApi.Entity) => {
      const name: string = item["axa_name"];
      const number = parseInt(name.substring(0, 1)); // takes the number of the question from the name
      const nameWithoutNumber = name
        .substring(name.indexOf(".") + 1)
        .replace(/^\s+|\s+$/g, ""); // removes the number and dot from the name and removes any whitespace

      this.Checklist[item.axa_checklistid] = {
        id: item.axa_checklistid,
        type: item.axa_type as number,
        section: item.axa_section,
        name: nameWithoutNumber,
        sortcode: item.axa_sortcode,
        number,
      };
    }); // populates the data to the VM
  }

  public async saveFile(
    file: File,
    entityID: string,
    entityLogicalName: string
  ): Promise<ComponentFramework.LookupValue | undefined> {
    const response = await this.cdsService.saveFile(
      file,
      entityID,
      entityLogicalName
    );
    if (response instanceof Error) {
      console.error(response);
      return;
    }
    return response;
  }

  /**
   * this function saves the answer of the checklist question
   * @param result the result you want to save
   * @param checklistId the checklist or (question) you are answering. {GUID}
   * @returns nothing, updates the data in the VM.
   */
  public async saveChecklistAnswers(
    result: axa_checklistresult_axa_checklistresult_axa_result,
    checklistId: string
  ): Promise<void> {
    await this.fetchRfeStatus();
    //* check if a result already exists for the checklist
    const existingResult = Object.values(this.checklistResults).find(
      item => item.checklistId === checklistId
    );
    if (!this.isControlDisabled) {
      if (existingResult) {
        // if it does exist, update the result
        const newChecklistResult: CheckListResult = {
          checklistResultId: existingResult.checklistResultId,
          checklistId: existingResult.checklistId,
          result: result,
          rfeId: existingResult.rfeId,
          name: existingResult.name,
        };
        const response = await this.cdsService.updateChecklistResult(
          newChecklistResult
        );
        if (response instanceof Error) {
          // check if response is an error
          console.dir(response);
          return;
        }
        this.checklistResults[newChecklistResult.checklistId] =
          newChecklistResult;
      } else {
        // if it doesn't exist, create a new result
        const newResult: CheckListResult = {
          result,
          checklistId,
          name: "",
          rfeId: this.rfeGuid,
        } as CheckListResult;
        const response = await this.cdsService.createChecklistResult(newResult);
        if (response instanceof Error) {
          // check if response is an error
          console.dir(response);
          return;
        }
        newResult.checklistResultId = response.id;
        this.checklistResults[newResult.checklistId] = newResult;
      }
    }
  }
}

export const checklistVMserviceName = "ChecklistVM";
