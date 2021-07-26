// キャンプ飯のジャンル。ホーム画面に表示する単位
export interface Genre {
  key: string;
  genru: string;
  genreTitle: string;
  genreText: string;
  genreImage: { uri: string };
}

// ジャンルのkeyにひもづくレシピ
export interface Food {
  key: string;
  genru: string;
  userId: string;
  title: string;
  foodImages: { key: string; image: { uri: string } }[];
  // 材料
  material: string[];
  // 調理手順単位で管理
  procedure: { key: string; text: string; image: { uri: string } }[];
  // ポイント
  point: string;
}

export const genreList: Genre[] = [
  {
    key: '1',
    genru: 'new',
    genreTitle: '新着キャンプ飯',
    genreText: '最新のキャンプ飯をチェック！！',
    genreImage: {
      uri: 'https://p1-16efdeae.imageflux.jp/default/image/image/912533030814324861/article_pc_IMG_3560.JPG',
    },
  },
  {
    key: '2',
    genru: 'seafood',
    genreTitle: '魚介類を楽しむ！！',
    genreText: '簡単で美味しい！魚介を使ったキャンプ料理',
    genreImage: { uri: 'https://www.honda.co.jp/outdoor/pickup-recipes/seafood/image/thumb.jpg' },
  },
  {
    key: '3',
    genru: 'summer',
    genreTitle: '夏キャンプ！！',
    genreText: 'スパイシー＆さっぱりキャンプ料理',
    genreImage: {
      uri: 'https://www.honda.co.jp/outdoor/pickup-recipes/summer/image/feature_image.jpg',
    },
  },
  {
    key: '4',
    genru: 'meat',
    genreTitle: '肉！肉！肉！',
    genreText: 'がっつりジューシーキャンプ料理',
    genreImage: {
      uri: 'https://www.honda.co.jp/outdoor/pickup-recipes/lump/image/feature_image.jpg',
    },
  },
];

