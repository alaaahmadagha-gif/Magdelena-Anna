# Certificate scans

Drop certificate images here. A card in the Certificates section shows its scan
when the matching file exists, and a plain crest when it does not — so adding one
is a drop-in change with no code edit.

Filenames the page currently looks for:

| Certificate | File |
|---|---|
| Fundamentals of Westlaw Edge | `westlaw-edge.png` |

To give the other certificates a scan, save the image here and add
`data-cert-src` / `data-cert-alt` to that card's thumbnail in `index.html`,
matching the Westlaw card.

Use PNG or JPG, roughly 1600px on the long edge — enough to stay sharp in the
lightbox without bloating the page.
