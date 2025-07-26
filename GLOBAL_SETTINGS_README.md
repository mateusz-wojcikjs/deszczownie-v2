# Global Settings Documentation

This project now includes a comprehensive global settings system that allows you to manage website-wide content from the Payload CMS admin panel.

## Overview

Global settings are managed through a single "Global Settings" collection in Payload CMS that contains all website-wide configurations including:

- **CTA (Call to Action) Section**
- **Contact Information**
- **Social Media Links**
- **Footer Settings**
- **Navigation Menu**

## Accessing Global Settings

1. Log into your Payload CMS admin panel
2. Navigate to "Settings" in the sidebar
3. Click on "Global Settings"
4. Edit the settings as needed
5. Save your changes

## Available Settings

### CTA Section
- **Title**: The main heading text for the CTA section
- **Button Text**: Text displayed on the CTA button
- **Button Link**: URL the button links to
- **Background Color**: Choose between Secondary, Primary, or Gray

### Contact Information
- **Company Name**: Your business name
- **Address**: Full business address
- **NIP**: Tax identification number
- **Phone**: Contact phone number
- **Email**: Contact email address

### Social Media
- **Facebook URL**: Link to your Facebook page
- **Instagram URL**: Link to your Instagram profile

### Footer Settings
- **Logo URL**: URL for the footer logo
- **Copyright Text**: Copyright notice (use `{year}` for dynamic year)
- **Privacy Policy URL**: Link to privacy policy page

### Navigation Settings
- **Navigation Logo URL**: URL for the navigation logo
- **Menu Items**: Array of navigation menu items
  - **Label**: Menu item text
  - **URL**: Link destination
  - **External Link**: Check if it's an external link
  - **Submenu**: Optional submenu items (same structure as main items)
- **Contact Button Text**: Text for the contact button
- **Contact Button URL**: URL for the contact button

## Menu Structure Example

```json
{
  "menuItems": [
    {
      "label": "Kim jesteśmy",
      "url": "/kim-jestesmy",
      "isExternal": false
    },
    {
      "label": "Deszczownie szpulowe",
      "url": "/oferta/deszczownie-szpulowe",
      "isExternal": false,
      "submenu": [
        {
          "label": "Model GX",
          "url": "/oferta/deszczownie-szpulowe/model-gx",
          "isExternal": false
        },
        {
          "label": "Model XJ",
          "url": "/oferta/deszczownie-szpulowe/model-xj",
          "isExternal": false
        }
      ]
    },
    {
      "label": "Nasze realizacje",
      "url": "/nasze-realizacje",
      "isExternal": false
    }
  ]
}
```

## Technical Implementation

### Components Using Global Settings

- **Navigation**: Uses navigation settings for menu items, logo, and contact button
- **CTA**: Uses CTA settings for content and styling
- **Footer**: Uses contact, social media, and footer settings

### Default Values

All components include fallback default values if global settings are not available, ensuring the website continues to function even if settings are not configured.

### Type Safety

The global settings are fully typed with TypeScript interfaces, providing autocomplete and type checking throughout the application.

## Benefits

1. **Centralized Management**: All global content in one place
2. **No Code Changes**: Update content without touching code
3. **Type Safe**: Full TypeScript support
4. **Fallback Support**: Default values ensure site functionality
5. **Flexible**: Easy to add new global settings as needed

## Adding New Global Settings

To add new global settings:

1. Update `src/collections/GlobalSettings.ts` with new fields
2. Update `src/app/(frontend)/interfaces/globalSettings.interface.ts` with TypeScript types
3. Update components to use the new settings
4. Regenerate Payload types: `npm run generate:types` 