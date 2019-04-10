import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import Card from '../../components/Card';
import Home from '../../components/Home';

storiesOf('Button', module)
    .add('with text', () => (
        <Button>Hello Button</Button>
    ))
    .add('Card', () => (
        <Card text="LeoSL" link="https://www.google.com" />
    ))
    .add('Home', () => (
        <Home />
    ))
    .add('with emoji', () => (
        <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
    ));   