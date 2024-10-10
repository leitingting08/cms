module.exports = function (plop) {
  plop.setGenerator('name', {
    actions: [
      {
        // 匹配项目名并修改
        path: './src/contexts/Localization/helpers.ts',
        pattern: /(project_init_next_h5)/g,
        template: '{{name}}',
        type: 'modify'
      },
      {
        // 匹配项目名并修改
        path: './src/pages/_app.tsx',
        pattern: /(project_init_next_h5)/g,
        template: '{{name}}',
        type: 'modify'
      },
      {
        // 匹配项目名并修改
        path: './Dockerfile',
        pattern: /(project_init_next_h5)/g,
        template: '{{name}}',
        type: 'modify'
      }
    ],
    description: 'project name',
    prompts: [
      {
        type: 'input', // 用来在终端输入文本
        name: 'name', // 在 actios 内 可以通过{{name}} 取到这里输入的值，在模板内也可以通过{{name}}取到这个值
        message: '请输入项目名（必填）', // 会显示在控制台
        validate(val) {
          // 如果验证不通过，需要返回字符串，字符串将会被展示在控制台
          // 验证通过，则返回true
          return true
        },
        default: 'project_init_next_h5' // 默认值
      }
    ]
  })
}
