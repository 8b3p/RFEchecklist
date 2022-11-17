import {
  Text,
  Stack,
  ChoiceGroup,
  IChoiceGroupOption,
  Spinner,
} from "@fluentui/react";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import React = require("react");
import { axa_checklistresult_axa_checklistresult_axa_result } from "../cds-generated/enums/axa_checklistresult_axa_checklistresult_axa_result";
import { useChecklistVM } from "../ViewModels/context";
import "./Question.css";

interface props {
  checklistId: string;
}

const Question = ({ checklistId }: props) => {
  const vm = useChecklistVM();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedKey, setSelectedKey] = useState<IChoiceGroupOption>(
    {} as IChoiceGroupOption
  );

  useEffect(() => {
    if (vm.checklistResults[checklistId]) {
      setSelectedKey({
        key: vm.checklistResults[checklistId].result.toString(),
        text: "",
      });
    }
    setIsLoading(false);
  }, [vm.checklistResults[checklistId]]);

  const options: IChoiceGroupOption[] = [
    { key: "752580002", text: "" }, // N/A
    { key: "752580000", text: "" }, // Yes
    { key: "752580001", text: "" }, // No
  ];

  const onChoiceGroupChange = async (
    _ev?: React.FormEvent<HTMLElement | HTMLInputElement>,
    option?: any
  ) => {
    if (option.key === "752580002") {
      setSelectedKey({
        key: axa_checklistresult_axa_checklistresult_axa_result.NA.toString(),
        text: "",
      });
      await vm.saveChecklistAnswers(
        axa_checklistresult_axa_checklistresult_axa_result.NA,
        checklistId
      );
    } else if (option.key === "752580000") {
      setSelectedKey({
        key: axa_checklistresult_axa_checklistresult_axa_result.Yes.toString(),
        text: "",
      });
      await vm.saveChecklistAnswers(
        axa_checklistresult_axa_checklistresult_axa_result.Yes,
        checklistId
      );
    } else if (option.key === "752580001") {
      setSelectedKey({
        key: axa_checklistresult_axa_checklistresult_axa_result.No.toString(),
        text: "",
      });
      await vm.saveChecklistAnswers(
        axa_checklistresult_axa_checklistresult_axa_result.No,
        checklistId
      );
    }
  };

  return (
    <Stack className='question' horizontal horizontalAlign='space-between'>
      <Stack style={{ alignSelf: "center" }} horizontal>
        <Text style={{ marginRight: 5 }} variant='medium' block>
          {vm.Checklist[checklistId].number + "."}
        </Text>
        <Text
          className='question-text'
          key={vm.Checklist[checklistId].id}
          variant='medium'
          block
        >
          {vm.Checklist[checklistId].name}
        </Text>
      </Stack>
      {isLoading ? (
        <Spinner style={{ width: "9rem" }} />
      ) : (
        <ChoiceGroup
          className='choice-group'
          selectedKey={selectedKey.key}
          defaultSelectedKey={selectedKey.key}
          onChange={onChoiceGroupChange}
          options={options}
        ></ChoiceGroup>
      )}
    </Stack>
  );
};

export default observer(Question);
