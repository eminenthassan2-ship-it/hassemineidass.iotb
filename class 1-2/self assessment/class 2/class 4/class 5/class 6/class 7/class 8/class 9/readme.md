**Class 09: Advanced Tailwind & Responsive Design**
Theory
The Breakpoint Engine MechanicsTailwind's breakpoint modifiers work on a mobile-first approach. This means styles without a prefix apply to all screen sizes by default, and media queries are applied using minimum widths (min-width).The prefix rule md:text-lg means: "If the screen width is equal to or larger than the medium breakpoint ($768\text{px}$), apply this large text size style." If the screen is smaller than $768\text{px}$, the style is ignored.To configure a custom $1200\text{px}$ breakpoint inside your tailwind.config.js file:JavaScriptmodule.exports = {
  theme: {
    extend: {
      screens: {
        'desktop-pro': '1200px', // Custom minimum width entry injection point
      },
    },
  },
}
Arbitrary Values vs Configuration ExtensionArbitrary values look like h-[123px] or bg-[#bada55]. They let you pass specific, one-off values directly into a Tailwind utility class using square brackets.When to use arbitrary values: Use them for highly specific, unique use cases that won't be repeated across the site, such as positioning a custom hero graphic or matching a specific brand asset background color.When to extend the configuration: If a value is used multiple times across different pages (like a shared brand color or custom padding value), it should be added to tailwind.config.js. This keeps your values organized in a single place and ensures consistency across your project.



**Engineering Best Practice**
Theme Distribution Architecture
To support light and dark modes efficiently while keeping the final CSS file size minimal, we use Tailwind's selector configuration strategy. This switches themes simply by toggling a class name on the root document level, avoiding bloated style generation.

Breakpoint Strategy Documentation:
The code uses a mobile-first approach. For example, the buttons inside the hero header expand to full-width targets on mobile devices (w-full) to provide an easier touch target, then shift to a standard width (sm:w-auto) on larger viewports. The features section follows a similar strategy, adapting cleanly from a single-column layout on mobile up to three distinct columns on desktop screens (grid-cols-1 md:grid-cols-2 lg:grid-cols-3).