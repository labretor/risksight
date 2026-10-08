# Methodology principles

How RiskSight approaches the problem, at a conceptual level. Specific calculations, parameters and internal rules are not published.

## Principles

**Evidence first.** A risk statement should be supported by data that can be shown. If the evidence is insufficient, the correct output is "insufficient evidence", not a number.

**Separate observation from judgment.** Descriptive statistics, anomalies and risk assessments are different things. They are labeled differently and never presented as one another.

**Quantify exposure, not only frequency.** How often something happens matters less than how much is at stake and how concentrated it is.

**Prioritize.** When everything is reported, nothing stands out. The method is designed to help decide what to look at first.

**Make change measurable.** A single observation is hard to interpret. Comparing consistent datasets turns a snapshot into a trend.

**Label uncertainty.** Projections and similar estimates are marked as estimates. Results not validated against history are marked as not backtested.

**Do not guess about data.** Fields that cannot be mapped with enough confidence are held back and reported, so that data problems are visible rather than silently distorting results.

## Quality of input

Before any analysis, the data is assessed for structure and readiness. Excluded rows, ambiguous columns and possible outliers are reported to the user.

## Validation approach

- Core logic is protected against unintended change, and changes are re-verified before acceptance.
- Validation against longitudinal history is a **future** step. It requires an archive of historical periods and is not yet done.
- Until then, forward-looking outputs are described as indicative.

## Limits

RiskSight is a personal case study in active development. It is not a validated forecasting tool and it makes no claims about predictive accuracy.
