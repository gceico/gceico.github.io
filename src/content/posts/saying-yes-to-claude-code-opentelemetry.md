---
title: "Saying yes to Claude Code OpenTelemetry"
description: "Picture a Monday morning, first day back from leave. You open a terminal. Claude Code shows a consent prompt you have never seen before, asking you to accept a managed setting, an employer set OpenTelemetry endpoint Claude Code will export telemetry to. Yes, I trust these settings. Or No, exit Claude Code. Red pill or blue pill, with no third option for 'let me read what I'm signing first.'"
date: 2026-05-27
hero: ../../assets/posts/otel-consent.png
heroAlt: "Saying Yes to Claude Code OpenTelemetry — a telemetry broadcast motif on a dark card"
canonical: https://www.linkedin.com/pulse/saying-yes-claude-code-opentelemetry-gabriel-ceicoschi-kji3e/
---

### The scene

Picture a Monday morning, first day back from leave. You open a terminal. Claude Code shows a consent prompt you have never seen before, asking you to accept a managed setting, an employer set, an OTEL_EXPORTER_OTLP_ENDPOINT, the OpenTelemetry endpoint Claude Code will export telemetry to.

You hit no. The prompt comes back in the next session. You restart Claude Code. Same prompt. You open Teams and find a thread already running, engineers cracking big-brother jokes, and the person responsible for the Claude Code rollout answering questions. You add yours. Why is this being pushed without anyone being told what it captures, who can read it, and how long is it kept?

The choice on screen is binary. Yes, I trust these settings. Or No, exit Claude Code. Red pill or blue pill, with no third option for "let me read what I'm signing first."

That hypothetical is the whole article, and the rest is me thinking out loud about it.

### What the setting actually does

One might think OTel on Claude Code is for cost tracking, but not really. Cost tracking already exists in the Anthropic dashboard. The reason an organization wires up an OpenTelemetry exporter is that they want more than cost: traces, correlation, attribution, and the ability to join AI telemetry with their existing observability and finance stack.

Depending on implementation, an OTel-backed pipeline can include:

- Full prompt and response content
- Tool and MCP invocations, including parameters and success or failure states
- File access information for files read or modified
- Human approval decisions for sensitive tool actions
- Model names, token counts, timing, latency, and error information

OpenTelemetry's own security guidance is explicit that "telemetry is not safe by default." The collector has to be configured to drop, hash, or redact sensitive attributes. If nobody does that work, the pipe carries everything.

So the honest first question is "what is the collector dropping before it leaves the machine, who configured it, and where is that written down?"

### Why companies want this, in good faith

If I were the CTO signing off, here is what I'd tell myself.

The company is about to spend serious money on this tool. The native dashboard is thin. I cannot allocate cost by team, correlate usage with outcomes, see where the agent fails, or build the executive dashboard I owe finance. I also have a security problem: Claude Code reads files, writes code, calls tools, and touches infrastructure, which makes it part of the operational attack surface. Traces are how I reconstruct incidents and detect misuse. And I have a training problem: I want to know where engineers are stuck so I can build the right enablement.

Those are good reasons that I could sign off on them.

What I couldn't sign off on is the path of least resistance, where security wants traces, finance wants attribution, legal wants auditability, and HR wants investigatory capability, until a system justified as observability becomes an always-on record of how people think.

Monitoring rarely stays scoped.

### What employees give up by saying yes

The biggest thing an employee gives up here is cognitive privacy. AI coding assistants create a space where people think aloud, ask naive questions, test bad ideas, and iterate toward a solution. That space becomes less personal once prompts can be searched or reviewed centrally.

OTel-backed collection can expose not only final outputs but also intermediate reasoning artifacts: messy prompts, mistaken assumptions, internal URLs, partial credentials, vulnerability descriptions, and abandoned experiments. Even if a policy says content will not be used for performance management, employees can reasonably ask what technically prevents that later if the data already exists.

There is also a concentration risk. Centralizing rich prompt logs creates a high-value target accessible to internal admins and, in some cases, third-party observability vendors. If the backend is breached, misconfigured, or overshared internally, the consequences are far worse than losing ordinary application logs, because prompt content carries business context, architectural details, and sensitive mistakes in an unusually compact form.

