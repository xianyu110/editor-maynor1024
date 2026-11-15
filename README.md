# MaynorAI 文章同步助手

专为 OPC｜一人公司打造的多平台文章草稿同步工具。在编辑器里写好文章，通过浏览器扩展复用已登录会话，将内容保存到微信公众号、知乎、掘金、CSDN、哔哩哔哩专栏等 20 个平台的草稿箱，不会自动发布。

- 产品页：https://product.maynor1024.live/
- 编辑器：https://editor.maynor1024.live/
- 扩展安装包：https://editor.maynor1024.live/MaynorAI-article-sync-extension.zip

![MaynorAI 文章同步助手首页](docs/hero.png)

## 三步开始使用

下载扩展并在 Chrome 或 Edge 中加载，登录各目标平台，然后在编辑器中写作并同步为草稿。登录凭据留在你的浏览器里，不会上传到第三方服务器。

![安装教程](docs/install.png)

## 功能特性

一次勾选多个平台、图片转存与排版适配、任务历史与失败重试，以及面向一人公司的本机优先工作流。默认同步为草稿，发布前由你在各平台后台核对。

![功能特性](docs/features.png)

## 支持的平台

覆盖 20 个主流内容渠道，持续扩展中：微信公众号、知乎专栏、掘金、CSDN、微博、百家号、博客园、头条、51CTO、简书、思否、开源中国、哔哩哔哩专栏、网易号、腾讯云开发者社区、抖音长文、抖音图文、小红书长文笔记、小红书图文笔记、阿里云开发者社区。

![支持的平台](docs/platforms.png)

## 本地预览

本仓库是 GitHub Pages 静态站，自定义域名为 `product.maynor1024.live`。

```bash
python3 -m http.server 4173
```

然后打开 http://127.0.0.1:4173/ 。
