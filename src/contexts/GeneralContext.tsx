import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface GeneralContextType {
  navOpenIndicator: boolean;
  setNavOpenIndicator: (open: boolean) => void;
}

const GeneralContext = createContext<GeneralContextType | undefined>(undefined);

export const GeneralContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [navOpenIndicator, setNavOpenIndicator] = useState<boolean>(false);

  return (
    <GeneralContext.Provider value={{ navOpenIndicator, setNavOpenIndicator }}>
      {children}
    </GeneralContext.Provider>
  );
};

export const useGeneralContext = (): GeneralContextType => {
  const context = useContext(GeneralContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
