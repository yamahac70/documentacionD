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
                text:"Operadores",
                items:[
                    { text: 'Tipos de datos', link: '/operadoresLogicos/tiposDatos.md' },
                    { text: 'Operadores Aritmeticos', link: '/operadoresLogicos/aritmeticos.md' },
                    { text: 'Operadores de Asignación', link: '/operadoresLogicos/asignacion.md' },
                    { text: 'Operadores de Cadenas|String', link: '/operadoresLogicos/cadenas.md' },
                    { text: 'Operadores de Comparación', link: '/operadoresLogicos/comparacion.md' },
                    { text: 'Operadores Especiales', link: '/operadoresLogicos/especiales.md' },
                    { text: 'Tipo de datos de objeto en JavaScript', link: '/operadoresLogicos/objetos.md' },
                    { text: 'Operadores Logicos', link: '/operadoresLogicos/index.md' },
                    { text: 'Conclución', link: '/operadoresLogicos/conclucion.md' },
                ]
            }
        ]
    }
})
