import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // 挂载 egg-router-plus 路由拓展
  routerPlus: {
    enable: true,
    package: 'egg-router-plus',
  },
};

export default plugin;
