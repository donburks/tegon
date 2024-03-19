/** Copyright (c) 2024, Tegon, all rights reserved. **/

import {
  IntegrationAccount,
  IntegrationDefinition,
  IntegrationName,
  Workspace,
} from '@prisma/client';
import { IsObject, IsOptional, IsString } from 'class-validator';

import { WorkspaceIdRequestBody } from 'modules/workspaces/workspaces.interface';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Config = Record<string, any>;

export interface GithubRepositories {
  id: string;
  fulllName: string;
  name?: string;
  private?: boolean;
  nodeId?: string;
}

export interface GithubRepositoryMappings {
  teamId: string;
  default: boolean;
  githubRepoId: string;
  bidirectional: boolean;
  githubRepoFullName: string;
}

export interface GithubSettings {
  orgLogin: string;
  orgAvatarURL: string;
  repositories: GithubRepositories[];
  repositoryMappings?: GithubRepositoryMappings[];
}

export interface GithubPersonalSettings {
  login: string;
}

export interface Settings {
  [IntegrationName.Github]?: GithubSettings;
  [IntegrationName.GithubPersonal]?: GithubPersonalSettings;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [IntegrationName.Slack]?: Record<string, any>;
}

export class IntegrationAccountRequestIdBody {
  /**
   * Unique identifier for Integration Account
   */
  @IsString()
  integrationAccountId: string;
}

export class IntegrationAccountRequestBody extends WorkspaceIdRequestBody {
  /**
   * Unique identifier for Integration Account
   */
  @IsString()
  integrationAccountId: string;
}

export class IntegrationAccountsRequestBody extends WorkspaceIdRequestBody {}

export class CreateIntegrationAccountBody extends WorkspaceIdRequestBody {
  /**
   * Unique identifier for Integration Definition
   */
  @IsString()
  integrationDefinitionId: string;

  /**
   * All properties needed by the integration to talk to their APIs
   */
  @IsObject()
  config: Config;

  /**
   * A unique identifier can be passed to identify a group of Accounts.
   * Example: You can pass user_id or random hash.
   */
  @IsString()
  @IsOptional()
  accountIdentifier: string;

  @IsString()
  @IsOptional()
  accountId: string;

  @IsObject()
  @IsOptional()
  settings: Settings;

  @IsString()
  @IsOptional()
  userId: string;
}

export class UpdateIntegrationAccountBody {
  /**
   * All properties needed by the integration to talk to their APIs
   */
  @IsOptional()
  @IsObject()
  config: Config;

  @IsString()
  @IsOptional()
  accountIdentifier: string;

  @IsString()
  @IsOptional()
  accountId: string;

  @IsObject()
  @IsOptional()
  settings: Settings;

  @IsString()
  @IsOptional()
  userId: string;
}

export interface IntegrationAccountWithRelations extends IntegrationAccount {
  workspace: Workspace;
  integrationDefinition: IntegrationDefinition;
}