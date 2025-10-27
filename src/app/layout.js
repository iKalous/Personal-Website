export const metadata = {
  title: '个人主页',
  description: '我的个人网站',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
