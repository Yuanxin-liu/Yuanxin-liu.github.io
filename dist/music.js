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
        url: 'http://music.163.com/#/song?id=412911436',
        
      }


    ]
});