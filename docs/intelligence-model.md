# Intelligence model

The general idea behind RiskSight's pipeline. It is a way of structuring the problem, not a specification of calculations.

## From data to decision support

```
Raw data → Data discovery → Signals → Risk evidence → Exposure → Prioritization → Investigation → Decision support
```

1. **Raw data.** Spreadsheets and exports exactly as they arrive.
2. **Data discovery.** Detect structure and map fields with a confidence level. Hold back anything ambiguous.
3. **Signals.** Statistically unusual values, behaviors and shifts are surfaced as *candidates*, not conclusions.
4. **Risk evidence.** Each signal is tied to the data that produced it, separating primary evidence from supporting context.
5. **Exposure.** How much is actually at stake, and where is it concentrated?
6. **Prioritization.** Severity and exposure are considered together so that the most material items rise to the top.
7. **Investigation.** A structured workspace to explore why something is flagged and to record the outcome.
8. **Decision support.** Clear summaries and suggested next steps. The decision stays with a person.

## Signals are not verdicts

A statistical anomaly shows that something is unusual relative to the rest of the data. It does not show that anything is wrong. RiskSight keeps the two apart: statistics are presented as evidence only, with their basis and sample size, and are never presented as a risk verdict.

## Explainability

Every flag is expected to answer "why is this flagged?" with the evidence behind it. A number without its evidence is hard to trust and hard to challenge.

## Honest uncertainty

Estimates such as projections carry an explicit label. Signals that have not been tested against historical periods are described as *indicative, not backtested*. The interface states what a result is and what it is not.

## Human in the loop

The pipeline ends in support for a decision, not in an automated action. Any future assistance from AI is considered only as a way to draft material for human review.

## Not covered here

This document intentionally contains no formulas, weights, thresholds or category definitions.
