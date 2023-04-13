import React from 'react';

import type { ChooseYourTherapyContexts } from './types/types';
// created this file inorder to avoid dependency cycle issue with Eslint
const ChooseYourTherapyContext = React.createContext(
  {} as ChooseYourTherapyContexts
);

export { ChooseYourTherapyContext };
