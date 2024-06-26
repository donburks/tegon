/** Copyright (c) 2024, Tegon, all rights reserved. **/

import { RiGithubFill, RiLink } from '@remixicon/react';
import ReactTimeAgo from 'react-time-ago';

import { getTailwindColor } from 'common/color-utils';
import { cn } from 'common/lib/utils';
import {
  Integration,
  LinkedSlackMessageType,
  type LinkedIssueType,
} from 'common/types/linked-issue';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  getInitials,
} from 'components/ui/avatar';
import { useUsersData } from 'hooks/users';
import { SentryIcon, SlackIcon } from 'icons';

import type { User } from 'store/user-context';

import { getUserDetails } from './user-activity-utils';

interface LinkedIssueActivityProps {
  linkedIssue: LinkedIssueType;
}

export function LinkedIssueActivity({ linkedIssue }: LinkedIssueActivityProps) {
  const { usersData, isLoading } = useUsersData();

  function getUserData(userId: string) {
    return usersData.find((userData: User) => userData.id === userId);
  }

  if (isLoading) {
    return null;
  }

  const sourceData = JSON.parse(linkedIssue.sourceData);
  const sourceMetaData = JSON.parse(linkedIssue.source);

  function getIcon() {
    if (sourceMetaData) {
      if (sourceMetaData.type === Integration.Slack) {
        return <SlackIcon size={16} className="text-foreground" />;
      }

      if (sourceMetaData.type === Integration.Github) {
        return <RiGithubFill size={18} className="text-foreground" />;
      }

      if (sourceMetaData.type === Integration.Sentry) {
        return <SentryIcon size={18} className="text-foreground" />;
      }
    }

    return <RiLink size={18} className="text-foreground" />;
  }

  function getTitle() {
    if (sourceMetaData) {
      if (sourceMetaData.type === Integration.Slack) {
        return (
          <>
            {getIcon()}
            <span className="mx-[2px]">
              {sourceMetaData.subType === LinkedSlackMessageType.Thread
                ? 'Thread'
                : 'Message'}
            </span>
            from slack
          </>
        );
      }

      if (sourceMetaData.type === Integration.Github) {
        return (
          <>
            {getIcon()} {sourceData.title}
          </>
        );
      }
    }
    return <>{sourceData?.title}</>;
  }

  return (
    <div className="flex items-center text-xs text-muted-foreground">
      {linkedIssue.createdById ? (
        <Avatar className="h-[15px] w-[20px] mr-4 text-foreground">
          <AvatarImage />
          <AvatarFallback
            className={cn(
              'text-[0.55rem] rounded-sm',
              getTailwindColor(getUserData(linkedIssue.createdById).username),
            )}
          >
            {getInitials(getUserData(linkedIssue.createdById).fullname)}
          </AvatarFallback>
        </Avatar>
      ) : (
        <div className="h-[15px] w-[20px] flex items-center justify-center mr-4">
          {getIcon()}
        </div>
      )}

      <div className="flex items-center">
        <span className="text-foreground mr-2 font-medium">
          {
            getUserDetails(sourceMetaData, getUserData(linkedIssue.createdById))
              .username
          }
        </span>
        linked
        <a
          href={linkedIssue.url}
          target="_blank"
          className="flex items-center gap-1 ml-2 mr-1 text-foreground"
        >
          {getIcon()}
          {getTitle()}
        </a>
      </div>
      <div className="mx-1">-</div>

      <div>
        <ReactTimeAgo date={new Date(linkedIssue.updatedAt)} />
      </div>
    </div>
  );
}
