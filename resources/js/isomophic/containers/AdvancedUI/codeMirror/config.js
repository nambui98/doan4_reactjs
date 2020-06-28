const switchOptions = [
  {
    id: 'lineNumbers',
    title: 'Line Numbers',
    trueValue: true,
    falseValue: false,
    value: true
  },
  {
    id: 'readOnly',
    title: 'Read Only',
    trueValue: false,
    falseValue: true,
    value: true
  }
];
const selectOptions = [
  {
    id: 'tabSize',
    title: 'Tab Size',
    options: ['2', '4', '6', '8'],
    value: 2
  },
  {
    id: 'mode',
    title: 'Language',
    options: ['javascript', 'xml', 'markdown', 'php', 'python', 'ruby'],
    value: 'javascript'
  },
  {
    id: 'theme',
    title: 'Select themes',
    options: [
      'default',
      'zenburn',
      'solarized',
      'rubyblue',
      'paraiso-dark',
      'midnight',
      'material',
      'hopscotch',
      'twilight'
    ],
    value: 'zenburn'
  }
];

const defaultValues = {
  basic: `const component = {
    name: 'tsp',
    author: 'RedQ Team',
    website: 'https://tsp.redq.io/'
};`,
  javascript: `const component = {
    name: 'tsp',
    author: 'RedQ Team',
    website: 'https://tsp.redq.io/'
};`,
  markdown: `# tsp
###This is a RedQ Team production
[have a look](https://tsp.redq.io/)
  `,
  xml: `<isomprphic>
    <to>Tove</to>
    <name>tsp</name>
    <author>RedQ Team</author>
    <website>tsp.redq.io</website>
</isomprphic>`,
  php: `<html>
 <head>
  <title> v</title>
 </head>
 <body>
 <h1>https://tsp.redq.io/</h1>
 <p>This is a RedQ Team production</p>
 <a href="https://tsp.redq.io/">visit ou site</a>
 </body>
</html>
`,
  python: `
print("tsp")
print("This is a RedQ Team production")
print("visit us https://tsp.redq.io ")
`,
  ruby: `rint "tsp"
print "This is a RedQ Team production"
print "visit us https://tsp.redq.io "
`
};

export { switchOptions, selectOptions, defaultValues };
