import { useEffect } from 'react';

interface UseEnterButtonInterface {
    handleSubmit: Function;
  }
  
  export const useEnterButtonsHook = ({ handleSubmit }: UseEnterButtonInterface) => {
    useEffect(() => {
      const listener = (event: { code: string; preventDefault: () => void }) => {
        if ((event.code === "Enter" || event.code === "NumpadEnter") ) {
            handleSubmit();
          event.preventDefault();
        }
      };
      document.addEventListener("keydown", listener);
      return () => {
        document.removeEventListener("keydown", listener);
      };
    }, [handleSubmit]);
  
  };