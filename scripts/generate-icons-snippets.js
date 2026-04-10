const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const iconsDir = path.join(rootDir, "src", "templates", "icons");
const outputFile = path.join(rootDir, "snippets", "icons.code-snippets");

function walkHtmlFiles(dir) {
	const entries = fs.readdirSync(dir, { withFileTypes: true });
	const files = [];

	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			files.push(...walkHtmlFiles(fullPath));
			continue;
		}
		if (entry.isFile() && entry.name.endsWith(".html")) {
			files.push(fullPath);
		}
	}

	return files;
}

function toTitleCaseFromSlug(slug) {
	return slug
		.split("-")
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join(" ");
}

function toSnippetBody(content) {
	const normalized = content.replace(/\r\n/g, "\n").trimEnd();
	if (normalized.endsWith("$0")) {
		return normalized;
	}
	return `${normalized}\n$0`;
}

function generate() {
	if (!fs.existsSync(iconsDir)) {
		throw new Error(`Icons template folder not found: ${iconsDir}`);
	}

	const files = walkHtmlFiles(iconsDir).sort();
	const snippets = {};

	for (const file of files) {
		const rel = path.relative(iconsDir, file).replace(/\\/g, "/");
		const withoutExt = rel.replace(/\.html$/, "");
		const prefix = `icons-${withoutExt.replace(/\//g, "-")}`;
		const body = fs.readFileSync(file, "utf8");

		snippets[prefix] = {
			description: toTitleCaseFromSlug(prefix),
			scope: "",
			prefix,
			body: toSnippetBody(body),
		};
	}

	fs.writeFileSync(
		outputFile,
		`${JSON.stringify(snippets, null, "\t")}\n`,
		"utf8",
	);
	console.log(
		`Generated ${Object.keys(snippets).length} icon snippets -> ${outputFile}`,
	);
}

generate();
