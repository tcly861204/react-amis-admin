module.exports = {
  'src/**/*{js,jsx,ts,tsx,md,html}': ['eslint', 'prettier --write'],
  'src/**/*.scss': ['stylelint --syntax scss', 'stylelint --fix'],
  'src/**/*.less': ['stylelint --syntax less', 'stylelint --fix'],
};
