# Discourse Category Headers Theme Component

A modern, accessible theme component that enhances Discourse category headers with extensive customization options, improved UX, and full accessibility support.

**Version:** 2.4.0
**Minimum Discourse Version:** 3.6.0-beta2
**Meta Topic:** https://meta.discourse.org/t/discourse-category-headers-theme-component/148682

## Features

### Core Enhancements

- **Customizable Category Headers** - Display category name, description, logo, and background images
- **Flexible Layout Options** - Choose logo position (left, right, top) and size (small, standard, original)
- **Multiple Header Styles** - Box, banner, or no styling
- **Expandable Descriptions** - Toggle full category descriptions with chevron icon or "Read more" link
- **Category Notifications** - Quick access to notification settings via modern DMenu dropdown
- **Parent Category Support** - Show parent category name and logo for subcategories
- **Mobile Responsive** - Optimized layouts for mobile devices
- **Accessibility First** - Full keyboard navigation, ARIA labels, and screen reader support
- **Performance Optimized** - Lazy loading with caching for category descriptions

### Accessibility Features (WCAG 2.1 Compliant)

- ✅ Semantic HTML with proper heading structure (single H1)
- ✅ Full keyboard navigation (Tab, Enter, Space)
- ✅ ARIA attributes (aria-expanded, aria-controls, aria-label)
- ✅ Focus-visible indicators
- ✅ Screen reader friendly
- ✅ Alt text for all images

## Installation

### Via Discourse Admin

1. Go to **Admin → Customize → Themes**
2. Click **Install** → **From a git repository**
3. Enter: `https://github.com/naidihr/discourse-category-headers`
4. Click **Install**

### Local Development

**Prerequisites:**
- Ruby ≥ 2.7 (recommended: 3.3.9)
- Node.js ≥ 22
- pnpm (via Corepack: `corepack enable`)
- Discourse Theme CLI: `gem install discourse_theme`

**Setup:**

```bash
# Clone repository
git clone https://github.com/naidihr/discourse-category-headers
cd discourse-category-headers

# Install dependencies
pnpm install

# Configure Theme CLI (first time only)
discourse_theme watch .
# Enter your Discourse URL and API key when prompted

# Start watch mode (auto-syncs changes)
discourse_theme watch .
```

**Linting:**

```bash
# Run all linters
pnpm exec eslint .
pnpm exec stylelint "common/**/*.scss" "mobile/**/*.scss"
pnpm exec ember-template-lint javascripts/discourse/**/*.gjs
```

## Configuration

### Key Settings

#### Display Options
- **show_category_name** - Display category name in header
- **show_category_description** - Show category description text
- **show_subcategory_header** - Enable headers for subcategories
- **show_parent_category_name** - Show parent category name as breadcrumb
- **show_mobile** - Display headers on mobile devices

#### Logo Settings
- **show_category_logo** - Display category logo
- **show_parent_category_logo** - Fallback to parent logo if category logo not set
- **show_site_logo** - Fallback to site logo if no category logo
- **position_logo** - Logo position: left, right, or top
- **size_logo** - Logo size: small (~40px), standard (~150px), or original

#### Styling
- **header_style** - Box (bordered), banner (filled background), or none
- **header_background_image** - Background image display: contain, cover, resize, or outside
- **text_align** - Text alignment: left, center, or right
- **title_text_size** - Title font size: smallest, smaller, normal, larger, largest
- **description_text_size** - Description font size: smallest, smaller, normal, larger, largest

#### Description Expansion
- **expand_and_collapse_category_description** - Enable description toggle
- **category_description_toggle_ui** - Toggle UI: chevron_only, read_more_only, both, or none
- **show_full_category_description** - Always show full description (no toggle)

#### Advanced
- **hide_if_no_category_description** - Hide header if no description
- **hide_category_exceptions** - Category IDs to exclude (pipe-separated)
- **category_lock_icon** - Custom Font Awesome icon for private categories
- **show_category_follow_button** - Show notification bell in header

