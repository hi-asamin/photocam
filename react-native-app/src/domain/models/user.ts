export interface User {
  key: string;
  userName: string;
  userId: string;
  userArea: string;
  isFollow: boolean;
  isFollower: boolean;
  imageUrl: string;
  backImageUrl?: string;
  profile: string;
  snsLink?: {
    youtube?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
    web?: string;
  };
}

// 本来はUID
export const loginUserId = '@mei_nagano';

export const userList: User[] = [
  {
    key: '1',
    userName: '永野芽郁',
    userId: '@mei_nagano',
    userArea: '東京',
    isFollow: true,
    isFollower: true,
    imageUrl: 'https://i.pinimg.com/736x/10/90/b9/1090b93f4ddc26c5dbafb69c376d99ca.jpg',
    backImageUrl: 'https://your-magazine.net/wp-content/uploads/2018/02/naganomei-35-a.jpg',
    profile: 'キャンプ初心者です。よろしくお願いします！！',
    snsLink: {
      youtube: 'https://www.youtube.com/',
      twitter: 'https://twitter.com/',
      facebook: 'https://ja-jp.facebook.com/',
      instagram: 'https://www.instagram.com/?hl=ja',
      web: 'https://qiita.com/',
    },
  },
  {
    key: '2',
    userName: '広瀬すず',
    userId: '@suzu_hirose',
    userArea: '神奈川',
    isFollow: true,
    isFollower: true,
    imageUrl: 'https://crea.bunshun.jp/mwimgs/1/8/-/img_184e62faacd89169f4b653eaa61cdc10209775.jpg',
    profile: '広瀬すずです。よろしくお願いします！！',
  },
  {
    key: '3',
    userName: '朝倉未来',
    userId: '@mikuru_asakura',
    userArea: '愛知',
    isFollow: true,
    isFollower: true,
    imageUrl:
      'https://yt3.ggpht.com/ytc/AKedOLRdHHNnTgeWNjy0XV5cB8PWXdMkL07_cjOLF0dl=s900-c-k-c0x00ffffff-no-rj',
    profile: '路上の伝説',
  },
  {
    key: '4',
    userName: '有村架純',
    userId: '@kasumi_arimura',
    userArea: '上大岡',
    isFollow: true,
    isFollower: true,
    imageUrl:
      'https://amd-pctr.c.yimg.jp/r/iwiz-amd/20210608-00090474-crankinn-000-1-view.jpg?w=640&h=480&q=90&exp=10800&pri=l',
    profile: '可愛いです。',
  },
  {
    key: '5',
    userName: '西野七瀬',
    userId: '@nanase_nisino',
    userArea: '横浜',
    isFollow: true,
    isFollower: true,
    imageUrl: 'https://i.pinimg.com/originals/67/1e/fe/671efeecbf5287fd2cadc4136d419166.jpg',
    profile: '乃木坂です。',
  },
  {
    key: '6',
    userName: 'きりやはるか',
    userId: '@haruka_kiriya',
    userArea: '新宿',
    isFollow: true,
    isFollower: true,
    imageUrl:
      'https://imgc.eximg.jp/i=https%253A%252F%252Fs.eximg.jp%252Fexnews%252Ffeed%252FTocana%252FTocana_210636_59d8_2.jpg,quality=70,type=jpg',
    profile: 'ぼる塾です。',
  },
];
