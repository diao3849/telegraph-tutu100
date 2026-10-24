/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 关键配置：启用静态 HTML 导出
  images: {
    unoptimized: true, // 建议添加：静态导出不支持 Next.js 图片优化
  },
};

module.exports = nextConfig;