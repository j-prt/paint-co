interface Size {
  xs: string
  sm: string
  md: string
  lg: string
}

const size: Size = {
  xs: '600px',
  sm: '800px',
  md: '900px',
  lg: '1100px',
}

export const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
}
