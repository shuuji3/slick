// Hide Slack's AI surfaces with CSS. The button selector is verified against
// slack-debloat's catalog; the sidebar row hides the whole Slackbot entry,
// which is where Slackbot AI lives. Slack renames its DOM occasionally, so
// these are best-effort and may need re-verification after an update.

import { SlickPlugin } from '$slick'
import * as meta from './meta.ts'

const AI_CSS = `
  [data-qa="slackbot-ai-button"],
  .p-ia4_top_nav__right_container--start > :has([data-qa="slackbot-ai-button"]),
  [data-qa="virtual-list-item"]:has([data-qa^="channel_sidebar_pslackbot"]),
  [aria-label*="Slackbot"],
  [data-qa="upgrades-kit-upgrade-button"]
  { display: none !important; }
`;

export default class ShutUpSlackAI extends SlickPlugin<typeof meta.settings> {
  static readonly id = meta.id;
  static readonly pluginName = meta.pluginName;
  static readonly description = meta.description;
  static readonly defaultEnabled = meta.defaultEnabled;
  static readonly settings = meta.settings;

  start() {
    this.api.setStyle(AI_CSS, 'hide-ai');
    this.log('AI surfaces hidden');
  }
}
