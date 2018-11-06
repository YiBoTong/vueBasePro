/**
 * @date     2018-11-06 16:22
 * @author   YC
 * @describe 演示路由
 */

const router = {
  path: 'other',
  name: 'other',
  component: () => import(/* webpackChunkName: "other" */'../page/demo/list')
};

export default router;
