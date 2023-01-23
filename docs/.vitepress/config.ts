import {defineConfig, MarkdownOptions} from 'vitepress';
import MermaidExample from "./mermaid-markdown-all";

const allMarkdownTransformers: MarkdownOptions = {
    // the shiki theme to highlight code blocks
    theme: 'github-dark',
    config: async (md) => {
        await MermaidExample(md);
    },
};

// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
    lang: 'en-US',
    title: 'VitePress',
    description: 'Vite & Vue powered static site generator.',
    markdown: allMarkdownTransformers,

    themeConfig: {
        nav: [
            {text: 'Example', link: '/example'},
            {text: 'Preface', link: '/preface'},
            {text: 'Concepts', link: '/concepts'},
            {text: 'Applications', link: '/applications/BFF'},
            {text: 'Idea', link: '/idea'},

            // {
            //   text: 'Dropdown Menu',
            //   items: [
            //     { text: 'Item A', link: '/item-1' },
            //     { text: 'Item B', link: '/item-2' },
            //     { text: 'Item C', link: '/item-3' },
            //   ],
            // },

            // ...
        ],

        sidebar: [
            {
                // text: 'Guide',
                items: [
                    {text: 'Example', link: '/example'},
                    {text: 'Preface', link: '/preface'},
                    {text: 'Concepts', link: '/concepts'},
                    {text: 'Applications', link: '/applications/BFF'},
                    {text: 'Idea', link: '/idea'},
                    // ...
                ],
            },
        ],
    },
});
