import React, { FC } from 'react';

import { buttonContent, buttonTexts } from '@/components/button/__mocks__/button';
import { contactTexts } from '@/components/contact/__mocks__/contact';

import { UserConfig } from '@/types/common';

import { normalizeSpaces } from '@/utils/helpers';

import { useUnmount } from '@/hooks/use-unmount';
import { useUnmount1 } from '@/pages/catalog/single-catalog/catalog-404/hooks/use-unmount1';

import Title from '@/pages/basket/title/title';
import CatalogProducts from '@/pages/catalog/single-catalog/catalog-products/catalog-products';
import { useUnmount2 } from '@/pages/catalog/single-catalog/catalog-products/use-unmount2';

import { ButtonType } from '@/components/button/types/button-types';
import { Date } from '@/types/date';

import { buttonHelper } from '@/components/button/utils/button-helper';
import { getTimeFromDate } from '@/utils/time-date';
import { render } from '@testing-library/react';

export const buttonTests = [buttonTexts, buttonContent, contactTexts];
export const arr: UserConfig[] = [];
export const date: Date = {};
export const button: ButtonType = {};
export const btnHelp = buttonHelper();
export const dateIso = normalizeSpaces('sd');
export const time = getTimeFromDate('time');

const testFunc = () => {};

const Button: FC = () => {
  useUnmount(testFunc);
  useUnmount1(testFunc);
  useUnmount2(testFunc);
  return (
    <div data-testid="button">
      <button>123</button>;
      <Title />
      <CatalogProducts />
      <CatalogProducts />
    </div>
  );
};

export default Button;

describe(Button, () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Button />);

    expect(getByTestId('button')).toBeInTheDocument();
  });
});
