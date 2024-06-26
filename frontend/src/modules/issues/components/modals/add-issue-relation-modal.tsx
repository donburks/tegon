/** Copyright (c) 2024, Tegon, all rights reserved. **/

import { observer } from 'mobx-react-lite';
import React from 'react';

import type { IssueRelationEnum } from 'common/types/issue-relation';

import {
  CommandDialog,
  CommandInput,
  CommandList,
} from 'components/ui/command';

import { ModalIssues } from './modal-issues';

interface ParentOfModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: IssueRelationEnum;
}

export const AddIssueRelationModal = observer(
  ({ isOpen, onClose, type }: ParentOfModalProps) => {
    const [value, setValue] = React.useState('');

    return (
      <CommandDialog
        open={isOpen}
        onOpenChange={(value: boolean) => {
          if (!value) {
            onClose();
          }
        }}
        commandProps={{
          shouldFilter: false,
        }}
      >
        <CommandInput
          placeholder="Search for issue..."
          onValueChange={(value: string) => setValue(value)}
        />
        <CommandList>
          <ModalIssues value={value} onClose={onClose} type={type} />
        </CommandList>
      </CommandDialog>
    );
  },
);
