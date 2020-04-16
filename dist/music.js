const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    loop: 'all',
    order: 'random',
    volume: 0.7,

    audio: [
      {
        name: "野孩子",
        artist: '杨千嬅',
        url: 'http://m10.music.126.net/20200310214554/9805fc32843e7bfe2f71c2b92cdfadac/ymusic/023f/4148/8ce5/29ff2cbc5f95f79f3d9ce6a504ce76e1.mp3',
      
      },
      {
        name: '小半',
        artist: '陈粒',
        url: 'http://m10.music.126.net/20200310192313/e7f138d7d5f10d6870b958a344455767/ymusic/2d15/d9fd/57cd/6679396a63ff496ecef0453b25612dfa.mp3',
        
      },
      {
        name: '处处吻（Cover：于梓贝）',
        artist: '邓壬鑫',
        url: 'http://m10.music.126.net/20200310214805/e4b88acc7782e6f085f1f62c49868bec/ymusic/0f59/0f5a/510c/83f5b655b080b9530169ff1dec2e2624.mp3',
        
      },
      {
        name: '烟霞',
        artist: '容祖儿',
        url: 'https://music.apple.com/cn/album/%E7%83%9F%E9%9C%9E/1211640810?i=1211641243',
        
      }


    ]
});