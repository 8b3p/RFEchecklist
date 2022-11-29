import { Stack, Text } from "@fluentui/react";
import { observer } from "mobx-react-lite";
import React = require("react");
import { useChecklistVM } from "../Context/context";
import Question from "./Question";
import "./Section.css";

interface props {
  section: string;
}

const Section = ({ section }: props) => {
  const vm = useChecklistVM();

  const checklists = vm.ChecklistBySection[section];

  const renderQuestions = () => {
    return Object.values(checklists).map(checklist => {
      return <Question checklistId={checklist.id} key={checklist.id} />;
    });
  };

  return (
    <Stack className='section-conatiner' gap={10}>
      <Stack
        className='section-header'
        horizontal
        horizontalAlign='space-between'
      >
        <Text variant='large' nowrap block>
          {section}
        </Text>
        <Stack horizontal>
          <Text className='choice-group-header' variant='large' block>
            N/A
          </Text>
          <Text className='choice-group-header' variant='large' block>
            Yes
          </Text>
          <Text className='choice-group-header' variant='large' block>
            No
          </Text>
        </Stack>
      </Stack>
      <div>{renderQuestions()}</div>
    </Stack>
  );
};

export default observer(Section);
