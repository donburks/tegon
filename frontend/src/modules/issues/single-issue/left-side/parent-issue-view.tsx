/** Copyright (c) 2024, Tegon, all rights reserved. **/

import Link from 'next/link';
import { useParams } from 'next/navigation';

import { WORKFLOW_CATEGORY_ICONS } from 'modules/team-settings/workflow/workflow-item';

import { cn } from 'common/lib/utils';
import type { IssueType } from 'common/types/issue';
import type { WorkflowType } from 'common/types/team';

import { buttonVariants } from 'components/ui/button';
import { useCurrentTeam } from 'hooks/teams';
import { useTeamWorkflows } from 'hooks/workflows';

interface ParentIssueViewProps {
  issue: IssueType;
}

export function ParentIssueView({ issue }: ParentIssueViewProps) {
  const team = useCurrentTeam();
  const { workspaceSlug } = useParams();
  const workflows = useTeamWorkflows(team.identifier);

  const workflow = workflows.find(
    (wk: WorkflowType) => wk.id === issue.parent.stateId,
  );

  const CategoryIcon = WORKFLOW_CATEGORY_ICONS[workflow.name];

  return (
    <Link
      className={cn(
        'cursor-pointer max-w-[600px] mb-1 border-1 bg-white backdrop-blur-md dark:bg-slate-700/20  p-2 rounded-md flex gap-2 items-center text-sm',
        buttonVariants({ variant: 'outline' }),
      )}
      href={`/${workspaceSlug}/issue/${team.identifier}-${issue.parent.number}`}
    >
      <CategoryIcon
        size={16}
        className="text-muted-foreground"
        color={workflow.color}
      />
      <div className="text-muted-foreground">
        {team.identifier}-{issue.parent.number}
      </div>

      <div className="font-medium max-w-[300px]">
        <div className="truncate">{issue.parent.title}</div>
      </div>
    </Link>
  );
}
