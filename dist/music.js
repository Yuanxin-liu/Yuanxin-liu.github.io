const ap = new APlayer({
    container: document.getElementById('aplayer'),
    mini: true,
    autoplay: false,
    loop: 'all',
    order: 'random',
    volume: 0.7,

    audio: [
      {
        name: "可惜我是水瓶座",
        artist: '杨千嬅',
        url: 'http://m10.music.126.net/20191225135224/199144acac1df47da9a6454daefca7d5/ymusic/0376/4fc2/e837/e9fd4802a575aadbad8b084f1a75269e.mp3',
      
      },
      {
        name: '小半',
        artist: '陈粒',
        url: 'http://m10.music.126.net/20191225140353/358455b1423e22221ec759009f312223/ymusic/2d15/d9fd/57cd/6679396a63ff496ecef0453b25612dfa.mp3',
        
      },
      {
        name: '你瞒我瞒',
        artist: '陈柏宇',
        url: 'http://m10.music.126.net/20191225140452/167eb99a3c8d5a627a836c8f3c4554b4/ymusic/6eef/325e/25f9/db1be99210b06ed4154a5759d858ea30.mp3',
        
      },
      {
        name: '处处吻',
        artist: '杨千嬅',
        url: 'http://m10.music.126.net/20191225140651/6d5fcacee0b6259828d6cbd32f1e5902/ymusic/4376/f20d/ab79/c584c6dc03cda24064a51363e5e6e0d8.mp3',
        
      },
      {
        name: '虚拟',
        artist: '陈粒',
        url: 'http://m10.music.126.net/20191225140746/d139978ca0bca5b7b704593ef08f8ff6/ymusic/db30/6d6f/3dc4/1b2826f685d65de427468badbbfa9390.mp3',
        
      }

    ]
});