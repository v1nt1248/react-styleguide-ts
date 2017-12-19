/**
 * получение текста с правильным склонением слов
 * @param sNominativeCase {string} - слово в именительном падеже единственного числа
 * @param sGenitiveCase {string} - слово в родительном падеже единственного числа
 * @param pGenitiveCase {string} - слово в родительном падеже множественного числа
 * @param num {number} - цифровая часть текста 
 * @return {string}
 */

export function getText(sNominativeCase: string, sGenitiveCase: string, pGenitiveCase: string, num: number): string {
	const remainder = num % 10
	if (num >= 5 && num < 20) {
		return `${num} ${pGenitiveCase}` // мн род
	}
	if (remainder === 1) {
		return `${num} ${sNominativeCase}` // ед именит
	}
	if (remainder > 1 && remainder < 5) {
		return `${num} ${sGenitiveCase}` // ед род
	}
	return `${num} ${pGenitiveCase}` // мн род
}
