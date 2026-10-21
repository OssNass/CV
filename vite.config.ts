import { defineConfig } from 'vite'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
    plugins: [
        Icons({
            alias: {
                // Redirects the broken logos:twitter icon to the updated logos:x icon
                'logos:twitter': 'logos:x',
                // Alternatively, you can use an icon from another pack if you prefer, e.g.:
                // 'logos:twitter': 'mdi:twitter'
            }
        })
    ]
})