export const foodList: Food[] = [
  {
    key: '1',
    genru: 'seafood',
    userId: '@mei_nagano',
    title: 'ホタテの殻でアヒージョ',
    foodImages: [
      {
        key: '1',
        image: {
          uri: 'https://solocanlife.com/wp-content/uploads/2021/03/ef9e7e0bbae5d4628e11a559467f8456.png',
        },
      },
      {
        key: '2',
        image: {
          uri: 'https://www.honda.co.jp/outdoor/recipe/2020-09/03/image/step02.jpg',
        },
      },
    ],
    material: ['ホタテ', 'オリーブオイル', 'にんにく', '鷹の爪', 'ハーブソルト', '白ワイン'],
    procedure: [
      {
        key: '1',
        text: 'ホタテの殻から身やヒモを包丁で剥がし、ウロ（黒い部分）を取り除き、汚れなどを水で洗い落とす。ヒモは、一口大に切る。',
        image: {
          uri: 'https://www.honda.co.jp/outdoor/recipe/2020-09/03/image/step01.jpg',
        },
      },
      {
        key: '2',
        text: '殻に身とヒモをのせて、オリーブオイル、みじん切りにしたにんにく、鷹の爪、ハーブソルトを加えて火にかけ、ふつふつしてきたら白ワインを加える。',
        image: {
          uri: 'https://www.honda.co.jp/outdoor/recipe/2020-09/03/image/step02.jpg',
        },
      },
      {
        key: '3',
        text: '全体に火が通ったらパセリをふりかけて完成。',
        image: {
          uri: 'https://www.honda.co.jp/outdoor/recipe/2020-09/03/image/step03.jpg',
        },
      },
    ],
    point: 'にんにくが焦げやすいので、低温でじっくり焼き上げます。',
  },

  {
    key: '2',
    genru: 'seafood',
    userId: '@suzu_hirose',
    title: '秋鮭とチンゲン菜のホイル焼き',
    foodImages: [
      {
        key: '1',
        image: {
          uri: 'https://www.honda.co.jp/outdoor/recipe/2019-10/03/image/step02.jpg',
        },
      },
      {
        key: '2',
        image: {
          uri: 'https://www.honda.co.jp/outdoor/recipe/2019-10/03/image/thumb.jpg',
        },
      },
    ],
    material: ['鮭', 'チンゲン菜', 'えのき', '生姜', 'ごま油', '醤油', '酒'],
    procedure: [
      {
        key: '1',
        text: 'チンゲン菜は縦四等分に切り、えのきは石づきを落としてほぐす。しょうがは皮を剥き千切りにする。',
        image: {
          uri: 'https://www.honda.co.jp/outdoor/recipe/2019-10/03/image/step01.jpg',
        },
      },
      {
        key: '2',
        text: '二重にしたアルミホイルにチンゲン菜とえのきを敷き、鮭をのせる。調味料を回しかけ、アルミホイルをしっかり包む。',
        image: {
          uri: 'https://www.honda.co.jp/outdoor/recipe/2019-10/03/image/step02.jpg',
        },
      },
      {
        key: '3',
        text: '炭火にかけて20分ほど蒸し焼きにする。最後に、お好みで小ねぎを散らす。',
        image: {
          uri: 'https://www.honda.co.jp/outdoor/recipe/2019-10/03/image/step03.jpg',
        },
      },
    ],
    point: '焦げないように。',
  },

  {
    key: '3',
    genru: 'summer',
    userId: '@mikuru_asakura',
    title: 'フライパンで作る簡単バッファローチキン',
    foodImages: [
      {
        key: '1',
        image: {
          uri: 'https://www.honda.co.jp/outdoor/recipe/2020-07/04/image/step02.jpg',
        },
      },
      {
        key: '2',
        image: {
          uri: 'https://www.honda.co.jp/outdoor/recipe/2020-07/04/image/feature_image.jpg',
        },
      },
    ],
    material: [
      '手羽元',
      '薄力粉',
      'サラダ油',
      'ガーリックパウダー',
      'タバスコ',
      'ケチャップ',
      '酢',
      'セロリ',
      'にんじん',
      'シーザードレッシング',
    ],
    procedure: [
      {
        key: '1',
        text: '調味料を混ぜ合わせておく。薄力粉を手羽元全体にまぶし、余分な粉を落とす。',
        image: {
          uri: 'https://www.honda.co.jp/outdoor/recipe/2020-07/04/image/step01.jpg',
        },
      },
      {
        key: '2',
        text: 'フライパンにサラダ油を入れ、中火で手羽元全体がキツネ色になるまで、返しながら3分ほど焼いて火を通す。',
        image: {
          uri: 'https://www.honda.co.jp/outdoor/recipe/2020-07/04/image/step02.jpg',
        },
      },
      {
        key: '3',
        text: 'フライパンに調味料を回し入れ、全体にからめて表面を1～2分焼く。お好みで付け合わせの野菜やシーザーサラダドレッシングを用意する。',
        image: {
          uri: 'https://www.honda.co.jp/outdoor/recipe/2020-07/04/image/step03.jpg',
        },
      },
    ],
    point: '焦げないように。',
  },
  {
    key: '4',
    genru: 'summer',
    userId: '@kasumi_arimura',
    title: 'スパイシー夏野菜と豆のカレースープ',
    foodImages: [
      {
        key: '1',
        image: {
          uri: 'https://www.honda.co.jp/outdoor/recipe/2019-07/03/image/complete.jpg',
        },
      },
      {
        key: '2',
        image: {
          uri: 'https://www.honda.co.jp/outdoor/recipe/2019-07/03/image/step01.jpg',
        },
      },
    ],
    material: [
      'ベーコンブロック',
      'ズッキーニ',
      '赤パプリカ',
      'オクラ',
      'ミックスビーンズ',
      '生姜',
      'カレー粉',
      'トマトホール缶',
      '水',
      'コンソメ顆粒',
      '塩',
      'こしょう',
      'サラダ油',
    ],
    procedure: [
      {
        key: '1',
        text: 'ベーコン、ズッキーニ、赤パプリカは1cm角に、オクラはヘタを取って半分に切る。',
        image: {
          uri: 'https://www.honda.co.jp/outdoor/recipe/2019-07/03/image/step01.jpg',
        },
      },
      {
        key: '2',
        text: '鍋に油を引いて熱し、ベーコンと野菜類、ミックスビーンズ、みじん切りにした生姜を入れて炒める。野菜がしんなりしたらカレー粉を加えて炒め合わせる。',
        image: {
          uri: 'https://www.honda.co.jp/outdoor/recipe/2019-07/03/image/step02.jpg',
        },
      },
      {
        key: '3',
        text: 'トマトホール缶、水、コンソメを加えて15分ほど煮て、塩こしょうで味を調える。',
        image: {
          uri: 'https://www.honda.co.jp/outdoor/recipe/2019-07/03/image/step03.jpg',
        },
      },
    ],
    point: '焦げないように。',
  },
  {
    key: '5',
    genru: 'meat',
    userId: '@nanase_nisino',
    title: '炭火焼で鶏チャーシュー',
    foodImages: [
      {
        key: '1',
        image: {
          uri: 'https://www.honda.co.jp/outdoor/recipe/2018-04/01/image/feature_image.jpg',
        },
      },
      {
        key: '2',
        image: {
          uri: 'https://www.honda.co.jp/outdoor/recipe/2018-04/01/image/step03.jpg',
        },
      },
    ],
    material: [
      '鶏もも肉',
      '塩',
      'こしょう',
      'しょうゆ',
      '酒',
      'みりん',
      'にんにく（チューブ）',
      '生姜（チューブ）',
    ],
    procedure: [
      {
        key: '1',
        text: '鶏もも肉を平たく伸ばし、厚い部分は切り開いて厚さを均等にする。皮を外側にしてロール状に巻く。',
        image: {
          uri: 'https://www.honda.co.jp/outdoor/recipe/2018-04/01/image/step01.jpg',
        },
      },
      {
        key: '2',
        text: '＜STEP.1＞をたこ糸で縛り、皮全体にフォークなどで穴を数カ所開けて塩こしょうをふる。',
        image: {
          uri: 'https://www.honda.co.jp/outdoor/recipe/2018-04/01/image/step02.jpg',
        },
      },
      {
        key: '3',
        text: '中火程度で全体に焼き色がつくように火を通し、弱火に移す。',
        image: {
          uri: 'https://www.honda.co.jp/outdoor/recipe/2018-04/01/image/step03.jpg',
        },
      },
      {
        key: '4',
        text: 'タレをハケで塗りながら全体に味をつける。転がしながら何度も弱火でじっくりと焼いていく。',
        image: {
          uri: 'https://www.honda.co.jp/outdoor/recipe/2018-04/01/image/step04.jpg',
        },
      },
    ],
    point: '焦げないように。',
  },
  {
    key: '6',
    genru: 'meat',
    userId: '@haruka_kiriya',
    title: '炭火ローストビーフ燻製風味',
    foodImages: [
      {
        key: '1',
        image: {
          uri: 'https://www.honda.co.jp/outdoor/recipe/2018-04/03/image/feature_image.jpg',
        },
      },
      {
        key: '2',
        image: {
          uri: 'https://www.honda.co.jp/outdoor/recipe/2018-04/03/image/step01.jpg',
        },
      },
    ],
    material: ['牛もも肉', 'にんにく', '塩', 'スモークチップ'],
    procedure: [
      {
        key: '1',
        text: '牛肉を常温に戻し、水分を拭き取り、半分に切ったにんにくを肉全体にこすりつけて香りをつけたら、全体的に塩をふる。',
        image: {
          uri: 'https://www.honda.co.jp/outdoor/recipe/2018-04/03/image/step01.jpg',
        },
      },
      {
        key: '2',
        text: '強火で全面に焼き色をつける。',
        image: {
          uri: 'https://www.honda.co.jp/outdoor/recipe/2018-04/03/image/step02.jpg',
        },
      },
      {
        key: '3',
        text: '肉にアルミトレーやアルミホイルなど蓋になるものを被せ、弱火にして約5分蒸し焼きにする。様子をみてひっくり返し、さらに約5分蒸し焼きにする。最後に炭にスモークチップを落とし、5分ほど燻す。',
        image: {
          uri: 'https://www.honda.co.jp/outdoor/recipe/2018-04/03/image/step03.jpg',
        },
      },
    ],
    point: '焦げないように。',
  },
];
