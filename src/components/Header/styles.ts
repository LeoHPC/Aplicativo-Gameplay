import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 55
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontFamily: theme.fonts.title700,
        fontSize: 20,
        color: theme.colors.heading
    }
});