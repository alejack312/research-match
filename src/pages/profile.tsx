// import { PageLayout } from "@/components/Layout";
// import { LoadingPage } from "@/components/LoadingPage";
// import type { NextPage } from "next";
// import Head from "next/head";
// import Image from "next/image";

// interface Researcher {
//   id: number;
//   name: string;
//   researchArea: string;
//   description: string;
//   email: string;
//   photo: string;
//   phone: string;
//   address: string;
// }

// interface Favorites {
//   data: Researcher[];
//   // other properties...
// }

// const ProfileFeed = (props: { userId: string }) => {
//   const { data, isLoading } = api.posts.getPostsByUserId.useQuery({
//     userId: props.userId,
//   });

//   if (isLoading) return <LoadingPage />;

//   if (!data || data.length === 0) return <div>User has not posted.</div>;

//   return (
//     <div className="flex flex-col">
//       {data.map((fullPost) => (
//         <PostView {...fullPost} key={fullPost.post.id} />
//       ))}
//     </div>
//   );
// };


// const ProfilePage: NextPage<{ username: string, favorites: Favorites }> = ({ username, favorites }) => {
//   const { data } = favorites;

//   if (!data) return <div>404</div>;
//   return (
//     <>
//       <Head>
//         <title>{data.username ?? data.externalUsername}</title>
//       </Head>
//       <PageLayout>
//         {/* If we want to have a background image, we would set it here */}
//         <div className="relative h-48 bg-blue-850">
//           <Image
//             src={data.profileImageUrl}
//             alt={`${
//               data.username ?? data.externalUsername ?? "unknown"
//             }'s profile pic`}
//             width={120}
//             height={120}
//             className="absolute bottom-0 left-0 -mb-[60px] ml-8 rounded-full border-4 border-black"
//           />
//         </div>
//         <div className="h-[80px]"></div>
//         <div className="p-4 text-2xl font-bold">{`@${
//           data.username ?? data.externalUsername ?? "unknown"
//         }`}</div>
//         <div className="border-b border-slate-400 w-full" />
//         <ProfileFeed userId={data.id} />
//       </PageLayout>
//     </>
//   );
// };

// export default ProfilePage;