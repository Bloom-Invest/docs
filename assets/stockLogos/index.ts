import appleLogo from './apple.png';
import microsoftLogo from './microsoft.png';
import alphabetLogo from './alphabet.png';
import nvidiaLogo from './nvidia.png';
import teslaLogo from './tesla.png';
import amazonLogo from './amazon.png';

export const stockLogos: Record<string, string> = {
  AAPL: appleLogo,
  MSFT: microsoftLogo,
  GOOGL: alphabetLogo,
  NVDA: nvidiaLogo,
  TSLA: teslaLogo,
  AMZN: amazonLogo,
};

export const getStockLogo = (symbol: string): string | undefined => {
  return stockLogos[symbol];
};

export default stockLogos;
