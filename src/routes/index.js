import React, { lazy, Suspense } from "react";
import { Redirect } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import BlankLayout from "../layouts/BlankLayout";
import PlayLayout from "../layouts/PlayLayout";

const LoginComponent = lazy(() => import("../application/User/Login"));
const Login = props => {
  return (
    <Suspense fallback={null}>
      <LoginComponent {...props}></LoginComponent>
    </Suspense>
  );
};

const HomeComponent = lazy(() => import("../application/Home/"));
const Home = props => {
  return (
    <Suspense fallback={null}>
      <HomeComponent {...props}></HomeComponent>
    </Suspense>
  );
};

const FriendComponent = lazy(() => import("../application/Friend/"));

const Friend = props => {
  return (
    <Suspense fallback={null}>
      <FriendComponent {...props}></FriendComponent>
    </Suspense>
  );
};

const VideoComponent = lazy(() => import("../application/Video/"));

const Video = props => {
  return (
    <Suspense fallback={null}>
      <VideoComponent {...props}></VideoComponent>
    </Suspense>
  );
};

const RecommendComponent = lazy(() => import("../application/Recommend/"));
const Recommend = props => {
  return (
    <Suspense fallback={null}>
      <RecommendComponent {...props}></RecommendComponent>
    </Suspense>
  );
};

const DateRecommendComponent = lazy(() =>
  import("../application/DateRecommend/")
);
const DateRecommend = props => {
  return (
    <Suspense fallback={null}>
      <DateRecommendComponent {...props}></DateRecommendComponent>
    </Suspense>
  );
};

const SingersComponent = lazy(() => import("../application/Singers/"));
const Singers = props => {
  return (
    <Suspense fallback={null}>
      <SingersComponent {...props}></SingersComponent>
    </Suspense>
  );
};

const RankComponent = lazy(() => import("../application/Rank/"));
const Rank = props => {
  return (
    <Suspense fallback={null}>
      <RankComponent {...props}></RankComponent>
    </Suspense>
  );
};

const AlbumComponent = lazy(() => import("../application/Album/"));
const Album = props => {
  return (
    <Suspense fallback={null}>
      <AlbumComponent {...props}></AlbumComponent>
    </Suspense>
  );
};

const SingerComponent = lazy(() => import("./../application/Singer/"));
const Singer = props => {
  return (
    <Suspense fallback={null}>
      <SingerComponent {...props}></SingerComponent>
    </Suspense>
  );
};

const SearchComponent = lazy(() => import("./../application/Search/"));
const Search = props => {
  return (
    <Suspense fallback={null}>
      <SearchComponent {...props}></SearchComponent>
    </Suspense>
  );
};

const RecentlyPlayedComponent = lazy(() =>
  import("./../application/recentlyPlayed/")
);
const RecentlyPlayed = props => {
  return (
    <Suspense fallback={null}>
      <RecentlyPlayedComponent {...props}></RecentlyPlayedComponent>
    </Suspense>
  );
};

const DjSublistComponent = lazy(() => import("./../application/DjSublist"));
const DjSublist = props => {
  return (
    <Suspense fallback={null}>
      <DjSublistComponent {...props}></DjSublistComponent>
    </Suspense>
  );
};

const DjDetailComponent = lazy(() => import("./../application/djDetail"));
const DjDetail = props => {
  return (
    <Suspense fallback={null}>
      <DjDetailComponent {...props}></DjDetailComponent>
    </Suspense>
  );
};

const DjComponent = lazy(() => import("./../application/Dj"));
const Dj = props => {
  return (
    <Suspense fallback={null}>
      <DjComponent {...props}></DjComponent>
    </Suspense>
  );
};

export default [
  {
    component: BlankLayout,
    routes: [
      {
        path: "/user",
        component: BlankLayout, //userLayout
        routes: [
          {
            path: "/user/login",
            exact: true,
            key: "login",
            component: Login
          }
        ]
      },
      {
        component: PlayLayout,
        routes: [
          {
            path: "/rank/",
            component: Rank,
            key: "rank",
            routes: [
              {
                path: "/rank/:id",
                component: Album
              }
            ]
          },
          {
            path: "/singers",
            component: Singers,
            key: "singers",
            routes: [
              {
                path: "/singers/:id",
                component: Singer
              }
            ]
          },
          {
            path: "/dateRecommend",
            component: DateRecommend,
            key: "dateRecommend"
          },
          {
            path: "/recently",
            key: "recently",
            component: RecentlyPlayed
          },
          {
            path: "/dj_sublist",
            key: "dj_sublist",
            component: DjSublist
          },
          {
            path: "/djDetail/:id",
            key: "djDetail",
            component: DjDetail
          },
          {
            path: "/dj",
            key: "dj",
            component: Dj
          },
          {
            path: "/",
            component: HomeLayout,
            routes: [
              {
                path: "/home",
                exact: true,
                key: "home",
                component: Home
              },
              {
                path: "/friend",
                exact: true,
                key: "friend",
                component: Friend
              },
              {
                path: "/videoPage",
                exact: true,
                key: "videoPage",
                component: Video
              },
              {
                path: "/",
                exact: true,
                render: () => <Redirect to={"/recommend"} />
              },
              {
                path: "/recommend",
                component: Recommend,
                routes: [
                  {
                    path: "/recommend/:id",
                    component: Album
                  }
                ]
              },
              {
                path: "/album/:id",
                key: "album",
                component: Album
              },
              {
                path: "/search",
                key: "search",
                component: Search
              }
            ]
          }
        ]
      }
    ]
  }
];
