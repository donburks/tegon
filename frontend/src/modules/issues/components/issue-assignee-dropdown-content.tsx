/** Copyright (c) 2024, Tegon, all rights reserved. **/

import { getTailwindColor } from 'common/color-utils';
import { cn } from 'common/lib/utils';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  getInitials,
} from 'components/ui/avatar';
import { Checkbox } from 'components/ui/checkbox';
import { Command, CommandGroup, CommandInput } from 'components/ui/command';
import { useScope } from 'hooks';
import { AssigneeLine } from 'icons';

import type { User } from 'store/user-context';

import { DropdownItem } from './dropdown-item';

interface IssueAssigneeDropdownContentProps {
  onChange?: (assigneeId: string | string[]) => void;
  usersData: User[];
  onClose: () => void;
  multiple?: boolean;
  value: string | string[];
}

export function IssueAssigneeDropdownContent({
  onChange,
  usersData,
  onClose,
  multiple = false,
  value,
}: IssueAssigneeDropdownContentProps) {
  useScope('command');

  function getUserData(userId: string) {
    return usersData.find((userData: User) => userData.id === userId);
  }

  const onValueChange = (checked: boolean, id: string) => {
    if (checked && !value.includes(id)) {
      onChange && onChange([...value, id]);
    }

    if (!checked && value.includes(id)) {
      const newIds = [...value];
      const indexToDelete = newIds.indexOf(id);

      newIds.splice(indexToDelete, 1);
      onChange && onChange(newIds);
    }
  };

  return (
    <Command>
      <CommandInput placeholder="Set assignee..." autoFocus />
      <CommandGroup>
        <DropdownItem
          id="no-user"
          value="No Assignee"
          index={0}
          onSelect={() => {
            onChange && onChange(null);
            onClose();
          }}
        >
          <div className="flex gap-2 items-center">
            {multiple && (
              <Checkbox
                id="no-user"
                checked={value.includes('no-user')}
                onCheckedChange={(value: boolean) =>
                  onValueChange(value, 'no-user')
                }
              />
            )}
            <div className="flex grow">
              <div className="h-[20px] w-[30px] flex items-center justify-center">
                <AssigneeLine
                  size={16}
                  className="text-muted-foreground mr-2"
                />
              </div>
              No Assignee
            </div>
          </div>
        </DropdownItem>
        {usersData &&
          usersData.map((user: User, index: number) => {
            const userData = getUserData(user.id);

            return (
              <DropdownItem
                key={user.id}
                id={user.id}
                value={user.fullname}
                index={index + 1}
                onSelect={(currentValue: string) => {
                  if (!multiple) {
                    onChange && onChange(currentValue);
                    onClose();
                  }
                }}
              >
                <div className="flex gap-2 items-center">
                  {multiple && (
                    <Checkbox
                      id={userData.fullname}
                      checked={value.includes(user.id)}
                      onCheckedChange={(value: boolean) => {
                        onValueChange(value, user.id);
                      }}
                    />
                  )}
                  <label htmlFor={user.fullname} className="flex grow">
                    <Avatar className="h-[20px] w-[30px]">
                      <AvatarImage />
                      <AvatarFallback
                        className={cn(
                          'text-[0.55rem] rounded-sm mr-2',
                          getTailwindColor(userData.username),
                        )}
                      >
                        {getInitials(userData.fullname)}
                      </AvatarFallback>
                    </Avatar>
                    {userData.fullname}
                  </label>
                </div>
              </DropdownItem>
            );
          })}
      </CommandGroup>
    </Command>
  );
}
