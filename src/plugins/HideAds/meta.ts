import type { SettingsSchema } from '../../shared/settings.ts';

export const id = 'HideAds';
export const pluginName = 'Hide Ads';
export const description =
  'Hide the Upgrade item, the 90-day history warning, and locked PRO features.';
export const defaultEnabled = true;

export const settings = {} as const satisfies SettingsSchema;
