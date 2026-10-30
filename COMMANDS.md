# 指令速查

這個專案用過的所有指令，依用途分類。除非另外註明，指令都在專案根目錄 `program-pages/` 執行。

## 1. 開發與建置

| 指令 | 用途 |
| --- | --- |
| `npm install` | 安裝套件（clone 下來後先跑一次） |
| `npm run dev` | 本機開發伺服器，網址是 http://localhost:5178 |
| `npm run build` | 型別檢查加上正式建置，輸出到 `dist/` |
| `npm run preview` | 在本機預覽 `dist/` 的建置結果 |
| `npx tsc --noEmit -p .` | 只做型別檢查，不輸出檔案 |

## 2. 網址參數

| 網址 | 顯示 |
| --- | --- |
| `/` | 首頁（hub），列出所有 programme |
| `?program=api-broker` | API Broker（基準頁） |
| `?program=affiliate` | Affiliate |
| `?program=market-maker` | Market Maker |
| `?program=otc` | OTC |
| `…&review` | 顯示所有待業務確認的標記和原因 |

線上網址：https://andrestim.github.io/program-pages/ ，存取碼預設 `8888`。

## 3. 設計品質檢查（Impeccable）

```bash
sh ~/.claude/skills/impeccable/scripts/impeccable detect --json src index.html
```
用 Impeccable 偵測器掃描設計規則；輸出 `[]` 表示沒有問題。Windows 沒有 `sh` 時，改用同一個資料夾裡的 `impeccable.cmd`。

```bash
sh ~/.claude/skills/impeccable/scripts/impeccable context
```
載入 PRODUCT.md、DESIGN.md 等專案設計脈絡。每個 session 執行一次即可。

## 4. 在 Claude Code 裡叫用的 skill（斜線指令）

| 指令 | 用途 |
| --- | --- |
| `/impeccable polish` | 上線前的收尾：對齊、狀態、響應式、焦點、圖片 |
| `/impeccable critique` | 設計評論與評分（Phase 1 美術方向用的就是這個） |
| `/impeccable bolder` | 把平淡的段落拉高表現力 |
| `/emil-design-eng review-animations` | 用 Before/After 表格審查動態 |
| `/improve-animations` | 稽核全站動態並產出改善計畫 |
| `/web-design-guidelines` | 對照 Web Interface Guidelines 審查 UI |
| `/frontend-design` | 美術方向與版面構圖（避免模板化） |
| `/apple-design` | 互動手感與質感（可中斷動態、按壓回饋） |

## 5. 圖片處理

所有圖片都要調成同一套色調：黑點對齊頁面的 `#0b0c0e`，輸出 WebP。

主視覺（橫式）：
```bash
python scripts/grade_images.py <原圖.png> public/assets/<頁面> hero --crush <背景亮度> --widths 1000,1536
```

主視覺的手機直式裁切（範圍是寬度的比例）：
```bash
python scripts/grade_images.py <原圖.png> public/assets/<頁面> hero-portrait --crush <背景亮度> --crop 0.30,0,0.94,1 --widths 800,980
```

4:3 小圖（Broker 的 vignette 用這組裁切）：
```bash
python scripts/grade_images.py <原圖.png> public/assets/<頁面>/benefits <名稱> --crush <背景亮度> --crop 0.391,0.161,0.990,0.835 --widths 720,1080
```

主體是完整物件、擺在虛空裡時，左側補同色背景，讓物件避開標題：
```bash
python scripts/pad_hero.py <原圖.png> public/assets/<頁面> --crush <背景亮度> --scale 1.45 --shift 0.85
```

- `--crush` 填原圖背景最亮的灰階值（通常 8–14），讓背景剛好壓到頁面的黑。
- 段落配圖（section figure）的裁切範圍和處理方式記在各頁的 `public/assets/<頁面>/CREDITS.md`。

## 6. 請 Codex 生成圖片

需求放在 `asset-requests/v2/`：先看 `README.md`，再看 `manifest.json` 和 `prompts/`。

貼給 Codex 的指令要點：
- 逐字使用每張圖的 prompt 檔，並附上 `references` 裡的參考圖；
- 生成圖可以先存在生圖工具的預設位置，再原檔複製到 `v2/output/<id>.png`；
- 寫一份 `v2/output/LOG.md` 生成紀錄；
- 不能動專案裡其他任何檔案。

## 7. 更換存取碼

```bash
python -c "import hashlib;print(hashlib.sha256(b'新密碼').hexdigest())"
```
把輸出的值貼到 `src/site/Gate.tsx` 的 `ACCESS_CODE_SHA256`，再推上 GitHub。換了之後，已解鎖的瀏覽器會重新上鎖。

## 8. Git 與 GitHub 部署

工作機取得專案（公開 repo，不用登入）：
```bash
git clone https://github.com/andrestim/program-pages.git
```

修改後推上去；推到 `main` 會自動部署：
```bash
git add -A
git commit -m "說明"
git push
```

查看部署狀態：
```bash
gh run list --limit 3
```

手動重新部署：
```bash
gh workflow run deploy.yml
```

等某一次部署跑完：
```bash
gh run watch <run-id> --exit-status
```

初次建立時用過（不需要再跑）：
```bash
gh repo create andrestim/program-pages --public --source . --remote origin --push
gh api -X POST repos/andrestim/program-pages/pages -f build_type=workflow
```

下架：
- 只關網站：到 GitHub repo 的 Settings → Pages 停用。
- 連 repo 一起永久刪除（無法復原）：
  ```bash
  gh repo delete andrestim/program-pages --yes
  ```

`gh` 找不到時，改用完整路徑：`& "C:\Program Files\GitHub CLI\gh.exe"`（PowerShell）。

## 9. 舊方式：打包 zip（已由 git clone 取代）

在上一層資料夾 `Visual Exploration/` 執行：
```bash
tar -a -c -f program-pages/program-pages.zip --exclude=program-pages/node_modules --exclude=program-pages/dist --exclude=program-pages/tsconfig.tsbuildinfo --exclude=program-pages/program-pages.zip program-pages
```
在 Mac 上解壓縮後，執行 `npm install`，再執行 `npm run dev`。
