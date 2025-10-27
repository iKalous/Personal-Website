
# 个人网站

这是一个使用 Next.js 构建的个人主页网站。

## 如何修改个人信息

编辑 `src/data/profile.json` 文件来更新：
- 头像路径
- 个性签名
- 个人简介
- 联系方式链接
- 友情链接（可增删）

## 本地开发

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 在浏览器打开 http://localhost:3000

## 部署到 Vercel

### 方法一：通过 GitHub（推荐）

1. 将代码推送到 GitHub 仓库
2. 访问 https://vercel.com
3. 点击 "Import Project"
4. 选择你的 GitHub 仓库
5. 点击 "Deploy" - Vercel 会自动检测 Next.js 项目并部署

### 方法二：使用 Vercel CLI

1. 安装 Vercel CLI：
```bash
npm install -g vercel
```

2. 在项目目录运行：
```bash
vercel
```

3. 按照提示完成部署

## 更新头像

将你的头像图片命名为 `avatar.jpg` 并放在 `public` 文件夹中，或者修改 `profile.json` 中的 `avatar` 路径。
=======
# Personal-Website

