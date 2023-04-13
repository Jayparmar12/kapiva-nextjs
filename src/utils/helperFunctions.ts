/* eslint-disable no-param-reassign */
/* eslint-disable prefer-regex-literals */
export const GenerateSrcset = (
  imgUrl: string,
  sizes: Array<number>,
  imgUrlContainsCdnSrc: boolean,
  compressionLevel?: number
) => {
  let prefixUrl;
  const modifiedSrcSet = sizes.reduce((modifiedSrc, current) => {
    let updatedSrc = `${imgUrl}?imgeng=/w_${current}/cmpr_${
      compressionLevel || 75
    }/ ${current}w,`;
    if (imgUrlContainsCdnSrc === false) {
      prefixUrl = `https://4wdpmdxj.cdn.imgeng.in/`;
      updatedSrc = prefixUrl + updatedSrc;
    }
    return `${modifiedSrc} ${updatedSrc}`;
  }, '');
  return modifiedSrcSet;
};

// START: functions for sorting the variants

function normalizeUnit(matchedUnit, matchedValue) {
  let unit = matchedUnit.toLowerCase();
  let value = matchedValue;
  if (unit === 'kg') {
    value *= 1000;
    unit = 'g';
  } else if (unit === 'l') {
    value *= 1000;
    unit = 'ml';
  } else if (unit === 'month') {
    value *= 30;
    unit = 'day';
  }
  /* Make sure unit compared to others appears in the last order */
  if (unit === 'unit') {
    unit = 'zunit';
  }
  return { unit, value };
}
function parseUnits(name) {
  const unitParseRegex = new RegExp(
    /([\d.]+)(?:[\s-]+)?(unit|kg|g|ml|l|day|month|cap)/i
  );
  const matches = unitParseRegex.exec(name);
  if (!matches) {
    return null;
  }
  // console.log(matches);
  const matchedUnit = matches[2] || matches[3];
  const matchedValue = parseFloat(matches[1]);
  const { unit, value } = normalizeUnit(matchedUnit, matchedValue);
  return { unit, value };
}

export function sortVariants(variantsData, key1, key2) {
  const modifiedVariants = variantsData.map((o) => {
    const data = parseUnits(
      o.node.productOptions.edges[0].node.values.edges[0].node.label
    );
    if (data) {
      o.sortUnit = data.unit;
      o.sortValue = data.value;
    } else {
      o.sortUnit = 'zzzzz';
      o.sortValue = 99999;
    }
    return o;
  });
  return modifiedVariants.sort((a, b) => {
    if (a[key1] < b[key1]) {
      return -1;
    }
    if (a[key1] > b[key1]) {
      return 1;
    }
    if (a[key2] < b[key2]) {
      return -1;
    }
    if (a[key2] > b[key2]) {
      return 1;
    }
    return 0;
  });
}

// const sortedVariants = sortVariants(variants, 'sortUnit', 'sortValue');
// console.log(sortedVariants);
// fs.writeFileSync('products-test.json', JSON.stringify(sortedVariants));

// END: functions for sorting the variants

export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
