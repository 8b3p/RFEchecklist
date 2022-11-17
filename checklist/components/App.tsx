import { observer } from "mobx-react-lite";
import { ServiceProvider } from "pcf-react";
import * as React from "react";
import { IInputs } from "../generated/ManifestTypes";
import ChecklistVM, { checklistVMserviceName } from "../ViewModels/ChecklistVM";
import ChecklistVMProvider from "../ViewModels/context";
import Section from "./Section";

interface props {
  context: ComponentFramework.Context<IInputs>;
  height?: number;
  width?: number;
  serviceProvider: ServiceProvider;
}

const App = ({ serviceProvider }: props) => {
  const vm = serviceProvider.get<ChecklistVM>(checklistVMserviceName);

  const renderSections = () => {
    return vm.Sections.map(section => {
      return <Section key={section} section={section} />;
    });
  };

  return (
    <ChecklistVMProvider value={vm}>{renderSections()}</ChecklistVMProvider>
  );
};

export default observer(App);
