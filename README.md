# Webpack HMR Examples

This repository contains examples of Hot Module Replacement (HMR) implementation using different approaches.

## Known Issues and Solutions

### Dependencies

1. **React Version Compatibility**
   - Ensure React 18+ is used for createRoot API
   - If using React 17 or lower, modify index.js to use ReactDOM.render instead

2. **Webpack Version Issues**
   - webpack-dev-middleware ^6.1.1 requires webpack ^5.0.0
   - webpack-hot-middleware ^2.25.4 works with both webpack 4 and 5

### Common Problems

1. **HMR Not Working**
   - Check if `module.hot.accept()` is properly implemented
   - Verify webpack.config.js has HotModuleReplacementPlugin
   - Ensure correct publicPath in webpack configuration

2. **Line Ending Issues**
   - Use .gitattributes to enforce consistent line endings
   - Configure ESLint and Prettier with "endOfLine": "auto"

3. **Build Performance**
   - Add node_modules to .gitignore and .eslintignore
   - Consider adding appropriate extensions to .prettierignore

### Project-Specific Notes

#### test-hmr (webpack-dev-server)
- Requires @babel/preset-react for JSX transformation
- Port 3000 must be available
- Static files must be in public directory

#### express-hmr
- Both webpack-dev-middleware and webpack-hot-middleware required
- Express server must be configured before HMR middleware
- Client entry must include 'webpack-hot-middleware/client'

### Development Setup

1. **VSCode Configuration**
```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

2. **Recommended .npmrc**
```ini
save-exact=true
legacy-peer-deps=true
```

### Testing Changes

1. **webpack-dev-server Example**
```bash
cd test-hmr
npm install
npm start
```

2. **Express Middleware Example**
```bash
cd express-hmr
npm install
npm start
```

### Troubleshooting

1. **Module Resolution**
   - Check babel configuration
   - Verify webpack resolve configuration
   - Ensure all peer dependencies are met

2. **HMR State Loss**
   - Implement proper module.hot.accept() handlers
   - Check React component architecture
   - Verify webpack entry points

3. **Build Issues**
   - Clear node_modules and package-lock.json
   - Rebuild with `npm install`
   - Check for conflicting dependencies

### Implementation Challenges

For a detailed breakdown of challenges encountered during implementation and their solutions, see [CHALLENGES.md](./CHALLENGES.md)
