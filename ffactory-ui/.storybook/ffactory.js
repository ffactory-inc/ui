import { create } from '@storybook/theming';
import logo from '../src/utils/icons/f_factory_app.png';

export default create({
  base: 'light',

  colorPrimary: '#D2006E',
  colorSecondary: '#0A0832',

  fontBase: '"Open Sans", sans-serif',

  brandTitle: 'Ramen UI Library',
  brandImage: logo,
  brandTarget: '_self',
});
