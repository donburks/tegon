/** Copyright (c) 2024, Tegon, all rights reserved. **/

import { useRouter } from 'next/router';
import { useHotkeys } from 'react-hotkeys-hook';
import { Key } from 'ts-key-enum';

import { AppLayout } from 'common/layouts/app-layout';
import { SCOPES } from 'common/scopes';

import { useScope } from 'hooks';

import { IssueView } from './issue-view';

export function SingleIssue() {
  useScope(SCOPES.AllIssues);

  const { back } = useRouter();

  useHotkeys(Key.Escape, () => back(), [SCOPES.Global]);

  return <IssueView />;
}

SingleIssue.getLayout = function getLayout(page: React.ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};
