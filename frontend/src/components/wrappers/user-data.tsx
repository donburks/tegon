/** Copyright (c) 2024, Tegon, all rights reserved. **/

import * as React from 'react';

import { useGetUserQuery } from 'services/users/get-user';

import { UserContext } from 'store/user_context';

import { Loader } from '../ui/loader';

interface Props {
  children: React.ReactElement;
}

export function UserDataWrapper(props: Props): React.ReactElement {
  const { children } = props;
  const { data, error: isError, isLoading } = useGetUserQuery();

  if (!isLoading && !isError) {
    return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
  }

  return <Loader />;
}