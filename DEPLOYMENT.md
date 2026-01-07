# GitHub Pages 部署指南

## ✅ 已完成的配置

1. ✅ Vite 配置已更新（`base: '/'`）
2. ✅ 构建输出到 `dist/` 目录
3. ✅ GitHub Actions 工作流已配置
4. ✅ `.nojekyll` 文件已创建
5. ✅ Tailwind CSS v4 配置完成

## 🚀 部署步骤

### 方法 1：使用 GitHub Actions 自动部署（推荐）

这是最简单的方法，每次 push 到 main 分支时自动构建和部署。

#### 1. 在 GitHub 上配置 Pages

1. 访问你的仓库：https://github.com/SSC-Bench/SSC-Bench.github.io
2. 点击 **Settings**（设置）
3. 在左侧菜单找到 **Pages**
4. 在 **Source** 下拉菜单中选择：**GitHub Actions**
5. 保存

#### 2. 提交并推送代码

```bash
# 回到项目根目录
cd /Users/kero_o/Desktop/宿舍工作/SSC-Bench.github.io

# 添加所有文件
git add .

# 提交
git commit -m "Add React-based SSC-Bench project page"

# 推送到 GitHub（这会触发自动部署）
git push origin main
```

#### 3. 查看部署状态

- 访问仓库的 **Actions** 标签页
- 你会看到一个名为 "Deploy to GitHub Pages" 的工作流正在运行
- 等待几分钟，直到显示绿色对勾 ✓

#### 4. 访问你的网站

部署完成后，你的网站将在以下地址可用：

**https://ssc-bench.github.io/**

---

### 方法 2：手动构建和部署

如果你更喜欢手动控制部署过程：

```bash
# 1. 构建项目
cd react-app
npm run build

# 2. 回到根目录
cd ..

# 3. 提交 dist 文件夹
git add dist/
git commit -m "Build site"
git push origin main

# 4. 在 GitHub Settings > Pages 中选择：
#    Source: Deploy from a branch
#    Branch: main
#    Folder: /dist
```

---

## 📋 部署前检查清单

在部署之前，请确保：

- [ ] **添加 teaser 图片**：`react-app/public/assets/teaser.png`
- [ ] **更新作者信息**：`react-app/src/components/Hero.jsx`
- [ ] **更新论文链接**：arXiv、GitHub、HuggingFace URLs
- [ ] **更新 BibTeX**：添加正确的 arXiv ID
- [ ] **测试本地构建**：`cd react-app && npm run build`

---

## 🔧 故障排除

### 问题 1：GitHub Actions 失败

**解决方法：**
1. 检查 Actions 标签页的错误日志
2. 确保 `react-app/package-lock.json` 已提交
3. 确保 `.github/workflows/deploy.yml` 文件存在

### 问题 2：网站 404 错误

**解决方法：**
1. 确认 GitHub Pages 设置中 Source 选择了 **GitHub Actions**
2. 确认 `vite.config.js` 中 `base: '/'`（已配置）
3. 检查 `.nojekyll` 文件是否存在于根目录

### 问题 3：CSS 样式未加载

**解决方法：**
1. 清除浏览器缓存并刷新
2. 检查浏览器控制台是否有 CORS 错误
3. 确认构建输出中有 CSS 文件：`ls dist/assets/*.css`

### 问题 4：图片未显示

**解决方法：**
1. 确保图片在 `react-app/public/assets/` 目录中
2. 在代码中使用 `/assets/filename.png` 引用（已配置）
3. 重新构建：`cd react-app && npm run build`

---

## 📁 关键文件说明

| 文件 | 用途 |
|------|------|
| `.github/workflows/deploy.yml` | GitHub Actions 自动部署配置 |
| `react-app/vite.config.js` | Vite 构建配置（base path, output） |
| `.nojekyll` | 告诉 GitHub 不使用 Jekyll |
| `dist/` | 构建输出目录（部署文件） |
| `.gitignore` | Git 忽略文件配置 |

---

## 🎯 下一步

1. **添加 teaser 图片**（必需！）
   ```bash
   # 将你的图片复制到正确位置
   cp /path/to/your/teaser.png react-app/public/assets/teaser.png
   ```

2. **自定义内容**（参考 SETUP.md）

3. **本地测试**
   ```bash
   cd react-app
   npm run dev
   # 访问 http://localhost:5173
   ```

4. **部署**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

---

## 📧 需要帮助？

如果遇到问题：
1. 检查 GitHub Actions 日志
2. 查看浏览器控制台错误
3. 确认所有配置文件都已正确设置
4. 确保 Node.js 版本 >= 18

---

**祝部署顺利！🎉**

你的网站将在 https://ssc-bench.github.io/ 上线！
