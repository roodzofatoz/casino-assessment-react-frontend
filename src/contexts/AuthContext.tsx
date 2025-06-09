import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type User = {
  username: string;
  wallet: string;
  balance: number;
};

interface AuthContextType {
  user: User | null;
  loading: boolean;
  closeModal: boolean;
  setBalance: (balance: number) => void;
  login: (username: string) => void;
  logout: () => void;
}

interface EthereumProvider {
  isMetaMask?: boolean;
  request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
  on?: (event: string, handler: (...args: any[]) => void) => void;
  removeListener?: (event: string, handler: (...args: any[]) => void) => void;
}

declare global {
  interface Window {
    ethereum?: EthereumProvider;
  }
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [closeModal, setCloseModal] = useState<boolean>(false);
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setCloseModal(false);
    }, 1000);
  }, [closeModal]);

  useEffect(() => {
    if (user == null) return;
    setCloseModal(true);
    setUser((oldData: any) => ({
      ...oldData,
      balance: oldData.balance + balance,
    }));
    setTimeout(() => {
      setCloseModal(false);
    }, 1000);
  }, [balance]);

  const connectMetaMask = async (username: string) => {
    setLoading(true);
    if (typeof window.ethereum === "undefined" || !window.ethereum.isMetaMask) {
      return;
    }

    try {
      const accounts: any = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      //   setWalletAddress(accounts[0]);
      if (accounts[0]) {
        setUser({
          username: username,
          wallet: accounts[0],
          balance: 0,
        });
        setCloseModal(true);
      }

      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      if (error.code === 4001) {
        alert("Please connect to MetaMask to continue.");
      } else {
        console.error("MetaMask connection error:", error);
      }
    }
  };

  const login = (username: string) => {
    connectMetaMask(username);
  };

  const logout = () => {
    console.log("logout");
    setUser(null);
  };

  useEffect(() => {
    console.log("user:", user);
  }, [user]);

  return (
    <AuthContext.Provider
      value={{ user, loading, closeModal, setBalance, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
