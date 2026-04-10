const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const readmeFile = path.join(rootDir, "README.md");
const snippetFiles = [
	path.join(rootDir, "snippets", "snippets.code-snippets"),
	path.join(rootDir, "snippets", "css.code-snippets"),
	path.join(rootDir, "snippets", "icons.code-snippets"),
];

const tableStartMarker = "<!-- AUTO-GENERATED-SNIPPETS-TABLE:START -->";
const tableEndMarker = "<!-- AUTO-GENERATED-SNIPPETS-TABLE:END -->";

function readSnippetKeys(filePath) {
	if (!fs.existsSync(filePath)) {
		return [];
	}

	const content = fs.readFileSync(filePath, "utf8");
	const parsed = JSON.parse(content);
	return Object.keys(parsed);
}

function makeRow(prefix) {
	const lastDash = prefix.lastIndexOf("-");
	if (lastDash <= 0) {
		return `| **${prefix}** | ${toDescription(prefix)} |`;
	}

	const head = prefix.slice(0, lastDash + 1);
	const tail = prefix.slice(lastDash + 1);
	return `| ${head}**${tail}** | ${toDescription(prefix)} |`;
}

function toDescription(prefix) {
	return prefix
		.split("-")
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join(" ");
}

function replaceBetween(content, start, end, replacement) {
	const startIndex = content.indexOf(start);
	const endIndex = content.indexOf(end);

	if (startIndex === -1 || endIndex === -1 || endIndex <= startIndex) {
		throw new Error(
			"README markers not found. Please ensure the auto-generated table markers exist.",
		);
	}

	const before = content.slice(0, startIndex + start.length);
	const after = content.slice(endIndex);
	return `${before}\n${replacement}\n${after}`;
}

function updateSnippetCount(content, count) {
	return content.replace(
		/It contains \*\*\d+\*\* code snippets/,
		`It contains **${count}** code snippets`,
	);
}

function generate() {
	if (!fs.existsSync(readmeFile)) {
		throw new Error(`README not found: ${readmeFile}`);
	}

	const allPrefixes = snippetFiles.flatMap((file) => readSnippetKeys(file));
	const sortedPrefixes = [...allPrefixes].sort();

	const tableLines = [
		"| Trigger                                 | Description                     |",
		"| --------------------------------------- | ------------------------------- |",
		...sortedPrefixes.map(makeRow),
	].join("\n");

	let readmeContent = fs.readFileSync(readmeFile, "utf8");
	readmeContent = replaceBetween(
		readmeContent,
		tableStartMarker,
		tableEndMarker,
		tableLines,
	);
	readmeContent = updateSnippetCount(readmeContent, sortedPrefixes.length);

	fs.writeFileSync(readmeFile, readmeContent, "utf8");
	console.log(
		`Updated README snippet table and count with ${sortedPrefixes.length} snippets.`,
	);
}

generate();
