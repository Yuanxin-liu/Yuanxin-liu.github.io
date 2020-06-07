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
        url: 'https://media-yuanxin.oss-cn-hangzhou.aliyuncs.com/music/i%20dont%20wanna%20see%20u%20anymore.mp3',
      
      },
      {
        name: '虚拟',
        artist: '陈粒',
        url: 'https://media-yuanxin.oss-cn-hangzhou.aliyuncs.com/music/%E8%99%9A%E6%8B%9F.mp3',
        
      },

      {
        name: '处处吻（Cover：于梓贝）',
        artist: '邓壬鑫',
        url: 'https://media-yuanxin.oss-cn-hangzhou.aliyuncs.com/music/%E5%A4%84%E5%A4%84%E5%90%BB.mp3',
        
      },

      {
        name: '情人',
        artist: '蔡徐坤',
        url: 'https://media-yuanxin.oss-cn-hangzhou.aliyuncs.com/music/%E6%83%85%E4%BA%BA.mp3',
        
      },

      {
        name: '画',
        artist: '邓紫棋',
        url: 'https://media-yuanxin.oss-cn-hangzhou.aliyuncs.com/music/%E7%94%BB.mp3',
        
      }，

      {
        name: '野孩子',
        artist: '杨千嬅',
        url: 'https://media-yuanxin.oss-cn-hangzhou.aliyuncs.com/music/%E9%87%8E%E5%AD%A9%E5%AD%90.mp3',
        
      }

    ]
});