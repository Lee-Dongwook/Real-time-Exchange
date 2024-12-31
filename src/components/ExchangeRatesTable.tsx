"use client";

import { useExchangeRates } from "@/hooks/useExchangeRates";

const ExchangeRatesTable = () => {
  const { data, isPending, isError } = useExchangeRates();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div className="text-red-500">Failed to load exchange rates</div>;
  }

  return (
    <div className="overflow-x-auto">
      <div className="grid grid-cols-2 gap-4 border border-gray-300 rounded-md">
        <div className="font-bold text-center bg-gray-100 py-2 border-b border-gray-300">
          Currency
        </div>
        <div className="font-bold text-center bg-gray-100 py-2 border-b border-gray-300">
          Rate
        </div>

        {Object.entries(data || {}).map(([currency, rate]) => (
          <>
            <div
              key={`${currency}-name`}
              className="text-center py-2 border-b border-gray-300"
            >
              {currency}
            </div>
            <div
              key={`${currency}-rate`}
              className="text-center py-2 border-b border-gray-300"
            >
              {rate.toFixed(2)}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ExchangeRatesTable;
