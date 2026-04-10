const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const templatesDir = path.join(rootDir, "src", "templates");
const mainOutputFile = path.join(rootDir, "snippets", "snippets.code-snippets");
const cssOutputFile = path.join(rootDir, "snippets", "css.code-snippets");

function walkFiles(dir) {
	const entries = fs.readdirSync(dir, { withFileTypes: true });
	const files = [];

	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			files.push(...walkFiles(fullPath));
			continue;
		}
		if (entry.isFile() && entry.name.endsWith(".html")) {
			files.push(fullPath);
		}
	}

	return files;
}

function toSnippetBody(content) {
	const normalized = content.replace(/\r\n/g, "\n").trimEnd();
	if (normalized.endsWith("$0")) {
		return normalized;
	}
	return `${normalized}\n$0`;
}

function toTitleCaseFromSlug(slug) {
	return slug
		.split("-")
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join(" ");
}

function makeMainPrefix(relativePath) {
	const rel = relativePath.replace(/\\/g, "/");
	const withoutExt = rel.replace(/\.html$/, "");
	const parts = withoutExt.split("/");
	const top = parts[0];

	if (top === "bs5") {
		let rest = parts.slice(1);
		if (
			rest.length > 1 &&
			(rest[0] === "components" ||
				rest[0] === "content" ||
				rest[0] === "layout")
		) {
			rest = rest.slice(1);
		}
		return `bs5-${rest.join("-")}`;
	}

	if (top === "html") {
		return `html-${parts.slice(1).join("-")}`;
	}

	return `${top}-${parts.slice(1).join("-")}`;
}

function makeCssPrefix(relativePath) {
	const rel = relativePath.replace(/\\/g, "/");
	const withoutExt = rel.replace(/\.html$/, "");
	const parts = withoutExt.split("/");
	return `css-${parts.slice(1).join("-")}`;
}

function createSnippetMap(files, prefixBuilder) {
	const snippets = {};

	for (const file of files.sort()) {
		const rel = path.relative(templatesDir, file);
		const prefix = prefixBuilder(rel);
		const body = fs.readFileSync(file, "utf8");

		snippets[prefix] = {
			description: toTitleCaseFromSlug(prefix),
			scope: "",
			prefix,
			body: toSnippetBody(body),
		};
	}

	return snippets;
}

function writeSnippetFile(filePath, snippetMap) {
	fs.writeFileSync(
		filePath,
		`${JSON.stringify(snippetMap, null, "\t")}\n`,
		"utf8",
	);
}

function generate() {
	if (!fs.existsSync(templatesDir)) {
		throw new Error(`Templates folder not found: ${templatesDir}`);
	}

	const allFiles = walkFiles(templatesDir);
	const mainFiles = allFiles.filter((file) => {
		const rel = path.relative(templatesDir, file).replace(/\\/g, "/");
		return !rel.startsWith("css/") && !rel.startsWith("icons/");
	});
	const cssFiles = allFiles.filter((file) => {
		const rel = path.relative(templatesDir, file).replace(/\\/g, "/");
		return rel.startsWith("css/");
	});

	const mainSnippets = createSnippetMap(mainFiles, makeMainPrefix);
	const cssSnippets = createSnippetMap(cssFiles, makeCssPrefix);

	writeSnippetFile(mainOutputFile, mainSnippets);
	writeSnippetFile(cssOutputFile, cssSnippets);

	console.log(
		`Generated ${Object.keys(mainSnippets).length} snippets -> ${mainOutputFile}`,
	);
	console.log(
		`Generated ${Object.keys(cssSnippets).length} snippets -> ${cssOutputFile}`,
	);
}

generate();
