const positions: any = {
  tl: `justify-start align-start`,
  tc: `align-start justify-center`,
  tr: `justify-end align-start`,
  cl: `justify-start align-center`,
  cc: `justify-center align-center`,
  cr: `justify-end align-center`,
  bl: `justify-start align-end`,
  bc: `justify-center align-end`,
  br: `justify-end align-end`,
  tbl: `justify-start align-stretch`,
  tbc: `justify-center align-stretch`,
  tbr: `justify-end align-stretch`,
  tlr: `justify-start align-stretch column`,
  clr: `justify-center align-stretch column`,
  blr: `justify-end align-stretch column`,
};
export function useAnchorPositions(top: any, bottom: any, left: any, right: any) {

  let positionStr: string = '';

  if (top && bottom)
    positionStr += 'tb';
  else if (top)
    positionStr += 't';
  else if (bottom)
    positionStr += 'b';

  else
    positionStr += 'c';

  if (left && right)
    positionStr += 'lr';
  else if (left)
    positionStr += 'l';
  else if (right)
    positionStr += 'r';

  else
    positionStr += 'c';
  return { positionStr: positions[positionStr] };
}
