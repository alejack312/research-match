This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
### research-match


The intention of this app is to help users find researchers that match their 
interests. The app will have a list of researchers that users can filter and 
sort based on their research areas. The app will also have an aggregator that 
will show favorited researchers that match the user's interests.

### App functionality

The app includes a way to filter researcher cards by research area. The user can
select a research area from a dropdown menu and the researcher cards will update
to show only the researchers that match the selected research area.

The app includes a way to filter researcher cards by keywords in the researcher's
description. The user can enter a keyword in the search bar and the researcher
cards will update to show only the researchers that have the keyword in their
description.

The app includes a way to sort researcher cards by alphabetical order of the
research area. They can be filtered in ascending and descending order.

A button at the top of the page allows the user to reset the filters and sorts.

Users can add researcher cards to their list of favorites. The aggregator at the
right side of the page will update to show the researchers in the list of 
favorites. Once added to the list of favorites, each researcher has a corresponding
button that allows the user to remove the researcher from the list of favorites.

Filter & sort are compatible and work in combination with each other. The user
can filter by research area and then sort the filtered researchers by alphabetical
order of the research area. The user can also filter by keyword and search for
descriptions that match the keyword.

