import { useLocation } from "react-router-dom";
import { LeftPanelComponent } from "../../components/leftPanel";
import { ModalComponent } from "../../UI-components";

export const Details = () => {
  const { pathname } = useLocation();
  const EXTEND_LEFT_PANEL = pathname === "/details";
  return (
    <>
      <LeftPanelComponent isExtended={EXTEND_LEFT_PANEL} />
      <ModalComponent />
    </>
  );
};
