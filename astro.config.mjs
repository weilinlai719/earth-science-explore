import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind"; // 如果你有用 tailwind

// https://astro.build/config
export default defineConfig({
  // 1. 你的 GitHub Pages 完整網址
  site: 'https://weilinlai719.github.io',
  
  // 2. 你的專案名稱 (儲存庫名稱)，開頭一定要有斜線
  // 這樣生成的連結才會是 /earth-science-explore/year/2015
  base: '/earth-science-explore',

  // 3. 整合工具 (依據你的 package.json，如果只剩 tailwind 就留這個)
  integrations: [tailwind()],

  // 4. 輸出設定 (GitHub Pages 是靜態網站)
  output: 'static',
  
  // 如果你的資料夾結構比較深，可以開啟這個確保斜線一致
  build: {
    format: 'directory'
  }
});