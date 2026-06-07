**Class 07: CSS Grid & Layout Complexity**
 Theory
Layout Tools Selection: CSS Grid vs Flexbox
While Flexbox is designed to lay out items in a single direction (either a horizontal row or a vertical column), CSS Grid is built to handle a two-dimensional layout simultaneously (both rows and columns at the same time).

Three clear scenarios where CSS Grid is the better tool:

Complex Dashboard Layouts: Systems that require sidebar panels, header bars, a main workspace, and multi-column widgets aligned perfectly across both rows and columns.

Dynamic Magazine Article Layouts: Layout designs where specific featured elements must span across multiple grid rows and columns at once.

Responsive Product Cards Grids: Grids that automatically fit as many items as possible on a line based on screen space (auto-fit), without needing media queries.

Structural Layout Matrix: grid-template-areas
The grid-template-areas property lets you visualize and define your layout structure directly in your CSS using text names. It maps out your grid paths visually right inside the code.

When to use it over grid-template-columns:
grid-template-areas is incredibly helpful when managing complex layout shifts across responsive design breakpoints. Instead of explicitly shifting individual element placements by recalculating grid-column line numbers inside media queries, you can cleanly re-arrange the layout names in a single line of CSS on the parent container.
when swapping from desktop layout grid to a mobile view CSS property will use **@media** with the right attributr like max-width, page-layout, grid-template-areas

}


**Engineering Thinking**
Magazine Grid Layout
+-----------------------------------------------------------+
|                      HERO ARTICLE                         |
+-----------------------------+-----------------------------+
|     SECONDARY ARTICLE 1     |     SECONDARY ARTICLE 2     |
+-----------------------------+-----------------------------+
|                        WIDE BOTTOM                        |
+-------------------+-------------------+-------------------+
|   SMALL BOTTOM 1  |   SMALL BOTTOM 2  |   SMALL BOTTOM 3  |
+-------------------+-------------------+-------------------+