## QA Checklist

### Visual Testing

- [ ] **Logo Positions** - Test left, right, and top positions
- [ ] **Logo Sizes** - Test small, standard, and original sizes
- [ ] **Header Styles** - Test box, banner, and none styles
- [ ] **Background Images** - Test contain, cover, resize, and outside modes
- [ ] **Text Sizes** - Verify smallest/smaller are actually smaller, larger/largest are larger
- [ ] **Mobile Layout** - Test on mobile devices and with `force_mobile_alignment`

### Functionality Testing

- [ ] **Description Toggle** - Click chevron icon to expand/collapse
- [ ] **Read More Link** - Click "Read more" to expand description
- [ ] **Notification Bell** - Click bell to open notification settings
- [ ] **Parent Category Links** - Click parent category name to navigate
- [ ] **Lock Icons** - Verify lock icons appear on private categories

### Accessibility Testing

- [ ] **Keyboard Navigation** - Tab through all interactive elements
- [ ] **Keyboard Activation** - Press Enter/Space on buttons and toggles
- [ ] **Focus Indicators** - Verify visible focus outlines
- [ ] **Screen Reader** - Test with VoiceOver/NVDA/JAWS
- [ ] **ARIA Attributes** - Verify aria-expanded updates on toggle
- [ ] **Heading Structure** - Verify single H1 per page

### Performance Testing

- [ ] **Lazy Loading** - Check Network tab: description only loads when needed
- [ ] **Caching** - Navigate between categories: verify no duplicate requests
- [ ] **No Console Errors** - Check browser console for errors/warnings

### Edge Cases

- [ ] **No Description** - Categories without descriptions
- [ ] **No Logo** - Categories without logos
- [ ] **Parent/Subcategory** - Test parent and subcategory combinations
- [ ] **Light/Dark Mode** - Test theme switching
- [ ] **Long Text** - Test with very long category names and descriptions

## Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technical Details

### Architecture

- **Framework**: Ember.js with Glimmer components (.gjs)
- **Styling**: SCSS with BEM naming convention
- **State Management**: Tracked properties with lazy loading cache
- **Accessibility**: WCAG 2.1 Level AA compliant
- **Performance**: CSS custom properties, minimal DOM manipulation

### Modern Patterns (3.6.0-beta2)

- ✅ Glimmer components (template-tag format)
- ✅ `apiInitializer` (not deprecated `withPluginApi`)
- ✅ Plugin outlets (`api.renderInOutlet`)
- ✅ DMenu components (not legacy SelectKit)
- ✅ Router service (not `window.location`)
- ✅ CSS custom properties for theming
- ❌ No widget APIs (deprecated Q4 2025)
- ❌ No inline `<script>` tags (removed Sept 2025)
- ❌ No template overrides (removed June 2025)

## Troubleshooting

### Headers Not Showing

1. Verify category has a logo uploaded (required by core Discourse)
2. Check `show_mobile` setting if on mobile
3. Check `hide_category_exceptions` doesn't include the category ID
4. Verify `hide_if_no_category_description` is disabled if category has no description

### Description Not Expanding

1. Verify `expand_and_collapse_category_description` is enabled
2. Check `category_description_toggle_ui` is not set to "none"
3. Ensure category has an "About this category" topic

### Notification Bell Not Working

1. Verify `show_category_follow_button` is enabled
2. Check browser console for errors
3. Ensure user is logged in

### Styling Issues

1. Clear browser cache
2. Rebuild theme in Admin → Customize → Themes
3. Check for conflicting custom CSS

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for detailed version history.

## Support

- **Meta Topic**: https://meta.discourse.org/t/discourse-category-headers-theme-component/148682
- **Issues**: https://github.com/naidihr/discourse-category-headers/issues
- **License**: See [LICENSE](LICENSE)

## Credits

- Original component by naidihr
- Modern improvements following Discourse 3.6+ best practices
- Accessibility enhancements for WCAG 2.1 compliance
