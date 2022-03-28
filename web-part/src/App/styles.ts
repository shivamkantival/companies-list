import { createUseStyles } from 'react-jss';
import StyleTheme from 'typeDefs/styleTheme';
import { flexContainer } from 'utils/styleMixins/flex';

export default createUseStyles<
  'appContainer' | 'appContentContainer',
  unknown,
  StyleTheme
>(({ spacing }) => ({
  appContainer: {
    maxWidth: spacing(278),
    margin: `${spacing(4)} auto`,
    padding: spacing(2),
    borderRadius: spacing(1),
    backgroundColor: 'white',
    minHeight: spacing(100),
    ...flexContainer({ flexDirection: 'column' }),
  },
  appContentContainer: {
    flex: '1 auto',
    ...flexContainer({ flexDirection: 'column', justifyContent: 'center' }),
  },
}));
