import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { i as saveDiagram, n as isDiagram, r as listDiagrams } from "./diagrams_CePVQehI.mjs";
// src/pages/api/diagrams/index.ts
var diagrams_exports = /* @__PURE__ */ __exportAll({
	GET: () => GET,
	POST: () => POST,
	prerender: () => false
});
var GET = async () => {
	try {
		return Response.json({ diagrams: await listDiagrams() });
	} catch (error) {
		console.error("Error al listar diagramas:", error);
		return Response.json({ error: "No se pudieron cargar los diagramas." }, { status: 500 });
	}
};
var POST = async ({ request }) => {
	let value;
	try {
		value = await request.json();
	} catch {
		return Response.json({ error: "El cuerpo no es JSON válido." }, { status: 400 });
	}
	if (!isDiagram(value)) return Response.json({ error: "El diagrama no tiene un formato válido." }, { status: 400 });
	try {
		await saveDiagram(value);
		return Response.json({ diagram: value });
	} catch (error) {
		console.error("Error al guardar diagrama:", error);
		return Response.json({ error: "No se pudo guardar el diagrama." }, { status: 500 });
	}
};
// \0virtual:astro:page:src/pages/api/diagrams/index@_@ts
var page = () => diagrams_exports;
export { page };
