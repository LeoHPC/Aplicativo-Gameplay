declare module "*.svg" {
    import Reacr from 'react';
    import { Rect, SvgProps } from 'react-native-svg';
    const content: React.FC<SvgProps>;
    export default content;
}