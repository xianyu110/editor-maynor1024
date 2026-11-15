(() => {
  const download = "https://editor.maynor1024.live/MaynorAI-article-sync-extension.zip";
  const editor = "https://editor.maynor1024.live/";
  const snippets = {
    chrome: {
      label: "Chrome · 手动加载",
      showWin: false,
      text: `1. 下载扩展安装包\n   ${download}\n2. 解压到本地文件夹，确认其中有 manifest.json。\n3. 在 Chrome 地址栏打开 chrome://extensions\n4. 打开右上角「开发人员模式」。\n5. 点击「加载已解压的扩展程序」，选择该文件夹。\n6. 打开 ${editor} ，点击「扩展连接」或「重新检测」。`,
    },
    edge: {
      label: "Edge / Windows · 手动加载",
      showWin: true,
      text: `1. 下载扩展安装包\n   ${download}\n2. 解压到本地文件夹，确认其中有 manifest.json。\n3. 在 Edge 地址栏打开 edge://extensions\n   （也可用 Chrome 的 chrome://extensions）\n4. 打开「开发人员模式」。\n5. 点击「加载已解压的扩展程序」，选择该文件夹。\n6. 打开 ${editor} ，点击「扩展连接」或「重新检测」。`,
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
    document.querySelectorAll(".tab").forEach((tab) => {
      tab.classList.toggle("is-active", tab.dataset.os === key);
    });
  };
  setOs("chrome");

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => setOs(tab.dataset.os));
  });

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
