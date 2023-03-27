import presetWeapp from 'unocss-preset-weapp';
import { transformerAttributify, transformerClass } from 'unocss-preset-weapp/transformer';

export default {
    presets: [
        // https://github.com/MellowCo/unocss-preset-weapp
        presetWeapp()
    ],
    shortcuts: {
        'wh-full': 'w-full h-full',
        'flex-wrap': 'flex flex-wrap',
        'flex-c': 'flex justify-center items-center', // 水平垂直居中
        'flex-ac': 'flex justify-around items-center',
        'flex-bc': 'flex justify-between items-center',
        'single-text-ellipsis': 'text-ellipsis overflow-hidden whitespace-nowrap'
    },

    transformers: [
        // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
        transformerAttributify(),

        // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
        transformerClass()
    ]
};
