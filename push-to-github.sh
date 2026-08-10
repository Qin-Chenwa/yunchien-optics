#!/usr/bin/env bash
# 一鍵把本專案推上 GitHub
# 用法:先在 GitHub 網頁建立一個「空的」repo(不要勾 README / .gitignore),
#      再於本資料夾執行:  bash push-to-github.sh
set -e

GH_USER="Qin-Chenwa"
REPO="yunchien-optics"
REMOTE="https://github.com/${GH_USER}/${REPO}.git"

echo "==> 初始化 git"
git init -q
git add -A
git -c user.name="${GH_USER}" commit -q -m "feat: 云謙整合光電型錄與詢價網站(Next.js, 中英雙語)" || true

echo "==> 設定 main 分支與遠端"
git branch -M main
git remote remove origin 2>/dev/null || true
git remote add origin "${REMOTE}"

echo "==> 推送到 ${REMOTE}"
git push -u origin main

echo "✅ 完成!開啟 https://github.com/${GH_USER}/${REPO}"
