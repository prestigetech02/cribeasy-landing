# Outfit Font Files

## Instructions

Please place your downloaded Outfit font files in this directory (`app/fonts/`).

### Required Font Files:

The font files should be named exactly as follows (case-sensitive):

- `Outfit-Thin.woff2` (weight: 100)
- `Outfit-ExtraLight.woff2` (weight: 200)
- `Outfit-Light.woff2` (weight: 300)
- `Outfit-Regular.woff2` (weight: 400) - **Required**
- `Outfit-Medium.woff2` (weight: 500)
- `Outfit-SemiBold.woff2` (weight: 600)
- `Outfit-Bold.woff2` (weight: 700) - **Recommended**
- `Outfit-ExtraBold.woff2` (weight: 800)
- `Outfit-Black.woff2` (weight: 900)

### Minimum Required Files:

At minimum, you need:
- `Outfit-Regular.woff2` (for normal text)
- `Outfit-Bold.woff2` (for bold text)

### File Format:

- **Preferred**: `.woff2` format (best compression and browser support)
- **Alternative**: If you only have `.woff`, `.ttf`, or `.otf` files, you can:
  1. Convert them to `.woff2` using an online converter, OR
  2. Update the file extensions in `layout.tsx` to match your files

### If Your Font Files Have Different Names:

If your font files have different names, you can:
1. Rename them to match the expected names above, OR
2. Update the `src` paths in `app/layout.tsx` to match your actual file names

### Quick Setup:

1. Copy all your Outfit font files to this directory
2. Rename them to match the naming convention above (if needed)
3. Ensure they are in `.woff2` format (or update the extension in layout.tsx)
4. The font will automatically load when you run the development server

