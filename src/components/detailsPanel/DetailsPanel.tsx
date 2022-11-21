import { DetailsPanel } from "./styles";
import { Content } from "./Content";

export const DetailsPanelComponent = ({
  isExtended,
}: {
  isExtended?: boolean;
}) => {
  return (
    <DetailsPanel isExtended={isExtended}>
      <Content />
    </DetailsPanel>
  );
};
