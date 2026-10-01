// Hide promo items in the workspace menu: the Upgrade entry, the 90-day
// message-history warning, and the divider that follows each. Adjacent
// dividers are removed via the next-sibling combinator so no empty gap is
// left. Selectors come from the live menu DOM; Slack may rename them.

import { SlickPlugin } from '$slick';
import * as meta from './meta.ts';

const UPGRADE = '[data-qa="upgrade-menu-item-wrapper"]';
const HISTORY = '[data-qa="limited_history_counter_menu_item-wrapper"]';
const SUMMARIZE = '[data-qa="channel_ctx_menu_pro_trial_entry_point_summarize-wrapper"]';

const HIDEADS_CSS = `
  ${UPGRADE},
  ${UPGRADE} + .c-menu_separator__li,
  ${HISTORY},
  ${HISTORY} + .c-menu_separator__li,
  ${SUMMARIZE},
  ${SUMMARIZE} + .c-menu_separator__li {
    display: none !important;
  }
`;

export default class HideAds extends SlickPlugin<typeof meta.settings> {
  static readonly id = meta.id;
  static readonly pluginName = meta.pluginName;
  static readonly description = meta.description;
  static readonly defaultEnabled = meta.defaultEnabled;
  static readonly settings = meta.settings;

  start() {
    this.api.setStyle(HIDEADS_CSS, 'hide-ads');
    this.log('ads hidden');
  }
}
