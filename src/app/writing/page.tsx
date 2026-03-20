import Link from 'next/link'

export default function Writing() {
  const articles = [
    {
      slug: 'engineers-as-managers',
      title: "The Year Engineers Became Managers",
      description: "A memo I shared with our product and engineering team at AirGarage",
      date: "January 2025"
    },
    {
      slug: 'california',
      title: "What's Holding California Back",
      description: "An exploration of the land use policies that keep California expensive and exclusive",
      date: "June 2022"
    },
    {
      slug: 'sf-governance',
      title: "One Simple Way to Improve San Francisco's Governance",
      description: "A proposal for making San Francisco's government more effective",
      date: "October 2023"
    },
    {
      slug: 'zoning',
      title: "Should Zoning be Unconstitutional?",
      description: "Examining the legal and moral case against exclusionary zoning",
      date: "March 2023"
    }
  ]
  
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Writing</h2>
      
      <p className="text-lg mb-8 text-gray-700">
        Thoughts on technology, cities, housing, governance, and building better communities.
      </p>
      
      <div className="space-y-6">
        {articles.map((article) => (
          <div key={article.slug} className="border-l-4 border-gray-300 pl-4 hover:border-link-blue transition-colors">
            <Link href={`/writing/${article.slug}`} className="block group">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-link-blue">
                {article.title}
              </h3>
              <p className="text-gray-600">
                {article.description}
              </p>
              <p className="text-sm text-gray-400 mt-1">
                {article.date}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
