/* eslint-disable no-useless-escape */
export function getRegExpByType(typeRegExp: string) {
	let validRegExp: RegExp = /.*/;

	if (typeRegExp === "allCharacters") {
		validRegExp = /.*/;

		//
	} else if (typeRegExp === "onlyAmount") {
		validRegExp = /^(0{1}(?:\,\d{0,2})?)?$|^[1-9]\d*(\,\d{0,2})?$/;

		//
	} else if (typeRegExp === "onlyLettersWithoutSpace_ENG") {
		validRegExp = /^[A-Za-z]*$/;

		//
	} else if (typeRegExp === "onlyNumeric") {
		validRegExp = /^[0-9]*$/;

		//
	} else if (typeRegExp === "alphanumeric") {
		validRegExp = /^[A-Za-z0-9\s]*$/;

		//
	} else if (typeRegExp === "onlyLettersWithSpace") {
		validRegExp = /^[A-Za-z\s]*$/;

		//
	}
	return validRegExp;
}
