const { checkFileExists } = require('../components/fileProcessor');

describe('Check Files and processes them accordingly', () => {
  it('Returns false when no file is found', () => {
    const testCheckFileExists = checkFileExists('test', 30, 30);

    expect(testCheckFileExists).toEqual(false);
  });
});
