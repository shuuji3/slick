import type { SettingsSchema } from '../../shared/settings.ts';

export const id = 'ShutUpSlackAI';
export const pluginName = 'Shut Up Slack AI';
export const description =
  'Hide Slack AI surfaces: the Slackbot AI button next to search, the Slackbot AI sidebar entry, and any Slackbot-labelled element.';
export const defaultEnabled = true;

export const settings = {} as const satisfies SettingsSchema;
