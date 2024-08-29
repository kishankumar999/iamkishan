import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kishan Kumar",
  description: "I’m Kishan Kumar, a skilled front-end developer with a focus on building responsive, user-friendly websites and applications. Specializing in Vue.js, I create dynamic, interactive interfaces that enhance user experience. From custom web solutions to seamless integrations, I deliver clean, efficient code to bring your digital projects to life. Let's work together to create something amazing!",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
