import * as React from 'react';

import { Radio } from 'src/components/Radio/Radio';
import { RenderGuard } from 'src/components/RenderGuard';
import { TableCell } from 'src/components/TableCell';
import { TableRow } from 'src/components/TableRow';
import { Typography } from 'src/components/Typography';

import {
  StyledDetailsButton,
  StyledLabel,
  StyledSelectionButtonGrid,
  StyledSelectionDetailsGrid,
  StyledSelectionGrid,
  StyledTableCell,
  StyledTypography,
  StyledUsernameLabel,
} from '../CommonStackScript.styles';

interface Props {
  checked?: boolean;
  deploymentsActive: number;
  description: string;
  disabled?: boolean;
  disabledCheckedSelect?: boolean;
  label: string;
  onSelect?: (e: React.ChangeEvent<HTMLElement>, value: boolean) => void;
  openStackScriptDetailsDialog: (stackscriptId: number) => void;
  stackScriptID: number;
  stackScriptUsername: string;
  updated: string;
}

export class StackScriptSelectionRow extends React.Component<Props, {}> {
  render() {
    const {
      checked,
      description,
      disabled,
      disabledCheckedSelect,
      label,
      onSelect,
      openStackScriptDetailsDialog,
      stackScriptID,
      stackScriptUsername,
    } = this.props;

    const renderLabel = () => {
      const openDialog = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        openStackScriptDetailsDialog(stackScriptID);
      };
      return (
        <StyledSelectionGrid alignItems="center" container>
          <StyledSelectionDetailsGrid>
            <Typography variant="h3">
              {stackScriptUsername && (
                <StyledUsernameLabel htmlFor={`${stackScriptID}`}>
                  {stackScriptUsername} /&nbsp;
                </StyledUsernameLabel>
              )}
              <StyledLabel htmlFor={`${stackScriptID}`}>{label}</StyledLabel>
            </Typography>
            {description && (
              <StyledTypography variant="body1">{description}</StyledTypography>
            )}
          </StyledSelectionDetailsGrid>
          <StyledSelectionButtonGrid>
            <StyledDetailsButton
              buttonType="secondary"
              compactX
              onClick={openDialog}
            >
              Show Details
            </StyledDetailsButton>
          </StyledSelectionButtonGrid>
        </StyledSelectionGrid>
      );
    };

    return (
      <TableRow data-qa-table-row={label}>
        <TableCell>
          <Radio
            checked={!disabled && checked}
            disabled={disabledCheckedSelect || disabled}
            id={`${stackScriptID}`}
            onChange={onSelect}
          />
        </TableCell>
        <StyledTableCell data-qa-stackscript-title>
          {renderLabel()}
        </StyledTableCell>
      </TableRow>
    );
  }
}

export default RenderGuard(StackScriptSelectionRow);
