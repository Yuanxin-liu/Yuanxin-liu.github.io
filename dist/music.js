// const ap = new APlayer({
//     container: document.getElementById('aplayer'),
//     fixed: true,
//     autoplay: false,
//     loop: 'all',
//     order: 'random',
//     volume: 0.7,

//     audio: [
//       {
//         name: "I don't wanna see u anymore",
//         artist: 'NINEONE',
//         url: 'https://media-yuanxin.oss-cn-hangzhou.aliyuncs.com/music/i%20dont%20wanna%20see%20u%20anymore.mp3',
      
//       },
//       {
//         name: '虚拟',
//         artist: '陈粒',
//         url: 'https://media-yuanxin.oss-cn-hangzhou.aliyuncs.com/music/%E8%99%9A%E6%8B%9F.mp3',
        
//       },

//       {
//         name: '处处吻（Cover：于梓贝）',
//         artist: '邓壬鑫',
//         url: 'https://media-yuanxin.oss-cn-hangzhou.aliyuncs.com/music/%E5%A4%84%E5%A4%84%E5%90%BB.mp3',
        
//       },

//       {
//         name: '情人',
//         artist: '蔡徐坤',
//         url: 'https://media-yuanxin.oss-cn-hangzhou.aliyuncs.com/music/%E6%83%85%E4%BA%BA.mp3',
        
//       },

//       {
//         name: '画',
//         artist: '邓紫棋',
//         url: 'https://media-yuanxin.oss-cn-hangzhou.aliyuncs.com/music/%E7%94%BB.mp3',
        
//       }，

//       {
//         name: '野孩子',
//         artist: '杨千嬅',
//         url: 'https://media-yuanxin.oss-cn-hangzhou.aliyuncs.com/music/%E9%87%8E%E5%AD%A9%E5%AD%90.mp3',
        
//       }

//     ]
// });



const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    loop: 'all',
    order: 'random',
    volume: 0.7,
    audio: [
      // {
      //   name: "",
      //   artist: '',
      //   url: '',
      //   cover: '',
      // },
      {
        name: "两难",
        artist: '加木',
        url: 'https://media-yuanxin.oss-cn-hangzhou.aliyuncs.com/music/%E4%B8%A4%E9%9A%BE.mp3',
        cover: 'https://media-yuanxin.oss-cn-hangzhou.aliyuncs.com/music/%E4%B8%A4%E9%9A%BE.jpg',
      },
      {
        name: "沉溺",
        artist: 'Pank',
        url: 'https://media-yuanxin.oss-cn-hangzhou.aliyuncs.com/music/%E6%B2%89%E6%BA%BA.mp3',
        cover: 'https://media-yuanxin.oss-cn-hangzhou.aliyuncs.com/music/%E6%B2%89%E6%BA%BA.jpg',
      },
      {
        name: "忘不掉的你",
        artist: 'h3R3',
        url: 'https://media-yuanxin.oss-cn-hangzhou.aliyuncs.com/music/obj_wo3DlMOGwrbDjj7DisKw_14096412060_add8_8868_addf_16aaffa8e47bfbe1fd4ce87e26c8cd52.mp3',
        cover: 'https://media-yuanxin.oss-cn-hangzhou.aliyuncs.com/music/65d1ea990093a2824dd3bf55298f8d46.jpeg',


      },
      {
        name: "还是会想你",
        artist: '林达浪',
        url: 'https://media-yuanxin.oss-cn-hangzhou.aliyuncs.com/music/obj_wo3DlMOGwrbDjj7DisKw_14096417167_048c_4cb1_7dd0_a6e99101597f8b95b23244d4c7ec35c7.mp3',
        cover: 'https://media-yuanxin.oss-cn-hangzhou.aliyuncs.com/music/8da27d06ca7943c6e10b52e3ca1ca474.jpg',

        
      },
      {
        name: "I don't wanna see u anymore",
        artist: 'NINEONE',
        url: 'https://media-yuanxin.oss-cn-hangzhou.aliyuncs.com/music/i%20dont%20wanna%20see%20u%20anymore.mp3',
        cover: 'https://media-yuanxin.oss-cn-hangzhou.aliyuncs.com/music/i%20dont%20wanna%20see%20u%20anymore.jpg',
      
      },
      {
        name: '起风了',
        artist: '吴青峰',
        url: 'https://media-yuanxin.oss-cn-hangzhou.aliyuncs.com/music/%E8%B5%B7%E9%A3%8E%E4%BA%86.mp3',
        cover: 'https://media-yuanxin.oss-cn-hangzhou.aliyuncs.com/music/%E8%B5%B7%E9%A3%8E%E4%BA%86.jpg',
        
      },
      {
        name: '画',
        artist: '邓紫棋',
        url: 'https://media-yuanxin.oss-cn-hangzhou.aliyuncs.com/music/%E7%94%BB.mp3',
        cover: 'https://media-yuanxin.oss-cn-hangzhou.aliyuncs.com/music/%E7%94%BB.jpg',
      },
      {
        name: '处处吻（Cover：于梓贝）',
        artist: '邓壬鑫',
        url: 'https://media-yuanxin.oss-cn-hangzhou.aliyuncs.com/music/%E5%A4%84%E5%A4%84%E5%90%BB.mp3',
        cover: 'https://media-yuanxin.oss-cn-hangzhou.aliyuncs.com/music/%E5%A4%84%E5%A4%84%E5%90%BB.jpg',

      },
      {
        name: '虚拟',
        artist: '陈粒',
        url: 'https://media-yuanxin.oss-cn-hangzhou.aliyuncs.com/music/%E8%99%9A%E6%8B%9F.mp3',
        cover: 'https://media-yuanxin.oss-cn-hangzhou.aliyuncs.com/music/%E8%99%9A%E6%8B%9F.jpg',

      },
      {
        name: '易燃易爆炸',
        artist: '陈粒',
        url: 'https://media-yuanxin.oss-cn-hangzhou.aliyuncs.com/music/%E6%98%93%E7%87%83%E6%98%93%E7%88%86%E7%82%B8.mp3',
        cover: 'https://media-yuanxin.oss-cn-hangzhou.aliyuncs.com/music/%E6%98%93%E7%87%83%E6%98%93%E7%88%86%E7%82%B8.jpeg',

      },
      {
        name: '此生不换',
        artist: '青鸟飞鱼',
        url: 'https://media-yuanxin.oss-cn-hangzhou.aliyuncs.com/music/%E6%AD%A4%E7%94%9F%E4%B8%8D%E6%8D%A2.mp3',
        cover: 'https://media-yuanxin.oss-cn-hangzhou.aliyuncs.com/music/%E6%AD%A4%E7%94%9F%E4%B8%8D%E6%8D%A2.jpg',

      },
      {
        name: '小小',
        artist: '容祖儿',
        url: 'https://media-yuanxin.oss-cn-hangzhou.aliyuncs.com/music/%E5%B0%8F%E5%B0%8F.mp3',

      }
    ]
});