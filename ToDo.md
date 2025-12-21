# To Do's

## Small Tweaks

### Make Project cards replace Snapshot cards with a back button

### Fix mismatched colors

### Fix contact section

### Align Bullet points

### Add this to challenges.json

```json
{
"id": "too-many-params",
"project": "visual-fraction-library",
"summary": "Refactoring Too Many Parameters",
"challenge": "",
"explanation": "",
"codeSnippet": ""
},
```

Add to Challenges:

Rotation issue that I solved by rotating, swapping the width and height and immediately unrotating

[This RACE condition bug](https://github.com/mathematiCode/math-puzzle/pull/21)

Component Composition helped with needing to pass a ref upwards. [See this chat with Claude](https://claude.ai/share/cba361e8-881b-44b4-8f12-04732482825c)

Basically I had ActionsToolbarPopover which controls all of the possible transformation buttons and has all the corresponding action logic that is triggered for doubling and halving and halving and doubling. This component takes in children as it's prop which could either be a PieceOnBoard component or an InitialPiece component depending on where the piece is. Having the transformation handler logic all in the Toolbar component felt much cleaner than duplicating this logic in both PieceOnBoard and InitialPiece. I wanted it to also have the logic for handleRotation BUT since this function uses useAnimate from framer motion and useAnimate needs access to the ref of the element it's animating, I needed to cololcate the ref adn the handleRotation function. I couldn't use forwardRef to pass the ref down to actual pieces because ActionsToolbarPopover just takes {children} as it's prop. So I decided my best option was to keep the handleRotation function with the individual piece components.
