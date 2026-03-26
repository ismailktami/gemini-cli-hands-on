module.exports = {
  default: {
    formatOptions: {
      snippetInterface: 'async-await'
    },
    paths: ['features/**/*.feature'],
    requireModule: ['ts-node/register'],
    require: [
      'features/support/**/*.ts',
      'features/common-steps-definitions/**/*.ts',
      'features/step_definitions/**/*.ts'
    ]
  }
}
