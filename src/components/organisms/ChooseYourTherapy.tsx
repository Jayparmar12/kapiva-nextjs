import React from 'react';

import TherapyProductSliderV2 from '../molecules/TherapyProductSliderV2';
import SelectConcern from './SelectConcern';

function ChooseYourTherapy() {
  return (
    <section className="kp-container mb-14 lg:mb-32">
      <SelectConcern />
      <TherapyProductSliderV2 />
    </section>
  );
}

export default ChooseYourTherapy;
