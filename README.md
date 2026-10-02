# JMTechnix — Separated Website Files

This folder is a separated version of the original `JMTechnix_Final_Website_.html`.

## Structure

```text
JMTechnix_Separated_Website/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   └── chatbot.js
└── images/
    ├── jmtechnix-logo.png
    ├── manvendra.png
    └── jitendra.jpg
```

## Run
Open `index.html` in a browser, or use a local web server for the most reliable behavior.
Example: `python -m http.server` from this folder.

## Notes
- All inline CSS was moved to `css/style.css` in original order.
- The main website JavaScript was moved to `js/main.js`.
- The chatbot JavaScript was moved to `js/chatbot.js`.
- Base64-embedded images were extracted into `images/` and all image references were rewritten.
- The existing Google Fonts external link remains unchanged.
- The existing Google Apps Script enquiry endpoint and social/contact configuration remain unchanged.
- Social links configured: Instagram (`https://www.instagram.com/jmtechnix/`), YouTube (`https://www.youtube.com/@jmtechnixx`), GitHub (`https://github.com/jmtechnix`).
- Duplicate logo data was deduplicated to one image file.

## Extracted images
[
  {
    "alt": "JMTechnix logo",
    "file": "jmtechnix-logo.png",
    "sha256_12": "0a074aae2d35",
    "bytes": 1356550
  },
  {
    "alt": "Manvendra",
    "file": "manvendra.png",
    "sha256_12": "f6e0c9ed252e",
    "bytes": 2878775
  },
  {
    "alt": "Jitendra",
    "file": "jitendra.jpg",
    "sha256_12": "28b5509d1632",
    "bytes": 109297
  },
  {
    "alt": "JMTechnix logo",
    "file": "jmtechnix-logo.png",
    "sha256_12": "0a074aae2d35",
    "bytes": 1356550
  }
]
