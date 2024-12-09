import { Page } from 'playwright/test';
import { getSelector, waitForAnimationEnd } from '../../helpers';
import testIds from '../../../../src/helper/test-ids';
import { closeTab } from '../close-tab';
import { openNewTab } from '../open-new-tab';

export const navigatePromptsToEmpty = async (page: Page, skipScreenshots?: boolean): Promise<void> => {
  await closeTab(page, false, true);
  await openNewTab(page, false, true);

  await page.locator(`${getSelector(testIds.prompt.input)}`).fill('This is the first user prompt');
  await page.locator(`${getSelector(testIds.prompt.send)}`).click();
  await waitForAnimationEnd(page);

  let promptInput = await page.locator(`${getSelector(testIds.prompt.input)}`);
  await promptInput.press('ArrowUp');
  await waitForAnimationEnd(page);

  promptInput = await page.locator(`${getSelector(testIds.prompt.input)}`);
  await promptInput.press('ArrowDown');
  await waitForAnimationEnd(page);

  expect(await promptInput.inputValue()).toBe('');

  if (skipScreenshots !== true) {
    expect(await page.screenshot()).toMatchImageSnapshot();
  }
};