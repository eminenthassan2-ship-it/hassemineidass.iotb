**Class 02: Typography & Information Hierarchy**
 Theory
Text Formatting Semantics: <em> vs <i>
While both tags render text in italics by default in standard browsers, their underlying semantic meanings are entirely different.

<em> denotes Emphasis. It alters the structural meaning of a sentence by shifting verbal stress. Screen readers will read text inside an <em> tag with a distinct, emphasized inflection.

<i> denotes Idiomatic Text. It represents a technical term, an idiomatic phrase, a thought, a ship name, or a foreign word. It shifts the visual tone without adding extra verbal emphasis.

Real-world writing example:

"I must secure the server configuration file before deployment." (Using <em> to emphasize the critical urgency of the task).

"The developer referred to the concept as zeitgeist during the panel discussion." (Using <i> for a foreign loanword).

Screen Reader Element Treatment
<a> (Anchor Tag): When a screen reader encounters an anchor tag, it immediately announces it as a "link" and extracts its text value. Visually impaired users frequently configure their assistive software to pull a compiled list of all links on a page to navigate quickly. This is why generic link text like "Click Here" causes significant usability issues.

<ul> / <ol> (Lists): When focusing on a list element, the browser announces the start of a list along with the total count of list items (e.g., "List, 5 items"). This provides immediate structural context, helping the user understand how many items are in the group before reading them.

<form> (Form Tag): The browser treats a <form> as a distinct landmark. When entered, it shifts the screen reader into "Forms Mode," altering how keyboard controls behave so arrow keys type characters into inputs instead of reading the next lines of static document text.

ARIA Labels: Proper Usage vs. Antipatterns
The First Rule of ARIA: If you can use a native HTML element or attribute with the semantics and behavior you require already built-in, instead of re-purposing an element and adding an ARIA role, state, or property to make it accessible, then do so.

When to USE an aria-label: Use it when an interactive element has a clear visual purpose but no accessible text. For example, a closing button represented purely by a visual "X" icon:

HTML
<button aria-label="Close modal">X</button>
When to FIX your HTML: Do not use ARIA tags to patch non-semantic elements into functioning like native ones. For example:  

HTML
<div class="click-me" onclick="goToLink()" aria-label="Go to profile">View Profile</div>

<a href="/profile">View Profile</a>



**Accessibility Reflection**
Real-World Public Site Accessibility Audit
For this audit, I evaluated a localized municipal services portal.

Keyboard Navigation & Focus States: Tabbing through the homepage revealed significant navigation issues. While the primary navigation links were accessible via Tab, the focus indicator was an incredibly faint, low-contrast dotted gray border. On high-resolution displays or under bright lighting, it was nearly invisible.

Form Controls & Labels: The search input in the header used a placeholder attribute (placeholder="Search site...") but lacked an associated <label> tag. Once a user types inside the input, the placeholder text disappears, leaving no persistent context. This causes clear accessibility issues for users with cognitive disabilities.

Skip Links: The site completely lacked a "Skip to Content" link at the top of the page. As a result, a keyboard-only user is forced to tab through fifteen different header navigation items on every single page load before reaching the main content body.



**Product Thinking**
API Technical Documentation Hierarchy
For a highly scannable, developer-focused API documentation page, the information hierarchy must prioritize quick scanning and clear visual signposts.

<h1> Core API Identifier

Content: Payment Gateway Integration API (v3.2)

<h2> High-Level Structural Modules

Content: Authentication & Security

Content: Core Endpoints Reference

<h3> Discrete Functional Actions / Endpoints

Content: POST /v3/charges (Create a Payment)

Content: GET /v3/refunds (Retrieve Refund Status)

This explicit structure allows a developer to scroll rapidly down the page and immediately spot the exact endpoint or authentication rule they need without reading through large blocks of text.