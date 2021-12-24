/* eslint-disable no-undef */
describe('TMobile', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should not have good text', async () => {
    await expect(element(by.id('good_text'))).not.toBeVisible();
  });

  it('should have input', async () => {
    await expect(element(by.id('input'))).toBeVisible();
  });

  it('should have image', async () => {
    await expect(element(by.id('image'))).toBeVisible();
  });

  it('should be clickable and placeholder is You can search by name or disease', async () => {
    await element(by.id('input')).tap();
    await expect(
      element(by.text('You can search by name or disease')),
    ).toBeVisible();
  });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
