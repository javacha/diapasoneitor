import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import "./compiler_821TEplC.mjs";
import { K as AstroError, h as InvalidComponentArgs } from "./errors-data_Bu7LYtXB.mjs";
import { c as renderTemplate, l as renderHead, u as createRenderInstruction } from "./server_BJ_EQSNb.mjs";
// node_modules/@astrojs/runtime/dist/internal/server/astro-component.js
function validateArgs(args) {
	if (args.length !== 3) return false;
	if (!args[0] || typeof args[0] !== "object") return false;
	return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
	const name = moduleId?.split("/").pop()?.replace(".astro", "") ?? "";
	const fn = (...args) => {
		if (!validateArgs(args)) throw new AstroError({
			...InvalidComponentArgs,
			message: InvalidComponentArgs.message(name)
		});
		return cb(...args);
	};
	Object.defineProperty(fn, "name", {
		value: name,
		writable: false
	});
	fn.isAstroComponentFactory = true;
	fn.moduleId = moduleId;
	fn.propagation = propagation;
	return fn;
}
function createComponentWithOptions(opts) {
	return baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
}
function createComponent(arg1, moduleId, propagation) {
	if (typeof arg1 === "function") return baseCreateComponent(arg1, moduleId, propagation);
	else return createComponentWithOptions(arg1);
}
// node_modules/@astrojs/runtime/dist/internal/server/render/script.js
/**
* Relies on the `renderScript: true` compiler option
* @experimental
*/
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
// src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="theme-color" content="#f4f1ea"><title>Diapasoneitor</title>${renderHead($$result)}</head><body><main class="app-shell"><header class="topbar"><div><p class="eyebrow">Guitarra · Zurdo · Estándar</p><h1>Diapasoneitor</h1></div><div class="saved-controls"><select id="saved-select" aria-label="Diagramas guardados"><option value="">Nuevo diagrama</option></select><button id="new-button" type="button">Nuevo</button><button id="save-button" type="button" class="primary">Guardar</button><button id="rename-button" type="button">Renombrar</button><button id="duplicate-button" type="button">Duplicar</button><button id="delete-button" type="button" class="danger">Eliminar</button></div></header><section class="controls" aria-label="Controles del diapasón"><label class="switch"><input id="show-notes" type="checkbox" checked><span>Notas</span></label><label class="switch"><input id="notation" type="checkbox"><span>Solfeo</span></label><label class="switch"><input id="highlight-mode" type="checkbox"><span>Resaltar</span></label><label class="range-control"><span>Ancho traste</span><input id="fret-width" type="range" min="44" max="55" value="55"><output id="fret-width-output">55 px</output></label></section><section class="fretboard-panel"><div id="fretboard-scroll" class="fretboard-scroll"><div id="fretboard" class="fretboard" aria-label="Diapasón interactivo"></div></div></section></main><dialog id="name-dialog"><form method="dialog" id="name-form"><h2 id="name-dialog-title">Guardar diagrama</h2><label for="name-input">Nombre</label><input id="name-input" type="text" maxlength="60" required><div class="dialog-actions"><button value="cancel" type="button" id="name-cancel">Cancelar</button><button value="confirm" type="submit" class="primary">Aceptar</button></div></form></dialog>${renderScript($$result, "/home/enzo/dev/spec-driven-diapasoneitor/src/pages/index.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "/home/enzo/dev/spec-driven-diapasoneitor/src/pages/index.astro", void 0);
var $$file = "/home/enzo/dev/spec-driven-diapasoneitor/src/pages/index.astro";
// \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
export { page };
