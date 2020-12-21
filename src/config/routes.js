import { Home, MusicRecommendation } from '../pages';

const routes = [
  {
    path: '/musicrecommendation',
    component: MusicRecommendation,
    // isPublic: true,
  },
  {
    path: '/',
    component: Home,
    // isPublic: true,
  },
];

export default routes;
