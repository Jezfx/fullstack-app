import { useCallback, useState } from "react";
import { TNextDeliveryMessage } from "./App.types";

export const useNextDeliveryMessage = () => {
  const [nextDeliveryMessage, setNextDeliveryMessage] =
    useState<TNextDeliveryMessage>({
      title: "",
      message: "",
      totalPrice: 0,
      freeGift: false,
    });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const fetchNextDeliveryMessage = useCallback(async (id: string) => {
    setIsLoading(true);
    fetch(`http://localhost:3000/comms/your-next-delivery/${id}`).then(
      async (response) => {
        if (response.ok) {
          const data = (await response.json()) as TNextDeliveryMessage;
          setNextDeliveryMessage(data);
          setIsLoading(false);
        } else {
          const data = (await response.json()) as TNextDeliveryMessage;
          setIsLoading(false);
          setErrorMessage(data.message);
          throw new Error("Failed to fetch next delivery message");
        }
      }
    );
  }, []);

  return {
    fetchNextDeliveryMessage,
    nextDeliveryMessage,
    isLoading,
    errorMessage,
  };
};
