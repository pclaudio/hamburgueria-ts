import { createContext, useContext, useState } from "react";
import { NodeProps } from "../../globalTypes";
import { ControlsProviderData } from "./types";

const ControlsContext = createContext<ControlsProviderData>(
  {} as ControlsProviderData
);

export const ControlsProvider = ({ children }: NodeProps): JSX.Element => {
  const [showControls, setShowControls] = useState<boolean>(true);

  const handleToggleControls = (): void => {
    setShowControls(!showControls);
  };

  return (
    <ControlsContext.Provider value={{ showControls, handleToggleControls }}>
      {children}
    </ControlsContext.Provider>
  );
};

export const useControls = () => useContext(ControlsContext);
