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

  const fetchNextDeliveryMessage = useCallback(async (id: string) => {
    setIsLoading(true);
    fetch(`http://localhost:3000/comms/your-next-delivery/${id}`).then(
      async (response) => {
        const data = (await response.json()) as TNextDeliveryMessage;
        setNextDeliveryMessage(data);
        setIsLoading(false);
      }
    );
  }, []);

  return { fetchNextDeliveryMessage, nextDeliveryMessage, isLoading };
};
