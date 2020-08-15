import {
  HomeOutlined,
  SearchOutlined,
  SoundOutlined,
  ToolOutlined,
  PictureOutlined,
  UserAddOutlined,
} from '@ant-design/icons';
export const MenuData = [
  {
    name: '首页',
    url: 'home',
    icon: HomeOutlined,
  },
  {
    name: '用户管理',
    url: 'user',
    icon: UserAddOutlined ,
    children: [
      { name: '用户列表', url: 'list' },
    ]
  },
  {
    name: '音乐模块',
    url: 'music',
    icon: SoundOutlined,
    children: [
      { name: '音乐系列', url: 'list' },
    ]
  },
  {
    name: '工具模块',
    url: 'tool',
    icon: ToolOutlined,
    children: [
      { name: '小应用', url: 'app' },
      { name: '富文本编辑器', url: 'editor' },
      { name: '待办事项', url: 'todoList' },
    ],
  },
  {
    name: '画廊模块',
    url: 'pic',
    icon: PictureOutlined,
    children: [
      { name: '时光相片', url: 'album' },
    ],
  },
  {
    name: '搜索模块',
    url: 'search',
    icon: SearchOutlined,
    children: [
      { name: '搜索引擎', url: 'searchEngine' },
    ],
  }]