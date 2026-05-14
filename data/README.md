# Data Directory

This directory is intentionally minimal in git.

Purpose:

- reserve a stable location for runtime or imported data files when needed
- keep repository structure predictable for local tooling

Public repo hygiene:

- do not commit runtime snapshots, private exports, analytics dumps, or local database extracts here
- keep only placeholder files such as `.gitkeep` unless a dataset is intentionally public and documented
