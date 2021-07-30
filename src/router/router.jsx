import {
    AllFile,
    Images,
    Document,
    Video,
    Seed,
    Music,
    Else,
    MyShare,
    RecycleBin,
    CllectFiles,
} from '../pages';
import {
    SnippetsOutlined,
    DeleteOutlined,
    ShareAltOutlined,
    FileSyncOutlined,
    FundOutlined,
    CloudServerOutlined,
    VideoCameraAddOutlined,
    FileExclamationOutlined,
    FileUnknownOutlined,
    AudioOutlined,
} from '@ant-design/icons';

export const router = [
    {
        path: '/', // 匹配的路由
        // component: Nav,
        children: [
            {
                path: '/NetworkDisk/AllFile', // 匹配的路由
                page: AllFile,
                pathName: '全部文件',
                icon: SnippetsOutlined,
            },
            {
                path: '/NetworkDisk/Images', // 匹配的路由
                page: Images,
                pathName: '图片',
                icon: FundOutlined,
            },
            {
                path: '/NetworkDisk/Document', // 匹配的路由
                page: Document,
                pathName: '文档',
                icon: CloudServerOutlined,
            },
            {
                path: '/NetworkDisk/Video', // 匹配的路由
                page: Video,
                pathName: '视频',
                icon: VideoCameraAddOutlined,
            },
            {
                path: '/NetworkDisk/Seed', // 匹配的路由
                page: Seed,
                pathName: '种子',
                icon: FileExclamationOutlined,
            },
            {
                path: '/NetworkDisk/Music', // 匹配的路由
                page: Music,
                pathName: '音乐',
                icon: AudioOutlined,
            },
            {
                path: '/NetworkDisk/Else', // 匹配的路由
                page: Else,
                pathName: '其他',
                icon: FileUnknownOutlined,
            },
            {
                path: '/NetworkDisk/MyShare', // 匹配的路由
                page: MyShare,
                pathName: '我的分享',
                icon: ShareAltOutlined,
            },
            {
                path: '/NetworkDisk/RecycleBin', // 匹配的路由
                page: RecycleBin,
                pathName: '回收站',
                icon: DeleteOutlined,
            },
            {
                path: '/NetworkDisk/CllectFiles', // 匹配的路由
                page: CllectFiles,
                pathName: '收集文件',
                icon: FileSyncOutlined,
            },
        ],
    },
];
