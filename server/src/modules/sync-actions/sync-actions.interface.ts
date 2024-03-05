/** Copyright (c) 2024, Tegon, all rights reserved. **/

import { ModelName } from '@prisma/client';
import { IsEnum, IsString } from 'class-validator';

export class BootstrapRequestQuery {
  @IsString()
  workspaceId: string;

  @IsEnum(ModelName)
  modelName: ModelName;
}

export class DeltaRequestQuery {
  @IsString()
  workspaceId: string;

  @IsString()
  modelNames: string;

  @IsString()
  lastSequenceId: string;
}
