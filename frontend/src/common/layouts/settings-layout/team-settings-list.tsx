/** Copyright (c) 2024, Tegon, all rights reserved. **/

import { RiAddLine, RiArrowRightSFill } from '@remixicon/react';
import { observer } from 'mobx-react-lite';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { cn } from 'common/lib/utils';
import type { TeamType } from 'common/types/team';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'components/ui/accordion';
import { buttonVariants } from 'components/ui/button';
import { TeamLine } from 'icons';

import { useContextStore } from 'store/global-context-provider';
import { UserContext } from 'store/user-context';

import { TEAM_LINKS } from './settings-layout-constants';

export const TeamSettingsList = observer(() => {
  const currentUser = React.useContext(UserContext);
  const { teamsStore, workspaceStore } = useContextStore();

  const { query } = useRouter();
  const { workspaceSlug, settingsSection, teamIdentifier } = query;
  const teamAccessList = workspaceStore.getUserData(currentUser.id).teamIds;
  const teams = teamsStore.teams.filter((team: TeamType) =>
    teamAccessList.includes(team.id),
  );

  return (
    <div className="px-4 py-3">
      <div className="flex flex-col items-start justify-start w-full">
        <div className="flex items-center mb-2">
          <TeamLine size={18} className="text-muted-foreground" />
          <div className="text-muted-foreground text-sm ml-4">Teams</div>
        </div>

        <div className="flex flex-col w-full">
          <Accordion
            type="single"
            collapsible
            defaultValue={teams[0].identifier}
            className="w-full text-slate-700 dark:text-slate-300 mt-0 mb-2"
          >
            {teams.map((team: TeamType) => (
              <AccordionItem key={team.identifier} value={team.identifier}>
                <AccordionTrigger className="text-sm py-1 flex justify-between [&[data-state=open]>div>div>svg]:rotate-90 hover:bg-active hover:text-slate-800 dark:hover:text-slate-50 rounded-md">
                  <div className="w-full justify-start flex items-center">
                    <div className="flex justify-start items-center text-sm">
                      <RiArrowRightSFill className="arrow-right-icon mx-2 h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                      {team.name}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-9 flex flex-col justify-center items-start w-full">
                  {TEAM_LINKS.map((item) => (
                    <Link
                      key={item.href}
                      href={`/${workspaceSlug}/settings/teams/${team.identifier}/${item.href}`}
                      className={cn(
                        buttonVariants({ variant: 'ghost', size: 'sm' }),

                        'justify-start text-sm w-full px-2 !text-muted-foreground mt-1',
                        team.identifier === teamIdentifier &&
                          settingsSection === item.href &&
                          'bg-active',
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <Link
          className={cn(
            buttonVariants({ variant: 'ghost', size: 'sm' }),
            'flex items-center justify-start mb-2 w-full text',
            settingsSection === 'new_team' && 'bg-active',
          )}
          href={`/${workspaceSlug}/settings/new_team`}
        >
          <RiAddLine size={18} className="text-muted-foreground" />
          <div className="text-muted-foreground text-sm ml-3">Add Team</div>
        </Link>
      </div>
    </div>
  );
});
