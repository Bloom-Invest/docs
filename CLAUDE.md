# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Mintlify documentation site. Mintlify is a documentation platform that uses MDX files and a `docs.json` configuration file to generate documentation websites.

## Development Commands

**Start local development server:**
```bash
mint dev
```
This starts a local preview at `http://localhost:3000`.

**Start on custom port:**
```bash
mint dev --port 3333
```

**Update Mintlify CLI:**
```bash
npm mint update
```

**Validate links:**
```bash
mint broken-links
```

**Install Mintlify CLI (if not installed):**
```bash
npm i -g mint
```

## Architecture

### Core Files
- `docs.json`: Main configuration file that defines site structure, navigation, theme colors, and branding
- `index.mdx`: Homepage/introduction
- MDX files: Content pages using Markdown with JSX components

### Directory Structure
- `ai-tools/`: Documentation for AI coding assistants (Cursor, Claude Code, Windsurf)
- `api-reference/`: API documentation with OpenAPI spec (`openapi.json`) and endpoint examples
- `essentials/`: Core documentation topics (settings, navigation, markdown, code samples, images, snippets)
- `snippets/`: Reusable content snippets that can be included in multiple pages
- `images/`: Image assets
- `logo/`: Site logo files (light/dark variants)

### Navigation System
Navigation is defined in `docs.json` under the `navigation` key with:
- Tabs: Top-level navigation sections ("Guides", "API reference")
- Groups: Sub-sections within tabs
- Pages: Individual MDX files referenced by their path (without `.mdx` extension)

### Theming
Colors, favicon, logo, and other branding configured in `docs.json`. The site uses a green theme (`#16A34A` primary).

## Content Guidelines

### MDX Components
Mintlify provides custom components like:
- `<Card>`: Link cards with icons
- `<Columns>`: Multi-column layouts
- `<Info>`, `<Warning>`, `<Tip>`: Callout boxes
- `<Steps>`, `<Step>`: Step-by-step instructions
- `<Frame>`: Image frames
- `<Accordion>`, `<AccordionGroup>`: Collapsible content

### Page Structure
Each MDX file should start with frontmatter:
```yaml
---
title: "Page Title"
description: "Page description"
---
```

## Prerequisites
- Node.js version 19 or higher
- The `docs.json` file must be present in the root directory
