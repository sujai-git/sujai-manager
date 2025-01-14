import { Theme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import * as React from 'react';
import { makeStyles } from 'tss-react/mui';

import { Option } from 'src/components/EnhancedSelect/components/Option';

import type { OptionProps } from 'react-select';

const useStyles = makeStyles()((theme: Theme) => ({
  focused: {
    backgroundColor: theme.palette.primary.main,
    color: theme.tokens.color.Neutrals.White,
  },
  root: {
    padding: theme.spacing(1),
  },
}));

interface EngineOptionProps extends OptionProps<any, any> {
  data: {
    flag: JSX.Element;
    value: string;
  };
}

export const EngineOption = (props: EngineOptionProps) => {
  const { classes, cx } = useStyles();
  const { data, label } = props;

  return (
    <Option
      className={cx({
        [classes.focused]: props.isFocused,
        [classes.root]: true,
      })}
      attrs={{ ['data-qa-engine-select-item']: data.value }}
      value={data.value}
      {...props}
      data-testid={data.value}
    >
      <Grid
        alignItems="center"
        container
        direction="row"
        justifyContent="flex-start"
        spacing={2}
      >
        <Grid className="py0">{data.flag}</Grid>
        <Grid>{label}</Grid>
      </Grid>
    </Option>
  );
};
