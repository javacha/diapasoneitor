import { del, get, list, put } from '@vercel/blob';

export type NoteMark = { fret: number; string: number; highlighted: boolean };
export type Diagram = { version: 1; id: string; name: string; marks: NoteMark[] };

const PREFIX = 'diapasoneitor/';
const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export function isDiagram(value: unknown): value is Diagram {
	if (!value || typeof value !== 'object') return false;
	const item = value as Partial<Diagram>;
	return item.version === 1
		&& typeof item.id === 'string'
		&& UUID_PATTERN.test(item.id)
		&& typeof item.name === 'string'
		&& item.name.trim().length > 0
		&& Array.isArray(item.marks)
		&& item.marks.every((mark) => mark
			&& typeof mark.fret === 'number'
			&& mark.fret >= 1 && mark.fret <= 24
			&& typeof mark.string === 'number'
			&& mark.string >= 1 && mark.string <= 6
			&& typeof mark.highlighted === 'boolean');
}

export async function listDiagrams(): Promise<Diagram[]> {
	const blobs = [];
	let cursor: string | undefined;
	do {
		const page = await list({ prefix: PREFIX, cursor });
		blobs.push(...page.blobs);
		cursor = page.hasMore ? page.cursor : undefined;
	} while (cursor);

	const diagrams = await Promise.all(blobs.map(async (blob) => {
		try {
			const downloaded = await get(blob.url, { access: 'private', useCache: false });
			if (!downloaded) return null;
			const value: unknown = await new Response(downloaded.stream).json();
			return isDiagram(value) ? value : null;
		} catch {
			return null;
		}
	}));

	return diagrams
		.filter((diagram): diagram is Diagram => diagram !== null)
		.sort((a, b) => a.name.localeCompare(b.name, 'es'));
}

export async function saveDiagram(diagram: Diagram): Promise<void> {
	await put(`${PREFIX}${diagram.id}.json`, JSON.stringify(diagram), {
		access: 'private',
		addRandomSuffix: false,
		allowOverwrite: true,
		contentType: 'application/json',
	});
}

export async function deleteDiagram(id: string): Promise<void> {
	await del(`${PREFIX}${id}.json`);
}
