/** Copyright (c) 2024, Tegon, all rights reserved. **/

import { RiArrowLeftSLine } from '@remixicon/react';
import { useRouter } from 'next/router';

import { Button } from 'components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from 'components/ui/sheet';
import { SidebarLine } from 'icons';

import { SidebarNav } from './sidebar-nav';

export function SideDrawer() {
  const { query, replace } = useRouter();

  return (
    <Sheet>
      <div className="block md:hidden">
        <header className="flex px-2 py-3 w-full border-b items-center">
          <SheetTrigger asChild>
            <Button variant="ghost">
              <SidebarLine size={20} />
            </Button>
          </SheetTrigger>

          <Button
            variant="ghost"
            size="sm"
            className="text-sm flex justify-start px-1 pr-2 text-foreground"
            onClick={() => {
              replace(`/${query.workspaceSlug}`);
            }}
          >
            <RiArrowLeftSLine
              className="mr-2 text-muted-foreground"
              size={20}
            />
            Settings
          </Button>
        </header>

        <SheetContent side="left" className="p-0">
          <SidebarNav />
        </SheetContent>
      </div>
    </Sheet>
  );
}
