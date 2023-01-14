import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import {SliderMusic}  from './SliderMusic'
const SliderMusicMeta: ComponentMeta<typeof SliderMusic> = {
    title: 'SliderMusic Component',
    component: SliderMusic,
    argTypes:{

    },
    args: {
        durationMax : 33,
        title : "test",
        author : "hi"
    }
}
export default SliderMusicMeta;

type SliderMusicStory = ComponentStory<typeof SliderMusic>
export const Basic : SliderMusicStory = (args) => <SliderMusic {...args} />