import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { t as deleteDiagram } from "./diagrams_CePVQehI.mjs";
// src/pages/api/diagrams/[id].ts
var _id__exports = /* @__PURE__ */ __exportAll({
	DELETE: () => DELETE,
	prerender: () => false
});
var UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var DELETE = async ({ params }) => {
	const id = params.id;
	if (!id || !UUID_PATTERN.test(id)) return Response.json({ error: "Identificador inválido." }, { status: 400 });
	try {
		await deleteDiagram(id);
		return new Response(null, { status: 204 });
	} catch (error) {
		console.error("Error al eliminar diagrama:", error);
		return Response.json({ error: "No se pudo eliminar el diagrama." }, { status: 500 });
	}
};
// \0virtual:astro:page:src/pages/api/diagrams/[id]@_@ts
var page = () => _id__exports;
export { page };
