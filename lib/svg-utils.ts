import isSvg from 'is-svg';

const patterns = {
  opening: /<svg\b[^>]*>/,
  closing: /<\/\s*svg>\s*$/,
  tag: (name: string) => new RegExp(`<${name}\s*.*>\s*.*<\/${name}>`, 'g'),
  attribute: (key: string) => new RegExp(`${key}=\"[^\s>]*\"`),
};

export const omitSvgTags = (svg: string, tags: string[]) => {
  let output = svg;
  for (const tag of tags) {
    const tmp = output.replaceAll(patterns.tag(tag), '');
    if (!isSvg(tmp)) continue;
    output = tmp;
  }
  return output;
};

export const getSvgSections = (
  svg: string
): { opening: string; content: string; closing: string } => {
  let content = '';
  const [opening, closing] = getSvgWrappingTags(svg);
  if (!opening || !closing) return { opening, content, closing };

  return { opening, content, closing };
};

export const getSvgBody = (svg: string) => {
  if (!isSvg(svg)) return '';
  return svg.replace(patterns.opening, '').replace(patterns.closing, '');
};

export const getSvgWrappingTags = (svg: string): [string, string] => {
  if (!isSvg(svg)) return ['', ''];
  return [
    (svg.match(patterns.opening) || [''])[0],
    (svg.match(patterns.closing) || [''])[0].replace(/\s+/g, ''),
  ];
};

export const setSvgAttribute = (svg: string, key: string, value: string) => {
  const [opening] = getSvgWrappingTags(svg);
  if (!opening) return svg;
  const match = opening.match(patterns.attribute(key));
  const output = svg
    .replace(
      opening,
      match
        ? opening.replace(match[0], `${key}="${value.trim()}"`)
        : opening.replace(/>$/, ` ${key}="${value.trim()}">`)
    )
    .replace(/\s{2,}/g, ' ');
  return !isSvg(output) ? svg : output;
};

export const modifyInlineSvg = (
  svg: string,
  omitTags?: string[],
  setAttributes?: Record<string, string>
) => {
  let output = svg;

  if (omitTags) output = omitSvgTags(output, omitTags);
  if (setAttributes) {
    for (const [key, value] of Object.entries(setAttributes) as [
      keyof typeof setAttributes,
      string
    ][]) {
      output = setSvgAttribute(output, key, value);
    }
  }
  return output;
};
