const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    loop: 'all',
    order: 'random',
    volume: 0.7,

    audio: [
      {
        name: '小半',
        artist: '陈粒',
        url: 'http://m10.music.126.net/20200310192313/e7f138d7d5f10d6870b958a344455767/ymusic/2d15/d9fd/57cd/6679396a63ff496ecef0453b25612dfa.mp3',
        
      },
      {
        name: '画',
        artist: 'G.E.M.邓紫棋',
        url: 'http://m10.music.126.net/20200310203918/31506461a2903b4165bed810d3f8a154/ymusic/225a/0b65/aa03/90387f0b1f4558c67fe72c77f39e5b62.mp3',
        
      }


    ]
});