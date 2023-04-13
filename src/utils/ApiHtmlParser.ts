import { JSDOM } from 'jsdom';

import type { GeneralSettings } from './types/types';

function whatToExpect(settings: GeneralSettings[]) {
  const settingWhatToExpect = settings.find((o) => {
    return o.name === 'whatToExpectText';
  });

  let data: any = null;

  if (settingWhatToExpect) {
    const dom = new JSDOM(settingWhatToExpect.value);
    data = {};
    data.headingImage = dom.window.document.querySelector<HTMLImageElement>(
      '.heading-homepage > img'
    )?.src;
    data.content = Array.from(
      dom.window.document.querySelectorAll('.row > div')
    ).map((el) => {
      return {
        image: el.querySelector('img')?.src || '',
        heading:
          el
            .querySelector('.heading-expect')
            ?.textContent?.replace(/\n/, '<br>') || '',
        subHeading: el.querySelector('.sub-heading-expect')?.textContent || '',
      };
    });
  }

  return data;
}

function topBannerText(settings: GeneralSettings[]) {
  const settingsTopBannerText = settings.find((o) => {
    return o.name === 'topBannerText';
  });
  let data: any = null;
  if (settingsTopBannerText) {
    data = {};
    const dom = new JSDOM(settingsTopBannerText.value);
    const documentHtml = dom.window.document;
    data.topText =
      documentHtml.querySelector('p')?.textContent?.split(/\n/)[0] || '';

    data.bottomText =
      documentHtml.querySelector('p')?.textContent?.split(/\n/)?.pop() || '';
    data.bottomLink = documentHtml.querySelector('a')?.href || '';
  }
  return data;
}

function unlockDetails(settings: GeneralSettings[]) {
  const settingsUnlockDetails = settings.find((o) => {
    return o.name === 'unlockDetails';
  });
  const data: any = null;
  if (settingsUnlockDetails) {
    return JSON.parse(settingsUnlockDetails?.value);
  }

  return data;
}

function newsText(settings: GeneralSettings[]) {
  const settingsNewsText = settings.find((o) => {
    return o.name === 'newsText';
  });
  const data: any = null;
  if (settingsNewsText) {
    return JSON.parse(settingsNewsText?.value);
  }
  return data;
}
function healthOutcomes(settings: GeneralSettings[]) {
  const settingsHealthOutcomes = settings.find((o) => {
    return o.name === 'healthOutcomes';
  });
  let data: any = null;
  if (settingsHealthOutcomes) {
    data = {};
    const jsonData = JSON.parse(settingsHealthOutcomes?.value);
    const dom = new JSDOM(jsonData?.content);
    data.heading = jsonData?.heading;
    data.content = Array.from(
      dom.window.document.querySelectorAll('.row > li > p')
    ).map((o) => {
      return o?.textContent || '';
    });
  }

  return data;
}

function mainBanner(settings: GeneralSettings[]) {
  const settingsMainBanner = settings.find((o) => {
    return o.name === 'mainBanner';
  });
  let data: any = null;
  if (settingsMainBanner) {
    data = {};
    const dom = new JSDOM(settingsMainBanner.value);
    const documentHtml = dom.window.document;
    return Array.from(documentHtml.querySelectorAll('li.Carousel-slide')).map(
      (o) => {
        const dummy: any = {};
        dummy.desktopImage =
          o.querySelector<HTMLImageElement>('.Carousel-image > img')?.src || '';
        dummy.heading = o.querySelector('.carousel-heading')?.textContent || '';
        dummy.subHeading =
          o.querySelector('.carousel-sub-heading')?.textContent || '';
        dummy.subOffer =
          o.querySelector('.carousel-head-offer > .sup-offer')?.textContent ||
          '';
        dummy.offerBanner =
          o.querySelector('.carousel-head-offer > .offer-banner')
            ?.textContent || '';
        dummy.bannerButton = o.querySelector('.banner-btn')?.textContent || '';

        dummy.offerDate = o.querySelector('.offer-date')?.textContent || '';
        dummy.mobileImage =
          o.querySelector<HTMLImageElement>('.strip-express > img ')?.src || '';
        return dummy;
      }
    );
  }

  return data;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  whatToExpect,
  topBannerText,
  unlockDetails,
  mainBanner,
  newsText,
  healthOutcomes,
};
