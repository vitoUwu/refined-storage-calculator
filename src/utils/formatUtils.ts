export interface PackResult {
  fullPacks: number;
  remainder: number;
  formatted: string;
}

export const PACK_SIZE = 64;

export function formatQuantityAsPacks(quantity: number): PackResult {
  const fullPacks = Math.floor(quantity / PACK_SIZE);
  const remainder = quantity % PACK_SIZE;

  const packWord = 'Pack';
  const packsWord = 'Packs';

  let formatted = '';

  if (fullPacks > 0) {
    if (fullPacks === 1) {
      formatted = `1 ${packWord}`;
    } else {
      formatted = `${fullPacks} ${packsWord}`;
    }

    if (remainder > 0) {
      formatted += ` + ${remainder}`;
    }
  } else {
    formatted = remainder.toString();
  }

  return {
    fullPacks,
    remainder,
    formatted
  };
}

export function formatNumber(num: number, language: string): string {
  const locale = language === 'pt-BR' ? 'pt-BR' : 'en-US';
  return num.toLocaleString(locale);
}

export function formatQuantity(quantity: number, showAsPacks: boolean, language: string): string {
  if (showAsPacks && quantity >= PACK_SIZE) {
    return formatQuantityAsPacks(quantity).formatted;
  }
  return formatNumber(quantity, language);
} 