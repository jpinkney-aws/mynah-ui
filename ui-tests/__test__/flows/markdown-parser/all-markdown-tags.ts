const img = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNjAwIDQwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI0RERERERCIvPjxwYXRoIGZpbGw9IiM5OTk5OTkiIGQ9Im0xNTUuNTIgMTcxLjA4LTE3LjE2IDIxLTIgMi40OHExLjY4LS44NCAzLjYyLTEuMyAxLjk0LS40NiA0LjE4LS40NiAzLjI4IDAgNi4zOCAxLjA4dDUuNDYgMy4yNnEyLjM2IDIuMTggMy44IDUuNDIgMS40NCAzLjI0IDEuNDQgNy41NiAwIDQuMDQtMS40OCA3LjU4dC00LjE2IDYuMThxLTIuNjggMi42NC02LjQ2IDQuMTZ0LTguMzQgMS41MnEtNC42NCAwLTguMzItMS40OC0zLjY4LTEuNDgtNi4yOC00LjE0LTIuNi0yLjY2LTMuOTgtNi40dC0xLjM4LTguM3EwLTQuMDggMS42Ni04LjM4IDEuNjYtNC4zIDUuMTQtOC45NGwxMy44LTE4LjUycS43Mi0uOTYgMi4xLTEuNjQgMS4zOC0uNjggMy4xOC0uNjhoOC44Wm0tMTQuOTIgNTAuNHEyLjM2IDAgNC4zNC0uOHQzLjQtMi4yNHExLjQyLTEuNDQgMi4yMi0zLjM4LjgtMS45NC44LTQuMjIgMC0yLjQ4LS43Ni00LjQ2dC0yLjE2LTMuMzZxLTEuNC0xLjM4LTMuMzYtMi4xLTEuOTYtLjcyLTQuMzItLjcyLTIuMzYgMC00LjI4LjgtMS45Mi44LTMuMjggMi4yMi0xLjM2IDEuNDItMi4xMiAzLjM2dC0uNzYgNC4xOHEwIDIuNC42NiA0LjM4dDEuOTYgMy4zOHExLjMgMS40IDMuMjIgMi4xOCAxLjkyLjc4IDQuNDQuNzhaTTIwOC4yOCAyMDBxMCA3LjU2LTEuNjIgMTMuMTQtMS42MiA1LjU4LTQuNDggOS4yMi0yLjg2IDMuNjQtNi43NiA1LjQyLTMuOSAxLjc4LTguNDIgMS43OHQtOC4zOC0xLjc4cS0zLjg2LTEuNzgtNi43LTUuNDItMi44NC0zLjY0LTQuNDQtOS4yMi0xLjYtNS41OC0xLjYtMTMuMTQgMC03LjYgMS42LTEzLjE2IDEuNi01LjU2IDQuNDQtOS4yIDIuODQtMy42NCA2LjctNS40MiAzLjg2LTEuNzggOC4zOC0xLjc4IDQuNTIgMCA4LjQyIDEuNzggMy45IDEuNzggNi43NiA1LjQyIDIuODYgMy42NCA0LjQ4IDkuMiAxLjYyIDUuNTYgMS42MiAxMy4xNlptLTEwLjIgMHEwLTYuMjgtLjkyLTEwLjR0LTIuNDYtNi41NnEtMS41NC0yLjQ0LTMuNTQtMy40MnQtNC4xNi0uOThxLTIuMTIgMC00LjEuOTgtMS45OC45OC0zLjUgMy40MnQtMi40MiA2LjU2cS0uOSA0LjEyLS45IDEwLjR0LjkgMTAuNHEuOSA0LjEyIDIuNDIgNi41NiAxLjUyIDIuNDQgMy41IDMuNDJ0NC4xLjk4cTIuMTYgMCA0LjE2LS45OHQzLjU0LTMuNDJxMS41NC0yLjQ0IDIuNDYtNi41Ni45Mi00LjEyLjkyLTEwLjRabTU2LjYgMHEwIDcuNTYtMS42MiAxMy4xNC0xLjYyIDUuNTgtNC40OCA5LjIyLTIuODYgMy42NC02Ljc2IDUuNDItMy45IDEuNzgtOC40MiAxLjc4dC04LjM4LTEuNzhxLTMuODYtMS43OC02LjctNS40Mi0yLjg0LTMuNjQtNC40NC05LjIyLTEuNi01LjU4LTEuNi0xMy4xNCAwLTcuNiAxLjYtMTMuMTYgMS42LTUuNTYgNC40NC05LjIgMi44NC0zLjY0IDYuNy01LjQyIDMuODYtMS43OCA4LjM4LTEuNzggNC41MiAwIDguNDIgMS43OCAzLjkgMS43OCA2Ljc2IDUuNDIgMi44NiAzLjY0IDQuNDggOS4yIDEuNjIgNS41NiAxLjYyIDEzLjE2Wm0tMTAuMiAwcTAtNi4yOC0uOTItMTAuNHQtMi40Ni02LjU2cS0xLjU0LTIuNDQtMy41NC0zLjQydC00LjE2LS45OHEtMi4xMiAwLTQuMS45OC0xLjk4Ljk4LTMuNSAzLjQydC0yLjQyIDYuNTZxLS45IDQuMTItLjkgMTAuNHQuOSAxMC40cS45IDQuMTIgMi40MiA2LjU2IDEuNTIgMi40NCAzLjUgMy40MnQ0LjEuOThxMi4xNiAwIDQuMTYtLjk4dDMuNTQtMy40MnExLjU0LTIuNDQgMi40Ni02LjU2LjkyLTQuMTIuOTItMTAuNFptNzMuNzIgMTUuNjgtNS4yNCA1LjE2LTEzLjU2LTEzLjU2LTEzLjY4IDEzLjY0LTUuMjQtNS4xNiAxMy42OC0xMy43MkwyODEuMTIgMTg5bDUuMi01LjIgMTMuMDQgMTMuMDQgMTIuOTYtMTIuOTYgNS4yOCA1LjItMTMgMTMgMTMuNiAxMy42Wm0zNC42NC04LjU2aDE3LjZWMTg4LjJxMC0yLjY4LjM2LTUuOTJsLTE3Ljk2IDI0Ljg0Wm0yNi4yIDBoNy4yOHY1LjcycTAgLjgtLjUyIDEuMzgtLjUyLjU4LTEuNDguNThoLTUuMjh2MTQuMTJoLTguNlYyMTQuOGgtMjQuNHEtMSAwLTEuNzYtLjYydC0uOTYtMS41NGwtMS4wNC01IDI3LjQtMzYuNmg5LjM2djM2LjA4Wm01My43Mi03LjEycTAgNy41Ni0xLjYyIDEzLjE0LTEuNjIgNS41OC00LjQ4IDkuMjItMi44NiAzLjY0LTYuNzYgNS40Mi0zLjkgMS43OC04LjQyIDEuNzh0LTguMzgtMS43OHEtMy44Ni0xLjc4LTYuNy01LjQyLTIuODQtMy42NC00LjQ0LTkuMjItMS42LTUuNTgtMS42LTEzLjE0IDAtNy42IDEuNi0xMy4xNiAxLjYtNS41NiA0LjQ0LTkuMiAyLjg0LTMuNjQgNi43LTUuNDIgMy44Ni0xLjc4IDguMzgtMS43OCA0LjUyIDAgOC40MiAxLjc4IDMuOSAxLjc4IDYuNzYgNS40MiAyLjg2IDMuNjQgNC40OCA5LjIgMS42MiA1LjU2IDEuNjIgMTMuMTZabS0xMC4yIDBxMC02LjI4LS45Mi0xMC40dC0yLjQ2LTYuNTZxLTEuNTQtMi40NC0zLjU0LTMuNDJ0LTQuMTYtLjk4cS0yLjEyIDAtNC4xLjk4LTEuOTguOTgtMy41IDMuNDJ0LTIuNDIgNi41NnEtLjkgNC4xMi0uOSAxMC40dC45IDEwLjRxLjkgNC4xMiAyLjQyIDYuNTYgMS41MiAyLjQ0IDMuNSAzLjQydDQuMS45OHEyLjE2IDAgNC4xNi0uOTh0My41NC0zLjQycTEuNTQtMi40NCAyLjQ2LTYuNTYuOTItNC4xMi45Mi0xMC40Wm01Ni42IDBxMCA3LjU2LTEuNjIgMTMuMTQtMS42MiA1LjU4LTQuNDggOS4yMi0yLjg2IDMuNjQtNi43NiA1LjQyLTMuOSAxLjc4LTguNDIgMS43OHQtOC4zOC0xLjc4cS0zLjg2LTEuNzgtNi43LTUuNDItMi44NC0zLjY0LTQuNDQtOS4yMi0xLjYtNS41OC0xLjYtMTMuMTQgMC03LjYgMS42LTEzLjE2IDEuNi01LjU2IDQuNDQtOS4yIDIuODQtMy42NCA2LjctNS40MiAzLjg2LTEuNzggOC4zOC0xLjc4IDQuNTIgMCA4LjQyIDEuNzggMy45IDEuNzggNi43NiA1LjQyIDIuODYgMy42NCA0LjQ4IDkuMiAxLjYyIDUuNTYgMS42MiAxMy4xNlptLTEwLjIgMHEwLTYuMjgtLjkyLTEwLjR0LTIuNDYtNi41NnEtMS41NC0yLjQ0LTMuNTQtMy40MnQtNC4xNi0uOThxLTIuMTIgMC00LjEuOTgtMS45OC45OC0zLjUgMy40MnQtMi40MiA2LjU2cS0uOSA0LjEyLS45IDEwLjR0LjkgMTAuNHEuOSA0LjEyIDIuNDIgNi41NiAxLjUyIDIuNDQgMy41IDMuNDJ0NC4xLjk4cTIuMTYgMCA0LjE2LS45OHQzLjU0LTMuNDJxMS41NC0yLjQ0IDIuNDYtNi41Ni45Mi00LjEyLjkyLTEwLjRaIi8+PC9zdmc+';
export default `# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6


*Italic text*
_Italic text_

**Bold text**
__Bold text__

***Bold and italic text***
___Bold and italic text___


- Item 1
- Item 2
  - Subitem 1
  - Subitem 2


1. [x] Task 1
2. [ ] Task 2
3. [ ] Task 3


[mynah-ui](https://github.com/aws/mynah-ui)

<https://github.com/aws/mynah-ui>


![Alt text](${img})


> This is a blockquote.


\`inline code\`.

\`\`\`
no syntax declared
\`\`\`

\`\`\`javascript
const x;
\`\`\`

| left | center | right |
| :----- | :-----: | -----: |
| 1 | 1 | 1 |
| 2 | 2 | 2 |


---

***

___


~~Strikethrough text~~

<p>This is an HTML paragraph.</p>

<details>
<summary>Summary</summary>
Detail
</details>
` as string;
