export function auxDate(dataString: string) {
	if (dataString === undefined) return;
	const data = dataString.split("-");
	return `${data[2]}/${data[1]}/${data[0]}`;
}
