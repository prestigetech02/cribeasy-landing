# Mobile Mockup Image

## How to Add Your Mobile Mockup Image

1. Place your mobile app mockup image in this directory (`public/images/`)
2. Name it `mobile-mockup.png` (or `.jpg`, `.webp`, etc.)
3. Open `app/page.tsx` and find the hero section
4. Uncomment the `Image` component (around line 85-91)
5. Comment out or remove the placeholder div section

### Supported Image Formats
- PNG (recommended)
- JPG/JPEG
- WebP

### Recommended Image Size
- Width: 400-500px
- Height: 800-900px (or maintain your phone mockup aspect ratio)

The image will automatically be optimized by Next.js Image component.

