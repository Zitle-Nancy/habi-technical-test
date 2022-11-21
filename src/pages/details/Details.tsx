import { useLocation } from "react-router-dom";
import { DetailsPanelComponent } from "../../components/detailsPanel";
import { ModalComponent } from "../../UI-components";

export const Details = () => {
  const { pathname } = useLocation();
  const EXTEND_DETAILS_PANEL = pathname === "/details";
  return (
    <>
      <DetailsPanelComponent isExtended={EXTEND_DETAILS_PANEL} />
      <ModalComponent />
    </>
  );
};
