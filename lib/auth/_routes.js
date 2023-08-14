const routes = [
  {
    path: '/internal/auth/logout',
    roles: []
  },
  {
    path: '/donate',
    roles: []
  },
  {
    path: '/internal/auth/role',
    roles: ['leader']
  }
];

export default routes;
