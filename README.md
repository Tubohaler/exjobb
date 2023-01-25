# exjobb-might-and-delight

## Installation

```bash
git clone git@github.com:Tubohaler/exjobb-might-and-delight
cd exjobb-might-and-delight
nvm use
npm install
```

## Run Development Server

```bash
npm run dev
```

## Types Reference

Some types generated from GraphQL Queries and Fragments:

imported from '@lib/dato-cms'

```ts
ProjectGalleryFragment; // Project Gallery (project grid)
ProjectFragment; // Project, used as entries in Project Gallery

ImageGalleryFragment; // Image Gallery

PeopleGalleryFragment; // People Gallery
StaffFragment; // Staff, used as entries in People Gallery

ResponsiveVideoFragment; // Record containing video in landscape and mobile format

AddressFragment; // Address fields used in "Visit us" and "Billing Address" in contact page
```

### Example Project Component

```tsx
import type { ProjectFragment } from "@lib/dato-cms";

// How an object of type ProjectFragment looks when fetched from CMS
const sampleProject = {
    "__typename": "ProjectRecord",
    "id": "90591230",
    "name": "Book of Travels",
    "pageUrl": "https://mightanddelight.com/bookoftravels?utm_source=mightanddelight_com&utm_medium=projects-page",
    "steamUrl": "https://store.steampowered.com/app/1152340/Book_of_Travels/",
    "humbleUrl": "",
    "humbleButtonText": "From us",
    "featuredImage": {
    "__typename": "ImageFileField",
    "id": "32551773",
    "responsiveImage": {
        "__typename": "ResponsiveImage",
        "src": "https://www.datocms-assets.com/91892/1673281258-book-of-travels.jpg?fm=webp",
        "alt": null,
        "title": null,
        "width": 1024,
        "height": 1024,
        "srcSet": "https://www.datocms-assets.com/91892/1673281258-book-of-travels.jpg?dpr=0.25&fm=webp 256w,https://www.datocms-assets.com/91892/1673281258-book-of-travels.jpg?dpr=0.5&fm=webp 512w,https://www.datocms-assets.com/91892/1673281258-book-of-travels.jpg?dpr=0.75&fm=webp 768w,https://www.datocms-assets.com/91892/1673281258-book-of-travels.jpg?fm=webp 1024w",
        "sizes": "(max-width: 512px) 100vw, 512px",
        "bgColor": "#d4c471",
        "aspectRatio": 1
    }
}

type Props = {
    project:ProjectFragment;
}

const Project = ({ project }: Props) => {
    // Return some JSX
    return <>{project.name}</>
}

export default Project;

```
