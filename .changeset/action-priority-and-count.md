---
'@neovici/cosmoz-queue': minor
---

Add `priority` to `Action<T>` and fix `actionCount` for partial applicability.

- **`Action.priority`**: New optional `number` property. `defaultButton` renders it as `data-priority` attribute, enabling `cosmoz-bottom-bar` to select the highest-priority action for the toolbar.
- **`actionCount` fix**: Show `(1/M)` when only 1 item is applicable out of M. Previously, `actionCount` only rendered when `applicableItems.length > 1`, which meant partial applicability like `(1/2)` was never shown.
