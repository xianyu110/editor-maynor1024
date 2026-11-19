(() => {
  const download = "https://editor.maynor1024.live/MaynorAI-article-sync-extension.zip";
  const store = "https://microsoftedge.microsoft.com/addons/detail/dmcofieibhiconcpflacmblnkpklhnho";
  const editor = "https://editor.maynor1024.live/";
  const snippets = {
    chrome: {
      label: "Chrome · 手动加载",
      showWin: false,
      text: `1. 下载扩展安装包\n   ${download}\n2. 解压到本地文件夹，确认其中有 manifest.json。\n3. 在 Chrome 地址栏打开 chrome://extensions\n4. 打开右上角「开发人员模式」。\n5. 点击「加载已解压的扩展程序」，选择该文件夹。\n6. 若要添加矩阵账号，请允许该扩展「在无痕模式下运行」。\n7. 打开 ${editor} ，登录编辑器，点击「扩展连接」或「重新检测」。`,
    },
    edge: {
      label: "Edge / Windows · 商店安装",
      showWin: true,
      text: `1. 打开 Microsoft Edge 商店并安装扩展\n   ${store}\n2. 安装后如需添加矩阵账号，请到 edge://extensions 允许该扩展「在 InPrivate 窗口中运行」。\n3. 打开 ${editor} ，登录编辑器，点击「扩展连接」或「重新检测」。\n\n如需手动加载：下载 ${download} ，解压后确认有 manifest.json，再在 edge://extensions 开启「开发人员模式」并加载该文件夹。`,
    },
  };

  const codeBody = document.getElementById("code-body");
  const codeLabel = document.getElementById("code-label");
  const winTips = document.getElementById("win-tips");
  const copyBtn = document.querySelector(".copy-btn");

  const setOs = (key) => {
    const snippet = snippets[key] || snippets.chrome;
    codeBody.textContent = snippet.text;
    codeLabel.textContent = snippet.label;
    winTips.classList.toggle("is-show", snippet.showWin);
    if (copyBtn) {
      const link = key === "edge" ? store : download;
      copyBtn.dataset.copy = link;
      copyBtn.textContent = key === "edge" ? "复制商店链接" : "复制下载链接";
    }
    document.querySelectorAll(".tab").forEach((tab) => {
      tab.classList.toggle("is-active", tab.dataset.os === key);
    });
  };
  if (codeBody && codeLabel) {
    setOs("chrome");
    document.querySelectorAll(".tab").forEach((tab) => {
      tab.addEventListener("click", () => setOs(tab.dataset.os));
    });
  }

  const copyText = async (value, button, okLabel) => {
    try {
      await navigator.clipboard.writeText(value);
      const prev = button.textContent;
      button.textContent = okLabel;
      setTimeout(() => { button.textContent = prev; }, 1600);
    } catch {
      button.textContent = "复制失败";
    }
  };
  copyBtn?.addEventListener("click", () => {
    copyText(copyBtn.getAttribute("data-copy") || download, copyBtn, "已复制");
  });

  document.querySelectorAll(".faq-item").forEach((item) => {
    const button = item.querySelector("button");
    button.addEventListener("click", () => {
      const open = item.classList.contains("is-open");
      document.querySelectorAll(".faq-item").forEach((other) => {
        other.classList.remove("is-open");
        other.querySelector("button")?.setAttribute("aria-expanded", "false");
      });
      if (!open) {
        item.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });

  const panel = document.getElementById("mobile-nav-panel");
  const toggle = document.querySelector("[data-menu-toggle]");
  const closeMenu = () => {
    panel.hidden = true;
    panel.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  };
  toggle?.addEventListener("click", () => {
    const willOpen = panel.hidden;
    panel.hidden = !willOpen;
    panel.classList.toggle("is-open", willOpen);
    toggle.setAttribute("aria-expanded", String(willOpen));
  });
  panel?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
})();
