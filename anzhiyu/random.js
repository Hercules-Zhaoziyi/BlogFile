var posts=["posts/47294.html","posts/27964.html","posts/a1e8a28a.html","posts/26f85308.html","posts/26085cd3.html","posts/57186.html","posts/dc5e24b.html","posts/26899d4f.html","posts/2848558a.html","posts/63c968f8.html","posts/60f3e884.html","posts/1d9f6f5b.html","posts/18c784a3.html","posts/117143e8.html","posts/21112f40.html","posts/f7b7688c.html","posts/9c9d8f45.html","posts/8d6987bf.html","posts/b4cf8c77.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };