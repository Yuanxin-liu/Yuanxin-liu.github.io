const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    loop: 'all',
    order: 'random',
    volume: 0.7,

    audio: [
      // {
      //   name: "野孩子",
      //   artist: '杨千嬅',
      //   url: 'http://m10.music.126.net/20200310191001/3e7889423162dc05d88323000f222a67/ymusic/023f/4148/8ce5/29ff2cbc5f95f79f3d9ce6a504ce76e1.mp3',
      
      // },
      {
        name: '小半',
        artist: '陈粒',
        url: 'http://m10.music.126.net/20200310192313/e7f138d7d5f10d6870b958a344455767/ymusic/2d15/d9fd/57cd/6679396a63ff496ecef0453b25612dfa.mp3',
        
      },
      {
        name: '画',
        artist: 'G.E.M.邓紫棋',
        url: 'http://music.163.com/#/song?id=412911436',
        
      }
      // {
      //   name: '处处吻（Cover：于梓贝）',
      //   artist: '邓壬鑫',
      //   url: 'http://m10.music.126.net/20200310191258/291a61fa3a36d7c6e9d7b35b9915f229/ymusic/0f59/0f5a/510c/83f5b655b080b9530169ff1dec2e2624.mp3',
        
      // }
      // {
      //   name: '烟霞',
      //   artist: '容祖儿',
      //   url: 'http://dl.stream.qqmusic.qq.com/C100002BdYFT0uEEWt.m4a?fromtag=38',
        
      // }

    ]
});