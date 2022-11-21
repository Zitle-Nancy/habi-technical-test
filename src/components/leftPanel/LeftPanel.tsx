import { LeftPanel } from "./styles";
import { Content } from "./Content";

export const LeftPanelComponent = ({
  isExtended,
}: {
  isExtended?: boolean;
}) => {
  return (
    <LeftPanel isExtended={isExtended}>
      <Content />
    </LeftPanel>
  );
};
