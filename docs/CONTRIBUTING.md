# Contributing to Atlas ERA

## Development Workflow

### 1. Fork & Clone

```bash
git clone https://github.com/yourusername/atlasera.git
cd atlasera
```

### 2. Create Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Dev Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### 5. Make Changes & Test

- Write tests for new features
- Ensure existing tests pass: `npm test`
- Check linting: `npm run lint`
- Format code: `npm run format`

### 6. Commit & Push

```bash
git add .
git commit -m "feat: add your feature description"
git push origin feature/your-feature-name
```

### 7. Open Pull Request

- Link to relevant issue
- Describe changes and testing approach
- Request review from maintainer

## Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, no logic change)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

### Examples

```
feat: add membership tier comparison component
fix: correct image paths in pillar cards
docs: update API specification with new endpoints
style: format code with Prettier
refactor: extract Hero component from App.jsx
test: add unit tests for PillarCard component
chore: update dependencies
```

## Code Style

### JavaScript/React

- **ESLint + Prettier**: Configs in repo root
- **Functional Components**: Use hooks, no class components
- **PropTypes**: Type checking for React components
- **CSS Modules or TailwindCSS**: For styling (TailwindCSS preferred)

### File Naming

- **Components**: PascalCase (`PillarCard.jsx`)
- **Utilities**: camelCase (`analytics.js`)
- **Config Files**: kebab-case (`pillars.config.js`)

### Component Structure

```jsx
import React from 'react';
import PropTypes from 'prop-types';

const ComponentName = ({ prop1, prop2 }) => {
  // Hooks
  const [state, setState] = React.useState(null);
  
  // Effects
  React.useEffect(() => {
    // Effect logic
  }, [dependencies]);
  
  // Handlers
  const handleClick = () => {
    // Handler logic
  };
  
  // Render
  return (
    <div className="component-name">
      {/* JSX */}
    </div>
  );
};

ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number
};

export default ComponentName;
```

## Testing

### Unit Tests

- Use Vitest for unit testing
- Test utilities and helper functions
- Aim for >80% code coverage

### Component Tests

- Use React Testing Library
- Test user interactions, not implementation details
- Test accessibility (keyboard navigation, screen readers)

### Example Test

```jsx
import { render, screen } from '@testing-library/react';
import PillarCard from './PillarCard';

describe('PillarCard', () => {
  const mockPillar = {
    id: 'test-pillar',
    title: 'Test Pillar',
    shortDesc: 'Test description',
    icon: '🔬',
    image: '/test-image.png',
    color: '#c8463c'
  };

  it('renders pillar title', () => {
    render(<PillarCard pillar={mockPillar} onClick={jest.fn()} />);
    expect(screen.getByText('Test Pillar')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<PillarCard pillar={mockPillar} onClick={handleClick} />);
    screen.getByRole('button').click();
    expect(handleClick).toHaveBeenCalledWith('test-pillar');
  });
});
```

## Pull Request Process

### Before Submitting

1. **Update Documentation**: If adding features, update relevant docs
2. **Add Tests**: New features should include tests
3. **Check Linting**: Run `npm run lint` and fix any errors
4. **Format Code**: Run `npm run format`
5. **Test Build**: Run `npm run build` to ensure production build works

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests added/updated
- [ ] Manual testing completed
- [ ] All tests pass

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
```

## Project Structure

### Components

```
src/components/
├── navigation/      # Header, Navigation components
├── pillars/         # Research pillar components
├── membership/      # Membership-related components
└── layout/          # Hero, Footer, wrappers
```

### Pages

```
src/pages/
├── Home.jsx         # Homepage
├── About.jsx        # About page
├── Research.jsx     # Research page
└── Membership.jsx  # Membership page
```

### Utilities

```
src/utils/
├── analytics.js     # Analytics helpers
└── api.js           # API client (planned)
```

## Research Tools Contribution

### Python Scripts

- Follow PEP 8 style guide
- Include docstrings for functions and classes
- Add comments explaining statistical methods
- Include example usage in docstrings

### R Scripts

- Follow tidyverse style guide
- Use `roxygen2` for documentation
- Include example usage
- Comment complex statistical operations

## Documentation

### Code Comments

- Explain **why**, not **what**
- Use JSDoc for function documentation
- Comment complex algorithms or statistical methods

### README Updates

- Update README when adding major features
- Keep installation instructions current
- Update roadmap when milestones are reached

## Questions?

- **Technical Questions**: Open a GitHub issue with `question` label
- **Feature Requests**: Open a GitHub issue with `enhancement` label
- **Bug Reports**: Open a GitHub issue with `bug` label

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Celebrate contributions from all backgrounds

## Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md (planned)
- Acknowledged in release notes
- Invited to join the Researcher membership tier (for significant contributions)

Thank you for contributing to Atlas ERA! 🚀

