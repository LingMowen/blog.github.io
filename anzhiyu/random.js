var posts=["2025/07/11/hello-world/","2025/07/12/迷你世界光影/","2025/07/12/测试/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };