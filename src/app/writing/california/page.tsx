'use client'

import ReactMarkdown from 'react-markdown'

export default function CaliforniaArticle() {
  const content = `My parents left LA in 1990 because it was too expensive. They told me shrewd investors bought up real estate in San Diego, San Francisco, and LA in the 1970s, and they had to leave because rent was increasingly unaffordable and homeownership was out of the question. They explained that landlords were reaping the rewards they earned for buying property in a state with beautiful weather, top-tier universities, and an abundance of jobs.

When I moved to San Francisco 3 years ago, I expected to get the impression that the city was full - brimming with tall buildings with no more room to grow. I heard stories of artists, blue-collar workers, and minorities being displaced by young techies. California's tech boom catalyzed growth that causes rents and home prices to increase, but land use policies are what continue to sustain inequality and concentrate wealth in the hands of landlords, keeping rents unaffordable and homeownership unattainable. Let's explore these policies and how we can change them.

## Apartment bans

**What it is:** Apartments are illegal to build on over 60% of land in the the average California city.

**Why it exists:** Apartments are prohibited to maintain neighborhood character and preserve property values. Some of the first apartment bans can be traced back to a policy called "redlining" that was designed to keep black and poor Americans out of wealthy neighborhoods.

**Why it's problematic:** Apartments being illegal in most of California is the leading cause high rent, displacement, and wealth concentration. In San Diego, LA, and Santa Monica, San Jose, and San Francisco, it's illegal to build more than one single-family home on a property.

Urban planners call the policy prohibiting apartments single-family zoning - one parcel, one family. Some homes were even restricted by deed so that only white people could own them. These "racial covenants" became illegal, but single-family zoning became the implicit way to ensure only wealthy, white people could afford the live in an area. In San Francisco, notice new housing is illegal in affluent Western neighborhoods and construction is concentrated in lower income industrial areas.

The framework for why apartments are more affordable is this: imagine a house worth $1,000,000. If there were 4 apartments on the same parcel, each apartment would sell for around $250,000 - making room for more families at lower prices.

Rafael Mandelman, one of the few pro-housing San Francisco Supervisors, points out its easier to build a mega-mansion with 22 rooms - a bowling alley and all - than it would be to construct a four unit apartment with the same number of rooms.

**Solutions:** End apartment bans, especially in wealthy areas. By ending exclusionary zoning, we can lower housing costs and create more diverse communities, not just suburbs for techies. The city of Berkeley, CA was one of the first to implement single-family zoning, but now it's leading the way by voting to end it.

## Prop 13

**What it is:** Prop 13 freezes assessed property tax values at their 1978 level on residential, commercial, and industrial properties.

**Why it exists:** In 1978, voters passed a ballot initiative in response to increasing California state taxes, sponsored by an anti-tax group called the Howard Jarvis Taxpayer's Association.

**Why it's problematic:** Prop 13 is a regressive tax because it benefits people who own expensive property the most - instead of people you'd expect tax breaks to help like low-income residents. Prop 13 also applies to commercial real estate companies, and these benefits can also be passed on to heirs, creating a class of California real estate nobility. This policy has led to underfunded schools and slow housing construction. Prop 13 is a market distortion that stops land from being used to its full potential. Many of the homes in San Francisco are $2m or more, and higher property tax would encourage homeowners to add an ADU (accessory dwelling unit) or build a duplex and house more people.

In a natural land use cycle, something like this would happen: Property near jobs, beaches, transit, or schools gets more valuable as people move in. Taxes increase on that property, so some homeowners convert properties into duplexes or apartments to pay for increased taxes, and the increased housing supply creates lower rents for everyone. Property taxes are an incentive to use land for a higher value purpose, like housing more people.

Instead, apartment bans and prop 13 have neutered incentives for building new housing, resulting in California having the most expensive, exclusive real estate in the country.

**Solutions:** Repeal Prop 13. Prop 13 is a regressive tax. While I'm for a full repeal, a common sense start would be repealing it for commercial properties and for landlords who are renting out properties, especially those with multiple properties.

## CEQA

**What is it:** California's Environmental Quality Act is a law that requires environmental standards and impacts to be met, analyzed, and reported by California cities.

**Why it exists:** Passed in 1970 and signed into law by Ronald Reagan, the law was intended to protect natural resources like rivers, clean air, and wildlife.

**Why it's problematic:** The law was passed with good intentions but has been weaponized to stop housing from being built. One person can tie up housing developments in court for years by filing an environmental appeal with CEQA. Even trivial things like casting a shadow are grounds to bog down projects with litigation. Housing deferred is housing denied. CEQA has been used by wealthy neighbors to prevent affordable housing developments and stymie transit projects like transit only lanes and bike lanes by claiming taking away car lanes leads to more emissions because of gridlock.

**Solutions:** The obvious one is appeals should require some minimum number of people, say 100, to be considered.

## Conclusion

Under California's current land use policies, people who bought homes before 1980 and wealthy techies are the only ones who can afford homeownership. Landlords and commercial real estate owners continue to profit from a system where housing is scarce.

This is because apartments, which provide cheaper, denser housing are illegal to build in most areas, Prop 13 has reduced incentives to build housing and use land for higher value uses, and 100% affordable housing demands ends up kill housing projects. With the right incentives, cities have the potential to be economic mobility accelerators.

## Why housing is important to our future

**Environment** - Building dense housing near transit and prioritizing walkability it key to a sustainable future. The newly built San Francisco neighborhood Mission Bay has among the smallest carbon-footprint of any American neighborhood because it has medium density buildings, mixed use development that provides easy access to essentials, and abundant transit lines. Ironically, environmental groups like the local chapters of the Sierra Club are often among the largest detractors of housing, ostensibly to protect urban wildlife and open space.

**Diverse communities** - Housing supply is key to making sure all income groups and backgrounds can coexist. Building adequate market rate housing and affordable housing can stop displacement of original residents and increase affordability.

**Opportunity** - The fact that cities with jobs and transit like San Francisco are exclusionary and unaffordable hinder economic mobility and the output of the US economy more broadly. Cities are economic accelerators, especially when they have enough housing, transit, and diversity.`

  return (
    <article className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold mb-6">What&apos;s Holding California Back</h1>
      
      <div className="text-gray-600 mb-8">
        An exploration of the land use policies that keep California expensive and exclusive
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
