**Class 06: Flexbox Mastery**
  Theory
The Flexbox Dimension Analogy
Think of a flex container as a train track, and the nested flex items inside as individual train cars.

flex-basis: This is the initial blueprint length of the train car before it leaves the station. It sets the base size of the item before any extra spacing or stretching happens.

flex-grow: This is the car's expansion room capability. If the train has extra tracks available ahead of it, flex-grow acts like a structural lever that lets the car stretch out to fill up that empty track space.

flex-shrink: This is the car's compression cushion. If the train enters a tight tunnel and lacks enough physical track space for all cars to sit comfortably at their full base sizes, flex-shrink determines which cars squeeze down and compress to prevent the train from crashing out of the layout boundaries.

Align-Items: Collapse States
The align-items: stretch; property forces flex items to stretch along the cross-axis to fill their container. However, this stretching behavior stops working if a child item has an explicit cross-axis dimension hardcoded into its styles (like an explicit height on a row layout, or an explicit width on a column layout).

HTML
<div class="flex-row-container">
  <div class="broken-stretch-item">This item will not stretch down</div>
  <div>This item stretches fine</div>
</div>
CSS
.flex-row-container {
  display: flex;
  align-items: stretch; /* Tells items to fill the container's height */
  height: 300px;
}

.broken-stretch-item {
  /* This explicit height override breaks the stretch behavior.
     The item locks to 50px instead of stretching to fill the full 300px container height. */
  height: 50px; 
}



**Engineering Thinking**
Normalized Centered Navigation Header Layout
HTML
<header class="global-nav-bar">
  <div class="logo-zone">BRANDLOGO</div>
  
  <nav class="center-links-zone">
    <a href="#">Home</a>
    <a href="#">Shop</a>
    <a href="#">Gallery</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>
  
  <div class="action-zone">
    <button class="sign-in-btn">Sign In</button>
  </div>
</header>
CSS
.global-nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  height: 70px;
}

/* To keep the center links perfectly centered regardless of differences in width between 
   the logo on the left and the button on the right, we configure the left and right zones 
   as identical flex-flexible columns. */
.logo-zone, .action-zone {
  flex: 1; /* Both zones take up identical space */
}

.action-zone {
  display: flex;
  justify-content: flex-end; /* Pushes the sign-in button to the far right edge */
}

.center-links-zone {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex: 2; /* Allocates proportional space for the navigation links */
}
Responsive Instagram Header Component
HTML
<header class="ig-navigation-wrapper">
  <div class="ig-logo">Instagram</div>
  
  <div class="ig-search-bar">
    <input type="text" placeholder="Search...">
  </div>
  
  <button class="mobile-hamburger-trigger" aria-label="Open Menu">☰</button>
  
  <nav class="ig-actions-menu">
    <a href="#" title="Home">🏠</a>
    <a href="#" title="Messages">✉️</a>
    <a href="#" title="Create">➕</a>
    <a href="#" title="Explore">🧭</a>
    <a href="#" title="Reels">🎬</a>
    <a href="#" title="Profile">👤</a>
  </nav>
</header>
CSS
.ig-navigation-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 60px;
  border-bottom: 1px solid #dbdbdb;
}

.ig-actions-menu {
  display: flex;
  gap: 22px;
}

.ig-search-bar {
  display: flex;
}

.mobile-hamburger-trigger {
  display: none; /* Hidden by default on desktop viewports */
}

/* Mobile Media Breakpoint query */
@media (max-width: 768px) {
  .ig-search-bar {
    display: none; /* Hide search bar on smaller viewports */
  }
  
  .ig-actions-menu {
    display: none; /* Hide navigation items behind the hamburger menu */
  }
  
  .mobile-hamburger-trigger {
    display: block; /* Show hamburger menu trigger */
  }
}
Development Rationale:
The desktop configuration uses justify-content: space-between to spread out the core sections across the header bar. On mobile screens, the layout drops non-essential blocks (like the search bar and action links) out of view to save space, switching to a clean toggle layout that prevents navigation items from overlappin