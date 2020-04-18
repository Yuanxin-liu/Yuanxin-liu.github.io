const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    loop: 'all',
    order: 'random',
    volume: 0.7,

    audio: [
      {
        name: "I don't wanna see u anymore",
        artist: 'NINEONE',
        url: 'http://m8.music.126.net/20200418134246/3a88d160a6fe8a9b6671cc2c0befea11/ymusic/b5b5/9b5d/7ad7/fb41cc3731e57e6cdd5461c56085b3ba.mp3',
      
      },
      {
        name: '虚拟',
        artist: '陈粒',
        url: 'http://m8.music.126.net/20200418133942/21ebbd05f53a67fdb235a7807ffeaa83/ymusic/db30/6d6f/3dc4/1b2826f685d65de427468badbbfa9390.mp3',
        
      },
      {
        name: '处处吻（Cover：于梓贝）',
        artist: '邓壬鑫',
        url: 'http://m8.music.126.net/20200418133553/2bebd55cdfe27fb80490bec4203ec037/ymusic/0f59/0f5a/510c/83f5b655b080b9530169ff1dec2e2624.mp3',
        
      },
      {
        name: '野孩子',
        artist: '杨千嬅',
        url: 'http://m7.music.126.net/20200418134652/282d7fa5c9f686380aa753f56fbaac2b/ymusic/023f/4148/8ce5/29ff2cbc5f95f79f3d9ce6a504ce76e1.mp3',
        
      }


    ]
});