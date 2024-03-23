var posts=["posts/2022.11.12/","posts/3coutryfun/","posts/cloudreve-render/","posts/free-hosting/","posts/freenom_with_cloudflare/","posts/github_2fa/","posts/hexo-auto-deploy-2/","posts/hexo-auto-deploy/","posts/planetscale_ban/","posts/runexe/","posts/vercel_better_ip/","posts/vercel_github/","posts/vercel_short_link/","posts/warn-domain/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"岚天小窝","link":"https://blog.ltya.top","avatar":"https://cravatar.cn/avatar/5af06b461740fb2bd7467b8561399703?s=500&d=mm&r=g","descr":"一只鸽子住在这里~"},{"name":"Qinai’s Blog","link":"https://slqinai.cn","avatar":"https://q1.qlogo.cn/g?b=qq&nk=2140137093&s=640","descr":"夜の星もいつかは消える"},{"name":"邪帝家族的博客","link":"https://blog.whitegx.top","avatar":"https://cravatar.cn/avatar/9ba5c3066897b869698d222cde022ee8?s=500&d=mm&r=g","descr":"还没想好说什么~"},{"name":"序炁的博客","link":"https://www.ordchaos.com","avatar":"https://www.ordchaos.com/img/avatar.jpg","descr":"A dragon that born in the Order and Chaos."},{"name":"LZHの小窝","link":"https://blog.lzh.life","avatar":"https://cravatar.cn/avatar/ed393c2e64cb768039a62f8f14178ca0?s=500&d=mm&r=g","descr":"凡是过往，皆为序章"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };