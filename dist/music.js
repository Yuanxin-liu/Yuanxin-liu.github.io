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
        name: '画',
        artist: 'G.E.M.邓紫棋',
        url: 'http://m10.music.126.net/20200310203918/31506461a2903b4165bed810d3f8a154/ymusic/225a/0b65/aa03/90387f0b1f4558c67fe72c77f39e5b62.mp3',
        
      }


    ]
});