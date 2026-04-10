# How to contribute this extension?

You can fork this repository and you can modify the snippet formats which is located in <code>src/templates</code>

## Contribution Guide

1. Fork and update templates in <code>src/templates</code>.
2. For icon CDNs, place files under <code>src/templates/icons/&lt;provider&gt;/</code> (example: <code>src/templates/icons/bootstrap-icons/cdn.html</code>).
3. Run <code>bun run generate:snippets</code>.
4. Verify generated output in:
    - <code>snippets/snippets.code-snippets</code>
    - <code>snippets/css.code-snippets</code>
    - <code>snippets/icons.code-snippets</code>
    - README snippets table section
5. Push changes and send a PR.

### Our Contributors 💓

- [dealeros](https://github.com/dealeros) Adam Kortus
- [Ugur y](https://github.com/uguryuruk) (Special Thanks)
