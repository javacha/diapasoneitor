import { del, get, list, put } from "@vercel/blob";
// src/lib/server/diagrams.ts
var PREFIX = "diapasoneitor/";
var UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
function isDiagram(value) {
	if (!value || typeof value !== "object") return false;
	const item = value;
	return item.version === 1 && typeof item.id === "string" && UUID_PATTERN.test(item.id) && typeof item.name === "string" && item.name.trim().length > 0 && Array.isArray(item.marks) && item.marks.every((mark) => mark && typeof mark.fret === "number" && mark.fret >= 1 && mark.fret <= 24 && typeof mark.string === "number" && mark.string >= 1 && mark.string <= 6 && typeof mark.highlighted === "boolean");
}
async function listDiagrams() {
	const blobs = [];
	let cursor;
	do {
		const page = await list({
			prefix: PREFIX,
			cursor
		});
		blobs.push(...page.blobs);
		cursor = page.hasMore ? page.cursor : void 0;
	} while (cursor);
	return (await Promise.all(blobs.map(async (blob) => {
		try {
			const downloaded = await get(blob.url, {
				access: "private",
				useCache: false
			});
			if (!downloaded) return null;
			const value = await new Response(downloaded.stream).json();
			return isDiagram(value) ? value : null;
		} catch {
			return null;
		}
	}))).filter((diagram) => diagram !== null).sort((a, b) => a.name.localeCompare(b.name, "es"));
}
async function saveDiagram(diagram) {
	await put(`${PREFIX}${diagram.id}.json`, JSON.stringify(diagram), {
		access: "private",
		addRandomSuffix: false,
		allowOverwrite: true,
		contentType: "application/json"
	});
}
async function deleteDiagram(id) {
	await del(`${PREFIX}${id}.json`);
}
export { saveDiagram as i, isDiagram as n, listDiagrams as r, deleteDiagram as t };
