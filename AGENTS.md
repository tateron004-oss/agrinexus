# Nexus Protected Foundation (retired)

## Status

The per-file "protected foundation" authorization ceremony described by this
file was retired on 2026-09-10 by explicit decision of the repository owner,
Ron Tate. All files that were previously locked behind that process —
including `server.js`, `public/app.js`, the voice runtime files, and the
certification/guard scripts themselves — are ordinary code now. No special
authorization step is required to edit them.

`.github/nexus-protected-foundation.json` is kept for historical reference
(it records the prior baseline and the certification history) but its
`protectedFiles` list has been emptied, and
`scripts/nexus-protected-foundation-guard.js` is now a no-op so any CI step
that still calls it passes trivially.

## Why this existed

The prior governance model was created to stop an autonomous coding agent
from silently regressing voice/orb/routing behavior that had once passed a
certification run. The project is now moving from demo to production under
direct human review, so that safeguard is no longer needed in this form.
Ordinary code review and the real test suite under `test/nexus/` are the
current safety net. (The `rebuild/` experimental browser build — including
`rebuild/tests/` — was archived to `archive/rebuild/` in the same cleanup
pass, since nothing in the live app loaded its output.)
