import React = require("react");
import ChecklistVM from "./ChecklistVM";

export const ChecklistVMContext = React.createContext<ChecklistVM>(
  {} as ChecklistVM
);

interface props {
  value: ChecklistVM;
  children: React.ReactNode;
}

const ChecklistVMProvider = ({ value, children }: props) => {
  return (
    <ChecklistVMContext.Provider value={value}>
      {children}
    </ChecklistVMContext.Provider>
  );
};

export const useChecklistVM = () => React.useContext(ChecklistVMContext);

export default ChecklistVMProvider;
