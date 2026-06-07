**Class 03: Modern Assets & Linking**
 Theory
5MB Hero Image Optimization PipelineTo optimize a massive 5MB PNG hero image for production delivery, I would execute the following steps:Resolution Downscaling (CLI/Squoosh): Inspect the image's raw dimensions. A 5MB file is often exported at print-ready resolutions (e.g., $6000 \times 4000\text{px}$). Using an image processor like Squoosh or sharp, I would resize the width to a maximum web-standard target of $2560\text{px}$ for ultra-wide monitors, generating smaller stepped variants ($1920\text{px}$, $1440\text{px}$, $800\text{px}$) along the way.Modern Format Conversion (AVIF / WebP): Convert the asset into AVIF as the primary target format. AVIF offers superior file compression ratios compared to WebP and PNG, compressing complex gradient textures with minimal visual artifacting. I'll also export a WebP copy as a secondary fallback.Lossy Compression Tuning: Tune the compression quality setting to roughly 75–85%. This strips out imperceptible visual data, safely dropping the asset size from megabytes to well under $150\text{KB}$ while maintaining excellent visual fidelity.Implementation via <picture>:HTML<picture>
  <source srcset="hero-2560.avif 2560w, hero-1920.avif 1920w" type="image/avif">
  <source srcset="hero-2560.webp 2560w, hero-1920.webp 1920w" type="image/webp">
  <img src="hero-1920.png" alt="Detailed description of the hero scene" width="1920" height="1080" loading="eager">
</picture>
Responsive Images: srcset MechanicsThe srcset attribute provides the browser with a list of available source image files along with their exact physical pixel widths. Instead of downloading a single massive image for every device, the browser checks the user's viewport width and device pixel ratio (DPR) to fetch the most efficient asset size.Mobile User Scenario:Imagine a mobile user browsing an image-heavy portfolio site over an unstable 3G cellular connection. Without srcset, the browser is forced to download the desktop-targeted 3MB hero asset. This slows down the initial page load, runs up data costs for the user, and can cause the browser to freeze while processing the image. By using srcset, the browser instantly identifies and requests a lightweight, $450\text{px}$ wide version optimized for mobile viewports, saving precious bandwidth and speeding up the page load.Security Isolation: rel="noopener"When an HTML link includes target="_blank", the browser opens the destination page in a completely new window or tab. However, by default, the newly opened page gains access to the original page's execution context via a JavaScript window reference called window.opener.The Vulnerability (Reverse Tabnabbing):If a site links to an external, compromised page without protection, the external site can run code to quietly swap the origin page's URL in the background:JavaScriptwindow.opener.location = "[https://phishing-scam-site.com/login](https://phishing-scam-site.com/login)";
When the user clicks back to their original browser tab, they are greeted by a fake login screen designed to steal their credentials. Adding rel="noopener" severs this link entirely. It forces window.opener to return null, ensuring the external tab runs in a completely separate browser process that cannot modify or exploit the origin page.



**Engineering Thinking**
Massive Scale Product Grid Optimization
To display 50 product images on a single page efficiently, I would implement this tiered performance strategy:

[User Viewport] ---> Requests Page
                         │
                         ▼
        [CDN Edge] Serves optimized WebP/AVIF images cached near user
                         │
                         ▼
   [HTML Grid] Only renders top images immediately (loading="eager")
               Remaining images below fold deferred (loading="lazy")
Dynamic Formatting & Resolution Routing: All source files are served through an image CDN (such as Cloudinary or Imgix). The HTML uses srcset to dynamically serve the correct image dimensions based on the user's current screen layout.

Lazy Loading Enforcement: Every product image below the initial viewport fold is explicitly configured with loading="lazy". This prevents the browser from fetching those assets until the user scrolls near them, dramatically cutting down on unnecessary upfront network requests.

Layout Stability: Every image element explicitly declares its aspect-ratio or explicit width and height dimensions. This ensures the browser reserves the correct layout space before the image files finish downloading, eliminating layout shifts (CLS) as the page renders.