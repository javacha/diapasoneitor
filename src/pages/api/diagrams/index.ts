import type { APIRoute } from 'astro';
import { isDiagram, listDiagrams, saveDiagram } from '../../../lib/server/diagrams';

export const prerender = false;

export const GET: APIRoute = async () => {
	try {
		return Response.json({ diagrams: await listDiagrams() });
	} catch (error) {
		console.error('Error al listar diagramas:', error);
		return Response.json({ error: 'No se pudieron cargar los diagramas.' }, { status: 500 });
	}
};

export const POST: APIRoute = async ({ request }) => {
	let value: unknown;
	try {
		value = await request.json();
	} catch {
		return Response.json({ error: 'El cuerpo no es JSON válido.' }, { status: 400 });
	}

	if (!isDiagram(value)) {
		return Response.json({ error: 'El diagrama no tiene un formato válido.' }, { status: 400 });
	}

	try {
		await saveDiagram(value);
		return Response.json({ diagram: value });
	} catch (error) {
		console.error('Error al guardar diagrama:', error);
		return Response.json({ error: 'No se pudo guardar el diagrama.' }, { status: 500 });
	}
};
