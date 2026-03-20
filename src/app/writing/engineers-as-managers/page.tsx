'use client'

import ReactMarkdown from 'react-markdown'

export default function AIEngineeringArticle() {
  const content = `Building software is a craft at the intersection of computers, math, creativity, and design thinking. But as LLMs continue to improve, the craft is starting to require a new skill — management. Giving instructions to multiple agents. Keeping track of which agent is doing what. Checking their work, interrupting them. Reviewing and QAing their code rigorously. Asking them to try again (and do better this time).

Many engineers don't want to be managers. We love solving interesting problems, going down technical rabbitholes, and getting into that blissful deep-work flow state. Supervising fleets of Claude Codes doesn't check those boxes and can feel a lot less technically satisfying. But this is the new reality of Software Engineering and the engineers who learn to wield these tools effectively will have an outsized impact on their teams and on their own careers.

The good news is, we have the potential to unlock 5-10x outcomes and boost engineering velocity if we get it right. So what will that take?

## AI In our DNA

Businesses that are born today will be born with AI in their DNA. Every process, every hire, every workflow will be built on top of the efficiency gains AI enables. This means we have to operate from a place of assuming AI leverage is the default for our competitors.

Providing team members with tools like Cursor and Claude Code and hoping they will try them out and use them is a good start, but it's not enough. Passive access doesn't drive adoption. The next step is **making it an expectation that team members are continually experimenting with AI and taking full advantage of the latest capabilities.** This applies to everyone at a company, but engineers have the biggest opportunity (and therefore obligation) since using AI to ship products faster is the key to delivering value to customers faster while unlocking scale without linear headcount growth.

## Philosophy

- **Encourage** AI use for product prototyping, drafting code for features, spotting patterns in data, learning about how a complex new feature works, and synthesizing stakeholder requirements.
- **Invest in** areas that allow the AI to be more helpful, like giving agents access to better context and your design system, maintaining AGENTS.md files, and making AI tools accessible to other teams.
- **Expect** every feature shipped with AI to go through the same human review process as human written code, and for engineers who use AI to understand the code they are shipping and to commit to documenting and maintaining it.
- **Set goals** for increasing the percentage of AI-assisted code written.
- **Reject** wholesale slop generation whether it's in documents or code. Characteristics of slop include low information density writing or large features riddled with bugs. The remedy to slop is rigorous human guidance and review.
- **Caution** against using AI in delicate people management situations that require human judgment and empathy. Giving someone difficult feedback, navigating interpersonal conflict, making hiring decisions — these deserve a human touch.

## Closing the Verification Gap

As AI makes it faster to produce code, verifying the quality of that code becomes the new bottleneck. It's dramatically easier to generate 500 lines than to confirm those 500 lines are correct, secure, performant, and aligned with architecture best practices. If we invest in tools that speed up creation without equally investing in tools that speed up verification, we'll just accumulate nice-looking tech debt faster.

This means we need to invest in test coverage, write automated tests, bolster observability, and set clear standards for code review.

## Guardrails

- Humans must be able to explain what the AI produced and why it's the right approach.
- AI generated work must be thoroughly reviewed and follow the same PR standards as human-written code.
- Do not paste customer contact info or secret keys into AI chats.
- Do not host apps that include sensitive data publicly.
- Do not give the AI direct DB write access. But do allow the AI to call endpoints with authentication.

These are truly unprecedented times. The engineers and teams who figure this out will have an outsized impact.`

  return (
    <article className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold mb-6">The Year Engineers Became Managers</h1>

      <div className="text-gray-600 mb-2">
        A memo I shared with our product and engineering team at AirGarage
      </div>
      <div className="text-sm text-gray-400 mb-8">
        January 2025
      </div>

      <ReactMarkdown
        className="space-y-4"
        components={{
          h2: ({children}) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
          h3: ({children}) => <h3 className="text-xl font-semibold mt-6 mb-3">{children}</h3>,
          p: ({children}) => <p className="text-lg leading-relaxed mb-4">{children}</p>,
          ul: ({children}) => <ul className="list-disc list-inside space-y-2 mb-4">{children}</ul>,
          li: ({children}) => <li className="ml-4">{children}</li>,
          strong: ({children}) => <strong className="font-semibold">{children}</strong>,
          a: ({children, href}) => (
            <a href={href} className="text-link-blue hover:underline" target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  )
}
