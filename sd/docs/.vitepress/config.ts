import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({

    // https://vitepress.vuejs.org/config/app-configs#title
    title: 'JavaScript',
    themeConfig:{
        
        sidebar:[
            {
                text: 'Variables',
                items: [
                    { text: 'Var', link: '/variables/variables.md' },
                    { text: 'Let', link: '/variables/let.md' },
                    { text: 'Const', link: '/variables/const.md' },
                    { text: 'Conclución', link: '/variables/conclucion.md' },
                ]
            },
            {
                text:"Operadores Logicos",
                items:[
                    { text: 'Operadores Logicos', link: '/operadoresLogicos/index.md' },
                    { text: 'Conclución', link: '/operadores_logicos/conclucion.md' },
                ]
            }
        ]
    }
})
