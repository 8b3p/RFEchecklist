import { ServiceProvider, StandardControlReact } from "pcf-react";
import React = require("react");
import ReactDOM = require("react-dom");
import App from "./components/App";
import CdsService, { cdsServiceName } from "./cdsService/CdsService";
import { IInputs, IOutputs } from "./generated/ManifestTypes";
import ChecklistVM, { checklistVMserviceName } from "./Context/ChecklistVM";
import { axa_checklisttype } from "./cds-generated/enums/axa_checklisttype";

export class checklist extends StandardControlReact<IInputs, IOutputs> {
  checklistType: axa_checklisttype | undefined;
  constructor() {
    //log the version on the console
    console.log("Version: 1.0.2 - 2022-12-13");
    super();
    this.renderOnParametersChanged = false;
    this.initServiceProvider = (serviceProvider: ServiceProvider) => {
      if (this.context.parameters.type.raw === "Safety") {
        this.checklistType = axa_checklisttype.Safety;
      } else if (this.context.parameters.type.raw === "Quality") {
        this.checklistType = axa_checklisttype.Quality;
      } else if (this.context.parameters.type.raw === "Environmental") {
        this.checklistType = axa_checklisttype.Environmental;
      }
      serviceProvider.register(cdsServiceName, new CdsService(this.context));
      serviceProvider.register("context", this.context);
      serviceProvider.register(
        checklistVMserviceName,
        new ChecklistVM(serviceProvider, this.checklistType)
      );
    };
    this.reactCreateElement = (
      container: HTMLDivElement,
      width: number | undefined,
      height: number | undefined,
      serviceProvider: ServiceProvider
    ) => {
      ReactDOM.render(
        React.createElement(App, {
          context: this.context,
          width: width,
          height: height,
          serviceProvider: serviceProvider,
        }),
        container
      );
    };
  }
}
