import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchExchangeRates = async (): Promise<Record<string, number>> => {
  const response = await axios.get("/api/exchange-rates");

  return response.data;
};

export const useExchangeRates = () => {
  return useQuery({
    queryKey: ["exchangeRates"],
    queryFn: fetchExchangeRates,
    staleTime: 60 * 1000,
  });
};
