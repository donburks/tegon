/** Copyright (c) 2024, Tegon, all rights reserved. **/

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import type { TeamType } from 'common/types/team';

import { Button } from 'components/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from 'components/ui/form';
import { Input } from 'components/ui/input';
import { Separator } from 'components/ui/separator';
import { useToast } from 'components/ui/use-toast';
import { useCurrentWorkspace } from 'hooks/workspace';

import { useCreateTeamMutation } from 'services/team';

export const CreateNewTeamSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Team name must be atleast 2 characters',
    })
    .max(50),
  identifier: z.string().max(3),
});

export function CreateNewTeam() {
  const form = useForm<z.infer<typeof CreateNewTeamSchema>>({
    resolver: zodResolver(CreateNewTeamSchema),
    defaultValues: {
      name: '',
      identifier: '',
    },
  });
  const { toast } = useToast();

  const workspace = useCurrentWorkspace();
  const { mutate: createTeam } = useCreateTeamMutation({
    onSuccess: (data: TeamType) => {
      toast({
        title: 'Created!',
        description: `New team ${data.name} is created`,
      });
      form.reset();
    },
  });

  const onSubmit = (values: { name: string; identifier: string }) => {
    createTeam({ ...values, workspaceId: workspace.id });
  };

  return (
    <div>
      <div className="flex flex-col">
        <h2 className="text-2xl"> Create a new team </h2>
        <p className="text-sm text-muted-foreground">
          Create a new team to manage seperate workflows
        </p>
      </div>

      <Separator className="my-4" />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Team name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Engineering" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="identifier"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Team identifier</FormLabel>
                <FormDescription>
                  This is used as the identifier (e.g ENG-123) for all issues of
                  the team.
                </FormDescription>

                <FormControl>
                  <Input placeholder="e.g. ENG" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end items-center">
            <Button type="submit" isLoading={form.formState.isSubmitting}>
              Create
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
