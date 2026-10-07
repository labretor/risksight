# Architecture (conceptual)

This is a high-level, conceptual view. It describes how responsibilities are separated, not how any particular implementation works.

## Layers

```
Data sources → Data processing → Intelligence layer → Risk analysis
                                                     ↓
                          Comparison / investigation → Management insight
```

| Layer | Responsibility |
|---|---|
| **Data sources** | Spreadsheet and CSV exports, taken as they arrive. |
| **Data processing** | Parsing, schema discovery, field mapping with a confidence level, structural quality checks. Ambiguous fields are held back instead of guessed. |
| **Intelligence layer** | Signals, patterns, statistics and the evidence behind them. |
| **Risk analysis** | Severity, exposure and prioritization built from the layer below. |
| **Comparison / investigation** | Change between datasets, and entity-level exploration with analyst notes. |
| **Management insight** | Summaries, matrices and recommended next steps for a person to review. |

Each layer hands an inspectable result to the next. Nothing downstream recalculates what an upstream layer already established, so every screen shows the same underlying picture.

## Offline-first

RiskSight is designed to run in a browser on the user's own machine. Imported data is processed locally and is not sent to a server. This shapes the design in three ways:

- **Privacy by construction.** Sensitive datasets never need to leave the machine.
- **Simplicity of deployment.** No backend is required to try or review the work.
- **Transparency.** Because everything runs locally, the processing can be inspected and tested.

## Large-dataset thinking

Operational exports can hold thousands of rows and dozens of columns. The design therefore favors aggregation over listing (findings grouped by concentration rather than shown one by one), explicit data-quality reporting (what was excluded and why), and a clear distinction between a statistical observation and a risk verdict.

## Integrity

Changes are re-verified before they are accepted, and the core logic is protected against accidental modification. Where a result has not been validated, the interface labels it as such.

## What this document does not cover

Implementation details, internal data structures, and scoring logic are intentionally out of scope for the public case study.