### The boring worst case

If I were the employee, what would worry me is the more obvious outcomes.

Someone in middle management discovers they can rank engineers by prompts per day, rework ratio, and average iterations to convergence. It looks objective. It moves into HR conversations. Performance reviews start citing telemetry that the engineer did not know was being watched at that resolution.

This is the drift of any rich measurement system that lives near HR. The seat-based SaaS era avoided this problem by accident, because seats did not produce a per-person performance signal. Usage-priced AI plus content-level telemetry produces exactly that signal, whether the organization meant to or not. More on the SaaS vs AI pricing model in my previous LinkedIn article.

What would worry me as an employee? A session spent on a false lead. A prompt asking how to phrase a hard message to a colleague. A debugging spiral that exposes a mental model of a system before it's cleaned up.

We treat Teams as a communication channel with privacy rules. AI is also a communication channel, and a more intimate one. The difference is that Teams records a finished message. AI records the rough draft of how you think before the message exists.

### The European frame: GDPR, AI Act, works councils

This is where the conversation in Europe diverges from the same conversation in the US, and the divergence matters even if your employer is global.

GDPR. Employee-linked prompt and telemetry data is personal data. Systematic monitoring of workers is often high-risk processing that needs a lawful basis, transparency, necessity, proportionality, and usually a Data Protection Impact Assessment before it goes live. A full collection of AI session content is hard to justify if less intrusive alternatives can reach the same result.

The AI Act. The Act adds another layer when AI systems are used to monitor or evaluate workers. The moment prompt telemetry feeds anything that influences employment decisions, the organization slides toward a high-risk use case with heavier governance duties.

Dutch works councils. In the Netherlands, the practical control point is closer than the regulator. Dutch works councils have consent rights over policies involving employee monitoring and tracking systems. If a Dutch employer is pushing OTel without that conversation, it is a works council question.

When the prompt pops up on your terminal in Europe, you have the right to ask whether there is a DPIA, what lawful basis the rollout is using, and whether the works council has been consulted.

### What a sane rollout looks like

A privacy-aware organization can still measure value and reduce risk without normalizing content surveillance. The defensible design usually looks like this:

- Metadata first: model, latency, failures, token counts, coarse tool categories
- Redact or drop sensitive attributes at the collector, not after storage
- Separate observability from HR and performance evaluation, structurally
- Limit access through role-based controls and audited access paths
- Short retention windows by default, longer only on documented cause
- Involve works councils or employee representatives before rollout, where required
- Publish a DPIA and a plain-language explanation of what is collected and why

That program will not satisfy organizations that want maximum possible visibility. It is, however, far more likely to survive legal, ethical, and cultural debate.

### Where I'd change my mind

I'd flip to yes the day an organization showed four things in writing.

Scope. Metadata only, with explicit redaction of prompt and response content at the collector.

Access. A short, named list of who can read what, with audited access paths.

Retention. Short windows by default. Long retention only on documented investigation cause.

Separation. Telemetry stays out of HR and performance evaluation. Structural, not promised.

Not unreasonable. The same playbook mature organizations landed on for email, internet, and BYOD after the first decade of getting it wrong.

### What I'd do until then

Switch to a different tool, then pick the work up in the same rhythm the next week. Inconvenient, but the alternative is treating your own thinking as logging input.

For sensitive work, a local model on the laptop. Smaller, slower, less capable at hard reasoning, but the prompts never leave the machine.

Neither of these is a magic invisibility cloak. On a corporate machine with corporate keys and corporate network monitoring, other layers still apply.

### The idea I want you to carry

A managed setting in your terminal is not the form factor of a policy decision.

If your employer is asking you to opt into Claude Code monitoring, the right move is not yes or no on instinct, but to ask the questions the rollout should have answered before the prompt shipped to your laptop.

What is collected? Why. Under what controls? Who can access it? How long. And whether the same goals could be reached with less intrusive means.

Saying yes to monitoring is agreeing to a new relationship between you, your employer, and your AI-assisted thought. Treat it like one.

I'm a software engineer helping professionals get AI right. Follow along, or DM if you want the full article with sources, additional sections, and FAQs.
