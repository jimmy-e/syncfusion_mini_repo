module.exports = {
  env: {
    'jest/globals': true
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    'document': true,
    'window': true,
  },
  overrides: [
    {
      'files': ['**/*.tsx', '**/*.ts'],
      'rules': {
        'react/prop-types': 'off',
        'import/prefer-default-export': 'off',
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'jest'],
  rules: {
    'import/extensions': [
      'error',
      'always',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never'
      }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        'devDependencies': [
          '**/*.stories.jsx',
          '**/*.stories.tsx',
          '**/*.test.jsx',
          '**/*.test.js',
          '**/*.test.tsx',
          '**/*.test.ts',
          'setupTests.js',
          '**/storybook/*',
          '**/*.demo.tsx',
        ],
      },
    ],
    '@typescript-eslint/camelcase': ['error', { 'properties': 'never' }],
    'indent': 'off',
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        'ignoredNodes': ['JSXElement'],
        'SwitchCase': 1,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': ['error', {
      'allowExpressions': true,
      'allowTypedFunctionExpressions': true
    }],
    'semi': 'off',
    '@typescript-eslint/semi': ['error'],
    'react/destructuring-assignment': [false, 'always', { 'ignoreClassFields': true }],
    'react/jsx-filename-extension': [1, { 'extensions': ['.jsx', '.tsx'] }],
    'react/sort-comp': [2,
      {
        order: [
          'static-methods',
          'lifecycle',
          'everything-else',
          'render'
        ],
        groups: {
        lifecycle: [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'state',
          'getInitialState',
          'getChildContext',
          'getDerivedStateFromProps',
          'componentWillMount',
          'UNSAFE_componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'UNSAFE_componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'UNSAFE_componentWillUpdate',
          'getSnapshotBeforeUpdate',
          'componentDidUpdate',
          'componentDidCatch',
          'componentWillUnmount'
          ]
        }
      }
    ],
    'max-len': ['error', { 'code': 100 }]
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.common.js',
      }
    }
  },
};
