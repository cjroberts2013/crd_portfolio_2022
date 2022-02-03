module.exports = {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    colors: {
      'primary': '#95bec9',
      'secondary': '#eb594c',
      'white': '#ffffff',
      'black': '#000',
      'gray': "#333",
      'gray-50': '#f9fafb',
      'gray-100': '#f3f4f6',
      'gray-200': '#e5e7eb',
      'gray-400': '#9ca3af',
      'gray-500': '#6b7280',
      'gray-600': '#4b5563',
      'gray-900': '#111827'
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
