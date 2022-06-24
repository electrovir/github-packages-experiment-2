import {doAThing} from '@electrovir/github-packages-experiment-1';

describe(__filename, () => {
    it('should have installed the correct package', () => {
        expect(doAThing()).toBe('hello there');
    });
});
